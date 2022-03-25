<template>
  <div class="screenfull">
    <div v-if="isFullscreen" class="screenfull-full" @click="click">
      <Rank />
    </div>
    <div>
      <Avatar />
    </div>
  </div>
</template>
<script setup lang="ts">
import screenfull from "screenfull";
import { Rank, Avatar } from "@element-plus/icons-vue";
const sf = screenfull;

const isFullscreen = ref<boolean>(true);

function click() {
  sf.isEnabled && sf.toggle();
}
</script>
<style lang="less" scoped>
.screenfull {
  width: 100px;
  display: flex;
  margin-right: 20px;
  &-full {
    cursor: pointer;
    margin-right: 20px;
  }
  div {
    width: 25px;
    height: 25px;
    color: #2292b1;
  }
}
</style>
