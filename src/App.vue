<template>
  <Home :count="count" />
  <button @click="increase">增加({{count}})</button>
  <About />
</template>

<script setup>
import About from './components/About.vue'
import Home from './components/Home.vue'
import { ref } from 'vue'

let count = ref(0)
const increase = () => count.value++

</script>



<style>
</style>
