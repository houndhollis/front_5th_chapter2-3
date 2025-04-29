/// <reference types="vitest" />
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    alias: {
      "@": path.resolve(__dirname, "src"), // 경로 alias 설정
    },
  },
})
