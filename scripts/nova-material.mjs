#!/usr/bin/env node
/**
 * Nou material / observació — prepara plantilla i/o la implementa a Astro.
 *
 * Ús:
 *   npm run nova-material -- preparar I1-P1-M1
 *   npm run nova-material -- implementar I1-P1-M1
 *   npm run nova-material -- implementar I1-P1-M1 --force
 *
 * Documentació: scripts/README-nova-material.md
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

function usage() {
  console.log(`
Ús:
  npm run nova-material -- preparar <CODI>
  npm run nova-material -- implementar <CODI> [--force]

Exemple:
  npm run nova-material -- preparar I1-P1-M1
  npm run nova-material -- implementar I1-P1-M1
`);
}

function normalizeCode(raw) {
  const s = String(raw || "").trim().toUpperCase().replace(/\s+/g, "");
  const m = s.match(/^I(\d+)-P0*(\d+)-M0*(\d+)$/i);
  if (!m) {
    throw new Error(
      `Codi invàlid «${raw}». Format esperat: I1-P1-M1 (itinerari + parada + material).`,
    );
  }
  return `I${m[1]}-P${Number(m[2])}-M${Number(m[3])}`;
}

function paradaFromCode(code) {
  return code.replace(/-M\d+$/i, "");
}

function ordreFromCode(code) {
  return Number(code.match(/M(\d+)$/i)?.[1] ?? 1);
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
      if (name === "peus.txt" || name === "peus-galeria.txt") return false;
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

function readPeus(filePath) {
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

function readComposicions(filePath) {
  if (!exists(filePath)) return [];
  const text = fs.readFileSync(filePath, "utf8");
  const items = [];
  for (const line of text.split("\n")) {
    const m = line.match(/^\d+\.\s*(.+)$/);
    if (!m) continue;
    const raw = m[1].trim();
    if (!raw || raw.toLowerCase() === "no aplica") continue;
    const parts = raw.split("|").map((p) => p.trim());
    if (parts.length >= 2 && parts[0]) {
      items.push({ nom: parts[0], valor: parts[1] });
    }
  }
  return items;
}

function readObservacionsBody(filePath) {
  if (!exists(filePath)) return "";
  const text = fs.readFileSync(filePath, "utf8");
  const lines = text.split("\n");
  const start = lines.findIndex((l) => /^## Text\s*$/i.test(l.trim()));
  if (start < 0) {
    return lines
      .filter((l) => !l.startsWith("#") && !l.startsWith(">") && l.trim())
      .join("\n\n")
      .trim();
  }
  const body = [];
  for (let i = start + 1; i < lines.length; i++) {
    if (/^## /.test(lines[i])) break;
    body.push(lines[i]);
  }
  return body.join("\n").trim();
}

function preparar(code) {
  const mestre = path.join(ROOT, "_plantilles", "mestre-material");
  const dest = path.join(ROOT, "continguts-en-curs", code);

  if (!exists(mestre)) {
    throw new Error(`No trobo la plantilla: ${mestre}`);
  }
  if (exists(dest)) {
    console.log(`Ja existeix la carpeta de treball: ${path.relative(ROOT, dest)}`);
    console.log(
      "Omple-la i després executa: npm run nova-material -- implementar " + code,
    );
    return;
  }

  copyDir(mestre, dest);
  console.log(`✓ Contingut en curs creat: ${path.relative(ROOT, dest)}`);
  console.log("  1. Omple CHECKLIST.md, fitxes i carpetes d’imatges.");
  console.log(`  2. Quan estigui a punt: npm run nova-material -- implementar ${code}`);
}

function implementar(code, { force }) {
  const treball = path.join(ROOT, "continguts-en-curs", code);
  if (!exists(treball)) {
    throw new Error(
      `No hi ha carpeta omplerta per ${code}.\n` +
        `Primer: npm run nova-material -- preparar ${code}\n` +
        `Després omple continguts-en-curs/${code} i torna a implementar.`,
    );
  }

  const mdPath = path.join(ROOT, "src", "content", "roques", `${code}.md`);
  if (exists(mdPath) && !force) {
    throw new Error(
      `Ja existeix ${path.relative(ROOT, mdPath)}. Usa --force només si vols sobreescriure.`,
    );
  }

  const fitxa = readLabeledFields(path.join(treball, "01-fitxa-material.md"));
  const body = readObservacionsBody(path.join(treball, "02-observacions.md"));
  const composicions = readComposicions(path.join(treball, "01-fitxa-material.md"));

  const title =
    field(fitxa, "títol a la web", "titol a la web") ||
    `Material ${ordreFromCode(code)} — (pendent de títol)`;
  const parada =
    field(fitxa, "parada a la qual") || paradaFromCode(code);
  const ordreRaw = field(fitxa, "número d’ordre", "numero d'ordre", "ordre");
  const ordre = Number(ordreRaw) || ordreFromCode(code);
  const tipus = (field(fitxa, "tipus") || "petrografia").toLowerCase();

  const isPetrografia = tipus.includes("petrograf") || tipus === "";
  const placeholder = isPetrografia ? "Pendent." : "No aplica.";

  const composicioQuimica =
    field(fitxa, "composició química", "composicio quimica") || placeholder;
  const composicioMineralogica =
    field(fitxa, "composició mineralògica", "composicio mineralogica") ||
    placeholder;
  const textura = field(fitxa, "textura") || placeholder;

  const opticaDir = path.join(treball, "03-optica");
  const electDir = path.join(treball, "04-electronica");
  const espDir = path.join(treball, "05-espectres");
  const altresDir = path.join(treball, "06-altres");

  let optica = listMedia(opticaDir, IMAGE_EXT);
  const electronica = listMedia(electDir, IMAGE_EXT);
  const espectres = listMedia(espDir, IMAGE_EXT);
  const altres = listMedia(altresDir, IMAGE_EXT);

  if (optica.length === 0 && altres.length > 0) {
    console.warn(
      "Avís: no hi ha imatge a 03-optica/; s’usarà la primera de 06-altres/ com a imatge principal (l’esquema Astro exigeix el camp optica).",
    );
    optica = [altres[0]];
  }

  if (optica.length === 0) {
    throw new Error(
      `Cal almenys 1 imatge a 03-optica/ (petrografia) o a 06-altres/ (altres observacions).`,
    );
  }

  const srcImages = path.join(ROOT, "src", "images", "roques", code);
  ensureDir(srcImages);

  const peusOptica = readPeus(path.join(opticaDir, "peus.txt"));
  const peusElect = readPeus(path.join(electDir, "peus.txt"));
  const peusEsp = readPeus(path.join(espDir, "peus.txt"));
  const peusAltres = readPeus(path.join(altresDir, "peus.txt"));

  const opticaFile = optica[0];
  const opticaSrc =
    exists(path.join(opticaDir, opticaFile))
      ? path.join(opticaDir, opticaFile)
      : path.join(altresDir, opticaFile);
  fs.copyFileSync(opticaSrc, path.join(srcImages, opticaFile));
  const opticaAlt =
    peusOptica.get(opticaFile) ||
    peusAltres.get(opticaFile) ||
    `Imatge principal — ${title}`;

  for (const file of electronica) {
    fs.copyFileSync(path.join(electDir, file), path.join(srcImages, file));
  }
  for (const file of espectres) {
    fs.copyFileSync(path.join(espDir, file), path.join(srcImages, file));
  }
  for (const file of altres) {
    if (file === opticaFile) continue;
    fs.copyFileSync(path.join(altresDir, file), path.join(srcImages, file));
  }

  const fileres = [];
  const n = Math.max(electronica.length, espectres.length);
  for (let i = 0; i < n; i++) {
    const el = electronica[i];
    const es = espectres[i];
    const parts = [];
    if (el) {
      parts.push(`    electronica:
      url: "/src/images/roques/${code}/${el}"
      alt: ${yamlEscape(peusElect.get(el) || el)}`);
    }
    if (es) {
      parts.push(`    espectre:
      url: "/src/images/roques/${code}/${es}"
      alt: ${yamlEscape(peusEsp.get(es) || es)}`);
    }
    if (parts.length) fileres.push(`  -\n${parts.join("\n")}`);
  }

  // Observacions no petrogràfiques: imatges addicionals com a «fileres»
  if (!isPetrografia && altres.length) {
    for (const file of altres) {
      if (file === opticaFile) continue;
      fileres.push(`  - electronica:
      url: "/src/images/roques/${code}/${file}"
      alt: ${yamlEscape(peusAltres.get(file) || file)}`);
    }
  }

  const composicionsUse =
    composicions.length > 0
      ? composicions
      : [{ nom: "Pendent", valor: "—" }];

  const composicionsYaml = composicionsUse
    .map(
      (c) =>
        `  - nom: ${yamlEscape(c.nom)}\n    valor: ${yamlEscape(c.valor)}`,
    )
    .join("\n");

  const fileresYaml =
    fileres.length > 0
      ? fileres.join("\n")
      : `  - electronica:
      url: "/src/images/roques/${code}/${opticaFile}"
      alt: ${yamlEscape(opticaAlt)}`;

  const md = `---
title: ${yamlEscape(title)}
parada: ${yamlEscape(parada)}
ordre: ${ordre}
composicioQuimica: ${yamlEscape(composicioQuimica)}
composicioMineralogica: ${yamlEscape(composicioMineralogica)}
textura: ${yamlEscape(textura)}
imatges:
  optica:
    url: "/src/images/roques/${code}/${opticaFile}"
    alt: ${yamlEscape(opticaAlt)}
  fileres:
${fileresYaml}
composicions:
${composicionsYaml}
---

${body || `Observacions provisionals de ${code}. Text a completar.`}
`;

  ensureDir(path.dirname(mdPath));
  fs.writeFileSync(mdPath, md, "utf8");

  console.log(`✓ Implementat ${code}`);
  console.log(`  Fitxa:      ${path.relative(ROOT, mdPath)}`);
  console.log(`  Parada:     ${parada}`);
  console.log(`  Imatges:    ${path.relative(ROOT, srcImages)}`);
  console.log(`  Òptica:     1`);
  console.log(`  Electrònica:${electronica.length}`);
  console.log(`  Espectres:  ${espectres.length}`);
  console.log(`  Altres:     ${altres.length}`);
  console.log("");
  console.log(
    "Revisa el .md i enllaça el material des de la parada (camp materials). Després: npm run dev:local",
  );
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
