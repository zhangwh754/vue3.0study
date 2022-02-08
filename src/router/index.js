import { createRouter, createWebHashHistory } from 'vue-router'

// 1. 定义路由组件.
import Pinia from '../components/Pinia.vue'
import Mock from '../components/Mock.vue'

// 2. 定义一些路由
const routes = [
  // {path: '', redirect: '/pinia'},
  { path: '/pinia', component: Pinia },
  { path: '/mock', component: Mock },
]

// 3. 创建路由实例并传递 `routes` 配置
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})