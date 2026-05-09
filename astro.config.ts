import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    site: "https://bfabri.me",
    outDir: "public",
    publicDir: "static",
    i18n: {
        defaultLocale: "fr",
        locales: ["fr", "en"],
    },
    integrations: [
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
