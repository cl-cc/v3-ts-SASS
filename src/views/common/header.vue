<template>
  <div class="header">
    <div class="header-box">
      <screenfull />
    </div>
  </div>
</template>
<script setup lang="ts">
import screenfull from "@/components/screenfull/index.vue";
</script>
<style scoped lang="less">
@color-f: #fff;
@color-c: #ccc;
.header {
  width: 100%;
  height: 50px;
  background: @color-f;
  display: flex;
  align-items: center;
  &-box {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
