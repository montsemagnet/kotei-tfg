L’accessibilitat de la plataforma GeoTransectes UVic es va abordar tant com a criteri de disseny com a objecte d’avaluació interna. L’objectiu no era obtenir una certificació formal ni dur a terme una auditoria completa de conformitat, sinó verificar de manera sistemàtica i reproduïble que la interfície web fos usable per un ampli ventall d’usuaris, incloent persones que utilitzen navegació per teclat, lectors de pantalla o configuracions personalitzades de contrast i mida del text. Igualment, es pretenia identificar i documentar les principals limitacions detectades durant el procés d’avaluació.

## Marc de referència

L’avaluació es va orientar als principis establerts per les Web Content Accessibility Guidelines (WCAG) 2.x del World Wide Web Consortium (W3C), basats en els criteris de percebilitat, operabilitat, comprensibilitat i robustesa. Aquests principis es van utilitzar com a marc de referència per prioritzar les incidències detectades i orientar les correccions aplicades. Cal remarcar que l’objectiu del projecte no era assolir una certificació formal de conformitat WCAG AA o AAA, sinó millorar de manera progressiva l’accessibilitat general de la plataforma.

## Abast i selecció de pàgines

Es va definir un mostreig intencional destinat a representar les principals tipologies de pàgines presents a GeoTransectes UVic. Les proves es van realitzar sobre la versió publicada de la plataforma a GitHub Pages, incloent la pàgina inicial, el llistat d’itineraris, l’itinerari Pantà de Sau–Tavertet, una parada representativa (I1-P1), una pàgina de material geològic (I1-P1-M1), el glossari i el visor cartogràfic desenvolupat amb qgis2web.

Atès que el visor cartogràfic presenta un comportament tècnic diferenciat respecte a la resta de la plataforma, es va considerar un cas específic dins de l’avaluació. Les correccions prioritàries es van centrar principalment en les pàgines desenvolupades amb Astro, ja que els errors detectats en aquestes es reproduïen de manera sistemàtica a múltiples seccions del lloc web.

## Instruments d’avaluació

L’avaluació va combinar eines automàtiques i verificacions manuals. Com a eina principal es va utilitzar WAVE (WebAIM), que proporciona informació sobre errors d’accessibilitat, alertes, contrast cromàtic i una puntuació global d’accessibilitat. De manera complementària es va emprar Lighthouse, integrat a Chrome DevTools, per obtenir puntuacions generals d’accessibilitat i identificar criteris susceptibles de millora.

Paral·lelament, es va dur a terme una revisió manual de diversos elements que les eines automàtiques no poden valorar completament, com ara la disponibilitat de l’enllaç «Saltar al contingut», la correcta definició de l’atribut `lang="ca"`, la jerarquia dels encapçalaments, la presència de títols de pàgina diferenciats i la disponibilitat d’alternatives textuals als recursos audiovisuals.

## Procediment d’avaluació

L’avaluació es va desenvolupar en dues fases diferenciades:

- **Fase A (línia base):** registre dels resultats obtinguts mitjançant WAVE i Lighthouse abans de la implementació de les correccions d’accessibilitat.
- **Fase B (reavaluació):** aplicació del mateix protocol un cop incorporades les millores i publicada la nova versió de la plataforma.

Entre les dues fases es van prioritzar les incidències detectades amb major impacte sobre la navegació i la usabilitat general, especialment aquelles presents de manera recurrent a les diferents pàgines desenvolupades amb Astro. També es van introduir millores relacionades amb l’estructura dels encapçalaments, els títols de pàgina, els noms accessibles dels elements interactius i la disponibilitat de continguts textuals associats als recursos audiovisuals. Les modificacions implementades es van gestionar mitjançant control de versions amb Git.

## Criteris d’interpretació i limitacions

Els resultats de Lighthouse i WAVE es van utilitzar com a indicadors orientatius de la qualitat de l’accessibilitat de la plataforma. Cal tenir present que una puntuació elevada no garanteix una accessibilitat completa, de la mateixa manera que la presència d’alertes no implica necessàriament l’existència de barreres crítiques per a l’usuari.

L’avaluació realitzada constitueix una revisió tècnica interna i no substitueix la realització de proves amb usuaris reals ni una auditoria professional de conformitat WCAG. Així mateix, les millores específiques relacionades amb el visor cartogràfic desenvolupat amb qgis2web queden parcialment fora de l’abast d’aquesta fase del projecte.

Els resultats quantitatius de l’avaluació, conjuntament amb les correccions implementades i les evidències recollides durant el procés, es presenten a continuació i es complementen amb la documentació inclosa als annexos.

## Resultats

S’ha avaluat una mostra de set pàgines amb WAVE i Lighthouse Accessibility. Abans de les correccions, les sis pàgines Astro compartien 7 errors WAVE (AIM mitjà 7.8/10). Després d’etiquetar el cercador i els camps de Google Translate i d’evitar l’encapçalament buit del glossari-popover, els errors WAVE passen a 0 i l’AIM mitjà a 9.7/10. Lighthouse es manté entre 94 i 97 (issues de contrast i jerarquia). El mapa interactiu qgis2web (AIM 1.4) no s’ha modificat i s’interpreta com a limitació de l’exportació GIS.

GeoTransectes UVic · WAVE + Lighthouse · 12 agost 2026 · Lloc: [montsemagnet.github.io/kotei-tfg](https://montsemagnet.github.io/kotei-tfg/)

### Lloc Astro (6 pàgines)

Errors WAVE eliminats a totes: *Missing form label* (cerca + Google Translate) i *Empty heading* (popover de definicions).

Lighthouse es manté (94–97): els issues restants són contrast i ordre d’encapçalaments, no els 7 errors WAVE corregits.

### Mapa qgis2web

AIM 1.4 · 161 errors · Lighthouse 87. Exportació QGIS (alts de llegenda, títol buit, formularis del layer switcher).
