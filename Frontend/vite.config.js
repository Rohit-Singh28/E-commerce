import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api' :'https://e-commerce-navxvgok9-rohit-singhs-projects-81ceb784.vercel.app/',
    }
  },
  plugins: [react()],
})
