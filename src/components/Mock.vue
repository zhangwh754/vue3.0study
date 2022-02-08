<template>
  <button @click="getMockData">获取mock数据</button>
</template>

<script setup lang="ts">
import axios from 'axios'

async function getMockData() {
  const { data } = await axios.get('/api/getUser')
  console.log(data.data);
}

getMockData()

</script>