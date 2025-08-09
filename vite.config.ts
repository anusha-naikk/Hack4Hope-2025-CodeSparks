import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Hack4Hope-2025-CodeSparks/',
  plugins: [react()],
})