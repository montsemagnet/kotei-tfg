# Resum de seguretat i privadesa — GeoTransectes UVic

La versió publicada a la web és l’apartat G. Seguretat i protecció de dades (RGPD) del [manual d’incorporació](https://montsemagnet.github.io/kotei-tfg/manual/). Font editable: `src/pages/manual/_content.md`.

Document orientat al Servei d’Informàtica de la Universitat de Vic – Universitat Central de Catalunya (UVic-UCC), per a l’avaluació d’allotjament del lloc web del TFG.

| Camp | Valor |
|---|---|
| Nom del lloc | GeoTransectes UVic |
| Naturalesa | Lloc web docent de consulta (itineraris de camp de geologia i geobotànica) |
| Titular / autora | Montserrat Magnet Sabata (`mariamontserrat.magnet@uvic.cat`) |
| Centre | Facultat de Ciències, Tecnologia i Enginyeries (FCTE) |
| Direcció del TFG | Dra. Núria Ferrer Ramos, Dra. Judit Molera Marimon |
| Data | Agost 2026 |

---

## 1. Què és tècnicament

El lloc és una web estàtica. Es genera amb Astro (`output: "static"`) i el resultat del `build` és un conjunt de fitxers HTML, CSS, JavaScript, imatges i vídeos.

En producció no hi ha:

- servidor d’aplicació (Node, PHP, Python, Java…)
- base de dades
- API pròpia
- autenticació ni gestió d’usuaris
- panell d’administració
- recollida de formularis
- sistema de pagament
- fitxers `.env` ni credencials de servei

Per allotjar-la n’hi ha prou amb un servidor de fitxers estàtics (Apache, nginx, IIS, o l’allotjament web institucional) amb HTTPS. No cal instal·lar Node ni cap runtime al servidor de producció.

---

## 2. Dades personals (RGPD)

El lloc no recull ni tracta dades personals d’usuaris.

- No hi ha registre, inici de sessió ni perfils.
- No hi ha butlletí, comentaris ni àrea privada.
- No s’envien dades a un servidor propi: la cerca del lloc s’executa al navegador (índex empaquetat a la pàgina + Fuse.js).
- No s’utilitza Google Analytics, Matomo ni cap eina de mesura d’audiència.
- Els vídeos de parada es serveixen com a fitxers locals (`/videos/…`), no des de YouTube.

Els únics correus que apareixen a la web són els de l’equip del TFG (crèdits), ja públics en el context acadèmic.

En conclusió, no hi ha tractament de dades d’alumnat, professorat visitant ni públic general. No cal formulari de consentiment de cookies de tracking. Si s’activa la traducció automàtica (apartat 4), Google pot tractar el contingut de la pàgina segons la seva política; l’ús és opcional.

---

## 3. Emmagatzematge al navegador

| Mecanisme | Finalitat | Dades |
|---|---|---|
| `localStorage` (`theme`) | Recordar mode clar/fosc | `"light"` / `"dark"` |
| `localStorage` (mida de text dels modals) | Accessibilitat | valor de mida, sense identificador |
| Galeta `googtrans` | Només si l’usuari tria un idioma al selector | codi d’idioma (p. ex. `/ca/es`) |

Són preferències tècniques al dispositiu de l’usuari. No s’envien al servidor del lloc.

---

## 4. Serveis de tercers (navegador)

El lloc no crida APIs pròpies. El navegador sí que pot contactar aquests serveis, ja inclosos a la plantilla o a la traducció:

| Servei | Ús | Quan |
|---|---|---|
| Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) | Tipografies Geist | A totes les pàgines |
| jsDelivr (`cdn.jsdelivr.net`) | Biblioteca Fuse.js (cerca) | A totes les pàgines |
| unpkg | Biblioteca AOS (animacions d’entrada) | A totes les pàgines |
| Google Translate (`translate.google.com`) | Traducció automàtica CA → ES / FR / EN | Només si l’usuari tria un idioma que no és el català |

Els mapes interactius (exportació QGIS / OpenLayers) es serveixen des del mateix lloc. El cercador d’adreces de qgis2web (Photon) pot consultar un servei extern de geocodificació només si l’usuari fa una cerca d’adreça al mapa.

Enllaços sortints (UVic, crèdits, fonts) s’obren en pestanya nova (`rel="noopener noreferrer"`).

Si Informàtica aplica una Content-Security-Policy estricta, caldrà permetre aquests orígens o, alternativament, autoservir fonts i biblioteques des del mateix domini.

---

## 5. Superfície d’atac i mesures

| Risc habitual | Situació en aquest lloc |
|---|---|
| Injecció SQL / XSS de servidor | No aplicable: no hi ha backend ni base de dades. El contingut es genera en temps de compilació. |
| Autenticació / sessions | No n’hi ha. |
| Pujada de fitxers per usuaris | No n’hi ha. |
| Formulari de contacte / spam | No s’envia cap formulari. (La plantilla original incloïa pàgines `signin` / `signup` / `contact` sense `action`; no estan enllaçades al menú ni al mapa del lloc.) |
| Secrets al repositori | No hi ha claus d’API ni fitxers d’entorn de producció. |
| HTTPS | Recomanat i ja usat a l’allotjament actual (GitHub Pages). |

El contingut es publica a partir d’un repositori Git. Els canvis a producció passen per compilació (`npm run build`) i còpia del directori `dist/`.

---

## 6. Requisits d’allotjament institucional

1. Servir el contingut del directori de build (`dist/`) com a web estàtica.
2. HTTPS (certificat institucional o equivalent).
3. Si el lloc no està a l’arrel del domini (p. ex. `/geotransectes/`), cal respectar el `base` d’Astro (ara `/kotei-tfg/` a GitHub Pages; es pot ajustar).
4. Mida: el lloc inclou mapes interactius, imatges i vídeos; convé preveure desenes de MB (els mapes qgis2web i els vídeos són la part pesada).
5. No cal base de dades, correu de servidor, PHP ni Node en runtime.
6. Actualitzacions: republicar els fitxers estàtics quan hi hagi una nova versió (sense migracions).

Allotjament de desenvolupament actual: GitHub Pages (`https://montsemagnet.github.io/kotei-tfg/`). És un lloc públic de consulta, no un entorn amb dades internes de la universitat.

---

## 7. Contacte tècnic

Per a dubtes d’allotjament o d’aquest resum:

- Autora: Montserrat Magnet Sabata — `mariamontserrat.magnet@uvic.cat`
- Facultat: `secretaria.fcte@uvic.cat`
