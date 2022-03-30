<template>
  <div>
    <el-dialog v-model="dialogVisible" :title="Tips" width="30%" :before-close="close">
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
          <el-button @click="close(addForm)">关闭</el-button>
          <el-button type="primary" @click="submit(addForm)">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { FormInstance } from "element-plus";

const addForm = ref<FormInstance>();

type Item = {
  dialogVisible: boolean;
  Tips: string;
  addFormField: any;
};

const rules = {
  street_name: [{ required: true, message: "请输入镇街名称", trigger: "blur" }],
  recover_num: [{ required: true, message: "请输入覆盖户数量", trigger: "blur" }],
  coverage_num: [{ required: true, message: "请输入回收点数量", trigger: "blur" }],
};

const emit = defineEmits(["on-submit", "on-close"]);

async function submit(formEl: FormInstance | undefined) {
  if (!formEl) return;
  await formEl.validate(valid => {
    if (valid) {
      emit("on-submit", data.addFormField);
    }
  });
}

function close(formEl: FormInstance | undefined) {
  if (!formEl) return;
  formEl.resetFields();
  emit("on-close", false);
}

const data = defineProps<Item>();
</script>
<style lang="less" scoped></style>
