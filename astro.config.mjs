import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
  integrations: [tailwind(), react()],
  vite: {
    build: {
      rollupOptions: {
        external: ["./src/content/blog/*.excalidraw"],
      },
    },
  },
});
