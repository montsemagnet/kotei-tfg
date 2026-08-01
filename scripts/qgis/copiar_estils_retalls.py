"""
QGIS — Copia estils de les capes mares als retalls P11-12.

Carpetes:
  Mares:   C:/CGIS/TFG9-P11-12
  Retalls: C:/CGIS/TFG9-P11-12/retall 11-12

Ús (consola Python de QGIS):
  exec(open(r"C:/kotei-tfg/scripts/qgis/copiar_estils_retalls.py", encoding="utf-8").read())
"""

from __future__ import annotations

import os
import re
from pathlib import Path

from qgis.core import (
    QgsMapLayer,
    QgsProject,
    QgsRasterLayer,
    QgsVectorLayer,
    QgsWkbTypes,
)
from qgis.utils import iface

# --- Configuració -----------------------------------------------------------

DIR_MARES = Path(r"C:\CGIS\TFG9-P11-12")
DIR_RETALLS = Path(r"C:\CGIS\TFG9-P11-12\retall 11-12")

PREFIXES = ("P11-12_", "P11-12 ", "P11-12-")

IGNORAR_SUBCARPETES_MARES = {
    "retall 11-12",
    "retall_11-12",
}

VECTOR_EXT = {".gpkg", ".shp", ".geojson", ".json", ".gml", ".tab"}
RASTER_EXT = {".tif", ".tiff", ".jpg", ".jpeg", ".png", ".vrt"}

COPIAR_ETIQUETES = True
DESAR_QML = True
AFEGIR_AL_PROJECTE = True

# Fitxer/capa retall (stem) → fitxer mare (stem o nom de capa)
MAPA_MANUAL = {
    "P11-12_Afloraments": "Afloraments",
    "P11-12_Carbes de nivell": "Carbes de nivell 2",
    "P11-12_Contactes Discordants i Esllavissaments": "retall-contactes",
    "P11-12_Contactes Generals i Intrusius": "retall-contactes2",
    "P11-12_Contruccions": "Contruccions3",
    "P11-12_Dipòsits Quaternaris i Materials Superficials": "retall-Qus",
    "P11-12_Falles": "falles-retall",
    "P11-12_Geomorfològica de Vessants": "retall-triangles",
    "P11-12_Litologia del Sòcol (Paleozoic i Mesozoic)": "geo-shape-retallat",
    "P11-12_Noms": "Noms",
    "P11-12_Parades-P": "Parades-P",
    "P11-12_Ruta Sau-Taveret": "cami-Sau-Taveret",
    "P11-12_Tipus i Naturalesa Litològica": "afloramentsTipus i Naturalesa Litològica",
    "P11-12 Tipus i naturalesa litologica v2": "afloramentsTipus i Naturalesa Litològica",
    "P11-12_Toponimia i Noms geogràfics": "Toponimia 3",
    "P11-12_Xarxa viària": "xarxa viaria3",
    # Inventari ICGC d'espais d'interès geològic (camps NOM_ESPAI, CODI_GEOZO, …)
    "P11-12_Zones considerades d'interesgeologic": "ESPAISNATURALS_ESPAISINTGEOL",
    "P11-12_Zones considerades d interesgeologic": "ESPAISNATURALS_ESPAISINTGEOL",
    # Si preferixes l'estil del retall previ al Hipermapa, canvia a: "retall-interesgeologic"
    "Cobertes del sol 11-12": "Cobertes",
    "satelit11-12": "satelit",
}

# ---------------------------------------------------------------------------


def _norm(name: str) -> str:
    if not name:
        return ""
    n = name.strip().lower()
    for a, b in (
        ("à", "a"),
        ("á", "a"),
        ("è", "e"),
        ("é", "e"),
        ("í", "i"),
        ("ï", "i"),
        ("ò", "o"),
        ("ó", "o"),
        ("ú", "u"),
        ("ü", "u"),
        ("ç", "c"),
        ("·", ""),
        ("'", ""),
        ("’", ""),
        ("(", ""),
        (")", ""),
    ):
        n = n.replace(a, b)
    n = re.sub(r"[_\-.]+", " ", n)
    n = re.sub(r"\s+", " ", n).strip()
    # treu prefix P11-12 si ve al nom
    n = re.sub(r"^p11\s*12\s*", "", n).strip()
    return n


def _strip_prefix(name: str) -> str | None:
    name = name.strip()
    for p in PREFIXES:
        if name.startswith(p):
            return name[len(p) :].strip()
    return None


