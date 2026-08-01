/**
 * Copia simbologia ORIGINAL des d'un projecte QGIS (.qgz)
 * cap als .qml de les capes a "retall 11-12".
 *
 * node scripts/qgis/extract_styles_from_qgz.mjs
 * node scripts/qgis/extract_styles_from_qgz.mjs "C:\CGIS\TFG8-qgis2\QGIS2WEB.qgz"
 */

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const RETALL_DIR = String.raw`C:\CGIS\TFG9-P11-12\retall 11-12`;
const WORK = String.raw`C:\CGIS\TFG9-P11-12\_qgz_extract_styles`;

// Projectes amb simbologia bona (per ordre de preferència)
const DEFAULT_SOURCES = [
  String.raw`C:\CGIS\TFG8-qgis2\QGIS2WEB.qgz`,
  String.raw`C:\CGIS\TFG9-RETALL-PARADES\QGIS2WEB.qgz`,
  String.raw`C:\CGIS\TFG8-qgis2 - copia\QGIS2WEB.qgz`,
  String.raw`C:\CGIS\TFG9-P11-12\QGIS2WEB.qgz`,
];

/** clau normalitzada → stem fitxer a retall 11-12 */
const MAP = [
  ["contactes discordants", "P11-12_Contactes Discordants i Esllavissaments"],
  ["esllavissaments", "P11-12_Contactes Discordants i Esllavissaments"],
  ["contactes generals", "P11-12_Contactes Generals i Intrusius"],
  ["contactes intrusius", "P11-12_Contactes Generals i Intrusius"],
  ["diposits quaternaris", "P11-12_Dipòsits Quaternaris i Materials Superficials"],
  ["materials superficials", "P11-12_Dipòsits Quaternaris i Materials Superficials"],
  ["geomorfologica", "P11-12_Geomorfològica de Vessants"],
  ["geomorfologia de vessants", "P11-12_Geomorfològica de Vessants"],
  ["litologia del socol", "P11-12 Litologia del Sòcol (Paleozoic i Mesozoic)"],
  ["paleozoic i mesozoic", "P11-12 Litologia del Sòcol (Paleozoic i Mesozoic)"],
  ["tipus i naturalesa", "P11-12_Tipus i Naturalesa Litològica"],
  ["naturalesa litologica", "P11-12_Tipus i Naturalesa Litològica"],
  ["toponimia", "P11-12_Toponimia i Noms geogràfics"],
  ["noms geografics", "P11-12_Toponimia i Noms geogràfics"],
  ["interes geologic", "P11-12_Zones considerades d'interesgeologic"],
  ["zones considerades", "P11-12_Zones considerades d'interesgeologic"],
  ["espaisintgeol", "P11-12_Zones considerades d'interesgeologic"],
  ["espais d interes", "P11-12_Zones considerades d'interesgeologic"],
  ["corbes de nivell", "P11-12_Carbes de nivell"],
  ["carbes de nivell", "P11-12_Carbes de nivell"],
  ["ruta sau", "P11-12_Ruta Sau-Taveret"],
  ["sau taveret", "P11-12_Ruta Sau-Taveret"],
  ["xarxa viaria", "P11-12_Xarxa viària"],
  ["xarxa vi", "P11-12_Xarxa viària"],
  ["construccions", "P11-12_Contruccions"],
  ["contruccions", "P11-12_Contruccions"],
  ["parades p", "P11-12_Parades-P"],
  ["parades-p", "P11-12_Parades-P"],
  ["afloraments", "P11-12_Afloraments"],
  ["falles", "P11-12_Falles"],
  ["noms", "P11-12_Noms"],
  ["cobertes del sol", "Cobertes del sol 11-12"],
  ["cobertes", "Cobertes del sol 11-12"],
  ["ortofoto", "satelit11-12"],
  ["satelit", "satelit11-12"],
];

