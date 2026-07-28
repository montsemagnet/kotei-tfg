import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Evita que el watcher es pengi amb assets pesats / molts fitxers a public/
      watch: {
        ignored: [
          "**/public/**",
          "**/mapa-sau-tavertet/**",
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