def _list_data_files(folder: Path, *, recursive: bool, ignore_dirs: set[str] | None = None):
    ignore_norm = {_norm(d) for d in (ignore_dirs or set())}
    files = []
    if not folder.exists():
        print(f"✗ Carpeta no trobada: {folder}")
        return files

    candidates = folder.rglob("*") if recursive else folder.iterdir()
    for path in candidates:
        if not path.is_file():
            continue
        if path.suffix.lower() not in VECTOR_EXT | RASTER_EXT:
            continue
        if path.name.lower().endswith(".aux.xml"):
            continue
        if recursive and ignore_norm:
            rel_parts = {_norm(p) for p in path.relative_to(folder).parts[:-1]}
            if rel_parts & ignore_norm:
                continue
        files.append(path)
    return sorted(files)


def _load_layers_from_file(path: Path) -> list[QgsMapLayer]:
    layers: list[QgsMapLayer] = []
    suffix = path.suffix.lower()
    uri = str(path)

    if suffix in RASTER_EXT:
        layer = QgsRasterLayer(uri, path.stem)
        if layer.isValid():
            layers.append(layer)
        else:
            print(f"  · Ràster no vàlid: {path.name}")
        return layers

    if suffix == ".gpkg":
        try:
            from osgeo import ogr  # type: ignore

            ds = ogr.Open(uri)
            if ds is not None:
                for i in range(ds.GetLayerCount()):
                    lname = ds.GetLayerByIndex(i).GetName()
                    sub = QgsVectorLayer(f"{uri}|layername={lname}", lname, "ogr")
                    if sub.isValid():
                        layers.append(sub)
                if layers:
                    return layers
        except Exception:
            pass

    layer = QgsVectorLayer(uri, path.stem, "ogr")
    if layer.isValid():
        layers.append(layer)
    else:
        print(f"  · Vector no vàlid: {path.name}")
    return layers


class LayerRef:
    def __init__(self, layer: QgsMapLayer, path: Path):
        self.layer = layer
        self.path = path
        # Claus de cerca: stem fitxer + nom capa
        self.keys = []
        for k in (path.stem, layer.name(), path.name):
            if k and k not in self.keys:
                self.keys.append(k)
        stripped = _strip_prefix(path.stem)
        if stripped and stripped not in self.keys:
            self.keys.append(stripped)


def _collect(folder: Path, *, recursive: bool, ignore_dirs: set[str] | None = None) -> list[LayerRef]:
    refs: list[LayerRef] = []
    for path in _list_data_files(folder, recursive=recursive, ignore_dirs=ignore_dirs):
        for layer in _load_layers_from_file(path):
            refs.append(LayerRef(layer, path))
    return refs


def _same_kind(a: QgsMapLayer, b: QgsMapLayer) -> bool:
    return a.type() == b.type()


def _score_match(retall: LayerRef, mare: LayerRef, target_n: str) -> int | None:
    """Retorna puntuació (més baix = millor) o None si no encaixa."""
    if not _same_kind(retall.layer, mare.layer):
        return None

    for key in mare.keys:
        kn = _norm(key)
        if not kn or not target_n:
            continue
        if kn == target_n:
            return 0
        # coincidència per stem de fitxer preferent
        if _norm(mare.path.stem) == target_n:
            return 1

    # Evitem el match fuzzy massa ample (provocava errors)
    return None


def _find_mare(retall: LayerRef, mares: list[LayerRef]) -> LayerRef | None:
    # 1) Manual per stem del retall
    stem = retall.path.stem
    if stem in MAPA_MANUAL:
        target = _norm(MAPA_MANUAL[stem])
        best = None
        best_score = 999
        for mare in mares:
            if not _same_kind(retall.layer, mare.layer):
                continue
            for key in mare.keys:
                if _norm(key) == target or _norm(mare.path.stem) == target:
                    score = 0 if _norm(mare.path.stem) == target else 1
                    if score < best_score:
                        best = mare
                        best_score = score
        if best:
            return best

    # 2) Autodetecció estricta
    base = _strip_prefix(stem) or stem
    # treu sufix " v2"
    base_clean = re.sub(r"\s*v\d+$", "", base, flags=re.IGNORECASE).strip()
    target_n = _norm(base_clean)

    scored = []
    for mare in mares:
        score = _score_match(retall, mare, target_n)
        if score is not None:
            scored.append((score, mare))

    if not scored:
        # prova també sense accents/plurals simples: només igualtat de stem normalitzat
        return None

    scored.sort(key=lambda x: (x[0], len(_norm(x[1].path.stem))))
    return scored[0][1]


