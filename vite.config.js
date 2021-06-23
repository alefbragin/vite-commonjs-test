import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: ["./fancy_date.js"],
  },
  build: {
    commonjsOptions: {
      include: [/fancy_date/, /node_modules/],
    },
  },
});
