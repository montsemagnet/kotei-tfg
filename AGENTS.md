# Kotei — agent context

**Kotei** (`@lexington/kotei`) is a multi-page Astro theme for a **creative studio / agency + insights** site: a marketing homepage with featured work and blog teasers, case-study-style **work** pages, a small **store** catalog, an “insights” **blog** with tag pages, auth-style **signin/signup**, **contact/about**, a **design system** area under `/system`, and **studio**. Primary use case is **SaaS-style marketing and portfolio** content with optional product listings—not a full e-commerce backend (checkout URLs are placeholders in sample content).

## Tech stack (this repo)

- **Astro** `^6.0.0` — `astro.config.mjs`: `@tailwindcss/vite`, **`@astrojs/sitemap`**, **`@astrojs/mdx`**, `site: "https://yourdomain.com"`, Markdown drafts + Shiki (`css-variables`).
- **Tailwind CSS** `^4.1.18` — via `@tailwindcss/vite`, plugins in `src/styles/global.css`: `@tailwindcss/forms`, `@tailwindcss/typography`, `tailwind-scrollbar-hide`.
- **MDX** — `@astrojs/mdx`; posts collection accepts `.md` and `.mdx`.
- **RSS** — `@astrojs/rss` (`src/pages/rss.xml.js`). Note: the glob there targets `./blog/*.{md,mdx}` under `src/pages/`; blog entries actually live in **`src/content/posts/`**, so the feed may need wiring to the `posts` collection to populate items.
- **Lexington** — `@lexingtonthemes/seo` (`AstroSeo` in `src/components/fundations/head/Seo.astro`).
- **Aliases** — `tsconfig.json`: `@/*` → `src/*`.

## Folder map

| Path | Role |
|------|------|
| `src/pages/` | File-based routes: landing, blog, work, store, system, auth, RSS, 404. |
| `src/layouts/` | `BaseLayout.astro`, `BlogLayout.astro`, `WorkLayout.astro`, `StoreLayout.astro`. |
| `src/components/` | `global/` (Navigation, Footer, Search), `fundations/` (head, elements, icons, scripts—**keep folder spelling `fundations`**), `landing/`, `blog/`, `work/`, `store/`, `assets/`. |
| `src/content/` | Markdown for collections: `work/`, `store/`, `posts/`. |
| `src/styles/` | `global.css` — Tailwind entry, `@theme` tokens (fonts, accent/base palettes, keyframes). |
| `src/images/` | Branded SVGs under `brands/`; sample content references `/src/images/blog/`, `/src/images/work/`, `/src/images/store/` for `image()` fields. |
| `public/` | **Not present** in this repository. `Favicons.astro` still references `/favicon.ico`, `/icon.svg`, etc.—add a `public/` folder (or adjust links) before shipping. |

## Content collections (`src/content.config.ts`)

All collections use the `glob` loader. Slugs in URLs are the **entry `id`** (usually the filename without `.md`/`.mdx`, e.g. `1.md` → `1`).

### `work` → `src/content/work/**/*.md`

- **Required:** `work` (string), `live` (string), `title`, `description`, `images` (array of `{ url: image(), alt }`), `thumbnail` (`{ url: image(), alt }`).
- **Optional:** `intro`, `outro`, `highlights`, `projectData`, `credits` (see Zod in `content.config.ts`).
- **Images:** `image()` from Astro Content — use paths resolvable as assets (sample: `/src/images/work/1/thumbnail.jpeg`).
- **Template:** copy from `src/content/work/1.md`.

### `store` → `src/content/store/**/*.md`

- **Required:** `price`, `title`, `checkout`, `license`, `highlights` (array of strings), `description`, `image` (`{ url: image(), alt }`), `images` (array of `{ url: image(), alt }`).
- **Optional:** `specifications`, `faq`.
- **Images:** same `image()` pattern (sample: `/src/images/store/1/thumbnail.jpeg`).
- **Template:** copy from `src/content/store/1.md`.

### `posts` → `src/content/posts/**/*.(md|mdx)`

- **Required:** `title`, `pubDate` (date), `description`, `author`, `image` (`{ url: image(), alt }`), `tags` (array of strings).
- **Images:** sample paths under `/src/images/blog/`.
- **Template:** copy from `src/content/posts/1.md`.

## Routing conventions

- **Work:** list `src/pages/work/index.astro` (+ `index-2`, `index-3` variants); detail `src/pages/work/[...slug].astro` → **`/work/{id}`**.
- **Store:** list `src/pages/store/index.astro` (+ variants); detail `src/pages/store/[...slug].astro` → **`/store/{id}`**.
- **Blog:** list `src/pages/blog/index.astro` (+ variants); post `src/pages/blog/posts/[...slug].astro` → **`/blog/posts/{id}`**; tags **`/blog/tags/{tag}`** (`src/pages/blog/tags/[tag].astro`), tag index `src/pages/blog/tags/index.astro`.
- **RSS:** `src/pages/rss.xml.js` → **`/rss.xml`** (see stack note on glob vs. `posts` collection).
- **System:** `src/pages/system/*` (e.g. `/system/overview`, `typography`, `colors`, `buttons`, `links`).
- **Other static routes:** `about`, `contact`, `signup`, `signin`, `studio`, `404`.
- **Legal / changelog routes:** not present in this repo as pages or collections.

## Customization guide

- **Site URL / domain:** `astro.config.mjs` → `site`. Align `@astrojs/sitemap` and any absolute URLs. Replace placeholder domains in `Seo.astro` (`@lexingtonthemes/seo` + duplicate meta block) and `Meta.astro` titles/descriptions.
- **Brand colors & typography:** `src/styles/global.css` — `@theme` (`--font-sans`, `--font-mono`, `--color-accent-*`, `--color-base-*`). Fonts loaded in `src/components/fundations/head/Fonts.astro` (Geist / Geist Mono); change imports or `global.css` font tokens together.
- **Navigation / footer:** `src/components/global/Navigation.astro`, `Footer.astro`.
- **Document shell:** `src/layouts/BaseLayout.astro` imports `global.css`, `BaseHead`, Navigation/Footer, AOS body script; optional `hideNav` / `hideFooter`. Head stack: `src/components/fundations/head/BaseHead.astro` (Seo, Meta, Fonts, Favicons, AOS/Fuse/theme scripts).

## Commands

From `README.md` (run at repo root):

| Command | Action |
|--------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server (`astro dev`) |
| `npm run build` | Production build → `./dist/` |
| `npm run preview` | Preview production build |
| `npm run astro ...` | Astro CLI |

## Guardrails

- **Do not rename** the `fundations` folder (typo is intentional here; paths and imports depend on it).
- **Content schemas:** changing Zod in `src/content.config.ts` requires updating every layout/component that reads `page.data` / `entry.data` (e.g. `WorkLayout`, `StoreLayout`, `BlogLayout`, cards, search index).
- **`image()` fields:** keep `url`/`alt` shapes consistent with `astro:assets` usage (`Image src={...}`) in cards and layouts.
- Prefer **minimal diffs** and match existing import style (`@/…`, quote style, layout patterns).

## Lexington docs & support (placeholders)

Use the same pattern as `README.md`:

- Theme specs: https://lexingtonthemes.com/templates/kotei  
- Documentation: https://lexingtonthemes.com/documentation  
- Changelog: https://lexingtonthemes.com/changelog/kotei  
- Support: https://lexingtonthemes.com/legal/support/  
- Bundle: https://lexingtonthemes.com  