def _copy_style(parent: QgsMapLayer, child: QgsMapLayer) -> None:
    if not _same_kind(parent, child):
        raise TypeError(
            f"Tipus diferent: mare={parent.type()} retall={child.type()}"
        )

    renderer = parent.renderer()
    if renderer is None:
        raise RuntimeError("La capa mare no té renderer/estil")

    child.setRenderer(renderer.clone())
    child.setOpacity(parent.opacity())
    try:
        child.setBlendMode(parent.blendMode())
    except Exception:
        pass

    if (
        COPIAR_ETIQUETES
        and isinstance(parent, QgsVectorLayer)
        and isinstance(child, QgsVectorLayer)
    ):
        if parent.labelsEnabled() and parent.labeling() is not None:
            child.setLabeling(parent.labeling().clone())
            child.setLabelsEnabled(True)
        else:
            child.setLabelsEnabled(False)

    if (
        isinstance(parent, QgsVectorLayer)
        and isinstance(child, QgsVectorLayer)
        and parent.geometryType() != child.geometryType()
        and parent.geometryType() != QgsWkbTypes.UnknownGeometry
    ):
        print(
            "  AVÍS geometria:",
            QgsWkbTypes.displayString(parent.wkbType()),
            "→",
            QgsWkbTypes.displayString(child.wkbType()),
        )

    child.triggerRepaint()


def _save_qml(child: QgsMapLayer, path: Path) -> None:
    qml_path = path.with_suffix(".qml")
    result = child.saveNamedStyle(str(qml_path))
    # QGIS antic: bool | QGIS nou: (bool, str)
    if isinstance(result, tuple):
        ok = bool(result[0])
        msg = result[1] if len(result) > 1 else ""
    else:
        ok = bool(result)
        msg = ""
    if ok:
        print(f"  QML: {qml_path.name}")
    else:
        print(f"  AVÍS QML no desat ({qml_path.name}): {msg}")


def _upsert_project_layer(styled: QgsMapLayer, path: Path) -> None:
    project = QgsProject.instance()
    source_norm = os.path.normcase(os.path.normpath(str(path)))

    for existing in project.mapLayers().values():
        existing_src = existing.source().split("|")[0]
        if os.path.normcase(os.path.normpath(existing_src)) == source_norm:
            if _same_kind(styled, existing):
                _copy_style(styled, existing)
                existing.setName(path.stem)
                existing.triggerRepaint()
                print(f"  Actualitzada al projecte: {existing.name()}")
            return

    # Recarrega des del fitxer + aplica estil (més estable que clone)
    reloaded_list = _load_layers_from_file(path)
    if not reloaded_list:
        return
    reloaded = reloaded_list[0]
    reloaded.setName(path.stem)
    _copy_style(styled, reloaded)
    project.addMapLayer(reloaded)
    print(f"  Afegida al projecte: {reloaded.name()}")


def run():
    print("Mares:  ", DIR_MARES)
    print("Retalls:", DIR_RETALLS)
    print()

    mares = _collect(DIR_MARES, recursive=True, ignore_dirs=IGNORAR_SUBCARPETES_MARES)
    retalls = _collect(DIR_RETALLS, recursive=False)

    print(f"Capes mares trobades:   {len(mares)}")
    print(f"Capes retall trobades:  {len(retalls)}")
    print()

    if not mares or not retalls:
        print("✗ No hi ha capes. Revisa les carpetes.")
        return

    ok = fail = 0
    for retall in retalls:
        mare = _find_mare(retall, mares)
        if not mare:
            print(f"✗ Sense mare per: {retall.path.name}")
            fail += 1
            continue
        try:
            _copy_style(mare.layer, retall.layer)
            print(
                f"✓ '{mare.path.stem}' ({mare.path.name}) → '{retall.path.name}'"
            )
            if DESAR_QML:
                _save_qml(retall.layer, retall.path)
            if AFEGIR_AL_PROJECTE:
                _upsert_project_layer(retall.layer, retall.path)
            ok += 1
        except Exception as exc:
            print(f"✗ Error amb {retall.path.name}: {exc}")
            fail += 1

    print(f"\nFet. OK={ok}  Errors/sense mare={fail}")
    if iface is not None:
        iface.mapCanvas().refreshAllLayers()
        iface.messageBar().pushInfo("Estils retalls", f"Copiats {ok} estils.")


run()
