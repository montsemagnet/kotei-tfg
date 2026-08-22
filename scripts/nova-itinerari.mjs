#!/usr/bin/env node
/**
 * Nou itinerari — prepara plantilla i/o la implementa a Astro.
 *
 * Ús:
 *   npm run nova-itinerari -- preparar collsacabra
 *   npm run nova-itinerari -- implementar collsacabra
 *   npm run nova-itinerari -- implementar collsacabra --force
 *
 * Documentació: scripts/README-nova-itinerari.md
 *
 * Nota: genera l’esquelet bàsic (fitxa, galeria, vídeo, mapa, taula de parades).
 * Els dadesModals complexos i el mapa SVG clicable es completen a mà si cal.
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
  npm run nova-itinerari -- preparar <slug>
  npm run nova-itinerari -- implementar <slug> [--force]

Exemple:
  npm run nova-itinerari -- preparar collsacabra
  npm run nova-itinerari -- implementar collsacabra
`);
}

function normalizeSlug(raw) {
  const s = String(raw || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  if (!s) {
    throw new Error(
      `Slug invàlid «${raw}». Useu lletres, números i guions (ex.: collsacabra, sau-tavertet).`,
    );
  }
  return s;
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
      if (name === "peus-galeria.txt" || name === "peus.txt") return false;
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

function readLabeledFields(filePath) {
  if (!exists(filePath)) return {};
  const text = fs.readFileSync(filePath, "utf8");
  const fields = {};
  for (const line of text.split("\n")) {
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

function field(fields, ...keys) {
  for (const key of keys) {
    const found = Object.entries(fields).find(([k]) => k.includes(key));
    if (found?.[1]) return found[1];
  }
  return "";
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

/** Llegeix files de la taula markdown de 02-llista-parades.md */
function readParadesTable(filePath) {
  if (!exists(filePath)) return [];
  const rows = [];
  for (const line of fs.readFileSync(filePath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("|")) continue;
    if (/^\|\s*-+/.test(trimmed)) continue;
    if (/Nº|Codi|Nom curt/i.test(trimmed)) continue;
    const cells = trimmed
      .split("|")
      .map((c) => c.trim())
      .filter((_, i, arr) => i > 0 && i < arr.length - 1);
    if (cells.length < 4) continue;
    const [, codi, nom, material, edat] = cells;
    if (!codi && !nom && !material) continue;
    const slug = (codi || "")
      .toUpperCase()
      .replace(/\s+/g, "")
      .replace(/^I(\d+)-P0*(\d+)$/i, (_, i, p) => `I${i}-P${Number(p)}`);
    if (!slug) continue;
    rows.push({
      parada: slug.includes("-P") ? slug.split("-P")[1].replace(/^/, "P") : nom || slug,
      slug,
      material: material || nom || slug,
      edat: edat || "—",
    });
  }
  // Etiqueta de parada: I1-P3 → P3
  return rows.map((r) => ({
    ...r,
    parada: r.slug.match(/P(\d+)$/i) ? `P${r.slug.match(/P(\d+)$/i)[1]}` : r.parada,
  }));
}

function yesValue(v) {
  const s = String(v || "").toLowerCase().trim();
  return s === "sí" || s === "si" || s === "yes" || s === "true";
}

function preparar(slug) {
  const mestre = path.join(ROOT, "_plantilles", "mestre-itinerari");
  const dest = path.join(ROOT, "continguts-en-curs", slug);

  if (!exists(mestre)) {
    throw new Error(`No trobo la plantilla: ${mestre}`);
  }
  if (exists(dest)) {
    console.log(`Ja existeix la carpeta de treball: ${path.relative(ROOT, dest)}`);
    console.log(
      "Omple-la i després executa: npm run nova-itinerari -- implementar " + slug,
    );
    return;
  }

  copyDir(mestre, dest);
  console.log(`✓ Contingut en curs creat: ${path.relative(ROOT, dest)}`);
  console.log("  1. Omple CHECKLIST.md, fitxes, galeria, vídeo i mapa.");
  console.log(`  2. Quan estigui a punt: npm run nova-itinerari -- implementar ${slug}`);
}

