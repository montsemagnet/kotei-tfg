import {
  cronologiaVideoPerTitol,
  type CronologiaVideoLink,
} from "@/data/cronologia-videos";

export type CronologiaStep = {
  tipus: "periode" | "proces" | "producte";
  titol: string;
  text?: string;
  categoria?: string;
  videoPublicSrc?: string;
  videoAmbSo?: boolean;
  processos?: string[];
};

export type AnnotatedCronologiaStep = CronologiaStep & {
  video?: CronologiaVideoLink;
  videoId?: string;
  processosEnriquits?: AnnotatedProcesLinia[];
};

export type AnnotatedProcesLinia = {
  titol: string;
  video?: CronologiaVideoLink;
  videoId?: string;
};

export type CronologiaBranch = {
  titol?: string;
  text?: string;
  items: CronologiaStep[];
};

export type CronologiaParallel = {
  tipus: "parallel";
  titol?: string;
  branques: CronologiaBranch[];
};

export type CronologiaNode = CronologiaStep | CronologiaParallel;

export type AnnotatedBranch = {
  titol?: string;
  text?: string;
  video?: CronologiaVideoLink;
  videoId?: string;
  items: AnnotatedCronologiaStep[];
};

export type AnnotatedParallel = {
  tipus: "parallel";
  titol?: string;
  branques: AnnotatedBranch[];
};

export type AnnotatedNode = AnnotatedCronologiaStep | AnnotatedParallel;

export function isParallel(node: CronologiaNode): node is CronologiaParallel {
  return node.tipus === "parallel";
}

export function isAnnotatedParallel(node: AnnotatedNode): node is AnnotatedParallel {
  return node.tipus === "parallel";
}

export function lookupCronologiaVideo(titol: string): CronologiaVideoLink | undefined {
  const key = titol.replace(/^[↓⬇]\s*/u, "").trim();
  return (
    cronologiaVideoPerTitol[key] ??
    Object.entries(cronologiaVideoPerTitol).find(
      ([name]) => name.toLowerCase() === key.toLowerCase(),
    )?.[1]
  );
}

export function resolveCronologiaItemVideo(
  item: CronologiaStep,
): CronologiaVideoLink | undefined {
  const fromMap = lookupCronologiaVideo(item.titol);
  if (item.videoPublicSrc) {
    return {
      hideLabel: fromMap?.hideLabel,
      startUnmuted: fromMap?.startUnmuted,
      fit: fromMap?.fit,
      ...fromMap,
      src: item.videoPublicSrc,
      sound: item.videoAmbSo ?? fromMap?.sound ?? true,
    };
  }
  return fromMap;
}
