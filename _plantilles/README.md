# Plantilles GeoTransectes

Carpetes **mestres** (sense omplir) per preparar contingut sense tocar el codi d’Astro.

**Manual de reutilització** (publicat a la web):  
→ pàgina `/manual/` · font editable `src/pages/manual/_content.md`

## Com s’utilitzen

1. **No ompliu** les carpetes `mestre-*` (feu-ne una còpia).
2. Creeu la carpeta de treball amb l’script corresponent:

```bash
npm run nova-itinerari -- preparar collsacabra
npm run nova-parada -- preparar I1-P3
npm run nova-material -- preparar I1-P3-M1
```

3. Ompliu la carpeta a **`continguts-en-curs/`**.
4. Seguiu el `CHECKLIST.md` de dins la carpeta.
5. Implementeu a Astro:

```bash
npm run nova-itinerari -- implementar collsacabra
npm run nova-parada -- implementar I1-P3
npm run nova-material -- implementar I1-P3-M1
```

## Què hi ha

| Carpeta | Script |
|---------|--------|
| `mestre-itinerari/` | `npm run nova-itinerari` |
| `mestre-parada/` | `npm run nova-parada` |
| `mestre-material/` | `npm run nova-material` |
| `mestre-glossari/` | (sense script: passar termes a `src/data/termes.ts`) |

El treball en curs va a **`../continguts-en-curs/`**.

## Documentació dels scripts

- `scripts/README-nova-itinerari.md`
- `scripts/README-nova-parada.md`
- `scripts/README-nova-material.md`
