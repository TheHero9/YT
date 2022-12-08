import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/YT/',
  build: {
    chunkSizeWarningLimit: 1600,
  },
  plugins: [react()]
})
