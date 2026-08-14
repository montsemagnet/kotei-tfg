#!/usr/bin/env node
/**
 * Gestió del mapa gran Sau–Tavertet (qgis2web).
 *
 * En local: el mapa sencer viu a mapa-web-sau-tavertet/ (port 8767) i a
 * public/mapa-sau-tavertet/ només hi ha un stub que redirigeix.
 * A Git / producció: el mapa sencer ha d’estar a public/mapa-sau-tavertet/.
 *
 * Ús:
 *   npm run mapa:park      # local: stub a public/, mapa a mapa-web-…
 *   npm run mapa:restore   # abans de commit/push o build de producció
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_MAP = path.join(ROOT, "public", "mapa-sau-tavertet");
const WEB_MAP = path.join(ROOT, "mapa-web-sau-tavertet");

const STUB = `<!doctype html>
<html lang="ca">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="refresh" content="0;url=http://127.0.0.1:8767/" />
  <title>Mapa Sau–Tavertet (dev)</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 36rem; margin: 3rem auto; padding: 0 1rem; line-height: 1.5; }
    a { color: #0b5fff; }
  </style>
</head>
<body>
  <h1>Mapa Sau–Tavertet</h1>
  <p>En desenvolupament local, el mapa s’obre en un altre port per no penjar Astro.</p>
  <p><a href="http://127.0.0.1:8767/">Obrir el mapa (port 8767)</a></p>
  <p>Torneu el mapa a <code>public/</code> abans de publicar: <code>npm run mapa:restore</code></p>
</body>
</html>
`;

function exists(p) {
  return fs.existsSync(p);
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function countFiles(dir) {
  if (!exists(dir)) return 0;
  let n = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) n += countFiles(full);
    else n += 1;
  }
  return n;
}

function isFullMap(dir) {
  return (
    exists(path.join(dir, "index.html")) &&
    exists(path.join(dir, "layers")) &&
    exists(path.join(dir, "resources")) &&
    countFiles(dir) > 50
  );
}

function isStub(dir) {
  if (!exists(path.join(dir, "index.html"))) return false;
  const html = fs.readFileSync(path.join(dir, "index.html"), "utf8");
  return html.includes("127.0.0.1:8767") && !exists(path.join(dir, "layers"));
}

function rmDirContents(dir) {
  if (!exists(dir)) return;
  fs.rmSync(dir, { recursive: true, force: true });
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

function restoreFromGit() {
  console.log("Restaurant public/mapa-sau-tavertet des de Git…");
  execSync("git restore --source=HEAD --worktree --staged -- public/mapa-sau-tavertet", {
    cwd: ROOT,
    stdio: "inherit",
  });
}

function park() {
  // Assegurar còpia completa a mapa-web
  if (!isFullMap(WEB_MAP)) {
    if (isFullMap(PUBLIC_MAP)) {
      console.log("Copiant mapa sencer → mapa-web-sau-tavertet/ …");
      rmDirContents(WEB_MAP);
      copyDir(PUBLIC_MAP, WEB_MAP);
    } else {
      restoreFromGit();
      if (!isFullMap(PUBLIC_MAP)) {
        throw new Error(
          "No trobo el mapa sencer ni a public/ ni a mapa-web-sau-tavertet/. Recupereu-lo des d’una còpia de seguretat.",
        );
      }
      console.log("Copiant mapa sencer → mapa-web-sau-tavertet/ …");
      rmDirContents(WEB_MAP);
      copyDir(PUBLIC_MAP, WEB_MAP);
    }
  } else {
    console.log(`mapa-web-sau-tavertet/ OK (${countFiles(WEB_MAP)} fitxers).`);
  }

  console.log("Deixant stub a public/mapa-sau-tavertet/ …");
  rmDirContents(PUBLIC_MAP);
  ensureDir(PUBLIC_MAP);
  fs.writeFileSync(path.join(PUBLIC_MAP, "index.html"), STUB, "utf8");

  console.log("✓ Mapa aparcat per a desenvolupament local.");
  console.log("  · Mapa sencer: mapa-web-sau-tavertet/ → npm run dev:local (port 8767)");
  console.log("  · Abans de commit/push/build de producció: npm run mapa:restore");
}

function restore() {
  if (isFullMap(WEB_MAP)) {
    console.log("Restaurant public/mapa-sau-tavertet des de mapa-web-sau-tavertet/ …");
    rmDirContents(PUBLIC_MAP);
    copyDir(WEB_MAP, PUBLIC_MAP);
  } else {
    restoreFromGit();
  }

  if (!isFullMap(PUBLIC_MAP)) {
    throw new Error("Restore incomplet: public/mapa-sau-tavertet/ no té el mapa sencer.");
  }

  console.log(`✓ Mapa restaurat a public/ (${countFiles(PUBLIC_MAP)} fitxers).`);
  console.log("  Ja podeu fer commit/push o npm run build.");
}

function status() {
  console.log(`public/mapa-sau-tavertet: ${countFiles(PUBLIC_MAP)} fitxers` +
    (isStub(PUBLIC_MAP) ? " (stub local)" : isFullMap(PUBLIC_MAP) ? " (mapa sencer)" : " (incomplet)"));
  console.log(`mapa-web-sau-tavertet:    ${countFiles(WEB_MAP)} fitxers` +
    (isFullMap(WEB_MAP) ? " (mapa sencer)" : " (incomplet o buit)"));
}

function usage() {
  console.log(`
Ús:
  npm run mapa:park
  npm run mapa:restore
  npm run mapa:status
`);
}

function main() {
  const cmd = process.argv.slice(2).filter((a) => a !== "--")[0];
  if (cmd === "park") park();
  else if (cmd === "restore") restore();
  else if (cmd === "status") status();
  else {
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
