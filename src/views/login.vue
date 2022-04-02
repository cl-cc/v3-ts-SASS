<template>
  <div class="login">
    <div class="login-main">
      <div class="login-info">
        <div class="name">用户名</div>
        <el-input v-model="info.user_name" style="width: 200px" :prefix-icon="Avatar"></el-input>
      </div>
      <div class="login-info">
        <div class="name">密码</div>
        <el-input v-model="info.user_password" style="width: 200px" :prefix-icon="WarningFilled"></el-input>
      </div>
      <el-button @click="sign">登录</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ElMessage } from "element-plus";
import { Avatar, WarningFilled } from "@element-plus/icons-vue";
import { loginApi } from "../api/index";

type infoItem = {
  user_name: string;
  user_password: string;
};

const info = reactive<infoItem>({
  user_name: "",
  user_password: "",
});

function sign() {
  if (info.user_name === "" || info.user_password === "") {
    ElMessage.error("请输入用户名和密码");
    return;
  }
  localStorage.setItem("token", "214116");
  window.location.href = "/index/data";
  // ajax
  // loginApi(info).then(res => {
  //   if (res.data.status === 1) {
  //     ElMessage.success(res.data.msg);
  //     window.location.href = "/index/data";
  //   } else {
  //     ElMessage.error(res.data.msg);
  //   }
  // });
}
</script>
<style lang="less" scoped>
@c: #ccc;
.login {
  height: 100%;
  overflow: hidden;
  background: url(https://w.wallhaven.cc/full/x8/wallhaven-x8ye3z.jpg);
  &-main {
    width: 400px;
    height: 200px;
    border: 1px solid @c;
    box-shadow: 0 0 10px @c;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
  &-info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
    .name {
      width: 60px;
    }
  }
}
</style>
