import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三',
    }
  },
  getters: {
    fullName() {
      return `尼古拉斯 ${this.name}`
    },
  },
  // pinia 可以在actions中同时操作同步或异步
  actions: {
    // 同步修改
    updateName(name) {
      this.name = name
    },
    // 异步修改
    asChangeName(name) {
      setTimeout(() => {
        this.name = name
      }, 500);
    },
  },
})
