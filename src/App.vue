<template>
  <div class="linkBox">
    <div class="linkItem" v-for="(item, index) in routerArr" :key="index">
      <router-link tag="button" :to='{path: `${item}`}'>
        <button>{{item}}</button>
      </router-link>
    </div>
    <div v-for="item in 5" :key="item" class="linkItem placeHolder"></div>
  </div>
  <router-view></router-view>
</template>

<script setup>
  const routerArr = [
    'mock',
    'pinia',
  ]
</script>



<style scoped>
  .linkBox {
    display: flex;
    justify-content: space-between;
    align-self: center;
    flex-wrap: wrap;
    width: 600px;
  }
  .linkItem {
    display: flex;
    justify-content: center;
    width: 90px;
    padding-top: 10px;
    margin-top: 20px;
  }
  .placeHolder {
    height: 0;
  }
</style>
