import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig((env) => {
  console.log(env)
  return {
    plugins: [vue()],
    server: {
      port: 3050,
    },
  }
})