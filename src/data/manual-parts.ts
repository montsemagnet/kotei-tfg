export type ManualPart = {
  slug: "professorat" | "informatica" | "seguretat" | "accessibilitat";
  title: string;
  description: string;
};

export const manualParts: ManualPart[] = [
  {
    slug: "professorat",
    title: "Dirigit al professorat",
    description:
      "Com estructurar, preparar i entregar els continguts d'un itinerari nou.",
  },
  {
    slug: "informatica",
    title: "Dirigit a informàtica",
    description:
      "Plantilles, scripts i publicació per incorporar itineraris, parades i materials.",
  },
  {
    slug: "seguretat",
    title: "Seguretat i protecció de dades",
    description:
      "Revisió de seguretat, RGPD i requisits d'allotjament institucional.",
  },
  {
    slug: "accessibilitat",
    title: "Revisió d'accessibilitat",
    description:
      "Avaluació interna (WCAG, WAVE, Lighthouse) i limitacions documentades.",
  },
];
