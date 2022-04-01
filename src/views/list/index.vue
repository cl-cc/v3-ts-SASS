<template>
  <div>
    <!-- table -->
    <itemTable @on-list="go_page" :list="tableList.tableData" :page="tableList.num" />
  </div>
</template>
<script setup lang="ts">
import itemTable from "./common/table.vue";
import { listsApi } from "@/api/lists";
import { ElMessage } from "element-plus";

type Item = {
  tableData: any;
  currentPage: number;
  num: number;
};

//分页
function go_page(val: number) {
  tableList.currentPage = val;
  getData();
}

const tableList = reactive<Item>({
  tableData: [],
  currentPage: 1,
  num: 0,
});

//获取数据
getData();
function getData() {
  let data = {
    page: tableList.currentPage,
  };
  listsApi(data).then(res => {
    if (res.data.status === 1) {
      tableList.tableData = res.data.data;
      tableList.num = res.data.total;
    } else ElMessage.error(res.data.msg);
  });
}
</script>
<style lang="less" scoped></style>
