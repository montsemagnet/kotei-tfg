## PRIMERA PART: Dirigida al professorat

Per incorporar un nou itinerari (BIOLÒGIC: geològic, botànic, zoològic, ecològic, etc.) cal tenir els continguts estructurats i configurats per tal que informàticament es puguin incorporar fàcilment a la web.

Per veure com és l’estructura d’un itinerari, podeu guiar-vos mirant l’itinerari Sau–Tavertet (estructura de l’itinerari, parades, mapes, finestres emergents…):

[https://montsemagnet.github.io/kotei-tfg/itineraris/sau-tavertet/](https://montsemagnet.github.io/kotei-tfg/itineraris/sau-tavertet/)

## Primer pas: estructurar els continguts

Abans de redactar, es recomana un petit esquema de què ha de contenir cada pàgina.

**Primer, la pàgina general de l’itinerari:**

- Títol i frase curta de presentació
- Foto de l’itinerari o mapa amb les parades
- Llista ordenada de parades (P1, P2… amb el títol de cadascuna)
- Quins apartats voleu en aquesta pàgina: mapa / geologia / paleogeologia / geobotànica… (es poden substituir pel que necessiteu si el contingut no és geològic)
- Dins de les parades pot haver-hi subapartats que s’obriran com a finestres emergents (modals)

**Mapa interactiu de les parades** (com a Sau–Tavertet, on es cliquen P1, P2… i s’obre cada fitxa): si el voleu interactiu (que en clicar cada parada s’obri la pàgina corresponent), cal demanar-ho a informàtica / departament de sistemes. El professorat pot aportar el dibuix, la llista de parades i, si escau, una foto petita de previsualització. L’opció habitual és un mapa en PDF o un mapa elaborat amb QGIS i informàtica el convertirà en interactiu.

**Segon, l’estructura d’una pàgina corresponent a una parada:**

- Quins apartats necessiteu: coordenades, mapa…
- Materials o equivalent: per exemple, si és de zoologia o botànica, en comptes de materials es podria substituir per espècies o qualsevol altra observació que feu a les parades de l’itinerari…

**Tercer, l’estructura de la pàgina d’observacions de cada parada** (a la web de l’itinerari Sau–Tavertet correspondria a la pàgina d’un material):

- Què voleu explicar de cada observació i quins apartats necessiteu.

## Segon pas: preparar el contingut

L’objectiu és tenir els continguts en un format que faciliti la seva inclusió a la pàgina web.

### Textos

- Quan escriviu un text especifiqueu on estarà inclòs dins la web: quina pàgina, quin apartat, subapartat…
- Especifiqueu també si entre el text hi ha alguna figura/imatge inclosa, on s’ha de situar exactament (dins del text), el títol de la figura, el peu de la figura i a quina carpeta heu posat la figura/imatge i amb quin nom la trobaran.
- Especifiqueu si hi ha algun terme que cal incloure en el glossari (si es farà glossari) i la definició.

**Peus de figura**

Per a cada imatge, és molt útil disposar de:

- Títol i descripció
- Crèdit («Elaboració pròpia» o autor/font)
- Lloc i data quan sigui una foto de camp

### Imatges

| Aspecte | Recomanació |
|---------|-------------|
| Formats | JPG per a fotografies i PNG per a esquemes o captures amb text nítid. |
| Resolució orientativa | Entre 1500 i 3000 px pel costat llarg. |
| Pes orientatiu | Idealment menys de 2–3 MB per imatge. |
| Orientació | Girades correctament. |
| Identificació | Cada imatge ha de poder associar-se clarament (número o títol inequívoc). |

## Entregar el contingut

Es recomana posar en una mateixa carpeta el contingut corresponent a cada pàgina. Exemple: carpeta Itinerari, carpeta Parada 1, carpeta Parada 2…, carpeta Observació 1… Comprimiu-ho en un ZIP i copieu-lo a un USB per entregar.

---

## SEGONA PART: Dirigida al departament de sistemes

---

## A. Idea general

El lloc és una web **estàtica** feta amb **Astro 6**: no hi ha CMS ni base de dades. Les pàgines surten de fitxers Markdown + imatges. El disseny (Tailwind, components) ja està fet.

Ho trobareu tot fet en **carpetes i arxius mestres**: només cal fer **còpia** dels mestres (que s’han de **mantenir nets** per a futures incorporacions), canviar el text o les imatges de la còpia i executar l’**script** que ja existeix per incorporar-ho a la web.

Els mestres corresponen a:

- un **itinerari**
- una **parada**
- un **material** o **observació** (a Sau–Tavertet, la pàgina de material petrogràfic correspon a una observació feta en una parada)

### Com funciona la web

No es construeix una pàgina des de zero. El flux habitual és:

1. Rebre el dossier del professorat (ZIP/USB).
2. Copiar la plantilla mestra adequada (`_plantilles/mestre-…` → `continguts-en-curs/…`).
3. Substituir textos i imatges a la còpia.
4. Executar l’script.
5. Comprovar en local i publicar (Git → el sistema de publicació de la UVic).

### Esquema general del contingut

- **Itinerari**
  - **Parada** 1, Parada 2, …
    - **Observació / material** 1, 2, … (espècies, mostres, etc.)

Cada nivell té la seva pàgina a la web. L’itinerari enllaça les parades; cada parada enllaça les seves observacions.

### Apartats especials

A més del contingut «estàndard», un itinerari pot demanar elements que cal tractar a part (més endavant en aquest manual):

| Element | Descripció |
|---------|------------|
| **Mapa QGIS / PDF** | Mapa enllaçat des de l’itinerari o la parada (export qgis2web o PDF). |
| **Mapa SVG de parades** | Mapa clicable a la fitxa de l’itinerari (patró Sau–Tavertet: P1, P2… obren la parada). Requereix programació si ha de ser clicable. |
| **Finestres emergents (modals)** | Textos i figures que s’obren sense sortir de la pàgina (geologia, història, paleogeologia…). Es defineixen al Markdown, no cal programar la interfície. |
| **Glossari** | Llista de termes amb definició (fitxer de dades, no una plantilla d’itinerari). |

---

## B. Programes i primera arrencada

- **Node.js** (amb **npm**): és el motor que permet executar les ordres del projecte (`npm install`, `npm run…`). Sense Node no es pot arrencar la web en local ni executar els scripts d’incorporació de contingut.
- **Visual Studio Code** (o un editor equivalent): serveix per obrir la carpeta del projecte, editar els fitxers Markdown i imatges, i tenir el **terminal** integrat per llançar les ordres.
- **Navegador** (Chrome, Edge, Firefox…): és on es visualitza i es comprova la web un cop arrencada en local.
- **Git** i un servei de versions (**GitHub**, GitLab, etc.): permeten clonar el repositori, guardar els canvis i publicar-los. L’allotjament concret el decideix la universitat.

No cal instal·lar Astro a part: forma part de les dependències d’aquest lloc web (el repositori clonat, p. ex. `kotei-tfg`). Amb `npm install` a l’arrel del projecte ja es descarrega tot el necessari.

**Terminal:** obriu la carpeta on heu clonat el projecte a VS Code → **Terminal → New Terminal**. El camí ha d’acabar a l’**arrel** del projecte (no dins `src` ni `_plantilles`).

```bash
npm install
npm run dev:local
```

**Repositori.** El projecte d’origen d’aquest TFG és a [https://github.com/montsemagnet/kotei-tfg](https://github.com/montsemagnet/kotei-tfg).

---

## C. Plantilles i carpetes de treball

**Primer de tot: cal copiar les plantilles mestres a una nova carpeta.**

Les carpetes `_plantilles/mestre-*` són models nets (itinerari, parada, material/observació…). Si hi escriviu contingut real a dins, es perden com a plantilla per a la propera incorporació. Per això:

1. Es **copia** el mestre cap a `continguts-en-curs/`. Els mestres són a l’arrel del projecte, dins la carpeta `_plantilles/` (per exemple `_plantilles/mestre-itinerari/`, `_plantilles/mestre-parada/`, `_plantilles/mestre-material/`).
2. Es treballa **només** sobre aquesta còpia (textos, imatges, fitxes).
3. Quan estiguin els canvis fets, l’script `implementar` portarà el contingut a les carpetes que la web utilitza (`src/`, `public/…`).

| Element | Plantilla |
|---------|-----------|
| Itinerari | `_plantilles/mestre-itinerari/` |
| Parada | `_plantilles/mestre-parada/` |
| Material / observació | `_plantilles/mestre-material/` |
| Glossari (llista de termes) | `_plantilles/mestre-glossari/` |

Ara cal canviar i posar la nova informació a les plantilles que hem copiat:

### Com fer els canvis a un itinerari

Ordre recomanat: **primer l’itinerari**, després les parades i les observacions.

1. Copieu `_plantilles/mestre-itinerari/` a `continguts-en-curs/<slug>/` (exemple de slug: `collsacabra`).
2. Ompliu, com a mínim:
   - `01-fitxa-itinerari.md` — títol, descripció, apartats de la pàgina
   - `02-llista-parades.md` — parades ordenades (P1, P2…) amb títol
   - `06-galeria/` — fotos + peus (`peus-galeria.txt`)
   - `CHECKLIST.md` — marqueu el que heu fet
3. Opcional: `03-video/`, `04-altimetria/`, `05-mapa-qgis/` (PDF o export qgis2web).
4. Quan el dossier estigui omplert, executeu l’script d’incorporació (apartat *Scripts d’incorporació* més avall).
5. Després caldrà enllaçar cada parada a la taula de l’itinerari (camp `slug`) i, si cal, completar finestres emergents o mapes (apartat *Elements especials*).

Consulteu un exemple publicat **només com a model** (no com a plantilla): `src/content/itineraris/sau-tavertet.md` o `itinerari2.md`.

### Com fer els canvis a una parada

1. Copieu `_plantilles/mestre-parada/` a `continguts-en-curs/<CODI>/` (exemple: `I1-P4`).
2. Ompliu, com a mínim:
   - `01-fitxa-parada.md` — títol, itinerari, coordenades, materials/observacions enllaçats…
   - `04-galeria-aflorament/` — **com a mínim 1 foto** (màxim 8) + peus
   - `CHECKLIST.md`
3. Recomanat: `02-geologia.md` + figures a `05-figures-geologia/`; mapa a `08-mapa-qgis/`.
4. Opcional: `03-geobotanica.md`, `06-figures-geobotanica/`, `07-video/`.
5. Executeu l’script d’incorporació (apartat *Scripts d’incorporació*).
6. **Enllaceu la parada a l’itinerari**: al `.md` de l’itinerari, a la taula de parades, el camp `slug` ha de coincidir amb el codi (`I1-P4`). Si no coincideix, la fila es veu però l’enllaç no funciona.

Exemple de consulta: `src/content/parades/I1-P1.md`.

### Com fer els canvis a una observació / material

Correspond a la pàgina de detall d’una observació feta a una parada (a Sau–Tavertet: material petrogràfic).

1. Copieu `_plantilles/mestre-material/` a `continguts-en-curs/<CODI-Mm>/` (exemple: `I1-P4-M1`).
2. Ompliu:
   - `01-fitxa-material.md` — títol, parada, ordre, dades
   - `02-observacions.md` — text de la pàgina
   - Imatges: `03-optica/`, `04-electronica/`, `05-espectres/` (petrografia) o `06-altres/` si és un altre tipus d’observació (espècies, etc.)
   - `CHECKLIST.md`
3. Executeu l’script d’incorporació (apartat *Scripts d’incorporació*).
4. **Enllaceu-lo des de la parada** (camp `materials` del `.md` de la parada, amb `enllaç: "/roques/I1-P4-M1"`).

Exemple de consulta: `src/content/roques/I1-P1-M1.md`.

> L’esquema actual està pensat sobretot per a petrografia; altres observacions poden requerir adaptar camps.

### On van les imatges (important)

Hi ha **dues vies**; no són intercanviables. Cal triar la carpeta segons **com** s’usa la imatge a la web:

**1. Via `src/images/`** — imatges de la pàgina «principal» (galeria, miniatura, fotos de l’aflorament, làmines òptiques, etc.). Astro les processa (redimensiona, optimitza). Al Markdown es posen amb `url: "/src/images/..."`.

Exemples típics:
- miniatures i galeria de l’**itinerari**
- galeria d’aflorament de la **parada**
- imatges d’**òptica / electrònica / espectres** (o `06-altres/`) del **material / observació**
- figures de **geobotànica** a la parada (si van amb `image()` / `url`)

**2. Via `public/images/` (i `public/videos/`, `public/mapa-…/`)** — fitxers que es serveixen «tal qual», sense el processament d’Astro. Al Markdown es posen amb `publicSrc: "/images/..."` o `mapaUrl`.

Exemples típics:
- figures dins de **finestres emergents** (geologia, història, paleogeologia…)
- **PDF** o carpeta **qgis2web** del mapa
- **vídeos** (`public/videos/...`)
- fotos de **hover** del mapa SVG (si n’hi ha)

| Ús | Carpeta | Al Markdown |
|----|---------|-------------|
| Galeria / miniatura / fotos de pàgina | `src/images/...` | `url: "/src/images/..."` |
| Figures de finestres emergents, PDF, mapes | `public/images/...` (o `public/mapa-…/`) | `publicSrc: "/images/..."` o `mapaUrl` |
| Vídeos | `public/videos/...` | `publicSrc: "/videos/..."` |

Si confoneu les vies: una galeria amb path incorrecte a `src/images` pot **fer fallar la compilació**; una figura de modal a `src/images` però enllaçada amb `publicSrc` **no es veurà**.

Cada imatge ha de tenir un text `alt` descriptiu. Als paths del Markdown **no** cal escriure el prefix `/kotei-tfg/`: la web en producció ja afegeix la base del lloc automàticament. Escriviu rutes com `/images/parades/I1-P4/geologia/figura-01.jpg` o `/src/images/parades/I1-P4/foto.jpg`, no `/kotei-tfg/images/...`. Si hi poseu el prefix a mà, els enllaços poden duplicar-se i trencar-se.

### Scripts d’incorporació

Quan la carpeta a `continguts-en-curs/` estigui omplerta, executeu des de l’**arrel** del projecte:

| Element | Preparar (crea la còpia del mestre) | Implementar (passa a la web) | Documentació |
|---------|--------------------------------------|------------------------------|--------------|
| Itinerari | `npm run nova-itinerari -- preparar <slug>` | `npm run nova-itinerari -- implementar <slug>` | `scripts/README-nova-itinerari.md` |
| Parada | `npm run nova-parada -- preparar <CODI>` | `npm run nova-parada -- implementar <CODI>` | `scripts/README-nova-parada.md` |
| Material / observació | `npm run nova-material -- preparar <CODI-Mm>` | `npm run nova-material -- implementar <CODI-Mm>` | `scripts/README-nova-material.md` |

Després d’`implementar`: reviseu el `.md` generat, feu els enllaços (parada ↔ itinerari, material ↔ parada) i comproveu amb `npm run dev:local`.

### Elements especials

Aquests elements no sempre entren al flux «copiar mestre → omplir → script». Es completen o es demanen a part.

#### Glossari

1. Recolliu termes i definicions (plantilla `_plantilles/mestre-glossari/`).
2. Afegiu-los a `src/data/termes.ts` (no hi ha script d’incorporació).
3. Comproveu el glossari / popovers amb `npm run dev:local`.

#### Finestres emergents (modals)

Es defineixen al **frontmatter** del Markdown (bloc entre `---` al començament del fitxer). No cal programar la interfície.

- **Parada (geologia):** bloc `geologia` a `src/content/parades/<CODI>.md`; figures a `public/images/parades/<CODI>/geologia/`.
- **Itinerari:** blocs `dades` + `dadesModals` (i opcionalment `dadesIndex`) a `src/content/itineraris/<slug>.md`.

Model: copieu l’estructura d’un exemple (`I1-P1.md` o un bloc senzill de `sau-tavertet.md`).

#### Mapes

- **PDF o mapa petit (poques capes / pocs MB):** copieu l’export a `public/mapa-<nom>/` o el PDF a `public/images/…` i poseu `mapaUrl` al `.md` de l’itinerari o la parada. Els mapes de parada tipics (p. ex. `mapa-parada-1`) poden quedar a `public/` sense problema.
- **Mapes molt grans (export qgis2web amb moltes capes, desenes de MB — com el mapa Sau–Tavertet):** **no deixeu la còpia sencera a `public/` mentre treballeu en local**. Astro/Vite indexa `public/` i el servidor de desenvolupament pot penjar-se o consumir molta RAM.

  **Què cal fer en local:**
  1. Poseu el mapa sencer fora de `public/`, a una carpeta a l’arrel del projecte (exemple d’aquest TFG: `mapa-web-sau-tavertet/`).
  2. A `public/mapa-<nom>/` deixeu només un **placeholder** lleuger (`index.html` que redirigeix al port del mapa).
  3. Serviu el mapa amb un servidor a part i engegueu la web amb `npm run dev:local` (Astro al port `4321` + mapa al `8767`), o bé `npm run mapa:park` per deixar el stub a `public/` i el mapa a la carpeta externa.
  4. Abans de **publicar** (commit / build / GitHub Pages): torneu el mapa sencer a `public/mapa-<nom>/` amb `npm run mapa:restore`.

- **Mapa SVG clicable de parades** (patró Sau–Tavertet): **requereix programació** si ha de ser clicable (SVG + dades a `src/data/sau-tavertet-parades.ts` + component). Sense això, utilitzeu PDF o qgis2web amb `mapaUrl`.

---

## D. Comprovar i publicar

```bash
npm run dev:local          # revisar abans de pujar
git status
git add …                  # només contingut/assets necessaris
git commit -m "Afegeix la parada I1-P4"
git push origin main
```

El desplegament (GitHub Pages o el sistema que adopteu a la UVic) publica el lloc a l’URL del repositori institucional. L’exemple d’aquest TFG és `https://montsemagnet.github.io/kotei-tfg/`.
Si la build falla: path d’imatge, camp obligatori de l’esquema, o `fotos` fora del rang 1–8.

---

## E. Errors freqüents

| Problema | Causa habitual | Solució |
|----------|----------------|---------|
| No existeix la pàgina de l’itinerari | `enConstruccio: true` | Posar `false` quan estigui llest |
| No surt al llistat | `draft: true` | Traure’l o `false` |
| Imatge trencada al modal | Fitxer a `src/images` amb `publicSrc` | Moure a `public/images/...` |
| Error en compilar | Path d’imatge incorrecte | Comprovar `/src/images/...` exacte |
| Parada no enllaçada | Falta a la taula de l’itinerari | Afegir fila amb `slug` correcte |
| Codi `I1-P03` vs `I1-P3` | Noms inconsistents | Sempre `I1-P3` (l’script normalitza) |
| Modal que no obre | Claus de `dadesIndex` / `dadesModals` diferents | Unificar noms |
| Contingut a `_plantilles/mestre-*` | Lloc de treball equivocat | Treballar a `continguts-en-curs/` |

---

## F. READMEs del projecte

Tots aquests fitxers són a l’arrel del repositori clonat, dins les carpetes indicades:

| Carpeta | Fitxer | Contingut |
|---------|--------|-----------|
| `scripts/` | `README-nova-itinerari.md` | Script `nova-itinerari` |
| `scripts/` | `README-nova-parada.md` | Script `nova-parada` |
| `scripts/` | `README-nova-material.md` | Script `nova-material` |
| `_plantilles/` | `README.md` | Plantilles mestres |
| `continguts-en-curs/` | `README.md` | Contingut en curs |

---

## G. Seguretat i protecció de dades (RGPD)

### Seguretat

El lloc és una web estàtica. Es genera amb Astro (`output: "static"`) i el resultat del `build` és un conjunt de fitxers HTML, CSS, JavaScript, imatges i vídeos.

En producció no hi ha servidor d’aplicació (Node, PHP, Python, Java…), base de dades, API pròpia, autenticació ni gestió d’usuaris, panell d’administració, recollida de formularis, sistema de pagament, ni fitxers `.env` ni credencials de servei.

Per allotjar-la n’hi ha prou amb un servidor de fitxers estàtics (Apache, nginx, IIS o l’allotjament web institucional) amb HTTPS. No cal instal·lar Node ni cap runtime al servidor de producció.

### Dades personals (RGPD)

El lloc no recull ni tracta dades personals d’usuaris.

- No hi ha registre, inici de sessió ni perfils.
- No hi ha butlletí, comentaris ni àrea privada.
- No s’envien dades a un servidor propi: la cerca del lloc s’executa al navegador (índex empaquetat a la pàgina + Fuse.js).
- No s’utilitza Google Analytics, Matomo ni cap eina de mesura d’audiència.
- Els vídeos de parada es serveixen com a fitxers locals (`/videos/…`), no des de YouTube.

Els únics correus que apareixen a la web són els de l’equip del TFG (crèdits), ja públics en el context acadèmic.

En conclusió, no hi ha tractament de dades d’alumnat, professorat visitant ni públic general. No cal formulari de consentiment de cookies de tracking. Si s’activa la traducció automàtica (apartat Serveis de tercers), Google pot tractar el contingut de la pàgina segons la seva política; l’ús és opcional.

### Emmagatzematge al navegador

| Mecanisme | Finalitat | Dades |
|-----------|-----------|-------|
| `localStorage` (`theme`) | Recordar mode clar/fosc | `"light"` / `"dark"` |
| `localStorage` (mida de text dels modals) | Accessibilitat | valor de mida, sense identificador |
| Galeta `googtrans` | Només si l’usuari tria un idioma al selector | codi d’idioma (p. ex. `/ca/es`) |

Són preferències tècniques al dispositiu de l’usuari. No s’envien al servidor del lloc.

### Serveis de tercers (navegador)

El lloc no crida APIs pròpies. El navegador sí que pot contactar aquests serveis:

| Servei | Ús | Quan |
|--------|----|------|
| Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) | Tipografies Geist | A totes les pàgines |
| jsDelivr (`cdn.jsdelivr.net`) | Biblioteca Fuse.js (cerca) | A totes les pàgines |
| unpkg | Biblioteca AOS (animacions d’entrada) | A totes les pàgines |
| Google Translate (`translate.google.com`) | Traducció automàtica CA → ES / FR / EN | Només si l’usuari tria un idioma que no és el català |

Els mapes interactius (exportació QGIS / OpenLayers) es serveixen des del mateix lloc. El cercador d’adreces de qgis2web (Photon) pot consultar un servei extern de geocodificació només si l’usuari fa una cerca d’adreça al mapa.

Enllaços sortints (UVic, crèdits, fonts) s’obren en pestanya nova (`rel="noopener noreferrer"`).

Si Informàtica aplica una Content-Security-Policy estricta, caldrà permetre aquests orígens o, alternativament, autoservir fonts i biblioteques des del mateix domini.

### Superfície d’atac

| Risc habitual | Situació en aquest lloc |
|---------------|-------------------------|
| Injecció SQL / XSS de servidor | No aplicable: no hi ha backend ni base de dades. El contingut es genera en temps de compilació. |
| Autenticació / sessions | No n’hi ha. |
| Pujada de fitxers per usuaris | No n’hi ha. |
| Formulari de contacte / spam | No s’envia cap formulari. (La plantilla original incloïa pàgines `signin` / `signup` / `contact` sense `action`; no estan enllaçades al menú ni al mapa del lloc.) |
| Credencials al repositori | No hi ha claus d’API ni fitxers d’entorn de producció. |
| HTTPS | Recomanat i ja usat a l’allotjament actual (GitHub Pages). |

El contingut es publica a partir d’un repositori Git. Els canvis a producció passen per compilació (`npm run build`) i còpia del directori `dist/`.

### Requisits d’allotjament institucional

1. Servir el contingut del directori de build (`dist/`) com a web estàtica.
2. HTTPS (certificat institucional o equivalent).
3. El lloc es pot servir a l’arrel d’un domini o dins d’una carpeta (p. ex. `/geotransectes/` o l’actual `/kotei-tfg/` a GitHub Pages). Aquest prefix s’indica a `astro.config.mjs` (`base`). Si Informàtica canvia la ruta d’allotjament, cal actualitzar el `base`, tornar a generar el lloc (`npm run build`) i publicar el nou directori `dist/`. Si el `base` no coincideix amb l’URL real, els enllaços i els recursos es trenquen.
4. Mida: el lloc inclou mapes interactius, imatges i vídeos; convé preveure desenes de MB (els mapes qgis2web i els vídeos són la part pesada).
5. No cal base de dades, correu de servidor, PHP ni Node en runtime.
6. Actualitzacions: republicar els fitxers estàtics quan hi hagi una nova versió (sense migracions).

Allotjament de desenvolupament actual: GitHub Pages (`https://montsemagnet.github.io/kotei-tfg/`).

---

## Contacte i suport

**Montserrat Magnet Sabata** — [mariamontserrat.magnet@uvic.cat](mailto:mariamontserrat.magnet@uvic.cat)

**Abast del suport:** només peticions de professorat universitari i/o del servei d’informàtica de la UVic.
