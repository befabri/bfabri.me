/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            screens: {
                xs: "450px",
            },
            colors: {
                blue_light: "#5BC0EB",
                blue_dark: "#445E93",
            },
            animation: {
                appear: "appear 0.2s ease-in-out",
            },
            keyframes: {
                appear: {
                    "0%": { opacity: 0, transform: "translateX(-1px)" },
                    "100%": { opacity: 1, transform: "translateX(0)" },
                },
            },
        },
        fontFamily: {
            sans: ["Changa", "sans-serif"],
        },
    },
    plugins: [require("@tailwindcss/typography")],
    darkMode: ["class", '[data-theme="dark"]'],
};
