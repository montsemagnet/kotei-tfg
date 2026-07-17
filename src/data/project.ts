export const project = {
  title: "GeoTransectes UVic",
  subtitle:
    "Plataforma docent que explora itineraris geològics, parades de camp, cartografia i materials petrogràfics aplicats al Grau de Biologia",
  institution:
    "Universitat de Vic – Universitat Central de Catalunya (UVic-UCC)",
  faculty: "Facultat de Ciències, Tecnologia i Enginyeries (FCTE)",
  facultyContact: "secretaria.fcte@uvic.cat",
  publicationYear: 2026,
};

export type TeamMember = {
  name: string;
  email: string;
  profileUrl?: string;
  roles: string[];
  bio?: string;
  qualifications?: string[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Dra. Núria Ferrer Ramos",
    email: "nuria.ferrer.ramos@uvic.cat",
    profileUrl: "https://mon.uvic.cat/fcte/nuria-ferrer-ramos/",
    roles: ["Directora del TFG"],
    qualifications: [
      "Llicenciatura en Ciències Ambientals (UAB)",
      "Postgrau i Màster en Hidrogeologia (CIHS-UPC)",
      "Doctorat en Enginyeria del Terreny de la UPC",
    ],
  },
  {
    name: "Montserrat Magnet Sabata",
    email: "mariamontserrat.magnet@uvic.cat",
    roles: ["Autora del TFG"],
    qualifications: [
      "Enginyeria Tècnica en Informàtica de Sistemes (UOC)",
      "Graduada en Multimèdia (UOC)",
      "Màster Universitari en Seguretat de les Tecnologies de la Informació i de les Comunicacions (UOC, UAB, URV)",
      "Estudiant del Grau en Biologia (UVic)",
    ],
  },
  {
    name: "Dra. Judit Molera Marimon",
    email: "judit.molera@uvic.cat",
    profileUrl: "https://mon.uvic.cat/fcte/judit-molera-marimon/",
    roles: ["Directora del TFG"],
    qualifications: [
      "Doctora en Geologia, especialitat en Cristal·lografia i Mineralogia",
    ],
  },
];

/** Order in the group photo: left → right */
export const teamPhotoOrder = [
  "Dra. Núria Ferrer Ramos",
  "Montserrat Magnet Sabata",
  "Dra. Judit Molera Marimon",
];

export type ThirdPartyResource = {
  name: string;
  use: string;
  url: string;
  category: "plantilla" | "programari" | "tipografia" | "icones" | "serveis";
};

export const thirdPartyResourceGroups: {
  id: ThirdPartyResource["category"];
  title: string;
}[] = [
  { id: "plantilla", title: "Plantilla web" },
  { id: "programari", title: "Programari" },
  { id: "tipografia", title: "Tipografies" },
  { id: "icones", title: "Icones" },
  { id: "serveis", title: "Serveis en línia" },
];

export const thirdPartyResources: ThirdPartyResource[] = [
  {
    name: "Kotei (Lexington Themes)",
    use: "Plantilla web del lloc",
    url: "https://lexingtonthemes.com/templates/kotei",
    category: "plantilla",
  },
  {
    name: "Google Earth Pro (Google Maps / Google Earth)",
    use: "Mapes i animacions de recorregut aeri",
    url: "https://www.google.com/earth/about/versions/",
    category: "programari",
  },
  {
    name: "Geist / Geist Mono",
    use: "Tipografies del lloc",
    url: "https://vercel.com/font",
    category: "tipografia",
  },
  {
    name: "Phosphor Icons",
    use: "Icones de la interfície (llicència MIT)",
    url: "https://phosphoricons.com/",
    category: "icones",
  },
  {
    name: "ezGIF Animated GIF Maker",
    use: "Creació d'animacions GIF de la interfície",
    url: "https://ezgif.com/maker",
    category: "serveis",
  },
  {
    name: "Google Translate",
    use: "Traducció automàtica del lloc (opcional)",
    url: "https://translate.google.com",
    category: "serveis",
  },
];

export type PaleogeologiaVideoCredit = {
  label: string;
  use: string;
  license?: string;
  url?: string;
  apaCitation: string;
  category: "programari" | "dades" | "musica";
};

export const paleogeologiaVideoCreditGroups: {
  id: PaleogeologiaVideoCredit["category"];
  title: string;
}[] = [
  { id: "programari", title: "Programari" },
  { id: "dades", title: "Bases de dades, mapes i imatges" },
  { id: "musica", title: "Música" },
];

