import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

import dotenv from "dotenv";

export default defineConfig(() => {
  const config = dotenv.config().parsed || {};
  return {
    plugins: [vue(), tailwindcss()],
    server: {
      port: 3000,
      proxy: {
        "/api": {
          changeOrigin: true,
          target: `http://localhost:${config.SERVER_PORT || 4000}`,
        },
      },
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  };
});
