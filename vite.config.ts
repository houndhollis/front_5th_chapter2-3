import { defineConfig, Plugin } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import path from "path"

function apiReplace(): Plugin {
  return {
    name: "api-replace",
    apply: "build",
    transform(code, id) {
      if (!id.match(/\.(ts|js|tsx|jsx)$/)) return
      return code.replace(
        /(['"`])\/api([^"'`\\]*)\1/g,
        (_, quote, apiPath) => `${quote}https://dummyjson.com${apiPath}${quote}`,
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), apiReplace()],
  base: process.env.NODE_ENV === "production" ? "/front_5th_chapter2-3/" : "/",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        // target: 'https://jsonplaceholder.typicode.com',
        target: "https://dummyjson.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
