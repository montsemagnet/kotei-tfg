import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const qgsPath = "C:/CGIS/TFG9-P11-12/_qgz_opacity_patch/out/QGIS2WEB.qgs";
const qgzPath = "C:/CGIS/TFG9-P11-12/QGIS2WEB.qgz";
const outDir = "C:/CGIS/TFG9-P11-12/_qgz_opacity_patch/out";
const opacity = "0.5";

let t = fs.readFileSync(qgsPath, "utf8");
const re = /<maplayer\b[\s\S]*?<\/maplayer>/g;
let changed = 0;
t = t.replace(re, (block) => {
  const name = (block.match(/<layername>([^<]*)<\/layername>/) || [])[1] || "";
  if (!/litologia del s[oò]col/i.test(name)) return block;
  if (!/<layerOpacity>/.test(block)) return block;
  changed++;
  console.log("patching:", name);
  return block.replace(
    /<layerOpacity>[^<]*<\/layerOpacity>/,
    `<layerOpacity>${opacity}</layerOpacity>`
  );
});

if (!changed) {
  console.error("No litologia layer found in project");
  process.exit(1);
}

fs.writeFileSync(qgsPath, t, "utf8");

// Re-zip as .qgz (zip of contents without nesting folder)
const zipTmp = "C:/CGIS/TFG9-P11-12/_qgz_opacity_patch/QGIS2WEB_new.zip";
if (fs.existsSync(zipTmp)) fs.unlinkSync(zipTmp);

// Prefer Compress-Archive from the out folder contents
execSync(
  `powershell -NoProfile -Command "Compress-Archive -Path '${outDir}\\*' -DestinationPath '${zipTmp}' -Force"`,
  { stdio: "inherit" }
);

fs.copyFileSync(zipTmp, qgzPath);
console.log("Updated", qgzPath, "→ opacity", opacity);
