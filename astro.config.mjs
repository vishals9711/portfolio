import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), icon(), react()],
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
});
