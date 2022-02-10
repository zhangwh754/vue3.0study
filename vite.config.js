import vue from '@vitejs/plugin-vue'
const { resolve } = require('path') //必须要引入resolve
import { defineConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import viteCompression from 'vite-plugin-compression';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression(),
    viteMockServe({
      mockPath: './src/mock',
      supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
      watchFiles: true, // 监视文件更改
    }),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
  ],
  base: './',
  server: {
    port: 3400,
    open: true,
    proxy: {
      // 代理配置
			'/cors': {
        target: 'http://127.0.0.1:8080/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cors/, '')
      },
    },
  },
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'), //把src改为@
			'/img': './src/assets/img'	//图片的别名配置
		},
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
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    },
		sourcemap: true
  },
	css: {
		//css预处理
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@/assets/scss/globalVariable.scss";'
			}
		}
	}
})
