"""
Extreu estils del projecte QGIS2WEB.qgz i els desa com a .qml
al costat de cada capa retallada a 'retall 11-12'.

No cal QGIS en execució: llegeix l'XML del .qgs.
"""

from __future__ import annotations

import re
import shutil
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

QGZ = Path(r"C:\CGIS\TFG9-P11-12\QGIS2WEB.qgz")
RETALL_DIR = Path(r"C:\CGIS\TFG9-P11-12\retall 11-12")
WORK = Path(r"C:\CGIS\TFG9-P11-12\_qgz_extract")

# Nom capa al projecte (o fragment) → stem del fitxer retall
MAP = {
    "afloraments": "P11-12_Afloraments",
    "parades": "P11-12_Afloraments",  # a vegades el layername intern
    "carbes de nivell": "P11-12_Carbes de nivell",
    "corbes de nivell": "P11-12_Carbes de nivell",
    "contactes discordants": "P11-12_Contactes Discordants i Esllavissaments",
    "contactes generals": "P11-12_Contactes Generals i Intrusius",
    "contruccions": "P11-12_Contruccions",
    "construccions": "P11-12_Contruccions",
    "dipòsits quaternaris": "P11-12_Dipòsits Quaternaris i Materials Superficials",
    "diposits quaternaris": "P11-12_Dipòsits Quaternaris i Materials Superficials",
    "falles": "P11-12_Falles",
    "geomorfològica": "P11-12_Geomorfològica de Vessants",
    "geomorfologica": "P11-12_Geomorfològica de Vessants",
    "litologia del sòcol": "P11-12 Litologia del Sòcol (Paleozoic i Mesozoic)",
    "litologia del socol": "P11-12 Litologia del Sòcol (Paleozoic i Mesozoic)",
    "noms": "P11-12_Noms",
    "parades-p": "P11-12_Parades-P",
    "parades p": "P11-12_Parades-P",
    "ruta sau": "P11-12_Ruta Sau-Taveret",
    "cami-sau": "P11-12_Ruta Sau-Taveret",
    "tipus i naturalesa": "P11-12_Tipus i Naturalesa Litològica",
    "toponimia": "P11-12_Toponimia i Noms geogràfics",
    "toponímia": "P11-12_Toponimia i Noms geogràfics",
    "xarxa vi": "P11-12_Xarxa viària",
    "zones considerades": "P11-12_Zones considerades d'interesgeologic",
    "interes geologic": "P11-12_Zones considerades d'interesgeologic",
    "interès geològic": "P11-12_Zones considerades d'interesgeologic",
    "espaisintgeol": "P11-12_Zones considerades d'interesgeologic",
    "cobertes": "Cobertes del sol 11-12",
    "satelit": "satelit11-12",
    "ortofoto": "satelit11-12",
}


def norm(s: str) -> str:
    s = (s or "").strip().lower()
    repl = {
        "à": "a",
        "á": "a",
        "è": "e",
        "é": "e",
        "í": "i",
        "ï": "i",
        "ò": "o",
        "ó": "o",
        "ú": "u",
        "ü": "u",
        "ç": "c",
        "·": "",
        "'": "",
        "’": "",
    }
    for a, b in repl.items():
        s = s.replace(a, b)
    s = re.sub(r"[\W_]+", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def extract_qgs() -> Path:
    WORK.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(QGZ, "r") as zf:
        zf.extractall(WORK)
    qgs_files = list(WORK.glob("*.qgs"))
    if not qgs_files:
        raise FileNotFoundError("No s'ha trobat .qgs dins del .qgz")
    return qgs_files[0]


def match_retall_stem(layername: str, datasource: str) -> str | None:
    blob = norm(layername + " " + datasource)
    # primer matches més específics (claus més llargues)
    for key in sorted(MAP.keys(), key=len, reverse=True):
        if norm(key) in blob:
            return MAP[key]
    return None


def maplayer_to_qml_xml(maplayer: ET.Element) -> str:
    """Converteix un <maplayer> del projecte en un document .qml vàlid."""
    # El .qml és bàsicament el maplayer amb root <qgis>
    attrs = dict(maplayer.attrib)
    # Assegura categories d'estil
    attrs.setdefault("styleCategories", "AllStyleCategories")

    # Clona profundament
    root = ET.Element("qgis", attrs)
    for child in list(maplayer):
        root.append(child)

    # Declaració
    xml = ET.tostring(root, encoding="unicode")
    return "<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>\n" + xml + "\n"


def find_retall_file(stem: str) -> Path | None:
    """Troba .gpkg/.shp/.tif amb aquest stem (tolerant a accents/espais)."""
    target = norm(stem)
    for path in RETALL_DIR.iterdir():
        if not path.is_file():
            continue
        if path.suffix.lower() not in {".gpkg", ".shp", ".tif", ".tiff", ".png", ".jpg"}:
            continue
        if norm(path.stem) == target:
            return path
    # partial
    for path in RETALL_DIR.iterdir():
        if path.suffix.lower() not in {".gpkg", ".shp", ".tif", ".tiff"}:
            continue
        if target in norm(path.stem) or norm(path.stem) in target:
            return path
    return None


def main() -> None:
    qgs_path = extract_qgs()
    print("Projecte:", qgs_path)

    # Parse tolerant a namespaces
    text = qgs_path.read_text(encoding="utf-8", errors="replace")
    # ElementTree amb maplayer
    root = ET.fromstring(text)

    maplayers = root.findall(".//maplayer")
    print(f"Capes al projecte: {len(maplayers)}")

    written = 0
    skipped = 0
    used_stems: set[str] = set()

    for ml in maplayers:
        layername_el = ml.find("layername")
        ds_el = ml.find("datasource")
        layername = layername_el.text if layername_el is not None else ""
        datasource = ds_el.text if ds_el is not None else ""

        stem = match_retall_stem(layername or "", datasource or "")
        if not stem:
            skipped += 1
            continue

        # Evita sobreescriure el mateix retall amb una capa menys específica
        if stem in used_stems:
            # Preferim la primera coincidència (ja ordenada per especificitat de clau)
            continue

        retall_file = find_retall_file(stem)
        if not retall_file:
            print(f"· Sense fitxer retall per '{layername}' → {stem}")
            continue

        # Comprova que hi ha renderer
        if ml.find("renderer-v2") is None and ml.find("pipe") is None:
            # ràster usa pipe; vector renderer-v2
            print(f"· Sense renderer: {layername}")
            continue

        qml_path = retall_file.with_suffix(".qml")
        # Backup de l'qml anterior si existeix
        if qml_path.exists():
            bak = qml_path.with_suffix(".qml.bak")
            shutil.copy2(qml_path, bak)

        qml_xml = maplayer_to_qml_xml(ml)
        qml_path.write_text(qml_xml, encoding="utf-8")
        used_stems.add(stem)
        written += 1
        print(f"✓ [{layername}] → {qml_path.name}")

    print(f"\nFet. QML escrits: {written}. Capes projecte sense match: {skipped}")
    print(
        "A QGIS: treu i torna a afegir les capes de 'retall 11-12', "
        "o clic dret → Estilos → Cargar estilo → el .qml del costat."
    )


if __name__ == "__main__":
    main()
