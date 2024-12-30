import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://vercel.com/rohit-singhs-projects-81ceb784/e-commerce/4Xcnt33uihQKmTYvLeqtrpipLhVv',
    }
  },
  plugins: [react()],
})