/** Fonts i llicències dels vídeos de paleogeologia (itinerari Sau–Tavertet) */
export const paleogeologiaVideoCredits: PaleogeologiaVideoCredit[] = [
  {
    label: "GPlates",
    use: "Reconstruccions i visualitzacions de tectònica de plaques (vídeos 1–2 de paleogeologia)",
    license: "GNU General Public License, versió 2",
    url: "https://www.gplates.org",
    category: "programari",
    apaCitation:
      "The University of Sydney, California Institute of Technology, & The Geological Survey of Norway. (2024). GPlates (Version 2.5.0) [Computer software]. https://www.gplates.org",
  },
  {
    label: "Adobe Premiere Pro",
    use: "Postproducció i muntatge dels vídeos",
    url: "https://www.adobe.com/products/premiere.html",
    category: "programari",
    apaCitation:
      "Adobe Inc. (2023). Adobe Premiere Pro (Version 23.1.0) [Computer software]. https://www.adobe.com/products/premiere.html",
  },
  {
    label: "Adobe Photoshop CS6",
    use: "Edició i tractament d'imatges",
    url: "https://www.adobe.com/products/photoshop.html",
    category: "programari",
    apaCitation:
      "Adobe Inc. (2012). Adobe Photoshop CS6 [Computer software]. https://www.adobe.com/products/photoshop.html",
  },
  {
    label: "Inkscape",
    use: "Edició vectorial d'elements gràfics",
    license: "GNU General Public License",
    url: "https://inkscape.org",
    category: "programari",
    apaCitation:
      "Inkscape Project. (2025). Inkscape (Version 1.4.2) [Computer software]. https://inkscape.org",
  },
  {
    label: "PALEOMAP PaleoDEMs (Scotese & Wright, 2018)",
    use: "Dades paleotopogràfiques i paleobatimètriques per als mapes (EarthByte Group)",
    license: "Creative Commons Attribution 3.0 Unported (CC BY 3.0)",
    url: "https://www.earthbyte.org/paleodem-resource-scotese-and-wright-2018/",
    category: "dades",
    apaCitation:
      "Scotese, C. R., & Wright, N. M. (2018). PALEOMAP Paleodigital Elevation Models (PaleoDEMS) for the Phanerozoic [Data set]. Zenodo. https://doi.org/10.5281/zenodo.5460860",
  },
  {
    label:
      "Evolució paleogeogràfica dels dominis alpins (Martín-Algarra, O'Dogherty & Vera, 2011)",
    use: "Mapes adaptats per al vídeo 3; basats en figurs de Ziegler (1999)",
    url: "https://edea.juntadeandalucia.es/bancorecursos/file/c8517c08-56f5-4f04-953d-3e4c44945e21/1/es-an_2019062512_9093545.zip/22_el_dominio_alpino_i_sistemas_pirenaico_vascocantbrico_e_ibrico.html",
    category: "dades",
    apaCitation:
      "Martín-Algarra, A., O'Dogherty, L., & Vera, J. A. (2011). Evolución paleogeográfica de los dominios alpinos de la península durante el Mesozoico y Cenozoico [Map figures]. In Consejería de Medio Ambiente, Junta de Andalucía, Contextualización geológica de Andalucía: Una aproximación a la geodiversidad andaluza. https://www.juntadeandalucia.es/medioambiente/portal/documents/20151/37357686/Contextualizacion_geologica_andalucia.pdf/996ccf4e-a5cb-e2a8-71e5-98f7f8b540f0",
  },
  {
    label: "Corporate Harmonics (The Creators)",
    use: "Música de fons",
    license: "Royalty-free (Motion Array)",
    url: "https://motionarray.com/royalty-free-music/corporate-harmonics/",
    category: "musica",
    apaCitation:
      "The Creators. (n.d.). Corporate Harmonics [Audio recording]. Motion Array. https://motionarray.com/royalty-free-music/corporate-harmonics/",
  },
  {
    label: "Corporate Timeline (The Creators)",
    use: "Música de fons",
    license: "Royalty-free (Motion Array)",
    url: "https://motionarray.com/royalty-free-music/corporate-timeline/",
    category: "musica",
    apaCitation:
      "The Creators. (n.d.). Corporate Timeline [Audio recording]. Motion Array. https://motionarray.com/royalty-free-music/corporate-timeline/",
  },
  {
    label: "Glory And Success (Michael-K)",
    use: "Música de fons",
    license: "Royalty-free (Motion Array)",
    url: "https://motionarray.com/royalty-free-music/glory-and-success-777955/",
    category: "musica",
    apaCitation:
      "Michael-K. (n.d.). Glory And Success [Audio recording]. Motion Array. https://motionarray.com/royalty-free-music/glory-and-success-777955/",
  },
  {
    label: "Race With Life (woodbrosound)",
    use: "Música de fons",
    license: "Royalty-free (Motion Array)",
    url: "https://motionarray.com/royalty-free-music/race-with-life-356806/",
    category: "musica",
    apaCitation:
      "woodbrosound. (n.d.). Race With Life [Audio recording]. Motion Array. https://motionarray.com/royalty-free-music/race-with-life-356806/",
  },
];

