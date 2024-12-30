import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api' : 'https://e-commerce-beta-self-10.vercel.app',
    }
  },
  plugins: [react()],
})
