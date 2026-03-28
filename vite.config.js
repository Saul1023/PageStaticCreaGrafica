import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  root: '.',
  // CAMBIO CRÍTICO: Debe ser el nombre de tu repo en GitHub
  base: '/PageStaticCreaGrafica/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
})