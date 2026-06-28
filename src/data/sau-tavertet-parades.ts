export type SauTavertetParada = {
  /** Número de parada (1–12) o «A» per l'alforament auxiliar */
  num: number | "A";
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
    label: "Monzogranit i pòrfirs",
    preview: "/images/parades/I1-P1-hover.jpg",
    svgIds: ["I1-P1", "P1", "Parada1"],
  },
  {
    num: 2,
    slug: "I1-P2",
    label: "Cantera de Sauló",
    preview: "/images/parades/I1-P2-hover.jpg",
    svgIds: ["I1-P2", "P2", "Parada2"],
  },
  {
    num: 3,
    slug: "I1-P3",
    label: "Argiles del Paleocè, Fm. Mediona",
    svgIds: ["I1-P3", "P3", "Parada3"],
  },
  {
    num: 4,
    slug: "I1-P4",
    label: "Dipòsits de vessant (Quaternari)",
    svgIds: ["I1-P4", "P4", "Parada4"],
  },
  {
    num: 5,
    slug: "I1-P5",
    label: "Gresos i conglomerats vermells, Fm. Vilanova de Sau",
    svgIds: ["I1-P5", "P5", "Parada5"],
  },
  {
    num: 6,
    slug: "I1-P6",
    label: "Conglomerats, Fm. Romagats",
    svgIds: ["I1-P6", "P6", "Parada6"],
  },
  {
    num: 7,
    slug: "I1-P7",
    label: "Gresos grisos i vermells, Fm. Tavertet",
    svgIds: ["I1-P7", "P7", "Parada7"],
  },
  {
    num: 8,
    slug: "I1-P8",
    label: "Gresos grisos, Fm. Tavertet",
    svgIds: ["I1-P8", "P8", "Parada8"],
  },
  {
    num: 9,
    slug: "I1-P9",
    label: "Calcàries amb nummulits, Fm. Tavertet",
    svgIds: ["I1-P9", "P9", "Parada9"],
  },
  {
    num: 10,
    slug: "I1-P10",
    label: "Superfície estructural amb diàclasis",
    svgIds: ["I1-P10", "P10", "Parada10"],
  },
  {
    num: 11,
    slug: "I1-P11",
    label: "Margues, Fm. Coll de Malla",
    svgIds: ["I1-P11", "P11", "Parada11"],
  },
  {
    num: 12,
    slug: "I1-P12",
    label: "Gresos, Fm. Barcons",
    svgIds: ["I1-P12", "P12", "Parada12"],
  },
  {
    num: "A",
    slug: "I1-A1",
    label: "Pissares del Cambrordovicià",
    svgIds: ["I1-A1", "A1", "ParadaA1"],
  },
];

export function paradaDisplayLabel(parada: SauTavertetParada): string {
  const prefix = parada.num === "A" ? "A1" : `P${parada.num}`;
  return `${prefix}. ${parada.label}`;
}
