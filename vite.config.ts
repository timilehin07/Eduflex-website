import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  root: ".", // root is project root
  base: "./", // use relative paths so assets load correctly
  build: {
  outDir: "client/dist", // build will be inside client/dist
  emptyOutDir: true,
}

  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"), // adjust to your folder structure
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});
