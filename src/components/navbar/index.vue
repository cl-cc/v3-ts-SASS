<template>
  <div class="navbar">
    <ul class="navbar-ul">
      <li :class="{ active: !isActive(item.path) }" @click="goLink(item.path)" class="navbar-li" v-for="item in tagsList">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

type NavbarItem = {
  title: string;
  path: string;
};

const tagsList = ref<NavbarItem[]>([]);
const router = useRouter();

watch(
  () => router,
  (newValue: any) => {
    setTags(newValue);
  },
  { immediate: true, deep: true }
);

function goLink(path: string) {
  router.push(path);
}

function isActive(path: string) {
  return router.currentRoute.value.fullPath === path;
}

function setTags(route: any) {
  const isExist = tagsList.value.some((item: any) => {
    return item.path === route.currentRoute.value.fullPath;
  });
  if (!isExist) {
    if (tagsList.value.length >= 12) {
      tagsList.value.shift();
    }
    tagsList.value.push({
      title: route.currentRoute.value.name,
      path: route.currentRoute.value.fullPath,
    });
  }
}
</script>
<style lang="less" scoped>
.navbar {
  width: 99%;
  height: 50px;
  background: #fff;
  align-items: center;
  display: flex;
  padding-left: 20px;
  box-shadow: 0 0 10px rgb(240, 237, 237);
  .active {
    background: #fff;
    color: #777;
  }
  &-ul {
    display: flex;
    align-items: center;
  }
  &-li {
    width: 50px;
    height: 25px;
    line-height: 25px;
    background: #5ddab4;
    font-size: 14px;
    color: #fff;
    margin-right: 10px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid rgba(124, 141, 181, 0.3);
    cursor: pointer;
  }
}
</style>
