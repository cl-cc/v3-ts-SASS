<template>
  <div class="main">
    <el-button class="out" type="info" @click="exportBox">导出流程图</el-button>
    <div id="container" ref="container"></div>
  </div>
</template>
<script setup lang="ts">
import { dataListApi } from "@/api/bigdata";
import LogicFlow from "@logicflow/core";
import { Snapshot } from "@logicflow/extension";
import "@logicflow/core/dist/style/index.css";
LogicFlow.use(Snapshot);

nextTick(() => {
  const lf = new LogicFlow({
    container: document.getElementById("container") as HTMLDivElement,
    grid: true,
  });
  lf.render({
    nodes: [
      {
        id: "1",
        type: "rect",
        x: 100,
        y: 100,
        text: "节点1",
      },
      {
        id: "2",
        type: "circle",
        x: 300,
        y: 200,
        text: "节点2",
      },
    ],
    edges: [
      {
        sourceNodeId: "1",
        targetNodeId: "2",
        type: "polyline",
        text: "连线",
      },
    ],
  });
});

// getData();

// function getData() {
//   dataListApi({}).then(res => {
//     data.info = res.data;
//   });
// }

// // 假设我们需要从后端拿取数据，渲染到页面，就可以这么定义接口：
// interface List {    //interface定义List接口，包含两个成员
//   readonly id: number; //readonly代表只读,不可修改
//     name: string;
//     // [x: string]: any; 字符串索引签名，用任意的字符串去索引List，可以得到任意的结果
//     age?: number; //？表示这个属性可以有，也可以没有(可选属性)
// }
// interface Result {  // interface定义Result接口
//     data: List[]
// }
// function render(result: Result) { // 定义渲染函数
//     result.data.forEach((value) => {
//         console.log(value.id, value.name)
//         if (value.age) {
//             console.log(value.age)
//         }
//         // value.id++ 声明readonly后，++的话，会报错，说只读属性不许修改
//     })
// }
// let result = {
//     data: [
//         {id: 1, name: 'A', sex: 'male'},
//         {id: 2, name: 'B', age: 10}
//     ]
// }
// render(result)
// //如果把result换成data:[]数组的格式传入，就会报错。让编译器绕过类型检查的解决方式：
// //1.赋值给变量
// //2.render({} as Result)类型断言： 表示明确的告诉编译器，这个对象的类型就是Result
// //3.render(<Result>{}) 建议使用第一种，这种方法在react中会产生歧义

const data = reactive({
  info: null,
});

interface Item {
  status: string;
  ring: object;
}

const x = reactive<Item>({
  status: "",
  ring: {
    one: 0,
    two: 0,
  },
});

function getList(data: any) {
  x.ring = data.data.info.ring;
  x.status = data.data.info.status;
}

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
<style lang="less" scoped>
.main {
  .out {
    margin: 20px;
  }
  #container {
    width: 100%;
    height: 500px;
  }
}
</style>
