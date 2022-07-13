import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions(), eslint()],
  build: {
    lib: {
      entry: './packages/index.js',
      name: 'z-ui'
    }
  }
})
