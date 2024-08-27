import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com/macros/s/AKfycbxztSR9XTCKYofzLQsGtaQvLN8JNIrkXJhzBOBoWHGiLDifaiKfT_blEhvaAKYn81akrg/exec',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
  plugins: [react()],
   base: './',
})