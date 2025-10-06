import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Vite config for project with 'client' as source folder
export default defineConfig({
  root: "client", // source folder
  build: {
    outDir: "dist", // relative to root (client/dist)
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client"),
    },
  },
  plugins: [react()],
});
