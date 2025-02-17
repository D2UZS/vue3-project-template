import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    checker({
      vueTsc: true,
      eslint: {
        // for example, lint .ts and .tsx
        lintCommand: 'eslint "./src/**/*.{ts,tsx,vue,js}" --fix',
      },
      stylelint: {
        // for example, lint .css and .vue
        lintCommand: "stylelint ./src/**/*.{vue,scss,sass}",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src/", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components/", import.meta.url),
      ),
      "@assets": fileURLToPath(new URL("./src/assets/", import.meta.url)),
      "@static": fileURLToPath(new URL("./src/static/", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils/index.ts", import.meta.url)),
      "@services": fileURLToPath(new URL("./src/services/", import.meta.url)),
      "@hooks": fileURLToPath(new URL("./src/hooks/", import.meta.url)),
      "@style/mixins": fileURLToPath(
        new URL("./src/assets/styles/mixins/index.scss", import.meta.url),
      ),
      "@style/functions": fileURLToPath(
        new URL("./src/assets/styles/functions/index.scss", import.meta.url),
      ),
      "@style/utility-classes": fileURLToPath(
        new URL("./src/assets/styles/utility-classes/", import.meta.url),
      ),
      "@style/variables": fileURLToPath(
        new URL("./src/assets/styles/variables/index.scss", import.meta.url),
      ),
    },
  },
});
