<template>
  <div class="navBox">
    <template v-for="item in list" :key="item.id">
      <el-menu @click.stop="getItem(item)" text-color="#162b64" active-text-color="#57caeb" router :unique-opened="true" :default-active="defaultPath">
        <el-sub-menu :index="item.rule_url" :key="item.rule_url" v-if="item.children?.length">
          <template #title>
            <el-icon><Grid /></el-icon>
            <span>{{ item.rule_name }}</span>
          </template>
          <Menu @on-item="getItem" :list="item.children" v-if="item?.children?.length" />
        </el-sub-menu>
        <el-menu-item :index="item.rule_url" v-else>
          <template #title>
            <el-icon><Histogram /></el-icon>
            <span>{{ item.rule_name }}</span>
          </template>
        </el-menu-item>
      </el-menu>
    </template>
  </div>
</template>
<script setup lang="ts">
import { Grid, Histogram } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const defaultPath = ref<string>();

type MenuItem = {
  id: number;
  parent_id: number;
  rule_name: string;
  rule_url: string;
  rule_icon?: string;
  children?: MenuItem[] | [];
};

type Props = {
  list?: MenuItem[];
};

//字面量接受
withDefaults(defineProps<Props>(), {
  list: () => [],
});

//将item传出去
const emit = defineEmits(['on-item']);

function getItem(item: MenuItem) {
  emit('on-item', item);
}

//监听
watch(
  () => router,
  (newValue: any) => {
    defaultPath.value = newValue.currentRoute.value.fullPath;
  },
  { immediate: true, deep: true }
);
</script>
<script lang="ts">
export default {
  name: 'Menu',
};
</script>
<style lang="less" scoped>
.navBox {
  height: 100%;
}
</style>
