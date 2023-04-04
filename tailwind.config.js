/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme.js";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: { display: [...defaultTheme.fontFamily.sans] },
    },
  },
  plugins: [typography],
};
