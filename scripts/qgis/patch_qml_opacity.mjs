/**
 * Set <layerOpacity> on polygon-style QML files for P11-12 clips.
 * Usage: node scripts/qgis/patch_qml_opacity.mjs [opacity=0.5]
 */
import fs from "fs";
import path from "path";

const dir = "C:/CGIS/TFG9-P11-12/retall 11-12";
const opacity = String(process.argv[2] || "0.5");

const targets = [
  "P11-12 Litologia del Sòcol (Paleozoic i Mesozoic).qml",
  "P11-12 Tipus i naturalesa litologica v2.qml",
  "P11-12_Tipus i Naturalesa Litològica.qml",
  "P11-12_Dipòsits Quaternaris i Materials Superficials.qml",
  "P11-12_Zones considerades d'interesgeologic.qml",
  "Cobertes del sol 11-12.qml",
];

for (const file of targets) {
  const full = path.join(dir, file);
  if (!fs.existsSync(full)) {
    console.warn("skip (missing):", file);
    continue;
  }
  let t = fs.readFileSync(full, "utf8");
  if (!/<layerOpacity>/.test(t)) {
    console.warn("skip (no layerOpacity):", file);
    continue;
  }
  const next = t.replace(
    /<layerOpacity>[^<]*<\/layerOpacity>/g,
    `<layerOpacity>${opacity}</layerOpacity>`
  );
  fs.writeFileSync(full, next, "utf8");
  console.log("ok", file, "→", opacity);
}
