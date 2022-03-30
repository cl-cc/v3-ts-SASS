import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), AutoImport({
    imports: ['vue'],
    dts: 'src/auto-import.d.ts'
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://hangzhou.linkunst.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
