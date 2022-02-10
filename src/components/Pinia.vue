<template>
  <h1 class="name">pinia存储的数据：{{ userName }}</h1>
  <el-button @click="btnClick1">修改王五</el-button>
  <el-button @click="btnClick2">修改李六</el-button>
  <div style="margin-top: 20px">
    <el-button @click="btnClick3">半秒后修改丁七</el-button>
  </div>
	<!-- 测试图片别名配置 -->
	<!-- <img src="/img/pinia持久化.png"> -->
</template>

<script>

console.log('测试自动删除log');

import { computed, ref } from 'vue'
import { useUserStore } from '../store/user.js'
export default {
  name: 'Pinia',
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
<style scoped>
  .name {
    color: #333;
  }
</style>