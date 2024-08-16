import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
// https://astro.build/config
export default defineConfig({
  site: "https://vishalrsharma.dev",
  output: "server",
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
    }),
    robotsTxt(),
  ],
});
