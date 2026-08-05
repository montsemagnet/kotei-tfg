#!/usr/bin/env node
/**
 * Nova parada — prepara plantilla de treball i/o la implementa a Astro.
 *
 * Ús:
 *   npm run nova-parada -- preparar I1-P3
 *   npm run nova-parada -- implementar I1-P3
 *   npm run nova-parada -- implementar I1-P3 --force
 *
 * Flux recomanat:
 *   1) preparar  → crea continguts-en-curs/I1-P3 (còpia de mestre-parada)
 *   2) Omplir textos, fotos, mapa, vídeo…
 *   3) implementar → copia a src/ i public/ i genera el .md
 *
 * Per a Informàtica UVIC: documentat a scripts/README-nova-parada.md
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const VIDEO_EXT = new Set([".mp4", ".webm"]);

function usage() {
  console.log(`
Ús:
  npm run nova-parada -- preparar <CODI>
  npm run nova-parada -- implementar <CODI> [--force]

Exemple:
  npm run nova-parada -- preparar I1-P3
  npm run nova-parada -- implementar I1-P3
`);
}

function normalizeCode(raw) {
  const s = String(raw || "").trim().toUpperCase().replace(/\s+/g, "");
  const m = s.match(/^I(\d+)-P0*(\d+)$/i);
  if (!m) {
    throw new Error(
      `Codi invàlid «${raw}». Format esperat: I1-P3 (itinerari + parada).`,
    );
  }
  return `I${m[1]}-P${Number(m[2])}`;
}

function parseOrdre(code) {
  return Number(code.match(/P(\d+)$/i)?.[1] ?? 0);
}

function exists(p) {
  return fs.existsSync(p);
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function copyDir(src, dest) {
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

function listMedia(dir, allowedExt) {
  if (!exists(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => {
      if (name.startsWith(".") || name.toUpperCase().startsWith("LLEGEIX")) {
        return false;
      }
      if (name === "peus-galeria.txt") return false;
      return allowedExt.has(path.extname(name).toLowerCase());
    })
    .sort((a, b) => a.localeCompare(b, "ca"));
}

function yamlEscape(value) {
  const s = String(value ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n");
  return `"${s}"`;
}

/** Llegeix camps «- Etiqueta: valor» de les fitxes markdown de la plantilla. */
function readLabeledFields(filePath) {
  if (!exists(filePath)) return {};
  const text = fs.readFileSync(filePath, "utf8");
  const fields = {};
  for (const line of text.split("\n")) {
    // Últim «: » de la línia = separador etiqueta/valor
    // (evita trencar etiquetes amb «exemple: …» al parèntesi)
    const m = line.match(/^- +(.+):\s+(.+)$/);
    if (!m) continue;
    const key = m[1]
      .replace(/\s*\([^)]*\)\s*/g, "")
      .replace(/`[^`]*`/g, "")
      .trim()
      .toLowerCase();
    const value = m[2].trim();
    if (key && value) fields[key] = value;
  }
  return fields;
}

function readBlockquoteParagraphs(filePath) {
  if (!exists(filePath)) return [];
  const text = fs.readFileSync(filePath, "utf8");
  const paragraphs = [];
  let current = [];
  for (const line of text.split("\n")) {
    if (line.startsWith(">")) {
      current.push(line.replace(/^>\s?/, "").trimEnd());
    } else if (current.length) {
      const joined = current.join(" ").trim();
      if (joined) paragraphs.push(joined);
      current = [];
    }
  }
  if (current.length) {
    const joined = current.join(" ").trim();
    if (joined) paragraphs.push(joined);
  }
  return paragraphs;
}

function readPeusGaleria(filePath) {
  const map = new Map();
  if (!exists(filePath)) return map;
  for (const line of fs.readFileSync(filePath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [file, ...rest] = trimmed.split("|");
    if (!file || !rest.length) continue;
    map.set(file.trim(), rest.join("|").trim());
  }
  return map;
}

function field(fields, ...keys) {
  for (const key of keys) {
    const found = Object.entries(fields).find(([k]) => k.includes(key));
    if (found?.[1]) return found[1];
  }
  return "";
}

function preparar(code) {
  const mestre = path.join(ROOT, "_plantilles", "mestre-parada");
  const dest = path.join(ROOT, "continguts-en-curs", code);

  if (!exists(mestre)) {
    throw new Error(`No trobo la plantilla: ${mestre}`);
  }
  if (exists(dest)) {
    console.log(`Ja existeix la carpeta de treball: ${path.relative(ROOT, dest)}`);
    console.log("Omple-la i després executa: npm run nova-parada -- implementar " + code);
    return;
  }

  copyDir(mestre, dest);
  console.log(`✓ Contingut en curs creat: ${path.relative(ROOT, dest)}`);
  console.log("  1. Omple CHECKLIST.md, fitxes i carpetes de material.");
  console.log(`  2. Quan estigui a punt: npm run nova-parada -- implementar ${code}`);
}

function implementar(code, { force }) {
  const treball = path.join(ROOT, "continguts-en-curs", code);
  const alt = path.join(ROOT, "_plantilles", code);
  const plantilla = exists(treball) ? treball : exists(alt) ? alt : null;

  if (!plantilla) {
    throw new Error(
      `No hi ha carpeta omplerta per ${code}.\n` +
        `Primer: npm run nova-parada -- preparar ${code}\n` +
        `Després omple continguts-en-curs/${code} i torna a implementar.`,
    );
  }

  const mdPath = path.join(ROOT, "src", "content", "parades", `${code}.md`);
  if (exists(mdPath) && !force) {
    throw new Error(
      `Ja existeix ${path.relative(ROOT, mdPath)}. Usa --force només si vols sobreescriure.`,
    );
  }

  const galeriaDir = path.join(plantilla, "04-galeria-aflorament");
  const geoDir = path.join(plantilla, "05-figures-geologia");
  const floraDir = path.join(plantilla, "06-figures-geobotanica");
  const videoDir = path.join(plantilla, "07-video");
  const mapaDir = path.join(plantilla, "08-mapa-qgis");

  const galeria = listMedia(galeriaDir, IMAGE_EXT);
  if (galeria.length === 0) {
    throw new Error(
      `Cal almenys 1 foto a ${path.relative(ROOT, galeriaDir)} abans d'implementar.`,
    );
  }
  if (galeria.length > 8) {
    console.warn(`Avís: hi ha ${galeria.length} fotos; només se n'usaran 8.`);
  }
  const galeriaUse = galeria.slice(0, 8);

  const fitxa = readLabeledFields(path.join(plantilla, "01-fitxa-parada.md"));
  const geoParas = readBlockquoteParagraphs(path.join(plantilla, "02-geologia.md"));
  const floraParas = readBlockquoteParagraphs(
    path.join(plantilla, "03-geobotanica.md"),
  );
  const peus = readPeusGaleria(path.join(galeriaDir, "peus-galeria.txt"));

  const title =
    field(fitxa, "títol a la web", "titol a la web") ||
    `${code.replace(/^I\d+-/, "")}. Parada (pendent de títol)`;
  const itinerari = field(fitxa, "itinerari al qual") || "sau-tavertet";
  const coordenades =
    field(fitxa, "coordenades") || "Pendent (ETRS89 UTM 31N)";
  const ordre = parseOrdre(code);
  const mapaTipusFitxa = (
    field(fitxa, "qgis", "pdf", "compartit amb una altra") ||
    ""
  ).toLowerCase();
  // La línia de mapa és «Tipus (QGIS / PDF / …): PDF» — busquem el valor directe
  const mapaTipusValor = Object.entries(fitxa).find(([k]) =>
    k.startsWith("tipus") && (k.includes("qgis") || k.includes("pdf") || k.includes("compartit")),
  )?.[1] || field(fitxa, "tipus");
  const mapaEsPdf =
    String(mapaTipusValor || mapaTipusFitxa).toLowerCase().includes("pdf");
  const mapaLabel = mapaEsPdf ? "Mapa" : "Mapa QGIS";
  const mapaDescripcio =
    field(fitxa, "text de l'enllaç", "text de l enllaç", "mapa interactiu") ||
    Object.entries(fitxa).find(([k]) => k.includes("enllaç") || k.includes("enllac"))?.[1] ||
    `Mapa de la parada ${ordre}`;

  const srcImages = path.join(ROOT, "src", "images", "parades", code);
  const publicGeo = path.join(
    ROOT,
    "public",
    "images",
    "parades",
    code,
    "geologia",
  );
  const srcFlora = path.join(srcImages, "geobotanica");
  const publicVideos = path.join(ROOT, "public", "videos", "parades");

  ensureDir(srcImages);
  ensureDir(publicGeo);
  ensureDir(srcFlora);
  ensureDir(publicVideos);

  for (const file of galeriaUse) {
    fs.copyFileSync(path.join(galeriaDir, file), path.join(srcImages, file));
  }

  const geoFigs = listMedia(geoDir, IMAGE_EXT);
  for (const file of geoFigs) {
    fs.copyFileSync(path.join(geoDir, file), path.join(publicGeo, file));
  }

  const floraFigs = listMedia(floraDir, IMAGE_EXT);
  for (const file of floraFigs) {
    fs.copyFileSync(path.join(floraDir, file), path.join(srcFlora, file));
  }

  const videos = listMedia(videoDir, VIDEO_EXT);
  for (const file of videos) {
    const destName = `${code}${path.extname(file).toLowerCase()}`;
    fs.copyFileSync(path.join(videoDir, file), path.join(publicVideos, destName));
  }

  let mapaUrl = `/mapa-parada-${ordre}/`;
  const mapaShared = field(fitxa, "si és compartit", "si es compartit");
  const mapaNomFitxer =
    field(fitxa, "nom de la carpeta o fitxer", "nom de la carpeta") || "";

  if (mapaEsPdf) {
    const pdfs = listMedia(mapaDir, new Set([".pdf"]));
    const images = listMedia(mapaDir, IMAGE_EXT);
    const preferred = mapaNomFitxer && exists(path.join(mapaDir, mapaNomFitxer))
      ? mapaNomFitxer
      : null;
    const file =
      preferred ||
      pdfs.find((p) => !p.includes(" ")) ||
      pdfs[0] ||
      images[0];
    if (file) {
      const destMap = path.join(ROOT, "public", "images", "parades", code);
      ensureDir(destMap);
      const destName = file.replace(/\s+/g, "-");
      fs.copyFileSync(path.join(mapaDir, file), path.join(destMap, destName));
      mapaUrl = `/images/parades/${code}/${destName}`;
    }
  } else if (mapaShared && !mapaEsPdf) {
    // Mapa QGIS compartit: cal indicar la ruta a la fitxa (ex. /mapa-parada-11-12/)
    if (mapaNomFitxer.startsWith("/")) mapaUrl = mapaNomFitxer;
  } else {
    // QGIS: si hi ha index.html, copia tot a public/mapa-parada-N
    const qgisIndex = path.join(mapaDir, "index.html");
    if (exists(qgisIndex)) {
      const destMapa = path.join(ROOT, "public", `mapa-parada-${ordre}`);
      if (exists(destMapa) && !force) {
        console.warn(
          `Avís: ja existeix public/mapa-parada-${ordre}/ (no s'ha sobreescrit).`,
        );
      } else {
        if (exists(destMapa)) fs.rmSync(destMapa, { recursive: true, force: true });
        copyDir(mapaDir, destMapa);
      }
      mapaUrl = `/mapa-parada-${ordre}/`;
    } else {
      const named = field(fitxa, "nom de la carpeta");
      if (named?.startsWith("/")) mapaUrl = named;
    }
  }

  const hero = galeriaUse[0];
  const heroAlt =
    peus.get(hero) ||
    field(fitxa, "text curt que descriu") ||
    `Imatge d'inici — ${title}`;

  const fotosYaml = galeriaUse
    .map((file) => {
      const alt = peus.get(file) || `Aflorament — ${file}`;
      return `  - url: "/src/images/parades/${code}/${file}"\n    alt: ${yamlEscape(alt)}`;
    })
    .join("\n");

  const resumGeo =
    geoParas[0] ||
    `Contingut de geologia en preparació (${code}).`;
  const introGeo = geoParas[1] || geoParas[0] || resumGeo;

  let geologiaBlock = `geologia:
  resum: ${yamlEscape(resumGeo)}
  intro: ${yamlEscape(introGeo)}
  sections:
    - title: "Aflorament"
      paragraphs:
        - ${yamlEscape(geoParas[2] || "Text de geologia pendent d'ampliar.")}
`;

  if (geoFigs.length) {
    const items = geoFigs
      .map((file, i) => {
        return `        - title: ${yamlEscape(`Figura ${i + 1}. ${file}`)}
          publicSrc: "/images/parades/${code}/geologia/${file}"
          alt: ${yamlEscape(file)}
          caption: ${yamlEscape("Elaboració pròpia.")}`;
      })
      .join("\n");
    geologiaBlock = `geologia:
  resum: ${yamlEscape(resumGeo)}
  intro: ${yamlEscape(introGeo)}
  sections:
    - title: "Aflorament"
      paragraphs:
        - ${yamlEscape(geoParas[2] || "Text de geologia pendent d'ampliar.")}
      mediaItems:
${items}
`;
  }

  const floraResum = floraParas[0] || "";
  const floraEnPrep =
    !floraResum || /en preparaci[oó]/i.test(floraResum.toLowerCase());

  let floraBlock = `geobotanicaText: "Contingut de geobotànica en preparació."
`;

  if (!floraEnPrep) {
    const paras = floraParas
      .map((p) => `    - ${yamlEscape(p)}`)
      .join("\n");
    const imgs =
      floraFigs.length === 0
        ? "  images: []\n"
        : `  images:\n${floraFigs
            .map(
              (file, i) => `    - url: "/src/images/parades/${code}/geobotanica/${file}"
      alt: ${yamlEscape(file)}
      title: ${yamlEscape(`Figura G${i + 1}. ${file}`)}
      caption: ${yamlEscape("Elaboració pròpia.")}`,
            )
            .join("\n")}\n`;

    floraBlock = `analisiFlora:
  nomCodi: ${yamlEscape(`${code} — Geobotànica`)}
  resum: ${yamlEscape(floraResum)}
  paragraphs:
${paras}
  contextGeologic: ${yamlEscape("Pendent.")}
  posicioRelleu: ${yamlEscape("Pendent.")}
  orientacioMicroclima: ${yamlEscape("Pendent.")}
  comunitatsVegetals: ${yamlEscape("Pendent.")}
  estructuraVegetacio: ${yamlEscape("Pendent.")}
  especiesArbories: []
  especiesArbustivesHerbacies: []
  relacioFloraSubstrat: ${yamlEscape("Pendent.")}
  relacioFloraRelleu: ${yamlEscape("Pendent.")}
  observacionsEcologiques: ${yamlEscape("Pendent.")}
${imgs}`;
  }

  let mediaBlock = `media:
  tipus: foto
  foto:
    url: "/src/images/parades/${code}/${hero}"
    alt: ${yamlEscape(heroAlt)}
`;

  if (videos.length) {
    mediaBlock = `media:
  tipus: video
  publicSrc: "/videos/parades/${code}${path.extname(videos[0]).toLowerCase()}"
  alt: ${yamlEscape(heroAlt)}
  ambSo: false
`;
  }

  const md = `---
title: ${yamlEscape(title)}
itinerari: ${yamlEscape(itinerari)}
ordre: ${ordre}
coordenades: ${yamlEscape(coordenades)}
${mediaBlock}fotos:
${fotosYaml}
${geologiaBlock}mapaUrl: ${yamlEscape(mapaUrl)}
mapaLabel: ${yamlEscape(mapaLabel)}
mapaDescripcio: ${yamlEscape(mapaDescripcio)}
materials: []
${floraBlock}---
`;

  ensureDir(path.dirname(mdPath));
  fs.writeFileSync(mdPath, md, "utf8");

  console.log(`✓ Implementada ${code}`);
  console.log(`  Fitxa:     ${path.relative(ROOT, mdPath)}`);
  console.log(`  Galeria:   ${galeriaUse.length} foto(s) → src/images/parades/${code}/`);
  console.log(`  Geologia:  ${geoFigs.length} figura(s) → public/images/parades/${code}/geologia/`);
  console.log(`  Flora:     ${floraFigs.length} figura(s)`);
  console.log(`  Vídeos:    ${videos.length}`);
  console.log(`  Mapa URL:  ${mapaUrl}`);
  console.log("");
  console.log("Revisa el .md (text, peus de figura, mapa) i executa: npm run dev");
}

function main() {
  const args = process.argv.slice(2).filter((a) => a !== "--");
  const force = args.includes("--force");
  const positional = args.filter((a) => !a.startsWith("--"));
  const [cmd, codeRaw] = positional;

  if (!cmd || !codeRaw) {
    usage();
    process.exit(1);
  }

  const code = normalizeCode(codeRaw);

  if (cmd === "preparar") {
    preparar(code);
  } else if (cmd === "implementar") {
    implementar(code, { force });
  } else {
    usage();
    process.exit(1);
  }
}

try {
  main();
} catch (err) {
  console.error(`\nError: ${err.message}\n`);
  process.exit(1);
}
