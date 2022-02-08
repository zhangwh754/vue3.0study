<template>
  <h1>pinia存储的数据：{{ userName }}</h1>
  <button @click="btnClick1">修改王五</button>
  <button @click="btnClick2">修改李六</button>
  <div>
    <button @click="btnClick3">半秒后修改丁七</button>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useUserStore } from '../store/user.js'
export default {
  name: 'About',
  setup() {
    const userStore = useUserStore()
    // const userName = computed(() => `尼古拉斯 ${userStore.name}`)
    const userName = computed(() => userStore.fullName)

    const btnClick1 = () => {
      userStore.updateName('王五')
    }
    const btnClick2 = () => {
      userStore.updateName('李六')
    }
    const btnClick3 = () => {
      userStore.asChangeName('丁七')
    }

    return {
      userName,
      btnClick1,
      btnClick2,
      btnClick3,
    }
  },
}
</script>