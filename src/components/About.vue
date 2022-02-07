<template>
  <h1>{{name}}</h1>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "About",
  setup() {
    let name = ref('About12')

    return {
      name
    }
  },
};
</script>