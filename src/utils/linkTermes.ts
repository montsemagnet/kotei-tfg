import { termes } from "@/data/termes";
import { withBase } from "@/utils/withBase";

type PhraseEntry = {
  phrase: string;
  slug: string;
};

/** Termes massa curts o ambigus: regles especials en lloc de cerca simple. */
const SPECIAL_SLUGS = new Set(["ma"]);

const phraseEntries: PhraseEntry[] = termes
  .flatMap((terme) => [
    { phrase: terme.terme, slug: terme.slug },
    ...(terme.sinonims?.map((sinonim) => ({
      phrase: sinonim,
      slug: terme.slug,
    })) ?? []),
  ])
  .filter(({ phrase, slug }) => !SPECIAL_SLUGS.has(slug) || phrase.length > 3)
  .sort((a, b) => b.phrase.length - a.phrase.length);

const termLinkClass =
  "text-accent-700 dark:text-accent-400 underline decoration-accent-700/30 dark:decoration-accent-400/40 underline-offset-[3px] hover:decoration-accent-700 dark:hover:decoration-accent-400 transition-colors";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Lletres (inclou accents i · dins paraules catalanes). */
function isWordLetter(char: string): boolean {
  return /[\p{L}]/u.test(char);
}

/** Només enllaça paraules senceres (evita «Ma» dins «marcat», «materials», etc.). */
function findPhraseIndex(text: string, phrase: string, fromIndex = 0): number {
  const lowerText = text.toLowerCase();
  const lowerPhrase = phrase.toLowerCase();
  let searchFrom = fromIndex;

  while (searchFrom <= text.length - phrase.length) {
    const index = lowerText.indexOf(lowerPhrase, searchFrom);
    if (index === -1) return -1;

    const before = index > 0 ? text[index - 1] : "";
    const after =
      index + phrase.length < text.length ? text[index + phrase.length] : "";

    if (!isWordLetter(before) && !isWordLetter(after)) {
      return index;
    }

    searchFrom = index + 1;
  }

  return -1;
}

/**
 * «Ma» (milions d'anys) només després d'una edat numèrica o interval:
 * «410–280 Ma», «66 Ma», «~252 Ma», «2,6 Ma–actualitat».
 */
function findGeologicalMaIndex(text: string): number {
  const pattern = /(?<![\p{L}])Ma(?![\p{L}])/gu;
  let regexMatch: RegExpExecArray | null;

  while ((regexMatch = pattern.exec(text)) !== null) {
    const index = regexMatch.index;
    const before = text.slice(0, index).trimEnd();
    if (
      /(?:\d[\d.,–\-~]*|\~)\s*$/.test(before) ||
      /[)\]]\s*$/.test(before)
    ) {
      return index;
    }
  }

  return -1;
}

type MatchCandidate = {
  index: number;
  length: number;
  slug: string;
  matched: string;
};

function findBestMatch(
  remaining: string,
  linkedSlugs: Set<string>,
): MatchCandidate | undefined {
  let best: MatchCandidate | undefined;

  for (const { phrase, slug } of phraseEntries) {
    if (linkedSlugs.has(slug)) continue;

    const index = findPhraseIndex(remaining, phrase);
    if (index === -1) continue;

    if (
      !best ||
      index < best.index ||
      (index === best.index && phrase.length > best.length)
    ) {
      best = {
        index,
        length: phrase.length,
        slug,
        matched: remaining.slice(index, index + phrase.length),
      };
    }
  }

  if (!linkedSlugs.has("ma")) {
    const maIndex = findGeologicalMaIndex(remaining);
    if (maIndex !== -1) {
      const maMatch: MatchCandidate = {
        index: maIndex,
        length: 2,
        slug: "ma",
        matched: remaining.slice(maIndex, maIndex + 2),
      };

      if (
        !best ||
        maMatch.index < best.index ||
        (maMatch.index === best.index && maMatch.length > best.length)
      ) {
        best = maMatch;
      }
    }
  }

  return best;
}

/**
 * Enllaça la primera aparició de cada terme (per slug) dins un text cap al glossari.
 * Passa el mateix `linkedSlugs` entre paràgrafs d'una secció per no repetir enllaços.
 */
export function linkTermes(
  text: string,
  linkedSlugs: Set<string> = new Set(),
): string {
  let output = "";
  let remaining = text;

  while (remaining.length > 0) {
    const match = findBestMatch(remaining, linkedSlugs);

    if (!match) {
      output += escapeHtml(remaining);
      break;
    }

    output += escapeHtml(remaining.slice(0, match.index));
    output += `<a href="${withBase(`/termes#${match.slug}`)}" class="${termLinkClass}">${escapeHtml(match.matched)}</a>`;
    linkedSlugs.add(match.slug);
    remaining = remaining.slice(match.index + match.length);
  }

  return output;
}

export function createTermeLinkTracker(): Set<string> {
  return new Set<string>();
}
