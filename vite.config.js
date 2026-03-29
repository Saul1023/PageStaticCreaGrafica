import { defineConfig } from 'vite'

export default defineConfig({
    root: '.',
    // CRÍTICO: En GitHub Pages el base DEBE ser el nombre exacto de tu repositorio
    base: '/PageStaticCreaGrafica/',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
            },
        },
    },
    server: {
        port: 3000,
        open: true,
    },
})