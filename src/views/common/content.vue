<template>
  <div class="content">
    <navBar />
    <router-view #default="{ route, Component }">
      <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
        <component :is="Component" :route="route" />
      </transition>
    </router-view>
  </div>
</template>
<script setup lang="ts">
import "animate.css";
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
