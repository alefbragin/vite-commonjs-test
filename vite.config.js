import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: ["fancy-date"],
  },
  build: {
    commonjsOptions: {
      include: [/fancy-date/, /node_modules/],
    },
  },
});
