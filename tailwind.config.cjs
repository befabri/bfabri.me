/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
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
};
