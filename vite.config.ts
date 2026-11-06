import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Production is hosted at https://react.customdev.solutions/flooring-alliance/
  base: mode === "production" ? "/flooring-alliance/" : "/",
  plugins: [react(), tailwindcss()],
}));
