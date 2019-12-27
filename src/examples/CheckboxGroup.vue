<template>
  <div class="example-checkbox-group">
    <div class="example-checkbox-group-type">
      <div class="example-checkbox-group-title">基础用法</div>
      <div class="example-checkbox-group-list">
        <vzer-checkbox-group v-model="checkedList" @change="changeCheckboxGroup">
          <vzer-checkbox :width="30" normal-color="#ddd" label="被选中">被选中</vzer-checkbox>
          <vzer-checkbox :width="30" normal-color="#ddd" label="选中并禁用" :disabled="true">选中并禁用</vzer-checkbox>
          <vzer-checkbox :width="30" normal-color="#ddd" label="未选中">未选中</vzer-checkbox>
        </vzer-checkbox-group>
      </div>
    </div>

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
  .example-checkbox-group-type {
    padding-top: 10px;
    .example-checkbox-group-title {
      padding-bottom: 10px;
      color: rgba(69, 90, 100, 0.6);
      font-weight: normal;
      font-size: 14px;
    }
  }
  .example-checkbox-group-list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
  }
}
.vzer-checkbox-outside {
  margin: 0 10px 10px 0;
}
</style>
