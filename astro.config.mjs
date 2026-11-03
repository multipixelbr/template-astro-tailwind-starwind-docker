import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  server: {
    allowedHosts: ["angry_taussig.orb.local"]
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: node({
    mode: "standalone"
  })
});