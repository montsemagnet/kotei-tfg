# -*- coding: utf-8 -*-
"""
Ajusta l'opacitat de les capes de polígons geològics (QGIS Python Console).

Ús:
  1. Obre el projecte QGIS2WEB.qgz (P11-12)
  2. Consola Python → enganxa i executa aquest fitxer, o:
       exec(open(r'C:/kotei-tfg/scripts/qgis/ajustar_opacitat_poligons.py', encoding='utf-8').read())

Valors (0 = transparent, 1 = opac):
  - Litologia / Tipus / Quaternari / Zones / Cobertes: 0.50
  - Construccions: es deixa (opac)
"""

from qgis.core import QgsProject, QgsVectorLayer, QgsWkbTypes

# Opacitat desitjada (50 %)
OPACITY = 0.50

# Subcadenes del nom de capa (minúscules) que reben opacitat
MATCH = (
    "litologia",
    "tipus",
    "naturalesa",
    "quatern",
    "dipòsit",
    "diposit",
    "interes",
    "interès",
    "cobertes",
)

# Capes que no s'han de tocar encara que coincideixin
SKIP = (
    "construc",
    "parada",
    "ruta",
    "noms",
    "toponim",
    "aflorament",
    "contacte",
    "falla",
    "cabuss",
    "geomorf",
    "hidro",
    "corbes",
    "carbes",
    "xarxa",
    "transport",
    "satelit",
    "satèl",
)


def _should_adjust(name: str) -> bool:
    n = name.lower()
    if any(s in n for s in SKIP):
        return False
    return any(m in n for m in MATCH)


def run():
    changed = []
    for layer in QgsProject.instance().mapLayers().values():
        if not isinstance(layer, QgsVectorLayer):
            continue
        if layer.geometryType() != QgsWkbTypes.PolygonGeometry:
            continue
        name = layer.name()
        if not _should_adjust(name):
            continue
        layer.setOpacity(OPACITY)
        layer.triggerRepaint()
        changed.append(f"{name} → {int(OPACITY * 100)}%")

    if changed:
        print("Opacitat ajustada:")
        for line in changed:
            print("  ·", line)
        print("Desa el projecte (Ctrl+S) i torna a exportar amb qgis2web si cal.")
    else:
        print("No s'ha trobat cap capa de polígon coincidents.")


run()
