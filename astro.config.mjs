import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

/** En `astro dev`, carpetes /mapa-…/ no resolen index.html → reescriptura */
function mapaDirectoryIndex() {
  return {
    name: "mapa-directory-index",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const raw = req.url ?? "";
        const [pathname, query = ""] = raw.split("?");
        if (/\/mapa-geobotanica(?:\/index\.html)?\/?$/.test(pathname)) {
          res.statusCode = 302;
          res.setHeader("Location", "http://127.0.0.1:8768/");
          res.end();
          return;
        }
        if (/\/mapa(?:-sau-tavertet|-geobotanica|-parada-[\d-]+)\/?$/.test(pathname)) {
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
      // Evita que Vite/Astro indexin o serveixin el mapa qgis2web (penja el dev server)
      fs: {
        deny: [
          "**/mapa-web-sau-tavertet/**",
          "**/mapa-web-geobotanica/**",
          "**/public/mapa-geobotanica/**",
          "**/_dev-mapa-sau-parked/**",
          "**/_tmp-*/**",
        ],
      },
      watch: {
        ignored: [
          "**/public/mapa-sau-tavertet/**",
          "**/public/mapa-geobotanica/**",
          "**/public/mapa-parada-*/**",
          "**/mapa-sau-tavertet/**",
          "**/mapa-geobotanica/**",
          "**/mapa-parada-*/**",
          "**/mapa-web-sau-tavertet/**",
          "**/mapa-web-geobotanica/**",
          "**/_dev-mapa-sau-parked/**",
          "**/_tmp-*/**",
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
