"""
Aplica els .qml del costat de cada capa carregada des de 'retall 11-12'.

Consola Python QGIS:
  exec(open(r"C:/kotei-tfg/scripts/qgis/aplicar_qml_retalls.py", encoding="utf-8").read())
"""

from pathlib import Path
import os

from qgis.core import QgsProject
from qgis.utils import iface

RETALL_DIR = Path(r"C:\CGIS\TFG9-P11-12\retall 11-12")


def run():
    ok = 0
    for layer in QgsProject.instance().mapLayers().values():
        src = layer.source().split("|")[0]
        try:
            src_path = Path(os.path.normpath(src))
        except Exception:
            continue
        if RETALL_DIR.resolve() not in src_path.resolve().parents and src_path.parent.resolve() != RETALL_DIR.resolve():
            # només capes dins retall 11-12
            if "retall 11-12" not in str(src_path):
                continue

        qml = src_path.with_suffix(".qml")
        if not qml.exists():
            print(f"· Sense QML: {layer.name()}")
            continue

        result = layer.loadNamedStyle(str(qml))
        if isinstance(result, tuple):
            success = bool(result[0])
            msg = result[1] if len(result) > 1 else ""
        else:
            success = bool(result)
            msg = ""

        if success:
            layer.triggerRepaint()
            print(f"✓ Estil aplicat: {layer.name()} ← {qml.name}")
            ok += 1
        else:
            print(f"✗ Error {layer.name()}: {msg}")

    print(f"\nFet. Estils aplicats: {ok}")
    if iface:
        iface.mapCanvas().refreshAllLayers()
        iface.messageBar().pushInfo("Estils", f"Aplicats {ok} QML als retalls.")


run()
