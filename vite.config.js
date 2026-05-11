import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages 저장소명이 다르면 base 값을 수정하십시오.
export default defineConfig({
  base: "/21c-suntzu-portal/",
  plugins: [react()]
});
