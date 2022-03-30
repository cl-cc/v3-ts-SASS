<template>
  <div class="main">
    <!-- 父组件 -->
    <div class="left">
      <topcharts :data="data" />
    </div>
  </div>
</template>
<script setup lang="ts">
import topcharts from "./common/topcharts.vue";
import { dataListApi } from "@/api/bigdata";

getData();

function getData() {
  dataListApi({}).then(res => {
    data.info = res.data;
  });
}
const data = reactive({
  info: null,
});

type sourceItem = {
  market_name: string;
  bill_num: number;
  de_ma: string;
  market_grade?: number;
};

type longItem = {
  market_name: string;
  area_name: string;
  num: number;
  rank: number;
};

const sourceList = reactive<sourceItem[]>([
  {
    market_name: "",
    bill_num: 0,
    de_ma: "",
    market_grade: 0,
  },
]);
const longCheckList = reactive<longItem[]>([
  {
    market_name: "",
    area_name: "",
    num: 0,
    rank: 0,
  },
]);
const middleInfo = reactive({
  market_num: "",
  market_area: "",
  merchant_num: "",
  year_money: "",
  sum_passenger: "",
  detection_count: "",
});
const passeInfo = reactive({
  passenger_flow_sum: "",
  total_money_sum: "",
});
const foodInfo = reactive({
  detection_type_one_count: "",
  detection_type_three_count: "",
  detection_type_two_count: "",
});
function go(e: number) {
  console.log(e);
}
</script>
<style lang="less" scoped></style>
