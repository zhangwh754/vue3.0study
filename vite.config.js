import vue from '@vitejs/plugin-vue'
const { resolve } = require('path') //必须要引入resolve
import { defineConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: './src/mock',
      supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
      watchFiles: true, // 监视文件更改
    }),
  ],
  base: './',
  server: {
    port: 3400,
    open: true,
    // proxy: { // 代理配置
    //   '/dev': 'www.baidu.com'
    // },
  },
  resolve: {
    alias: {
      '/@/': resolve(__dirname, '@'), //把src改为@
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        //生产环境移除console
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
