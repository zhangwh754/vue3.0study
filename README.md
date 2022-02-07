## Vue 3 + Vite的学习

### 1、🔧基本构建

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

