<template>
  <h1>{{ count }}</h1>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number,
    default: 0
  }
})
</script>