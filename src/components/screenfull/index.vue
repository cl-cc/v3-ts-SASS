<template>
  <div class="screenfull">
    <div v-if="isFullscreen" class="screenfull-full" @click="click">
      <FullScreen />
    </div>
    <div @click="user_info">
      <Avatar />
    </div>
    <div @click="go_out">
      <Lock />
    </div>
  </div>
</template>
<script setup lang="ts">
import screenfull from "screenfull";
import { FullScreen, Avatar, Lock } from "@element-plus/icons-vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { DEBOUNCE } from "@/symbol";
const sf = screenfull;
const Debounce = inject(DEBOUNCE) as Function;
const isFullscreen = ref<boolean>(true);

//全屏显示
function click() {
  sf.isEnabled && sf.toggle();
}
//用户事件
const user_info = Debounce(function () {
  ElMessage.info("功能开发中!");
}, 300);

//退出登录
function go_out() {
  ElMessageBox.confirm("确定要退出登录吗?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      localStorage.removeItem("token");
      window.location.href = "/";
    })
    .catch(() => {});
}
</script>
<style lang="less" scoped>
.screenfull {
  width: 150px;
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
    margin-right: 25px;
    cursor: pointer;
  }
}
</style>
