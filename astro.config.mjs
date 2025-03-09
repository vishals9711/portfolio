import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), icon({
        iconDir: "src/assets/icons",
      }), react()],
    output: "server",
    adapter: vercel(),
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
});