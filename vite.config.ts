import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),  
    Components({
      dts: true, 
    }),
    VitePWA({ 
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Stance ERP',
        short_name: 'Stance',
        description: 'Stance ERP é um projeto de sistemas ERP.',
        theme_color: '#ffffff',
        start_url:'/',
        lang: 'pt-br',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/assets/scss/global.scss" as *;`,
      },
    },
  },
})
