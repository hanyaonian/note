// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/varaible.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      script: [
        {
          innerHTML: `
            (function() {
              const savedTheme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              
              if (savedTheme && JSON.parse(savedTheme) === 'dark' || (!savedTheme && prefersDark)) {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
          type: "text/javascript",
        },
      ],
    },
  },
});