function norm(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/['’·]/g, "")
    .replace(/[\W_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function pickSource() {
  const arg = process.argv[2];
  if (arg && fs.existsSync(arg)) return arg;
  for (const p of DEFAULT_SOURCES) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error("No s'ha trobat cap .qgz font d'estils");
}

function extractZip(qgz) {
  fs.mkdirSync(WORK, { recursive: true });
  for (const f of fs.readdirSync(WORK)) {
    fs.rmSync(path.join(WORK, f), { recursive: true, force: true });
  }
  const zipPath = path.join(WORK, "proj.zip");
  fs.copyFileSync(qgz, zipPath);
  execFileSync(
    "powershell.exe",
    [
      "-NoProfile",
      "-Command",
      `Expand-Archive -LiteralPath '${zipPath.replace(/'/g, "''")}' -DestinationPath '${WORK.replace(/'/g, "''")}' -Force`,
    ],
    { stdio: "inherit" },
  );
  const qgs = fs.readdirSync(WORK).find((f) => f.endsWith(".qgs"));
  if (!qgs) throw new Error("No .qgs dins del qgz");
  return path.join(WORK, qgs);
}

function matchStem(layername, datasource) {
  const blob = norm(`${layername} ${datasource}`);
  // ignora el polígon de retall genèric
  if (blob === "retall" || blob.endsWith(" retall") && blob.length < 12) {
    return null;
  }
  for (const [key, stem] of MAP) {
    if (blob.includes(norm(key))) return stem;
  }
  return null;
}

function findRetallFile(stem) {
  const target = norm(stem);
  const files = fs
    .readdirSync(RETALL_DIR)
    .filter((f) => /\.(gpkg|shp|tif|tiff)$/i.test(f));
  for (const f of files) {
    if (norm(path.parse(f).name) === target) return path.join(RETALL_DIR, f);
  }
  for (const f of files) {
    const stemF = norm(path.parse(f).name);
    if (stemF.includes(target) || target.includes(stemF)) {
      return path.join(RETALL_DIR, f);
    }
  }
  return null;
}

function extractMapLayers(xml) {
  const layers = [];
  const re = /<maplayer\b[\s\S]*?<\/maplayer>/g;
  let m;
  while ((m = re.exec(xml))) {
    const block = m[0];
    const layername = (block.match(/<layername>([^<]*)<\/layername>/) || [])[1] || "";
    const datasource =
      (block.match(/<datasource>([^<]*)<\/datasource>/) || [])[1] || "";
    const rendererType =
      (block.match(/<renderer-v2[^>]*type="([^"]+)"/) || [])[1] || "";
    const categories = (block.match(/<category /g) || []).length;
    const hasRenderer =
      block.includes("<renderer-v2") || block.includes("<pipe>");
    layers.push({
      block,
      layername,
      datasource,
      hasRenderer,
      rendererType,
      categories,
      bytes: block.length,
    });
  }
  return layers;
}

function maplayerToQml(block) {
  let body = block
    .replace(/^<maplayer\b/, "<qgis")
    .replace(/<\/maplayer>$/, "</qgis>");
  if (!/styleCategories=/.test(body)) {
    body = body.replace("<qgis", '<qgis styleCategories="AllStyleCategories"');
  }
  return `<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>\n${body}\n`;
}

function scoreLayer(layer) {
  // preferim categorized amb moltes categories / blocs més grans
  let s = layer.bytes;
  if (layer.rendererType === "categorizedSymbol") s += 100000 + layer.categories * 1000;
  if (layer.rendererType === "graduatedSymbol") s += 50000;
  if (layer.rendererType === "RuleRenderer") s += 80000;
  return s;
}

function main() {
  const qgz = pickSource();
  console.log("Font d'estils:", qgz);
  console.log("Destí retalls:", RETALL_DIR);

  const qgsPath = extractZip(qgz);
  const xml = fs.readFileSync(qgsPath, "utf8");
  const layers = extractMapLayers(xml);
  console.log("Capes al projecte font:", layers.length);

  // Per cada stem destí, queda't la millor capa font
  const best = new Map(); // stem -> layer
  for (const layer of layers) {
    if (!layer.hasRenderer) continue;
    const stem = matchStem(layer.layername, layer.datasource);
    if (!stem) continue;
    const prev = best.get(stem);
    if (!prev || scoreLayer(layer) > scoreLayer(prev)) {
      best.set(stem, layer);
    }
  }

  let written = 0;
  for (const [stem, layer] of best.entries()) {
    const retallFile = findRetallFile(stem);
    if (!retallFile) {
      console.log(`· Sense fitxer retall: [${layer.layername}] → ${stem}`);
      continue;
    }
    const qmlPath = retallFile.replace(/\.[^.]+$/i, ".qml");
    if (fs.existsSync(qmlPath)) {
      fs.copyFileSync(qmlPath, `${qmlPath}.bak`);
    }
    fs.writeFileSync(qmlPath, maplayerToQml(layer.block), "utf8");
    written++;
    console.log(
      `✓ [${layer.layername}] (${layer.rendererType || "raster"}, cat=${layer.categories}) → ${path.basename(qmlPath)}`,
    );
  }

  // Copia també Tipus v2 si existeix
  const tipusQml = path.join(RETALL_DIR, "P11-12_Tipus i Naturalesa Litològica.qml");
  const tipusV2 = path.join(RETALL_DIR, "P11-12 Tipus i naturalesa litologica v2.qml");
  if (fs.existsSync(tipusQml) && fs.existsSync(path.join(RETALL_DIR, "P11-12 Tipus i naturalesa litologica v2.gpkg"))) {
    fs.copyFileSync(tipusQml, tipusV2);
    console.log("✓ Copiat estil Tipus → v2");
  }

  console.log(`\nFet. QML escrits: ${written}`);
  console.log("Ara a QGIS executa:");
  console.log(
    '  exec(open(r"C:/kotei-tfg/scripts/qgis/aplicar_qml_retalls.py", encoding="utf-8").read())',
  );
}

main();
