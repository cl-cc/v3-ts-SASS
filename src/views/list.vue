<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="street_name" label="镇街名称" align="center" />
      <el-table-column prop="recover_num" label="覆盖户数量" align="center" />
      <el-table-column prop="coverage_num" label="回收点数量" align="center" />
      <el-table-column label="操作" align="center" width="200px" #default="{ row }">
        <el-button type="primary" :icon="Edit" @click="edit(row)" circle />
        <el-button type="danger" :icon="Delete" @click="del(row.id)" circle />
      </el-table-column>
    </el-table>
    <div class="example-pagination-block">
      <el-pagination @current-change="goPage" layout="prev, pager, next" :total="num" />
    </div>
  </div>
  <div>
    <el-dialog v-model="dialogVisible" :title="Tips" width="30%">
      <el-form ref="addForm" :model="addFormField" label-width="100px" :rules="rules">
        <el-form-item label="镇街名称" prop="street_name">
          <el-input v-model="addFormField.street_name" placeholder="请输入镇街名称"></el-input>
        </el-form-item>
        <el-form-item label="覆盖户数量" prop="recover_num">
          <el-input v-model="addFormField.recover_num" placeholder="请输入覆盖户数量"></el-input>
        </el-form-item>
        <el-form-item label="回收点数量" prop="coverage_num">
          <el-input v-model="addFormField.coverage_num" placeholder="请输入回收点数量"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">关闭</el-button>
          <el-button type="primary" @click="submit(addForm)">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { Edit, Delete } from "@element-plus/icons-vue";
import { listsApi, editApi } from "../api/lists";
import { ElMessage, FormInstance, ElMessageBox } from "element-plus";

type editItem = {
  street_name: string;
  recover_num: number;
  coverage_num: number;
  create_time?: string;
  update_time?: string;
  id?: number;
};

const rules = {
  street_name: [{ required: true, message: "请输入镇街名称", trigger: "blur" }],
};

const addFormField = ref<editItem>({
  street_name: "",
  recover_num: 0,
  coverage_num: 0,
});

const tableData = ref([] as editItem[]);
const currentPage = ref<number | string>(1);
const num = ref<number | string>(0);
const dialogVisible = ref<Boolean>(false);
const Tips = ref<string | null | undefined>();
const addForm = ref<FormInstance>();

getData();
function getData() {
  let data = {
    page: currentPage.value,
  };
  listsApi(data).then(res => {
    if (res.data.status === 1) {
      tableData.value = res.data.data;
      num.value = res.data.total;
    } else ElMessage.error(res.data.reason);
  });
}

function goPage(e: number) {
  currentPage.value = e;
  getData();
}

function edit(row: editItem) {
  Tips.value = "编辑";
  addFormField.value = JSON.parse(JSON.stringify(row));
  dialogVisible.value = true;
}

async function submit(formEl: FormInstance | undefined) {
  if (!formEl) return;
  await formEl.validate(valid => {
    if (valid) {
      editApi({ ...addFormField.value }).then(res => {
        console.log(res);
        if (res.data.status === 1) {
          dialogVisible.value = false;
          getData();
          ElMessage.success(res.data.reason);
        } else ElMessage.error(res.data.reason);
      });
    }
  });
}

function del(id: number) {
  ElMessageBox.confirm("确认删除?", "提示", {
    confirmButtonText: "确认",
    cancelButtonText: "关闭",
    type: "warning",
  }).then(() => {
    console.log(id);
    ElMessage({
      type: "success",
      message: "删除成功 - 未接接口",
    });
  });
}
</script>
<style lang="less" scoped>
.example-pagination-block {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
