<template>
  <div class="example-checkbox-group">
    <vzer-checkbox-group v-model="checkedList" @change="changeCheckboxGroup">
      <vzer-checkbox :width="30" normal-color="#ddd" label="被选中">被选中</vzer-checkbox>
      <vzer-checkbox :width="30" normal-color="#ddd" label="选中并禁用" :disabled="true">选中并禁用</vzer-checkbox>
      <vzer-checkbox :width="30" normal-color="#ddd" label="未选中">未选中</vzer-checkbox>
    </vzer-checkbox-group>

    <div>返回值{{checkedList}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedList: ["被选中", "选中并禁用"]
    };
  },
  methods: {
    changeCheckboxGroup(value) {
      this.checkedList = value;
    }
  }
};
</script>

<style lang='scss'>
.example-checkbox-group {
  padding: 10px 20px;
}
.vzer-checkbox-outside {
  margin: 0 10px 10px 0;
}
</style>
