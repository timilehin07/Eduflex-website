import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // The folder where your React app lives
  root: path.resolve(__dirname, "client"),

  // Use relative paths so assets load correctly on Vercel
  base: "./",

  build: {
    // Output folder for production build
    outDir: path.resolve(__dirname, "dist/spa"),
    emptyOutDir: true, // clean folder before build
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});
