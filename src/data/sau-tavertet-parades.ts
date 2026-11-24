export type SauTavertetParada = {
  /** Número de parada (1–12) */
  num: number;
  /** Slug de la col·lecció parades, p.ex. I1-P1 */
  slug: string;
  /** Nom geològic (llegenda del mapa) */
  label: string;
  /** Imatge de previsualització a public/ (opcional) */
  preview?: string;
  /** ID del grup SVG (P1, P2, … o Parada1, Parada2, …) */
  svgIds: string[];
};

/** Parades de l'itinerari Sau–Tavertet segons la llegenda del mapa */
export const SAU_TAVERTET_PARADES: SauTavertetParada[] = [
  {
    num: 1,
    slug: "I1-P1",
    label: "Els granits de Sau",
    preview: "/images/parades/I1-P1-hover.jpg",
    svgIds: ["I1-P1", "P1", "Parada1"],
  },
  {
    num: 2,
    slug: "I1-P2",
    label: "Antiga pedrera de sauló",
    preview: "/images/parades/I1-P2-hover.jpg",
    svgIds: ["I1-P2", "P2", "Parada2"],
  },
  {
    num: 3,
    slug: "I1-P3",
    label: "Els primers sediments paleògens: Formació Mediona",
    preview: "/images/parades/I1-P3-hover.jpg",
    svgIds: ["I1-P3", "P3", "Parada3"],
  },
  {
    num: 4,
    slug: "I1-P4",
    label: "Dipòsits de vessant (Quaternari)",
    preview: "/images/parades/I1-P4-hover.jpg",
    svgIds: ["I1-P4", "P4", "Parada4"],
  },
  {
    num: 5,
    slug: "I1-P5",
    label: "Gresos i conglomerats vermells, Formació Vilanova de Sau",
    preview: "/images/parades/I1-P5-hover.jpg",
    svgIds: ["I1-P5", "P5", "Parada5"],
  },
  {
    num: 6,
    slug: "I1-P6",
    label: "Conglomerats de la Formació Romagats",
    preview: "/images/parades/I1-P6-hover.jpg",
    svgIds: ["I1-P6", "P6", "Parada6"],
  },
  {
    num: 7,
    slug: "I1-P7",
    label: "Del continent al mar",
    preview: "/images/parades/I1-P7-hover.jpg",
    svgIds: ["I1-P7", "P7", "Parada7"],
  },
  {
    num: 8,
    slug: "I1-P8",
    label: "Gresos de la Formació Tavertet",
    preview: "/images/parades/I1-P8-hover.jpg",
    svgIds: ["I1-P8", "P8", "Parada8"],
  },
  {
    num: 9,
    slug: "I1-P9",
    label: "Formació Tavertet i ambient de deposició",
    preview: "/images/parades/I1-P9-hover.jpg",
    svgIds: ["I1-P9", "P9", "Parada9"],
  },
  {
    num: 10,
    slug: "I1-P10",
    label: "Superfície estructural amb diàclasis",
    preview: "/images/parades/I1-P10-hover.jpg",
    svgIds: ["I1-P10", "P10", "Parada10"],
  },
  {
    num: 11,
    slug: "I1-P11",
    label: "Margues de la Formació Coll de Malla",
    preview: "/images/parades/I1-P11-hover.jpg",
    svgIds: ["I1-P11", "P11", "Parada11"],
  },
  {
    num: 12,
    slug: "I1-P12",
    label: "Els gresos i la formació del turó testimoni",
    preview: "/images/parades/I1-P12-hover.jpg",
    svgIds: ["I1-P12", "P12", "Parada12"],
  },
];

export function paradaDisplayLabel(parada: SauTavertetParada): string {
  return `P${parada.num}. ${parada.label}`;
}
