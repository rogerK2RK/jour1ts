import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // Plugin pour utiliser les alias de tsconfig.json
  ],
  resolve: {
    alias: {
      "@pages": "/src/components/pages",
      "@molecules": "/src/components/molecules",
      "@atoms": "/src/components/atoms",
    },
  },
});