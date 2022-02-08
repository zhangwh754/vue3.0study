import { createRouter, createWebHashHistory } from 'vue-router'

// 1. 定义路由组件.
import About from '../components/About.vue'

// 2. 定义一些路由
const routes = [
  {path: '', redirect: '/about'},
  { path: '/about', component: About },
]

// 3. 创建路由实例并传递 `routes` 配置
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})