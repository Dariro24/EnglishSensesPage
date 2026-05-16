import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.englishsenses.com",

  devToolbar: {
    enabled: false,
  },

  integrations: [
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        return !["/404", "/404/", "/cupones", "/cupones/"].includes(pathname);
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
