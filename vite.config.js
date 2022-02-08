import { defineConfig } from 'vite'
const { resolve } = require('path') //必须要引入resolve
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3400,
    open: true,
    // proxy: { // 代理配置
    //   '/dev': 'www.baidu.com'
    // },
  },
  "resolve.alias": {
    '/@/': resolve(__dirname, '@'), //把src改为@
  },
})
