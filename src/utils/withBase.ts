/** Prefixes an internal path with Astro's configured base (e.g. /kotei-tfg/). */
export function withBase(path: string): string {
  if (
    !path ||
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  const queryIndex = path.indexOf("?");
  const pathname = queryIndex === -1 ? path : path.slice(0, queryIndex);
  const query = queryIndex === -1 ? "" : path.slice(queryIndex);

  const baseNoSlash = base.endsWith("/") ? base.slice(0, -1) : base;
  if (pathname === baseNoSlash || pathname.startsWith(`${baseNoSlash}/`)) {
    return path;
  }

  const clean = pathname.startsWith("/") ? pathname.slice(1) : pathname;
  return `${base}${clean}${query}`;
}
