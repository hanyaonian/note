import { defineConfig } from "vite";
import dotenv from "dotenv";

export default defineConfig(() => {
  const config = dotenv.config().parsed!;
  return {
    server: {
      proxy: {
        "/hello": {
          changeOrigin: true,
          target: `http://localhost:${config.SERVER_PORT}`,
        },
      },
    },
  };
});
