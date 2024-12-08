import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ecsstatic } from "@acab/ecsstatic/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ecsstatic()],
});
