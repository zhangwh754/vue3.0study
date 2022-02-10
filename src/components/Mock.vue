<template>
  <button @click="getMockData">获取mock数据</button>
  <span>{{ mockData.name }}</span>
  <span>{{ mockData.from }}</span>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue-demi'

let mockData = ref([])

async function getMockData() {
  const { data: res } = await axios.get(import.meta.env.VITE_BASE_API)
  const { data } = await axios.get('/cors')  //调用node接口，跨域，在vite.config中配置取消跨域
  console.log(res)

  mockData.value = res.result || res.data
  console.log(data);
}

getMockData()
</script>

<style scoped>
span {
  margin-left: 20px;
}
</style>
