<template>
  <router-view v-if="isRouterAlive" />
</template>
<script setup lang="ts">
const isRouterAlive = ref<boolean>(true);
function reload() {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
}
provide('reload', reload);
</script>
<style lang="less">
html,
body,
#app {
  height: 100%;
  overflow-x: hidden;
}
</style>
