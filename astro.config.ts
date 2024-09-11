import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://bfabri.me",
    outDir: "public",
    publicDir: "static",
    integrations: [
        icon(),
        tailwind(),
        sitemap({
            filter: (page) => page !== "https://bfabri.me/505/",
        }),
        preact(),
        mdx(),
    ],
});
