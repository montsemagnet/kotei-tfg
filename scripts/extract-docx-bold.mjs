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
const runs = xml.split(/<w:r[\s>]/);
const bold = [];
for (const r of runs) {
  const hasB = /<w:b[\s\/>]/.test(r);
  const boldOff = /<w:b\s+w:val="(?:0|false)"/.test(r);
  if (!hasB || boldOff) continue;
  const texts = [...r.matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)].map((m) =>
    m[1]
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
  );
  const t = texts.join("").trim();
  if (t.length > 1) bold.push(t);
}
// Uneix fragments consecutius idèntics o adjacents imprimint els únics i conservant l'ordre
const seen = new Set();
for (const t of bold) {
  const key = t.toLowerCase();
  if (seen.has(key)) continue;
  seen.add(key);
  console.log(t);
}
