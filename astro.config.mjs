import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

/** En `astro dev`, carpetes /mapa-…/ no resolen index.html → reescriptura */
function mapaDirectoryIndex() {
  return {
    name: "mapa-directory-index",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const raw = req.url ?? "";
        const [pathname, query = ""] = raw.split("?");
        if (/\/mapa(?:-sau-tavertet|-parada-\d+)\/?$/.test(pathname)) {
          const nextPath = pathname.replace(/\/?$/, "/index.html");
          req.url = query ? `${nextPath}?${query}` : nextPath;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss(), mapaDirectoryIndex()],
    server: {
      // Evita que el watcher es pengi amb assets pesats / molts fitxers
      watch: {
        ignored: [
          "**/public/**",
          "**/mapa-sau-tavertet/**",
          "**/mapa-parada-*/**",
          "**/mapa-web-sau-tavertet/**",
          "**/node_modules/**",
          "**/.git/**",
        ],
      },
    },
  },
  server: {
    host: "127.0.0.1",
    port: 4321,
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables",
    },
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },
  site: "https://montsemagnet.github.io",
  base: "/kotei-tfg/",
  integrations: [sitemap(), mdx()],
});
