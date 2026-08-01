import fs from "fs";

const p =
  "C:/CGIS/TFG9-P11-12/Mapa p11-12/qgis2web_2026_08_01-19_10_56_696321/styles/P1112LitologiadelScolPaleozoiciMesozoic_1_style.js";
let t = fs.readFileSync(p, "utf8");
t = t.replace(
  /fill: new ol\.style\.Fill\(\{color: 'rgba\((\d+),(\d+),(\d+),1\.0\)'\}\)/g,
  "fill: new ol.style.Fill({color: 'rgba($1,$2,$3,0.5)'})"
);
fs.writeFileSync(p, t);
const n = (t.match(/rgba\(\d+,\d+,\d+,0\.5\)/g) || []).length;
console.log(`${n} fills at alpha 0.5`);
