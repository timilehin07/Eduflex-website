import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Vite config for project with 'client' as source folder
export default defineConfig({
  root: path.resolve(__dirname, "client"),   // your source folder
  build: {
    outDir: path.resolve(__dirname, "client/dist"), // output folder
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
    },
  },
  plugins: [react()],  // only React plugin here
});
