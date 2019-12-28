<template>
  <div class="example-switch">
    <div class="example-switch-type">
      <div class="example-switch-title">基础用法</div>
      <div class="example-switch-list">
        <vzer-switch v-model="value"></vzer-switch>
      </div>
      <div class="value-text">返回值{{value}}</div>
    </div>
    <div class="example-switch-type">
      <div class="example-switch-title">自定义选中颜色</div>
      <div class="example-switch-list">
        <vzer-switch v-model="value" background-color="#ff4949"></vzer-switch>
      </div>
    </div>
    <div class="example-switch-type">
      <div class="example-switch-title">自定义未选中时颜色</div>
      <div class="example-switch-list">
        <vzer-switch v-model="value" normal-color="#6fb7c6"></vzer-switch>
      </div>
    </div>
    <div class="example-switch-type">
      <div class="example-switch-title">自定义大小</div>
      <div class="example-switch-list">
        <vzer-switch v-model="value" width="60" height="30"></vzer-switch>
      </div>
    </div>
    <div class="example-switch-type">
      <div class="example-switch-title">禁用状态</div>
      <div class="example-switch-list">
        <vzer-switch :disabled="true"></vzer-switch>
        <vzer-switch v-model="value" :disabled="true"></vzer-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false
    };
  },
  methods: {
    handleChange(data) {
      console.log(data);
    }
  }
};
</script>

<style lang="scss">
.example-switch {
  padding: 10px 20px;
  .example-switch-type {
    padding-top: 10px;
    .example-switch-title {
      padding-bottom: 10px;
      color: rgba(69, 90, 100, 0.6);
      font-weight: normal;
      font-size: 14px;
    }
  }
  .example-switch-list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
  }
  .value-text {
    padding-top: 10px;
  }
}
</style>
