# Checklist — termes nous al glossari

- [ ] He **copiat** `mestre-glossari` (no he tocat l’original), o he afegit `termes-glossari.txt` dins la carpeta de la parada / itinerari.
- [ ] He omplert **terme** i **definició** per a cada entrada nova.
- [ ] He indicat **categoria** (si la sé) i **sinònims** (si n’hi ha).
- [ ] He comprobat que el terme **no existeix ja** a https://montsemagnet.github.io/kotei-tfg/termes/ (si ja hi és, reutilitzeu la mateixa forma; no cal redefinir-lo).

## Notes per a informàtica

El fitxer de dades de la web és `src/data/termes.ts` (`slug`, `terme`, `categoria`, `definicio`, `sinonims`).
El `slug` el pot generar sistemes (minúscules, guions, sense accents) a partir del terme.
