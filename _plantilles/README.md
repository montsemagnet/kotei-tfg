# Plantilles GeoTransectes

Carpetes **mestres** (netes) per preparar contingut sense tocar el codi d’Astro.

**Manual de reutilització** (publicat a la web):  
→ pàgina `/manual/` · font editable `src/pages/manual/_content.md` · apuntador [`MANUAL-REUTILITZACIO.md`](./MANUAL-REUTILITZACIO.md)

## Com s’utilitzen

1. **No ompliu** les carpetes `mestre-*`.
2. Creeu una còpia de treball amb l’script (recomanat):

```bash
npm run nova-parada -- preparar I1-P3
```

Això crea `continguts-en-curs/I1-P3/` a partir de `mestre-parada`.

3. Ompliu la carpeta a **`continguts-en-curs/`** (textos, fotos, mapa…).
4. Seguiu el `CHECKLIST.md` de dins la carpeta.
5. Implementeu a Astro:

```bash
npm run nova-parada -- implementar I1-P3
```

## Què hi ha

| Carpeta | Per a què |
|---------|-----------|
| `mestre-itinerari/` | Model d’itinerari (només per copiar) |
| `mestre-parada/` | Model de parada (només per copiar) |

El treball en curs va a **`../continguts-en-curs/`** (fora d’aquesta carpeta).

## Important

- Les carpetes **`mestre-*`** són el model: **no les ompliu amb contingut real**.
- Preferiu noms de fitxer **sense accents ni espais**: `figura-01.jpg`, `foto-01.jpg`.

## Script (Informàtica)

Documentació: `scripts/README-nova-parada.md`
