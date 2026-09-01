/** Vídeos que s'obren des de títols de la seqüència geològica. */
export type CronologiaVideoLink = {
  src: string;
  sound?: boolean;
  hideLabel?: boolean;
  startUnmuted?: boolean;
  fit?: "cover" | "contain";
  allowFullscreen?: boolean;
  /** Si hi és, només aquest fragment del títol és l'enllaç al vídeo */
  linkPhrase?: string;
  /** Peu curt sota el vídeo (no la citació completa) */
  caption?: string;
};

export const cronologiaVideoPerTitol: Record<string, CronologiaVideoLink> = {
  "MAR PALEOZOIC": {
    src: "/videos/itineraris/sau-tavertet/cronologia/mar-paleozoic.mp4",
    sound: true,
    hideLabel: true,
    startUnmuted: true,
    fit: "contain",
    caption:
      "Mapa de l'Ordovicià. Adaptat de C. R. Scotese, Encyclopaedia Britannica.",
  },
  "convergència de plaques i orogènia varisca": {
    src: "/videos/itineraris/sau-tavertet/cronologia/orogenia-varisca.mp4",
    sound: false,
    startUnmuted: false,
    fit: "contain",
    caption: "Animació d'orogènia. Adaptat d'Aditi Thakur. YouTube.",
  },
  "metamorfisme de contacte": {
    src: "/videos/itineraris/sau-tavertet/cronologia/metamorfisme-contacte.mp4",
    sound: false,
    startUnmuted: false,
    allowFullscreen: false,
    fit: "contain",
    caption:
      "Fragment adaptat de Formación Fundamental B-Learning PUCV. YouTube.",
  },
  "metamorfisme regional": {
    src: "/videos/itineraris/sau-tavertet/cronologia/metamorfisme-regional.mp4",
    sound: false,
    startUnmuted: false,
    allowFullscreen: false,
    fit: "contain",
    caption:
      "Fragment adaptat de Formación Fundamental B-Learning PUCV. YouTube.",
  },
  "i ventalls al·luvials propers als relleus": {
    src: "/videos/itineraris/sau-tavertet/cronologia/ventalls2-veu.mp4",
    sound: true,
    startUnmuted: true,
    fit: "contain",
    linkPhrase: "ventalls al·luvials",
    caption: "Animació d'un ventall al·luvial. Font: YouTube.",
  },
  "calor de les intrusions sobre les pissarres encaixants": {
    src: "/videos/itineraris/sau-tavertet/cronologia/intrusio.mp4",
    sound: false,
    startUnmuted: false,
    fit: "contain",
    linkPhrase: "intrusions",
  },
};
