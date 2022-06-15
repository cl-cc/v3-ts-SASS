<template>
  <div class="screenfull">
    <div class="screenfull-lang">
      <el-switch v-model="langNum" @click="changeLang" class="mb-2" active-text="En" inactive-text="中" />
    </div>
    <div v-if="isFullscreen" class="screenfull-full" @click="click">
      <FullScreen />
    </div>
    <div class="screenfull-full" @click="user_info">
      <Avatar />
    </div>
    <div class="screenfull-full" @click="go_out">
      <Lock />
    </div>
  </div>
</template>
<script setup lang="ts">
import screenfull from 'screenfull';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
import { FullScreen, Avatar, Lock, Warning } from '@element-plus/icons-vue';
import { ElMessageBox, ElMessage } from 'element-plus';
import { DEBOUNCE } from '@/symbol';
const sf = screenfull;
const Debounce = inject(DEBOUNCE) as Function;
const isFullscreen = ref<boolean>(true);
const langNum = ref<boolean>(false);
//全屏显示
function click() {
  sf.isEnabled && sf.toggle();
}
//语言切换
function changeLang() {
  let lang = langNum.value ? 'en' : 'zh';
  locale.value = lang;
  localStorage.setItem('lang', lang);
}
const check = inject('reload') as Function;

//用户事件
const user_info = Debounce(function () {
  ElMessage.info('功能开发中!');
}, 300);

//退出登录
function go_out() {
  ElMessageBox.confirm('确定要退出登录吗?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      localStorage.removeItem('token');
      window.location.href = '/';
    })
    .catch(() => {});
}
</script>
<style lang="less" scoped>
.screenfull {
  width: 250px;
  display: flex;
  margin-right: 20px;
  align-items: center;
  &-full {
    cursor: pointer;
    margin-right: 20px;
    width: 25px;
    height: 25px;
    color: #2292b1;
    margin-right: 25px;
    cursor: pointer;
  }
  &-lang {
    margin-right: 25px;
  }
}
</style>