function implementar(slug, { force }) {
  const treball = path.join(ROOT, "continguts-en-curs", slug);
  if (!exists(treball)) {
    throw new Error(
      `No hi ha carpeta omplerta per ${slug}.\n` +
        `Primer: npm run nova-itinerari -- preparar ${slug}\n` +
        `Després omple continguts-en-curs/${slug} i torna a implementar.`,
    );
  }

  const mdPath = path.join(ROOT, "src", "content", "itineraris", `${slug}.md`);
  if (exists(mdPath) && !force) {
    throw new Error(
      `Ja existeix ${path.relative(ROOT, mdPath)}. Usa --force només si vols sobreescriure.`,
    );
  }

  const fitxaPath = path.join(treball, "01-fitxa-itinerari.md");
  const fitxa = readLabeledFields(fitxaPath);
  const allQuotes = readBlockquoteParagraphs(fitxaPath);
  const description =
    allQuotes.find((p) => p.length > 0 && p.length < 220) ||
    allQuotes[0] ||
    `Itinerari ${slug}.`;
  const introTexts =
    allQuotes.filter((p) => p !== description && p.length > 0).length > 0
      ? allQuotes.filter((p) => p !== description)
      : allQuotes.length
        ? allQuotes
        : [`Text d'introducció de l'itinerari ${slug}.`];

  const title =
    field(fitxa, "títol complet", "titol complet") ||
    `Itinerari ${slug}`;
  const inici = field(fitxa, "punt d’inici", "punt d'inici", "punt dinici");
  const final = field(fitxa, "punt final");
  const tipus = field(fitxa, "tipus") || "Geològic";
  const ordre = Number(field(fitxa, "ordre a la web", "ordre")) || 99;

  const mapaTipus = (
    field(fitxa, "tipus de mapa") ||
    Object.entries(fitxa).find(([k]) => k.includes("tipus") && k.includes("mapa"))?.[1] ||
    ""
  ).toLowerCase();
  const mapaEsPdf = mapaTipus.includes("pdf");
  const mapaLabel =
    field(fitxa, "text curt per a l’enllaç", "text curt per a l'enllaç", "enllaç") ||
    Object.entries(fitxa).find(([k]) => k.includes("enllaç") || k.includes("enllac"))?.[1] ||
    (mapaEsPdf ? "Mapa de l’itinerari" : "Mapa interactiu de l’itinerari");

  const galeriaDir = path.join(treball, "06-galeria");
  const videoDir = path.join(treball, "03-video");
  const altiDir = path.join(treball, "04-altimetria");
  const mapaDir = path.join(treball, "05-mapa-qgis");

  const galeriaAll = listMedia(galeriaDir, IMAGE_EXT);
  if (galeriaAll.length === 0) {
    throw new Error(
      `Cal almenys 1 foto a ${path.relative(ROOT, galeriaDir)} abans d'implementar.`,
    );
  }

  const thumbNamed = galeriaAll.find((f) =>
    /^thumbnail\./i.test(f),
  );
  const galeria = galeriaAll.filter((f) => f !== thumbNamed);
  const thumbFile = thumbNamed || galeria[0] || galeriaAll[0];
  const galeriaUse = (galeria.length ? galeria : galeriaAll).slice(0, 8);

  const peus = readPeusGaleria(path.join(galeriaDir, "peus-galeria.txt"));
  const srcImages = path.join(ROOT, "src", "images", "itineraris", slug);
  ensureDir(srcImages);

  for (const file of [...new Set([thumbFile, ...galeriaUse])]) {
    fs.copyFileSync(path.join(galeriaDir, file), path.join(srcImages, file));
  }

  // Vídeo (si hi ha fitxer a 03-video/)
  let videoBlock = "";
  const videos = listMedia(videoDir, VIDEO_EXT);
  if (videos.length) {
    const destVideos = path.join(ROOT, "public", "videos", "itineraris");
    ensureDir(destVideos);
    const destName = `${slug}${path.extname(videos[0]).toLowerCase()}`;
    fs.copyFileSync(path.join(videoDir, videos[0]), path.join(destVideos, destName));
    const videoAlt =
      field(fitxa, "text alternatiu") || `Vídeo de presentació — ${title}`;
    const ambSo = yesValue(
      Object.entries(fitxa).find(([k]) => k.includes("té so") || k.includes("te so") || k.endsWith("so"))?.[1] ||
        "",
    );
    videoBlock = `video:
  publicSrc: "/videos/itineraris/${destName}"
  alt: ${yamlEscape(videoAlt)}
  ambSo: ${ambSo}
`;
  }

  // Altimetria
  let altimetriaBlock = "";
  const altiVideos = listMedia(altiDir, VIDEO_EXT);
  const altiImages = listMedia(altiDir, IMAGE_EXT);
  const altiFile = altiVideos[0] || altiImages[0];
  if (altiFile) {
    const destAlti = path.join(ROOT, "public", "videos", "itineraris", slug);
    ensureDir(destAlti);
    fs.copyFileSync(path.join(altiDir, altiFile), path.join(destAlti, altiFile));
    const altiDesc =
      field(fitxa, "descripció curta del perfil", "descripcio curta del perfil") ||
      "Perfil altimètric de l’itinerari.";
    altimetriaBlock = `altimetria:
  label: "Altimetria"
  description: ${yamlEscape(altiDesc)}
  publicSrc: "/videos/itineraris/${slug}/${altiFile}"
  alt: ${yamlEscape(altiDesc)}
`;
  }

  // Mapa
  let mapaUrl = "";
  const mapaNom =
    field(fitxa, "nom de la carpeta o fitxer", "nom de la carpeta") || "";

  if (mapaEsPdf) {
    const pdfs = listMedia(mapaDir, new Set([".pdf"]));
    const images = listMedia(mapaDir, IMAGE_EXT);
    const preferred =
      mapaNom && exists(path.join(mapaDir, mapaNom)) ? mapaNom : null;
    const file = preferred || pdfs[0] || images[0];
    if (file) {
      const destMap = path.join(ROOT, "public", "images", "itineraris", slug);
      ensureDir(destMap);
      const destName = file.replace(/\s+/g, "-");
      fs.copyFileSync(path.join(mapaDir, file), path.join(destMap, destName));
      mapaUrl = `/images/itineraris/${slug}/${destName}`;
    }
  } else {
    const qgisIndex = path.join(mapaDir, "index.html");
    if (exists(qgisIndex)) {
      const destMapa = path.join(ROOT, "public", `mapa-${slug}`);
      if (exists(destMapa) && !force) {
        console.warn(
          `Avís: ja existeix public/mapa-${slug}/ (no s'ha sobreescrit).`,
        );
      } else {
        if (exists(destMapa)) fs.rmSync(destMapa, { recursive: true, force: true });
        copyDir(mapaDir, destMapa);
      }
      mapaUrl = `/mapa-${slug}/`;
    } else if (mapaNom.startsWith("/")) {
      mapaUrl = mapaNom;
    }
  }

  const parades = readParadesTable(path.join(treball, "02-llista-parades.md"));
  const tableYaml =
    parades.length === 0
      ? ""
      : `    table:
      headers:
        - "Parada"
        - "Material / tema"
        - "Edat"
      rows:
${parades
  .map(
    (r) => `        - parada: ${yamlEscape(r.parada)}
          slug: ${yamlEscape(r.slug)}
          material: ${yamlEscape(r.material)}
          edat: ${yamlEscape(r.edat)}`,
  )
  .join("\n")}
`;

  const introYaml = introTexts
    .map((p) => `      - ${yamlEscape(p)}`)
    .join("\n");

  const imagesYaml = galeriaUse
    .map((file) => {
      const alt = peus.get(file) || `Imatge — ${file}`;
      return `  - url: "/src/images/itineraris/${slug}/${file}"\n    alt: ${yamlEscape(alt)}`;
    })
    .join("\n");

  const thumbAlt =
    peus.get(thumbFile) || `Miniatura — ${title}`;

  const ubicacio =
    [inici, final].filter(Boolean).join(" → ") || "Ubicació pendent.";
  const mapaDada = mapaLabel || "Descripció del mapa pendent.";
  const historia =
    introTexts[0] || "Context històric i geològic pendent.";

  const mapaUrlLine = mapaUrl ? `mapaUrl: ${yamlEscape(mapaUrl)}\n` : "";

  const md = `---
title: ${yamlEscape(title)}
description: ${yamlEscape(description)}
ordre: ${ordre}
enConstruccio: true
tipus: ${yamlEscape(tipus)}
${mapaUrlLine}intro:
  - paragraphs:
${introYaml}
${tableYaml}dades:
  ubicacio: ${yamlEscape(ubicacio)}
  mapa: ${yamlEscape(mapaDada)}
  socle: "Pendent."
  historia: ${yamlEscape(historia)}
images:
${imagesYaml}
thumbnail:
  url: "/src/images/itineraris/${slug}/${thumbFile}"
  alt: ${yamlEscape(thumbAlt)}
${videoBlock}${altimetriaBlock}---

## Context del projecte

Text llarg de la pàgina de detall (a completar).
`;

  ensureDir(path.dirname(mdPath));
  fs.writeFileSync(mdPath, md, "utf8");

  console.log(`✓ Implementat itinerari «${slug}»`);
  console.log(`  Fitxa:     ${path.relative(ROOT, mdPath)}`);
  console.log(`  Galeria:   ${galeriaUse.length} foto(s) → src/images/itineraris/${slug}/`);
  console.log(`  Vídeos:    ${videos.length}`);
  console.log(`  Altimetria:${altiFile ? 1 : 0}`);
  console.log(`  Mapa URL:  ${mapaUrl || "(cap — afegiu mapaUrl a mà si cal)"}`);
  console.log(`  Parades a la taula: ${parades.length}`);
  console.log(`  enConstruccio: true (poseu false quan estigui llest)`);
  console.log("");
  console.log(
    "Revisa el .md (dadesModals, textos). Després: npm run nova-parada / nova-material per a cada parada.",
  );
}

function main() {
  const args = process.argv.slice(2).filter((a) => a !== "--");
  const force = args.includes("--force");
  const positional = args.filter((a) => !a.startsWith("--"));
  const [cmd, slugRaw] = positional;

  if (!cmd || !slugRaw) {
    usage();
    process.exit(1);
  }

  const slug = normalizeSlug(slugRaw);

  if (cmd === "preparar") {
    preparar(slug);
  } else if (cmd === "implementar") {
    implementar(slug, { force });
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
