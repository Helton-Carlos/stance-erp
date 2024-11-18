import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),  
    Components({
      dts: true, 
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/assets/scss/global.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: [
      { find: "@/", replacement: "/src" },
      { find: "@/assets", replacement: "/src/assets" }, 
      { find: "@/router", replacement: "/src/router" },
      { find: "@/stores", replacement: "/src/stores" },
      { find: "@/components", replacement: "/src/components" },
      { find: "@/pages", replacement: "/src/pages" },
      { find: "@/types", replacement: "/src/types" },
      { find: "@/utils", replacement: "/src/utils" },
    ],
  },
})
