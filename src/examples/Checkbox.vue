<template>
  <div class="example-checkbox">
    <div class="example-checkbox-type">
      <div class="example-checkbox-title">基础用法</div>
      <div class="example-checkbox-list">
        <vzer-checkbox v-model="checkbox" @change="changeCheckbox" :disabled="disabled" background-color="#f00">wqe</vzer-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: true,
      disabled: false
    };
  },
  methods: {
    changeCheckbox() {
      console.log(this.checkbox);
    }
  }
};
</script>

<style lang='scss'>
.example-checkbox {
  padding: 10px 20px;
  .example-checkbox-type {
    padding-top: 10px;
    .example-checkbox-title {
      padding-bottom: 10px;
      color: rgba(69, 90, 100, 0.6);
      font-weight: normal;
      font-size: 14px;
    }
  }
  .example-checkbox-list {
    .vzer-checkbox {
      margin: 0 10px 10px 0;
    }
  }
}
</style>
