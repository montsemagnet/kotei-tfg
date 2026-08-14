# Script `nova-material`

Per a muntar un material / observació nova a Astro a partir de la plantilla.

## Ordres

```bash
npm run nova-material -- preparar I1-P1-M1
# Omplir continguts-en-curs/I1-P1-M1/
npm run nova-material -- implementar I1-P1-M1
```

Sobreescriure: `npm run nova-material -- implementar I1-P1-M1 --force`

## Què fa `preparar`

Copia `_plantilles/mestre-material/` → `continguts-en-curs/<CODI>/`.

## Què fa `implementar`

- Llegeix `01-fitxa-material.md` i `02-observacions.md`
- Copia imatges de `03-optica/`, `04-electronica/`, `05-espectres/`, `06-altres/` → `src/images/roques/<CODI>/`
- Genera `src/content/roques/<CODI>.md`

Cal **almenys 1 imatge** a `03-optica/` (petrografia) o a `06-altres/` (altres observacions).

## Després

1. Revisar el `.md`
2. Enllaçar des de la parada (`materials:` al frontmatter)
3. `npm run dev:local`

## Notes

- Codi normalitzat: `I1-P01-M01` → `I1-P1-M1`
- L’esquema Astro (`roques`) exigeix camps de petrografia; si el tipus no ho és, s’hi posa «No aplica.»
