<template>
  <button @click="getMockData">获取mock数据</button>
  <span>{{ (mockData as {name: string}).name }}</span>
  <span>{{ (mockData as {from: string}).from }}</span>
</template>

<script setup lang="ts">
import axios from 'axios'
import { Ref, ref } from 'vue-demi'

let mockData: Ref<{}> = ref({})

async function getMockData(): Promise<void> {
  const { data: res } = await axios.get(import.meta.env.VITE_BASE_API as string)
  // const { data } = await axios.get('/cors') //调用node接口，跨域，在vite.config中配置取消跨域
  console.log(res)

  mockData.value = res.result || res.data
  // console.log(data)
}
getMockData()
</script>
<style lang="scss" scoped>
span {
  margin-left: 20px;
}
</style>
