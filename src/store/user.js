import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三',
    }
  },

  // 开启数据缓存
  persist: {
    enabled: true,//默认存储sessionStorage中，以id: 'user'作为key
    //也可以在 strategies 里自定义 key 值，并将存放位置由 sessionStorage 改为 localStorage。
    strategies: [
      {
        key: 'my_user',
        storage: localStorage,
        paths: ['name'] //指定要持久化的state属性
      }
    ]
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
      }, 500)
    },
  },
})
