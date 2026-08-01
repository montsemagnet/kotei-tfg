"""
QGIS — Delete unused a les capes de 'retall 11-12'.

Elimina categories / regles de simbologia que no apareixen a les
geometries del retall (equivalent al botó "Delete Unused").
Després desa el .qml net al costat del fitxer.

Consola Python de QGIS:
  exec(open(r"C:/kotei-tfg/scripts/qgis/delete_unused_symbols_retalls.py", encoding="utf-8").read())
"""

from __future__ import annotations

import os
from pathlib import Path

from qgis.core import (
    QgsCategorizedSymbolRenderer,
    QgsFeatureRequest,
    QgsProject,
    QgsRuleBasedRenderer,
    QgsVectorLayer,
    QgsWkbTypes,
)
from qgis.utils import iface

# --- Configuració -----------------------------------------------------------

RETALL_DIR = Path(r"C:\CGIS\TFG9-P11-12\retall 11-12")

# Si True, processa capes del projecte que apunten a RETALL_DIR
# Si False, obre tots els .gpkg/.shp de la carpeta (encara que no estiguin carregats)
NOMES_CAPES_DEL_PROJECTE = True

# Desa .qml després de netejar
DESAR_QML = True

# També treu símbols de llegenda buits en RuleBased (regles sense featuress)
NETEJAR_RULES = True

# ---------------------------------------------------------------------------


def _in_retall_dir(source: str) -> bool:
    src = source.split("|")[0]
    try:
        p = Path(os.path.normpath(src)).resolve()
        return RETALL_DIR.resolve() in p.parents or p.parent.resolve() == RETALL_DIR.resolve()
    except Exception:
        return "retall 11-12" in source.replace("\\", "/")


def _unique_values(layer: QgsVectorLayer, field_name: str) -> set:
    idx = layer.fields().indexOf(field_name)
    if idx < 0:
        # prova sense distingir majúscules
        for i, f in enumerate(layer.fields()):
            if f.name().lower() == field_name.lower():
                idx = i
                field_name = f.name()
                break
    if idx < 0:
        return set()

    values: set = set()
    req = QgsFeatureRequest().setFlags(QgsFeatureRequest.NoGeometry)
    req.setSubsetOfAttributes([idx])
    for feat in layer.getFeatures(req):
        val = feat[field_name]
        # Normalitza NULL
        if val is None:
            values.add(None)
        else:
            values.add(val)
    return values


def _delete_unused_categorized(layer: QgsVectorLayer) -> int:
    renderer = layer.renderer()
    if not isinstance(renderer, QgsCategorizedSymbolRenderer):
        return 0

    field = renderer.classAttribute()
    present = _unique_values(layer, field)
    # També com a string (alguns qml guarden text)
    present_str = {None if v is None else str(v) for v in present}

    categories = list(renderer.categories())
    kept = []
    removed = 0
    for cat in categories:
        val = cat.value()
        # all other values
        if cat.value() == "" and cat.label().lower() in ("", "all other values", "tots els altres valors"):
            # Manté "all other values" només si vols; normalment es pot treure al retall
            removed += 1
            continue
        ok = val in present or str(val) in present_str
        # NULL
        if val in ("", None) and None in present:
            ok = True
        if ok:
            kept.append(cat)
        else:
            removed += 1

    if removed == 0:
        return 0

    new_renderer = QgsCategorizedSymbolRenderer(field, kept)
    # Copia opcions bàsiques si existeixen
    try:
        new_renderer.setSourceSymbol(renderer.sourceSymbol().clone() if renderer.sourceSymbol() else None)
    except Exception:
        pass
    try:
        new_renderer.setSourceColorRamp(renderer.sourceColorRamp().clone() if renderer.sourceColorRamp() else None)
    except Exception:
        pass

    layer.setRenderer(new_renderer)
    layer.triggerRepaint()
    return removed


def _rule_has_features(layer: QgsVectorLayer, filter_exp: str) -> bool:
    if not filter_exp or filter_exp.strip() in ("", "TRUE", "true", "1"):
        return layer.featureCount() > 0
    req = QgsFeatureRequest().setFilterExpression(filter_exp)
    req.setFlags(QgsFeatureRequest.NoGeometry)
    req.setLimit(1)
    for _ in layer.getFeatures(req):
        return True
    return False


