import { readFileSync, writeFileSync } from "node:fs";

const xmlPath = process.argv[2];
const outPath = process.argv[3];
const raw = readFileSync(xmlPath, "utf8");
let text = raw
  .replace(/<\/w:p>/g, "\n")
  .replace(/<w:tab[^/]*\/>/g, "\t")
  .replace(/<[^>]+>/g, "");
text = text
  .replace(/&amp;/g, "&")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"')
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));

const lines = text
  .split("\n")
  .map((l) => l.trim())
  .filter((l, i, arr) => l || (arr[i - 1] && arr[i - 1]));

writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(lines.join("\n"));
