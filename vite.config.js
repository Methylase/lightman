import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      // Always allow localhost for dev
      "localhost",
      "127.0.0.1",
      "lightmanng-gahdb6dsecayd4hq.centralus-01.azurewebsites.net",
      "www.lightmanng.com",
      "lightmanng.com",
      // Pull host from env (e.g. when running on Azure)
    ].filter(Boolean),
  },
});
