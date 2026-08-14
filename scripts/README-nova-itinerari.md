# Script `nova-itinerari`

Per a muntar un itinerari nou a Astro a partir de la plantilla.

## Ordres

```bash
npm run nova-itinerari -- preparar collsacabra
# Omplir continguts-en-curs/collsacabra/
npm run nova-itinerari -- implementar collsacabra
```

Sobreescriure: `npm run nova-itinerari -- implementar collsacabra --force`

## Què fa `preparar`

Copia `_plantilles/mestre-itinerari/` → `continguts-en-curs/<slug>/`.

## Què fa `implementar`

- Llegeix `01-fitxa-itinerari.md` i `02-llista-parades.md`
- Copia galeria → `src/images/itineraris/<slug>/`
- Vídeo → `public/videos/itineraris/<slug>.mp4` (si n’hi ha)
- Altimetria → `public/videos/itineraris/<slug>/…`
- Mapa QGIS → `public/mapa-<slug>/` o PDF a `public/images/itineraris/<slug>/`
- Genera `src/content/itineraris/<slug>.md` amb `enConstruccio: true`

Cal **almenys 1 foto** a `06-galeria/`.

## Després

1. Revisar el `.md` (textos, `dades`, peus)
2. Afegir parades amb `nova-parada` i materials amb `nova-material`
3. Completar `dadesModals` a mà si cal; mapa SVG = encàrrec a part
4. Quan estigui llest: `enConstruccio: false`
5. `npm run dev:local`

## Notes

- L’slug es normalitza (minúscules, sense accents): `Collsacabra` → `collsacabra`
- Aquest script **no** clona Sau–Tavertet; parteix de la plantilla mestre
