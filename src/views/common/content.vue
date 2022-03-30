<template>
  <div class="content">
    <navBar />
    <router-view />
  </div>
</template>
<script setup lang="ts">
import navBar from "../../components/navbar/index.vue";
</script>
<style scoped lang="less">
.content {
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #fff;
}
</style>
