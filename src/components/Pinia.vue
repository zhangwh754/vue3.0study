<template>
  <h1 class="name">pinia存储的数据：{{ userName }}</h1>
  <el-button @click="btnClick1">修改王五</el-button>
  <el-button @click="btnClick2">修改李六</el-button>
  <div style="margin-top: 20px">
    <el-button @click="btnClick3">半秒后修改丁七</el-button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useUserStore } from '../store/user'
const userStore = useUserStore()
// const userName = computed(() => `尼古拉斯 ${userStore.name}`)
const userName = computed(() => userStore.fullName)

const btnClick1 = (): void => {
  userStore.updateName('王五')
}
const btnClick2 = (): void => {
  userStore.updateName('李六')
}
const btnClick3 = (): void => {
  userStore.asChangeName('丁七')
}
</script>
<style lang="scss" scoped>
.name {
  color: lightblue;
}
</style>
