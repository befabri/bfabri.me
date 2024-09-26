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
    i18n: {
        defaultLocale: "fr",
        locales: ["fr", "en"],
    },
    integrations: [
        icon(),
        tailwind(),
        sitemap({
            i18n: {
                defaultLocale: "fr",
                locales: {
                    fr: "fr",
                    en: "en",
                },
            },
            filter: (page) =>
                page !== "https://bfabri.me/404/" &&
                page !== "https://bfabri.me/505/" &&
                page !== "https://bfabri.me/en/404/" &&
                page !== "https://bfabri.me/en/505/",
        }),
        preact(),
        mdx(),
    ],
});
