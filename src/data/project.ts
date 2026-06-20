export const project = {
  title: "GeoTransectes UVic",
  subtitle:
    "Plataforma web interactiva per a l'aprenentatge de la geologia de camp i la microscòpia petrogràfica en el Grau de Biologia",
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
    name: "Montserrat Magnet Sabata",
    email: "mariamontserrat.magnet@uvic.cat",
    roles: [
      "Autora del TFG",
      "Desenvolupadora web",
    ],
    bio: "Enginyera de sistemes, graduada en Multimèdia (UVic-UCC) i estudiant del Grau en Biologia.",
  },
  {
    name: "Dra. Judit Molera Marimon",
    email: "judit.molera@uvic.cat",
    profileUrl: "https://mon.uvic.cat/fcte/judit-molera-marimon/",
    roles: ["Directora del TFG"],
    qualifications: ["Doctora en geologia"],
  },
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
];

/** Order in the group photo: left → right */
export const teamPhotoOrder = [
  "Dra. Núria Ferrer Ramos",
  "Montserrat Magnet Sabata",
  "Dra. Judit Molera Marimon",
];

export const thirdPartyResources = [
  {
    name: "Kotei (Lexington Themes)",
    use: "Plantilla web",
    url: "https://lexingtonthemes.com/templates/kotei",
  },
  {
    name: "Google Translate",
    use: "Traducció automàtica del lloc (opcional)",
    url: "https://translate.google.com",
  },
  {
    name: "Geist / Geist Mono",
    use: "Tipografies del lloc",
    url: "https://vercel.com/font",
  },
];
