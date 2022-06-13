<template>
  <div class="tac">
    <Menu @on-item="getItem" :list="list" />
  </div>
</template>

<script lang="ts" setup>
import Menu from './menu.vue';

type MenuItem = {
  id: number;
  parent_id: number;
  rule_name: string;
  rule_url: string;
  rule_icon?: string;
  children?: MenuItem[] | [];
};

//接受menu传过来的参数
function getItem(item: MenuItem) {
  console.log(item.rule_url);
}

const list = reactive<MenuItem[]>([
  {
    id: 0,
    parent_id: 0,
    rule_icon: 'location',
    rule_name: '系统首页',
    rule_url: '/index/data',
  },
  {
    id: 1,
    parent_id: 1,
    rule_icon: 'location',
    rule_name: '图标/组件',
    rule_url: '/index',
    children: [
      {
        id: 1,
        parent_id: 1,
        rule_icon: 'location',
        rule_name: '列表',
        rule_url: '/index/list',
        children: [
          {
            id: 1,
            parent_id: 1,
            rule_icon: 'location',
            rule_name: '简易列表',
            rule_url: '/index/list',
          },
          {
            id: 2,
            parent_id: 2,
            rule_icon: 'location',
            rule_name: '复杂列表',
            rule_url: '/index/complexList',
          },
          {
            id: 3,
            parent_id: 3,
            rule_icon: 'location',
            rule_name: '封装列表',
            rule_url: '/index/packageList',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    parent_id: 2,
    rule_icon: 'location',
    rule_name: '错误页面',
    rule_url: '/index',
    children: [
      {
        id: 1,
        parent_id: 1,
        rule_icon: 'location',
        rule_name: '401',
        rule_url: '/error/401',
      },
      {
        id: 1,
        parent_id: 1,
        rule_icon: 'location',
        rule_name: '404',
        rule_url: '/error/404',
      },
    ],
  },
  {
    id: 3,
    parent_id: 3,
    rule_icon: 'location',
    rule_name: '数据可视化',
    rule_url: '/index',
    children: [
      {
        id: 1,
        parent_id: 1,
        rule_icon: 'location',
        rule_name: '流程图',
        rule_url: '/bigdata/index',
      },
    ],
  },
]);
</script>

<style lang="less" scoped>
.tac {
  width: 250px;
  overflow: hidden;
}
</style>
