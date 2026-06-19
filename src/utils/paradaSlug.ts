export function getParadaSlug(entry: { id: string; filePath?: string }) {
  const fileName = entry.filePath?.split(/[/\\]/).at(-1) ?? `${entry.id}.md`;
  return fileName.replace(/\.md$/i, "");
}
