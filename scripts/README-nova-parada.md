# Script `nova-parada`

Per a muntar una parada nova a Astro a partir de la carpeta mestre / de continguts en curs.

## Requisits

- Node.js instal·lat
- Repositori `kotei-tfg` amb `_plantilles/mestre-parada/`

## Ordres

Des de l’arrel del projecte:

```bash
# 1) Crear carpeta de treball (còpia de la plantilla)
npm run nova-parada -- preparar I1-P3

# 2) Omplir continguts-en-curs/I1-P3
#    (textos, fotos a 04-galeria-aflorament, figures, mapa, vídeo…)

# 3) Portar-ho a Astro
npm run nova-parada -- implementar I1-P3
```

Si cal sobreescriure una parada ja generada:

```bash
npm run nova-parada -- implementar I1-P3 --force
```

## Què fa `preparar`

Copia `_plantilles/mestre-parada/` → `continguts-en-curs/I1-P3/`.

## Què fa `implementar`

- Llegeix les fitxes i els fitxers de `continguts-en-curs/<CODI>/`
- Copia:
  - galeria → `src/images/parades/<CODI>/`
  - figures de geologia → `public/images/parades/<CODI>/geologia/`
  - figures de flora → `src/images/parades/<CODI>/geobotanica/`
  - vídeo → `public/videos/parades/<CODI>.mp4`
  - mapa QGIS → `public/mapa-parada-<N>/` (si hi ha `index.html`)
- Genera `src/content/parades/<CODI>.md`

Cal **com a mínim 1 foto** a `04-galeria-aflorament/`.

## Després d’implementar

1. Revisar el `.md` (títols de figures, textos, mapa).
2. `npm run dev` i comprovar la pàgina `/parades/I1-P3`.
3. Commit + push quan estigui bé.

## Notes

- El codi es normalitza: `I1-P03` → `I1-P3`.
- Itinerari per defecte: `sau-tavertet` (es pot canviar a la fitxa).
- La geobotànica queda “en preparació” si el resum diu `EN PREPARACIÓ` o està buit.
- Aquest script **no substitueix** la revisió humana del contingut.
- `_plantilles/` només conté mestres netes; el treball va a `continguts-en-curs/`.
