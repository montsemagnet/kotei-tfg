## PRIMERA PART: Dirigida al professorat

Per incorporar un nou itinerari (que pot ser geològic, botànic, zoològic, ecològic, etc.) cal tenir els continguts estructurats i configurats per tal que informàticament es puguin incorporar fàcilment a la web.

Per veure com és l’estructura d’un itinerari, **podeu guiar-vos mirant l’itinerari Sau–Tavertet** (estructura de l’itinerari, parades, mapes, finestres emergents…): [https://montsemagnet.github.io/kotei-tfg/itineraris/sau-tavertet/](https://montsemagnet.github.io/kotei-tfg/itineraris/sau-tavertet/).

## 1. Primer pas: estructurar els continguts

Abans de redactar, es recomana un **petit esquema** del que ha de contenir cada pàgina.

**Primer, la pàgina general de l’itinerari:**

- Títol i frase curta de presentació  
- Foto de l’itinerari o mapa amb les parades  
- Llista ordenada de parades (P1, P2… amb el títol de cadascuna)  
- Quins apartats voleu en aquesta pàgina: mapa / geologia / paleogeologia / geobotànica… (es poden substituir pel que necessiteu si el contingut no és geològic)  
- Dins de les parades poden haver-hi subapartats que s’obriran com a finestres emergents  

> **Mapa interactiu de les parades** (com a Sau–Tavertet, on es cliquen P1, P2… i s’obre cada fitxa): si el voleu, cal demanar-ho a **informàtica / departament de sistemes**. El professorat pot aportar el dibuix, la llista de parades i, si escau, una foto petita de previsualització; la implementació a la web la fa informàtica. L’opció habitual sense aquest encàrrec és un mapa en **PDF** o un mapa elaborat amb **QGIS**.

**Segon, l’estructura d’una pàgina corresponent a una parada:**

- Quins apartats necessiteu: coordenades, mapa…  
- Materials o equivalent: per exemple, si és de zoologia o botànica, podrien ser espècies…

**Tercer, l’estructura de la pàgina d’observacions de cada parada:**

- Poden ser materials, espècies o altres observacions que feu a la parada.  
- Què voleu explicar de cada observació i quins apartats us calen.

## 2. Segon pas: preparar el contingut

L’objectiu és facilitar la inclusió dels continguts a la pàgina web.

### 2.1 Textos

- Especifiqueu **on** estaran inclosos dins la web: pàgina, apartat, subapartat…  
- Especifiqueu si entre el text hi ha alguna **figura** inclosa, **on** s’ha de situar (dins del text), el **títol** de la figura, el **peu** de la figura i a quina carpeta heu posat la imatge.  
- Especifiqueu si hi ha algun **terme** que cal incloure al glossari (si es farà glossari) i la **definició**.

**Peus de figura**

Per a cada imatge, és molt útil disposar de:

1. Títol i descripció  
2. Crèdit («Elaboració pròpia» o autor/font)  
3. Lloc i data quan sigui una foto de camp  

### 2.2 Imatges

| Aspecte | Recomanació |
|---------|-------------|
| **Formats** | **JPG** per a fotografies i **PNG** per a esquemes o captures amb text nítid. |
| **Resolució orientativa** | Entre **1500 i 3000 px** pel costat llarg. |
| **Pes orientatiu** | Idealment **menys de 2–3 MB** per imatge. |
| **Orientació** | Girades correctament. |
| **Identificació** | Cada imatge ha de poder associar-se clarament (número o títol inequívoc). |

## 3. Entregar el contingut

Es recomana posar en una mateixa carpeta el contingut corresponent a cada pàgina.

Exemple: carpeta Itinerari, carpeta Parada 1, carpeta Parada 2…, carpeta Observació 1…

Comprimiu-ho en un **ZIP** i copieu-lo a un **USB** per entregar.

---

## SEGONA PART: Dirigida al departament de sistemes

Aquesta part segueix l’**ordre de feina** habitual quan arriba un dossier del professorat:

1. Preparar l’entorn (A)  
2. Entendre el model del lloc (B)  
3. Treballar sempre des de plantilles (C)  
4. Saber on van les imatges (D)  
5. **Itinerari** → **parada** → **material** → **glossari** → **finestres emergents** → **mapes** (E–J)  
6. Comprovar en local i publicar (K)  
7. Errors i referències (L–M)

---

## A. Programes i primer arrencada

| Programa | Per a què serveix | On descarregar-lo |
|----------|-------------------|-------------------|
| **Node.js** (18 o 20 LTS) | Executar `npm install`, `npm run…`. Inclou **npm**. | [https://nodejs.org](https://nodejs.org) (LTS) |
| **Visual Studio Code** (recomanat) | Obrir el projecte, editar `.md` i usar el terminal. | [https://code.visualstudio.com](https://code.visualstudio.com) |
| **Navegador** (Chrome, Edge, Firefox…) | Comprovar la web en local. | Ja instal·lat |
| **Git** + compte **GitHub** | Clonar el repo i pujar canvis. | [git-scm.com](https://git-scm.com) · [github.com](https://github.com) |

No cal instal·lar Astro a part: ve amb el projecte (`npm install`).

**Terminal:** obriu la carpeta `kotei-tfg` a VS Code → **Terminal → New Terminal**. El camí ha d’acabar a l’**arrel** del projecte (no dins `src` ni `_plantilles`).

```bash
npm install
npm run dev:local
```

Repositori: [https://github.com/montsemagnet/kotei-tfg](https://github.com/montsemagnet/kotei-tfg)

---

## B. Idea general

El lloc és una web **estàtica** feta amb **Astro 6**: no hi ha CMS ni base de dades. Les pàgines surten de fitxers Markdown + imatges. El disseny (Tailwind, components) ja està fet; la feina habitual de sistemes és afegir o actualitzar contingut, no redissenyar.

| Concepte | |
|----------|--|
| **Markdown (`.md`)** | Text pla amb marques senzilles (`#` títol, `-` llista…). Astro el converteix en HTML. |
| **Frontmatter YAML** | Bloc al començament del `.md`, entre `---`, amb dades estructurades (títol, rutes d’imatge…). El text lliure va a sota. |
| **Zod / esquema** | A `src/content.config.ts` defineix quins camps són obligatoris. Si algo no encaixa, la compilació falla (és el control de qualitat). |
| **Tailwind / UI** | Estils i components a `src/styles/` i `src/components/`. No cal tocar-los per publicar un itinerari o una parada. |

Exemple de frontmatter:

```yaml
---
title: "P4. Argiles del Paleocè"
parada: "I1-P4"
---
```

**On va cada tipus de contingut**

| Tipus | Fitxer | Imatges de galeria | URL d’exemple |
|--------|--------|--------------------|---------------|
| Itinerari | `src/content/itineraris/<slug>.md` | `src/images/itineraris/<slug>/` | `/itineraris/sau-tavertet/` |
| Parada | `src/content/parades/<CODI>.md` | `src/images/parades/<CODI>/` | `/parades/I1-P1/` |
| Material / observació | `src/content/roques/<CODI-Mm>.md` | `src/images/roques/<CODI-Mm>/` | `/roques/I1-P1-M1/` |

Les rutes de llista i detall (`src/pages/…`) ja existeixen: no cal crear un fitxer a `src/pages/` per cada parada nova.

**Què és un slug?** És l’identificador curt i estable que s’utilitza al nom del fitxer i a la **URL**, sense accents ni espais (sovint amb guions). Exemple: l’itinerari Sau–Tavertet té l’slug `sau-tavertet` i la URL `/itineraris/sau-tavertet/`. A la taula de parades de l’itinerari, el camp `slug` ha de coincidir amb l’`id` de la parada (el nom del fitxer sense `.md`), p. ex. `I1-P4`.

**Identificadors** (estables, sense accents ni espais; han de coincidir a fitxer, carpeta d’imatges, taula de l’itinerari i URL):

- Parades → `I1-P1`, `I1-P2`…  
- Materials → `I1-P1-M1`, `I1-P1-M2`…  
- Itinerari Sau–Tavertet → `sau-tavertet` → `/itineraris/sau-tavertet/`

**Dades auxiliars (`.ts`, no Markdown):** algunes llistes viuen a `src/data/`:

| Fitxer | Quan s’actualitza |
|--------|-------------------|
| `src/data/termes.ts` | Termes nous del **glossari** (apartat H) |
| `src/data/sau-tavertet-parades.ts` | Parades al **mapa SVG** clicable (apartat J) |

**Flux resum:** ZIP/USB del professorat → `nova-itinerari` / `nova-parada` / `nova-material` (`preparar` → omplir → `implementar`) → `npm run dev:local` → commit i `git push` a `main` → GitHub Actions publica a Pages (`base: /kotei-tfg/`).

---

## C. Plantilles i carpetes de treball

Sempre es construeix des de la plantilla.

| Carpeta | Ús |
|---------|-----|
| `_plantilles/mestre-*` | Plantilles mestres sense omplir. Mantenir-les sense canvis; cal fer una còpia per treballar el nou contingut. |
| `continguts-en-curs/` | On es treballa el nou contingut abans de passar-lo a `src/`. |

| Què | Plantilla |
|-----|-----------|
| Itinerari | `_plantilles/mestre-itinerari/` |
| Parada | `_plantilles/mestre-parada/` |
| Material / observació | `_plantilles/mestre-material/` |
| Glossari (llista de termes) | `_plantilles/mestre-glossari/` |

**Passos comuns**

1. `npm run nova-<tipus> -- preparar <codi-o-slug>` (crea la còpia a `continguts-en-curs/`)  
2. Omplir-la amb el nou contingut  
3. `npm run nova-<tipus> -- implementar <codi-o-slug>` (passa a `src/` i `public/`)  

**Scripts** (mateix patró per a tot):

| Contingut | Ordres | Documentació |
|-----------|--------|--------------|
| Itinerari | `npm run nova-itinerari -- preparar\|implementar <slug>` | `scripts/README-nova-itinerari.md` |
| Parada | `npm run nova-parada -- preparar\|implementar <CODI>` | `scripts/README-nova-parada.md` |
| Material / observació | `npm run nova-material -- preparar\|implementar <CODI-Mm>` | `scripts/README-nova-material.md` |

El glossari no té script: els termes es passen a `src/data/termes.ts` (apartat H).

**Si dubteu d’un camp** del frontmatter, obriu un exemple ja publicat **només com a consulta** (no com a base per copiar tot l’itinerari):

| Dubte | Obrir |
|-------|-------|
| Parada amb geologia | `src/content/parades/I1-P1.md` |
| Parada via script | `src/content/parades/I1-P3.md` |
| Material | `src/content/roques/I1-P1-M1.md` |
| Itinerari simple | `src/content/itineraris/itinerari2.md` |
| Itinerari amb molts modals | `src/content/itineraris/sau-tavertet.md` |

---

## D. On van les imatges (important)

Hi ha **dues vies**; no són intercanviables.

| Ús | Carpeta | Al Markdown |
|----|---------|-------------|
| Galeria / miniatura (Astro les processa) | `src/images/...` | `url: "/src/images/..."` |
| Figures de finestres emergents, PDF, mapes (sense processar) | `public/images/...` (o `public/mapa-…/`) | `publicSrc: "/images/..."` o `mapaUrl` |
| Vídeos | `public/videos/...` | `publicSrc: "/videos/..."` |

- Galeria amb path incorrecte a `src/images` → **falla la compilació**.  
- Figura de modal a `src/images` però enllaçada amb `publicSrc` → la pàgina compila però **la imatge no es veu**.  
- Cada imatge ha de tenir `alt` descriptiu.  
- A producció la web va sota `/kotei-tfg/`; als paths del Markdown **no** cal escriure aquest prefix (`publicSrc: "/images/…"`).

---

## E. Itinerari nou

Ordre: **primer l’itinerari**, després les seves parades.

```bash
npm run nova-itinerari -- preparar collsacabra
# omplir continguts-en-curs/collsacabra/ (fitxes, 06-galeria, vídeo, mapa…)
npm run nova-itinerari -- implementar collsacabra
npm run dev:local
```

L’script deixa `enConstruccio: true`. Quan estigui llest: poseu `false` o treieu el camp.  
Si un camp no queda clar, consulteu un exemple (apartat C); no cal reproduir Sau–Tavertet sencer.  
Els `dadesModals` complexos i el mapa SVG es completen a mà si cal (apartats I i J).

**Camps mínims**

| Camp | Nota |
|------|------|
| `title`, `description`, `ordre`, `intro` | Contingut visible; a `intro` hi anirà la **taula de parades** (`slug`) |
| `dades` | Resums a la pàgina (alguns obligatoris a l’esquema) |
| `images` / `thumbnail` | Paths `/src/images/itineraris/...` |
| `enConstruccio` | `true` = encara no és la fitxa completa |
| `draft` | `true` = no surt al llistat |

**Vídeos i mapa de l’itinerari** (detall de finestres a l’apartat I; mapes a J):

| Contingut | On | Camp |
|-----------|-----|------|
| Vídeo de capçalera | `public/videos/itineraris/<slug>.mp4` | `video.publicSrc` |
| Altimetria | `public/videos/itineraris/<slug>/...` | `altimetria` |
| Figures de finestres | `public/images/itineraris/<slug>/...` | `dadesModals` → `publicSrc` |
| Mapa QGIS / PDF | `public/mapa-.../` o `public/images/...` | `mapaUrl` |

---

## F. Parada (integrar una nova parada)

Després de tenir (o crear) l’itinerari:

```bash
npm run nova-parada -- preparar I1-P4   # crea l’esquelet a continguts-en-curs si cal
# (o copieu el ZIP rebut a continguts-en-curs/I1-P4/)
npm run nova-parada -- implementar I1-P4
npm run dev:local
```

Després de l’script: reviseu el `.md`, **enllaceu la parada a l’itinerari** i, si cal, el mapa SVG (apartat J).

**Enllaçar la parada a l’itinerari**

1. El fitxer `src/content/parades/I1-P4.md` defineix l’`id` `I1-P4` → URL `/parades/I1-P4/`.  
2. A `src/content/itineraris/<slug>.md`, afegeu una fila a `intro` → `table` → `rows`. El camp **`slug` ha de coincidir exactament** amb aquest `id`:

```yaml
intro:
  - paragraphs:
      - "Text de presentació…"
    table:
      rows:
        - parada: "P4"
          slug: "I1-P4"
          material: "Títol curt de la parada"
          edat: "…"
```

3. Si el `slug` no coincideix amb cap fitxer a `parades/`, la fila es veu però l’enllaç no funciona.  
4. El mapa SVG clicable (si n’hi ha) és **independent** d’aquesta taula → apartat J.

---

## G. Materials / observacions (roques, espècies…)

Després de la parada corresponent:

```bash
npm run nova-material -- preparar I1-P1-M1
# omplir continguts-en-curs/I1-P1-M1/
npm run nova-material -- implementar I1-P1-M1
```

Enllaçar-los des de la parada (camp `materials` del `.md` de la parada).  
Si no és petrografia, utilitzeu `06-altres/` (i marqueu el tipus a la fitxa).

Exemple de camps: `src/content/roques/I1-P1-M1.md` (consulta).

> L’esquema Zod `roques` està pensat sobretot per a petrografia; altres observacions poden requerir adaptar camps o ampliar l’esquema.

---

## H. Glossari (termes nous)

Quan el dossier porti termes amb definició:

1. Recolliu-los (o utilitzeu `_plantilles/mestre-glossari/termes-glossari.txt`).  
2. Format orientatiu:

```text
TERME: Lutita
DEFINICIÓ: Roca sedimentària de gra molt fi (llim i argila), típica d'ambients de baixa energia.
SINÒNIMS (opcional): lutites
```

3. Afegiu-los a `src/data/termes.ts`.  
4. Comproveu a la web (popover / pàgina de glossari) amb `npm run dev:local`.

---

## I. Finestres emergents (modals)

El **frontmatter** és el bloc de dades al **començament** del fitxer `.md`, entre tres guions (`---`). És on es defineixen títols, imatges, textos de finestres, etc. S’edita obrint el Markdown corresponent amb l’editor (VS Code), per exemple:

- Parada → `src/content/parades/<CODI>.md` (bloc `geologia`, …)
- Itinerari → `src/content/itineraris/<slug>.md` (blocs `dades`, `dadesModals`, …)

No cal canviar components de la interfície.

### I.1 Modal de geologia (parada)

Al fitxer `src/content/parades/<CODI>.md`, bloc `geologia`:

```yaml
geologia:
  resum: "Una o dues frases a la pàgina."
  intro: "Introducció del modal."
  sections:
    - title: "Títol de la secció"
      paragraphs:
        - "Paràgraf 1."
        - "Paràgraf 2."
      media:
        title: "Figura 1. Descripció."
        publicSrc: "/images/parades/I1-P4/geologia/figura-01.jpg"
        alt: "Text alternatiu"
        caption: "Crèdit / data."
```

- Imatges del modal → `public/images/parades/<CODI>/geologia/` (no `src/images`).  
- Diverses `sections`; dues figures juntes → `mediaItems:` (exemple: `I1-P1.md`).

### I.2 Modals de l’itinerari (`dadesModals`)

1. `dades.clau` — text curt a la pàgina.  
2. `dadesModals.clau` — contingut de la finestra.  
3. Opcional `dadesIndex.clau` — índex amb enllaços a diversos modals.

Les claus han de coincidir; si `dadesIndex` apunta a una clau inexistent a `dadesModals`, el modal no obre. Model: consulteu un itinerari publicat (apartat C).

---

## J. Mapes

N’hi ha de dos tipus (a Sau–Tavertet n’hi ha tots dos):

### J.1 Mapa QGIS (qgis2web) o PDF

1. Copiar l’export a `public/mapa-<nom>/` (ha d’haver-hi `index.html` a l’arrel) o el PDF a `public/images/…`.  
2. Al `.md` de l’itinerari: `mapaUrl: "/mapa-<nom>/"` (o path del PDF).  
3. Comprovar amb `npm run dev:local` i a GitHub Pages.  
4. Mapes molt grans: no deixar-los sencers a `public/` en local (mapa aparcat / dos ports amb `dev:local`):

```bash
npm run mapa:park      # stub a public/ + mapa a mapa-web-sau-tavertet/
npm run mapa:restore   # abans de commit/push o build de producció
npm run mapa:status    # comprovar estat
```
  
5. Revisar rutes relatives de qgis2web si `base: /kotei-tfg/`.

**qgis2web** és un export de QGIS; amb mapes complexos pot fallar → PDF o suport.

### J.2 Mapa SVG clicable de parades (patró Sau–Tavertet)

No surt només del Markdown: cal SVG + dades + component.

| Peça | Fitxer / lloc |
|------|---------------|
| Activació | `mapa: "sau-tavertet"` a l’itinerari |
| SVG | `public/images/itineraris/mapa-parades.svg` |
| Metadades | `src/data/sau-tavertet-parades.ts` (`slug`, `label`, `preview`, `svgIds`) |
| Component | `src/components/itinerari/itinerari-sau.astro` |
| Fotos hover | `public/images/parades/I1-PX-hover.jpg` |
| Contingut | `src/content/parades/*.md` (`disponible`) |

**Afegir una parada al mapa SVG existent**

1. Existeix `src/content/parades/I1-PX.md` i està a la taula de l’itinerari (apartat F).  
2. Entrada a `SAU_TAVERTET_PARADES` amb `svgIds` coincidents.  
3. `public/images/parades/I1-PX-hover.jpg`.  
4. Comprovar hover i navegació.

**Itinerari nou amb el mateix patró:** SVG nou, dades noves i component (o parametritzar `itinerari-sau.astro`) → **encàrrec de desenvolupament**. Sense això: utilitzeu `mapaUrl` (J.1).

---

## K. Comprovar i publicar

```bash
npm run dev:local          # revisar abans de pujar
git status
git add …                  # només contingut/assets necessaris
git commit -m "Afegeix la parada I1-P4"
git push origin main
```

GitHub Actions publica a `https://montsemagnet.github.io/kotei-tfg/`.  
Si la build falla: path d’imatge, camp obligatori de l’esquema, o `fotos` fora del rang 1–8.

---

## L. Errors freqüents

| Problema | Causa habitual | Solució |
|----------|----------------|---------|
| No existeix la pàgina de l’itinerari | `enConstruccio: true` | Posar `false` quan estigui llest |
| No surt al llistat | `draft: true` | Traure’l o `false` |
| Imatge trencada al modal | Fitxer a `src/images` amb `publicSrc` | Moure a `public/images/...` |
| Error en compilar | Path `image()` incorrecte | Comprovar `/src/images/...` exacte |
| Parada no enllaçada | Falta a la taula de l’itinerari | Afegir fila amb `slug` correcte |
| Codi `I1-P03` vs `I1-P3` | Noms inconsistents | Sempre `I1-P3` (l’script normalitza) |
| Modal que no obre | `dadesIndex` ≠ clau de `dadesModals` | Unificar noms |
| Contingut a `_plantilles/mestre-*` | Lloc de treball equivocat | Treballar a `continguts-en-curs/` |

---

## M. READMEs del projecte

| Fitxer | Contingut |
|--------|-----------|
| `scripts/README-nova-itinerari.md` | Script `nova-itinerari` |
| `scripts/README-nova-parada.md` | Script `nova-parada` |
| `scripts/README-nova-material.md` | Script `nova-material` |
| `_plantilles/README.md` | Plantilles mestres |
| `continguts-en-curs/README.md` | Staging del contingut en curs |

Canvis de disseny, modal nou o mapa SVG a mida → tocar `src/components/` o `src/layouts/` (fora del flux habitual de contingut).

---

## Contacte i suport

**Montserrat Magnet Sabata** — [mariamontserrat.magnet@uvic.cat](mailto:mariamontserrat.magnet@uvic.cat)

**Abast del suport:** només peticions de **professorat universitari** i/o del **servei d’informàtica de la UVic**.
