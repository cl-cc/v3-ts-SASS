<template>
  <div class="main">
    <Header />
    <div class="main-content">
      <Sidebar />
      <Content />
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from "./common/header.vue";
import Sidebar from "./common/sidebar.vue";
import Content from "./common/content.vue";
</script>
<style lang="less" scoped>
.main {
  height: 100%;
  &-content {
    display: flex;
    border-top: 1px solid #ccc;
  }
}
</style>
