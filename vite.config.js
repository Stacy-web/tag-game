import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@cs": fileURLToPath(
        new URL("./src/components", import.meta.url),
      ),
      "@p": fileURLToPath(
        new URL("./src/pages", import.meta.url),
      ),
    },
  },
  build: {
    sourcemap: true,
  },
  server: {
    sourcemap: true,
  },
});