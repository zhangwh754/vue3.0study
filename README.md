## Vue 3 + Vite的学习

### 1、🔧基本构建

#### 部署地址
在线浏览：https://zhangwh754.github.io/vue3.0study/

#### 项目创建

使用vite创建了项目（本项目为vue3.0）

使用 NPM:

```sh
npm init vite@latest
```

使用 Yarn:

```sh
yarn create vite
```

`运行`项目

```sh
npm run dev
```

#### script setup语法

[单文件组件  | Vue.js (vuejs.org)](https://v3.cn.vuejs.org/api/sfc-script-setup.html)

:star:<script setup> 是编译语法糖

script中的代码会被编译为setup中的内容

`不同`

- 不用return声明的变量、函数...
- 不用声明导入的组件...
- 在 <script setup> 中必须使用 defineProps 和 defineEmits API 来声明 props 和 emits
- ...

### 2、✨路由的简单使用

### 创建路由

```js
//src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'

// 1. 定义路由组件.
import About from '../components/About.vue'

// 2. 定义一些路由
const routes = [
  { path: '/about', component: About },
]

// 3. 创建路由实例并传递 `routes` 配置
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
```

### 使用路由

```vue
//app.vue

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

//router.push('/about')
</script>
```

### 其他

#### vite.config.js的配置

```js
import { defineConfig } from 'vite'
const { resolve } = require('path') //必须要引入resolve
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3400,
    open: true,
  },
  "resolve.alias": {
    '/@/': resolve(__dirname, '@'), //把src改为@
  },
})
```

### 3、✨Pinia的简单使用