def _prune_rules(layer: QgsVectorLayer, rule, removed_counter: list) -> bool:
    """
    Retorna True si la regla (o alguna filla) s'ha de mantenir.
    eliminated_counter[0] s'incrementa per cada regla eliminada.
    """
    children = list(rule.children())
    if children:
        for child in list(children):
            keep = _prune_rules(layer, child, removed_counter)
            if not keep:
                rule.removeChild(child)
                removed_counter[0] += 1
        # Manté el pare si encara té filles o si ell mateix té features
        if rule.children():
            return True

    filt = rule.filterExpression() if hasattr(rule, "filterExpression") else ""
    # Regla contenidora sense filtre: mantén si té filles
    if (not filt or not str(filt).strip()) and rule.children():
        return True
    if (not filt or not str(filt).strip()) and not rule.children():
        # fulla sense filtre → mantén si hi ha alguna feature
        return layer.featureCount() > 0

    return _rule_has_features(layer, str(filt))


def _delete_unused_rules(layer: QgsVectorLayer) -> int:
    renderer = layer.renderer()
    if not isinstance(renderer, QgsRuleBasedRenderer):
        return 0

    root = renderer.rootRule().clone()
    removed = [0]
    for child in list(root.children()):
        keep = _prune_rules(layer, child, removed)
        if not keep:
            root.removeChild(child)
            removed[0] += 1

    if removed[0] == 0:
        return 0

    layer.setRenderer(QgsRuleBasedRenderer(root))
    layer.triggerRepaint()
    return removed[0]


def _save_qml(layer: QgsVectorLayer) -> None:
    src = layer.source().split("|")[0]
    qml = Path(src).with_suffix(".qml")
    result = layer.saveNamedStyle(str(qml))
    ok = result[0] if isinstance(result, tuple) else bool(result)
    if ok:
        print(f"  QML desat: {qml.name}")
    else:
        msg = result[1] if isinstance(result, tuple) and len(result) > 1 else ""
        print(f"  AVÍS QML: {qml.name} {msg}")


def _iter_layers():
    if NOMES_CAPES_DEL_PROJECTE:
        for layer in QgsProject.instance().mapLayers().values():
            if isinstance(layer, QgsVectorLayer) and layer.isValid() and _in_retall_dir(layer.source()):
                yield layer
        return

    # Carrega des de disc
    for path in sorted(RETALL_DIR.glob("*.gpkg")) + sorted(RETALL_DIR.glob("*.shp")):
        layer = QgsVectorLayer(str(path), path.stem, "ogr")
        if layer.isValid():
            yield layer


def run():
    print("Delete unused —", RETALL_DIR)
    total_cat = total_rules = 0
    layers_ok = 0

    for layer in _iter_layers():
        # Només vectors amb símbols
        if layer.geometryType() == QgsWkbTypes.NullGeometry:
            continue

        r = layer.renderer()
        removed_c = removed_r = 0

        if isinstance(r, QgsCategorizedSymbolRenderer):
            before = len(r.categories())
            removed_c = _delete_unused_categorized(layer)
            after = len(layer.renderer().categories()) if isinstance(layer.renderer(), QgsCategorizedSymbolRenderer) else "?"
            if removed_c:
                print(f"✓ {layer.name()}: categorized {before} → {after} (−{removed_c})")
            else:
                print(f"· {layer.name()}: categorized OK (cap unused)")

        elif isinstance(r, QgsRuleBasedRenderer) and NETEJAR_RULES:
            removed_r = _delete_unused_rules(layer)
            if removed_r:
                print(f"✓ {layer.name()}: rules −{removed_r}")
            else:
                print(f"· {layer.name()}: rules OK")
        else:
            rtype = r.type() if r else "?"
            print(f"· {layer.name()}: {rtype} (res a netejar)")
            continue

        if removed_c or removed_r:
            layers_ok += 1
            total_cat += removed_c
            total_rules += removed_r
            if DESAR_QML:
                _save_qml(layer)

    print(
        f"\nFet. Capes modificades={layers_ok}  "
        f"categories eliminades={total_cat}  regles eliminades={total_rules}"
    )
    if iface:
        iface.mapCanvas().refreshAllLayers()
        iface.messageBar().pushInfo(
            "Delete unused",
            f"{layers_ok} capes netejades (−{total_cat} cat, −{total_rules} rules).",
        )


run()
