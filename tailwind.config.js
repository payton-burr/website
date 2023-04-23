/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme.js";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      fontFamily: { display: [...defaultTheme.fontFamily.sans] },
    },
  },
  plugins: [typography],
};
