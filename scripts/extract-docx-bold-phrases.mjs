import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const docx = process.argv[2];
const tmp = path.join(process.cwd(), "_tmp_docx_bold");
fs.rmSync(tmp, { recursive: true, force: true });
fs.mkdirSync(tmp, { recursive: true });
const zip = path.join(tmp, "doc.zip");
fs.copyFileSync(docx, zip);
execSync(
  `powershell -NoProfile -Command "Expand-Archive -LiteralPath '${zip.replace(/'/g, "''")}' -DestinationPath '${path.join(tmp, "out").replace(/'/g, "''")}' -Force"`
);
const xml = fs.readFileSync(path.join(tmp, "out", "word", "document.xml"), "utf8");

// Recorre els paràgrafs; dins de cadascun, uneix les seqüències consecutives en negreta en frases
const paras = xml.split(/<\/w:p>/);
const phrases = [];
for (const p of paras) {
  const runs = [...p.matchAll(/<w:r[\s>][\s\S]*?(?:<\/w:r>|(?=<w:r[\s>]))/g)].map((m) => m[0]);
  let current = "";
  const flush = () => {
    const t = current.replace(/\s+/g, " ").trim();
    if (t.length > 1) phrases.push(t);
    current = "";
  };
  for (const r of runs) {
    const hasB = /<w:b[\s\/>]/.test(r);
    const boldOff = /<w:b\s+w:val="(?:0|false)"/.test(r);
    const texts = [...r.matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)]
      .map((m) =>
        m[1]
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, '"')
      )
      .join("");
    if (!texts) continue;
    if (hasB && !boldOff) current += texts;
    else flush();
  }
  flush();
}

const seen = new Set();
for (const t of phrases) {
  const key = t.toLowerCase();
  if (seen.has(key)) continue;
  // omet text genèric / marcadors de posició d'imatge
  if (/^insertar/i.test(t) || /imagen/i.test(t) || t.length < 3) continue;
  seen.add(key);
  console.log(t);
}
