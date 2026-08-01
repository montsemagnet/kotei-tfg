import fs from "node:fs";

const xml = fs.readFileSync(
  String.raw`C:\CGIS\TFG9-P11-12\_qgz_extract\QGIS2WEB.qgs`,
  "utf8",
);
const re = /<maplayer\b[\s\S]*?<\/maplayer>/g;
let m;
let i = 0;
while ((m = re.exec(xml))) {
  const b = m[0];
  const n = (b.match(/<layername>([^<]*)<\/layername>/) || [])[1];
  const r = (b.match(/<renderer-v2[^>]*type="([^"]+)"/) || [])[1] || "raster?";
  const cats = (b.match(/<category /g) || []).length;
  console.log(
    `${++i}. ${n} | renderer=${r} | categories=${cats} | bytes=${b.length}`,
  );
}
