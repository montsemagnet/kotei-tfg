import { getCollection } from "astro:content";

export function getParadaSlug(entry: { id: string; filePath?: string }) {
  const fileName = entry.filePath?.split(/[/\\]/).at(-1) ?? `${entry.id}.md`;
  return fileName.replace(/\.md$/i, "");
}

export async function findParadaBySlug(slug: string) {
  const parades = await getCollection("parades");
  return parades.find((entry) => getParadaSlug(entry) === slug);
}