export type GeologiaItinerariCredit = {
  label: string;
  use: string;
  url?: string;
  license?: string;
  licenseUrl?: string;
  apaCitation: string;
};

/** Fonts bibliogràfiques d'imatges i mapes de l'apartat Geologia (itinerari Sau–Tavertet) */
export const geologiaItinerariCredits: GeologiaItinerariCredit[] = [
  {
    label: "Bolós et al. (2015) — Sistema de rift europeu neògen–quaternari (Fig. 21)",
    use: "Mapa del sistema de rift europeu neògen–quaternari (modal de tectònica i estructures, apartat «Procés formador: herència del Rift Europeu»), adaptat de la Fig. 21 via el recurs de Geologia ibèrica de la UNED (Surco de València).",
    url: "https://www.intecca.uned.es/difusiongiccu/grado/curso_geologia/paginas_contenidos/geologia_iberica/abreventanas/Surco_Valencia.html",
    apaCitation:
      "Bolós, X., et al. (2015). Sistema de rift europeo neógeno-cuaternario [Map]. Reproduced in Geología Ibérica, UNED. https://www.intecca.uned.es/difusiongiccu/grado/curso_geologia/paginas_contenidos/geologia_iberica/abreventanas/Surco_Valencia.html",
  },
  {
    label: "Cruset et al. (2026) — Fig. 4 (falles, volcanisme i sismicitat)",
    use: "Mapa del nord-est de Catalunya amb el sistema de falles de les Serralades Transversals, la distribució del volcanisme i la sismicitat cenozoica, adaptat de la Fig. 4 per al modal de tectònica i estructures de l'itinerari Sau–Tavertet, amb ressaltat de les falles d'Amer, Sant Joan de Fàbregues i Tavertet. Dades de sismicitat: Geoíndex-Sismologia, Institut Cartogràfic i Geològic de Catalunya (ICGC).",
    url: "https://doi.org/10.1016/j.earscirev.2025.105342",
    apaCitation:
      "Cruset, D., Vergés, J., Viaplana-Muzas, M., Bolós, X., Geyer, A., Díaz, J., Najafi, M., Moragas, M., Millonig, L. J., Gerdes, A., Bravo-Gutiérrez, E., Torné, M., Jiménez-Munt, I., & García-Castellanos, D. (2026). Tectonic controls on volcanism in transfer fault zones: Insights from the Catalan Volcanic Zone (Northeastern Iberia). Earth-Science Reviews, 272, Article 105342. https://doi.org/10.1016/j.earscirev.2025.105342",
  },
  {
    label: "Cruset et al. (2026) — Fig. 5C (Zona de Falla de Tavertet)",
    use: "Imatge de camp dels cingles de Tavertet, adaptada de la Fig. 5C («Tavertet Fault Zone») per al modal d'estratigrafia i litologia de l'itinerari Sau–Tavertet.",
    url: "https://doi.org/10.1016/j.earscirev.2025.105342",
    apaCitation:
      "Cruset, D., Vergés, J., Viaplana-Muzas, M., Bolós, X., Geyer, A., Díaz, J., Najafi, M., Moragas, M., Millonig, L. J., Gerdes, A., Bravo-Gutiérrez, E., Torné, M., Jiménez-Munt, I., & García-Castellanos, D. (2026). Tectonic controls on volcanism in transfer fault zones: Insights from the Catalan Volcanic Zone (Northeastern Iberia). Earth-Science Reviews, 272, Article 105342. https://doi.org/10.1016/j.earscirev.2025.105342",
  },
  {
    label: "Fotografia del Turó del Castell (parades P11–P12, elaboració pròpia)",
    use: "Fotografia de camp del Turó del Castell amb margues grises i gresos del Castell (modal d'estratigrafia i litologia), realitzada per Montserrat Magnet Sabata a l'itinerari Presa de Sau–Tavertet el 9 de juny de 2026.",
    apaCitation:
      "Magnet Sabata, M. (2026). Turó del Castell, itinerari Sau–Tavertet [Photograph]. Elaboració pròpia.",
  },
  {
    label: "Fotografia de gresos vermells i grisos (parada P7, elaboració pròpia)",
    use: "Fotografia de camp de l'aflorament de gresos vermells i grisos de la Formació Tavertet (modal d'estratigrafia i litologia), realitzada per Montserrat Magnet Sabata a l'itinerari Presa de Sau–Tavertet el 9 de juny de 2026.",
    apaCitation:
      "Magnet Sabata, M. (2026). Aflorament de gresos vermells i grisos de la Formació Tavertet [Photograph]. Elaboració pròpia.",
  },
  {
    label: "Fotografia de calcàries nummulítiques a Tavertet (elaboració pròpia)",
    use: "Fotografia de camp d'un aflorament de calcària nummulítica amb nummulits (modal d'estratigrafia i litologia, parada P9), realitzada per Montserrat Magnet Sabata a l'itinerari Presa de Sau–Tavertet el 9 de juny de 2026.",
    apaCitation:
      "Magnet Sabata, M. (2026). Aflorament de calcària nummulítica a Tavertet [Photograph]. Elaboració pròpia.",
  },
  {
    label: "Fotografia del sòcol a la presa de Sau (elaboració pròpia)",
    use: "Fotografia de camp de l'aflorament de granitoides hercinians del sòcol paleozoic a la presa de Sau (modals de marc geològic regional i d'estratigrafia i litologia, parada P1), realitzada per Montserrat Magnet Sabata el 3 de juny de 2026.",
    apaCitation:
      "Magnet Sabata, M. (2026). Aflorament del sòcol paleozoic a la presa de Sau [Photograph]. Elaboració pròpia.",
  },
  {
    label: "Esquema de les dues «històries» geològiques (elaboració pròpia)",
    use: "Diagrama simplificat del sòcol paleozoic i la cobertura eocena en discordança (modal de marc geològic regional, apartat «Les dues històries que conté el camí»), elaborat per Montserrat Magnet Sabata.",
    apaCitation:
      "Magnet Sabata, M. (2026). Esquema del sòcol paleozoic i la cobertura eocena del Collsacabra–Tavertet [Diagram]. Elaboració pròpia.",
  },
  {
    label: "Generalitat de Catalunya — Geozona 216: Cingles de Tavertet- El Far",
    use: "Visualització incrustada del repositori de geotops de Catalunya i mapa geològic adaptat de la fitxa oficial (modal de marc geològic regional, apartat «Context de l'itinerari»).",
    url: "https://mediambient.repositori.gencat.cat/handle/20.500.14343/2170",
    license:
      "Creative Commons Reconeixement-NoComercial-SenseDerivats 4.0 Internacional (CC BY-NC-ND 4.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
    apaCitation:
      "Generalitat de Catalunya. (n.d.). Geozona 216: Cingles de Tavertet- El Far [Interactive resource and geological map]. Repositori de geotops de Catalunya, Departament d'Acció Climàtica, Alimentació i Agenda Rural. https://mediambient.repositori.gencat.cat/handle/20.500.14343/2170",
  },
  {
    label: "Enciclopèdia Catalana — Successió paleògena a la conca de Vic",
    use: "Figura de mapa geològic i secció de litofàcies del marge oriental de la Conca de l'Ebre (modal de marc geològic regional), adaptada de l'article sobre els marges oriental i meridional al sector català de la conca. Original de P. Busquets, S. Reguant, A. Barnolas i C. Taberner.",
    url: "https://www.enciclopedia.cat/historia-natural-dels-paisos-catalans/els-marges-oriental-i-meridional-al-sector-catala-de-la-conca",
    apaCitation:
      "Busquets, P., Reguant, S., Barnolas, A., & Taberner, C. (n.d.). La successió paleògena a la conca de Vic [Map and stratigraphic diagram]. In Historia Natural dels Països Catalans. Enciclopèdia Catalana. https://www.enciclopedia.cat/historia-natural-dels-paisos-catalans/els-marges-oriental-i-meridional-al-sector-catala-de-la-conca",
  },
  {
    label: "Google Earth — altimetria del trajecte Sau–Tavertet",
    use: "Vídeo de Google Earth amb la vista en perspectiva i el perfil d'elevació del recorregut (apartat Altimetria del trajecte a la pàgina de l'itinerari Sau–Tavertet), elaborat per Montserrat Magnet Sabata.",
    url: "https://www.google.com/earth/",
    apaCitation:
      "Google. (n.d.). Google Earth [Satellite imagery and computer software]. https://www.google.com/earth/",
  },
  {
    label: "Google Earth — vista aèria Sau–Tavertet",
    use: "Imatge de satèl·lit de base del trajecte Sau–Tavertet (modal de tectònica i estructures), amb la traça de la Falla de Tavertet i les parades superposades per Montserrat Magnet Sabata.",
    url: "https://www.google.com/earth/",
    apaCitation:
      "Google. (n.d.). Google Earth [Satellite imagery and computer software]. https://www.google.com/earth/",
  },
  {
    label: "Google Earth — Falla de Sant Joan de Fàbregues (Pla Boixer / Sant Joan)",
    use: "Vista en perspectiva de Google Earth del desnivell entre el Pla Boixer (1.100 m) i Sant Joan de Fàbregues (790 m) (modal de tectònica i estructures, Figura 4), amb marques d'elevació i traça superposades per Montserrat Magnet Sabata.",
    url: "https://www.google.com/earth/",
    apaCitation:
      "Google. (n.d.). Google Earth [Satellite imagery and computer software]. https://www.google.com/earth/",
  },
  {
    label: "Google Earth — Ter i itinerari Sau–Tavertet (geomorfologia)",
    use: "Vista de Google Earth del Ter, el pantà de Sau i la traça de l'itinerari (modal de geomorfologia, Figura 3), amb la traça superposada per Montserrat Magnet Sabata.",
    url: "https://www.google.com/earth/",
    apaCitation:
      "Google. (n.d.). Google Earth [Satellite imagery and computer software]. https://www.google.com/earth/",
  },
  {
    label: "Mapa geològic local Sau–Tavertet (elaboració pròpia)",
    use: "Mapa de la falla normal de Tavertet i les parades P1–P12 (modal de tectònica i estructures), elaborat per Montserrat Magnet Sabata amb QGIS a partir de dades de l'ICGC.",
    apaCitation:
      "Magnet Sabata, M. (2026). Mapa geològic de la zona Sau–Tavertet [Map]. Elaboració pròpia amb QGIS a partir del Mapa geològic de Catalunya 1:25.000 de l'Institut Cartogràfic i Geològic de Catalunya.",
  },
  {
    label: "Seqüència temporal de la formació del sòcol (elaboració pròpia)",
    use: "Animació temporal del mapa geològic (modal de marc geològic regional), elaborada per Montserrat Magnet Sabata amb QGIS a partir del Mapa geològic de Catalunya 1:25.000 (ICGC).",
    apaCitation:
      "Magnet Sabata, M. (2026). Seqüència temporal de la formació del sòcol, itinerari Sau–Tavertet [Animated map]. Elaboració pròpia amb QGIS a partir del Mapa geològic de Catalunya 1:25.000 de l'Institut Cartogràfic i Geològic de Catalunya.",
  },
  {
    label: "Institut Cartogràfic i Geològic de Catalunya (ICGC) — Mapa geològic 1:25.000",
    use: "Dades litològiques i estructurals de base per als mapes geològics de l'itinerari Sau–Tavertet (marc regional, seqüència temporal del sòcol, mapa local de falles i mapa interactiu).",
    url: "https://www.icgc.cat",
    apaCitation:
      "Institut Cartogràfic i Geològic de Catalunya. (n.d.). Mapa geològic de Catalunya 1:25.000 [Map]. https://www.icgc.cat",
  },
  {
    label: "QGIS",
    use: "Programari de SIG utilitzat per a l'elaboració dels mapes geològics i de la seqüència temporal de l'itinerari Sau–Tavertet.",
    url: "https://qgis.org",
    apaCitation:
      "QGIS Development Team. (2025). QGIS geographic information system (Version 3.34) [Computer software]. https://qgis.org",
  },
  {
    label: "Fotografies de geomorfologia (Sau–Tavertet)",
    use: "Quatre fotografies de camp de l'apartat Geomorfologia de l'itinerari Sau–Tavertet (cinglera sobre el pantà de Sau, erosió diferencial, aflorament modelat per l'aigua i cinglera en perfil), realitzades per Montserrat Magnet Sabata, Núria Ferrer Ramos i Judit Molera Marimon a l'itinerari Presa de Sau–Tavertet el 9 de juny de 2026.",
    apaCitation:
      "Magnet Sabata, M., Ferrer Ramos, N., & Molera Marimon, J. (2026). Fotografies de geomorfologia de l'itinerari Sau–Tavertet [Photographs]. Elaboració pròpia.",
  },
];
