/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        "li::marker": {
                            color: theme("colors.zinc.800"),
                        },
                    },
                },
                invert: {
                    css: {
                        "li::marker": {
                            color: theme("colors.zinc.200"),
                        },
                    },
                },
            }),
            screens: {
                xs: "450px",
                lg: "952px",
            },
            colors: {
                blue_light: "#5BC0EB",
                blue_dark: "#5473B1",
                white: "#FEFEFF",
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
