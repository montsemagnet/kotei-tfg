## Seguretat

El lloc és una web estàtica. Es genera amb Astro (`output: "static"`) i el resultat del `build` és un conjunt de fitxers HTML, CSS, JavaScript, imatges i vídeos.

En producció no hi ha servidor d’aplicació (Node, PHP, Python, Java…), base de dades, API pròpia, autenticació ni gestió d’usuaris, panell d’administració, recollida de formularis, sistema de pagament, ni fitxers `.env` ni credencials de servei.

Per allotjar-la n’hi ha prou amb un servidor de fitxers estàtics (Apache, nginx, IIS o l’allotjament web institucional) amb HTTPS. No cal instal·lar Node ni cap runtime al servidor de producció.

## Dades personals (RGPD)

El lloc no recull ni tracta dades personals d’usuaris.

- No hi ha registre, inici de sessió ni perfils.
- No hi ha butlletí, comentaris ni àrea privada.
- No s’envien dades a un servidor propi: la cerca del lloc s’executa al navegador (índex empaquetat a la pàgina + Fuse.js).
- No s’utilitza Google Analytics, Matomo ni cap eina de mesura d’audiència.
- Els vídeos de parada es serveixen com a fitxers locals (`/videos/…`), no des de YouTube.

Els únics correus que apareixen a la web són els de l’equip del TFG (crèdits), ja públics en el context acadèmic.

En conclusió, no hi ha tractament de dades d’alumnat, professorat visitant ni públic general. No cal formulari de consentiment de cookies de tracking. Si s’activa la traducció automàtica (apartat Serveis de tercers), Google pot tractar el contingut de la pàgina segons la seva política; l’ús és opcional.

## Emmagatzematge al navegador

| Mecanisme | Finalitat | Dades |
|-----------|-----------|-------|
| `localStorage` (`theme`) | Recordar mode clar/fosc | `"light"` / `"dark"` |
| `localStorage` (mida de text dels modals) | Accessibilitat | valor de mida, sense identificador |
| Galeta `googtrans` | Només si l’usuari tria un idioma al selector | codi d’idioma (p. ex. `/ca/es`) |

Són preferències tècniques al dispositiu de l’usuari. No s’envien al servidor del lloc.

## Serveis de tercers (navegador)

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

## Superfície d’atac

| Risc habitual | Situació en aquest lloc |
|---------------|-------------------------|
| Injecció SQL / XSS de servidor | No aplicable: no hi ha backend ni base de dades. El contingut es genera en temps de compilació. |
| Autenticació / sessions | No n’hi ha. |
| Pujada de fitxers per usuaris | No n’hi ha. |
| Formulari de contacte / spam | No s’envia cap formulari. (La plantilla original incloïa pàgines `signin` / `signup` / `contact` sense `action`; no estan enllaçades al menú ni al mapa del lloc.) |
| Credencials al repositori | No hi ha claus d’API ni fitxers d’entorn de producció. |
| HTTPS | Recomanat i ja usat a l’allotjament actual (GitHub Pages). |

El contingut es publica a partir d’un repositori Git. Els canvis a producció passen per compilació (`npm run build`) i còpia del directori `dist/`.

## Requisits d’allotjament institucional

1. Servir el contingut del directori de build (`dist/`) com a web estàtica.
2. HTTPS (certificat institucional o equivalent).
3. El lloc es pot servir a l’arrel d’un domini o dins d’una carpeta (p. ex. `/geotransectes/` o l’actual `/kotei-tfg/` a GitHub Pages). Aquest prefix s’indica a `astro.config.mjs` (`base`). Si Informàtica canvia la ruta d’allotjament, cal actualitzar el `base`, tornar a generar el lloc (`npm run build`) i publicar el nou directori `dist/`. Si el `base` no coincideix amb l’URL real, els enllaços i els recursos es trenquen.
4. Mida: el lloc inclou mapes interactius, imatges i vídeos; convé preveure desenes de MB (els mapes qgis2web i els vídeos són la part pesada).
5. No cal base de dades, correu de servidor, PHP ni Node en runtime.
6. Actualitzacions: republicar els fitxers estàtics quan hi hagi una nova versió (sense migracions).

Allotjament de desenvolupament actual: GitHub Pages (`https://montsemagnet.github.io/kotei-tfg/`).

---
