import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://www.freetogame.com/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/rapidapi': {
        target: 'https://free-to-play-games-database.p.rapidapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rapidapi/, ''),
        headers: {
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.VITE_RAPIDAPI_KEY // Ensure Vite can access this environment variable
        }
      },
    },
  },
})
