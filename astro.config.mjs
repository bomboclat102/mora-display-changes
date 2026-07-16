// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://showbiz0.github.io",
  base: "/mora-display",
  vite: {
    plugins: [tailwindcss()],
  },
});
