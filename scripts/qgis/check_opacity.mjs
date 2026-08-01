import fs from "fs";

const path = process.argv[2];
const t = fs.readFileSync(path, "utf8");
const re = /<maplayer\b[\s\S]*?<\/maplayer>/g;
let m;
while ((m = re.exec(t))) {
  const b = m[0];
  const n = (b.match(/<layername>([^<]*)<\/layername>/) || [])[1] || "";
  if (/litolog|tipus|quatern|interes|dip[oò]sit/i.test(n)) {
    const op = (b.match(/<layerOpacity>([^<]+)<\/layerOpacity>/) || [])[1];
    console.log(n, "opacity=", op);
  }
}
