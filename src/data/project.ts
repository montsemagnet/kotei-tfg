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
    qualifications: ["Doctora en geologia"],
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
