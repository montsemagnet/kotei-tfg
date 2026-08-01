# -*- coding: utf-8 -*-
"""Posa la litologia P11-12 a 50% d'opacitat (consola Python de QGIS)."""

from qgis.core import QgsProject

OPACITY = 0.50
NEEDLE = "litologia del sòcol"

found = False
for layer in QgsProject.instance().mapLayers().values():
    if NEEDLE in layer.name().lower():
        layer.setOpacity(OPACITY)
        layer.triggerRepaint()
        print(f"OK: «{layer.name()}» → {int(OPACITY * 100)}%")
        found = True

if not found:
    print("No s'ha trobat la capa de litologia del sòcol.")
else:
    print("Desa el projecte (Ctrl+S).")
