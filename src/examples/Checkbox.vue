<template>
  <div class="example-checkbox">
    <div class="example-checkbox-type">
      <div class="example-checkbox-title">基础用法</div>
      <div class="example-checkbox-list">
        <vzer-checkbox v-model="nochecked" :width="30" normal-color="#ddd">未选中</vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" background-color="#25c6fc">已选中</vzer-checkbox>
      </div>
    </div>
    <div class="example-checkbox-type">
      <div class="example-checkbox-title">自定义尺寸</div>
      <div class="example-checkbox-list">
        <vzer-checkbox v-model="checked" :width="20" background-color="#25c6fc" normal-color="#000"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" background-color="#6fb7c6"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="40" background-color="#ed7ab5"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="50" background-color="#ff534d"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="60" background-color="#e03636"></vzer-checkbox>
      </div>
    </div>
    <div class="example-checkbox-type">
      <div class="example-checkbox-title">自定义钩子颜色</div>
      <div class="example-checkbox-list">
        <vzer-checkbox v-model="checked" :width="30" color="#25c6fc" background-color="#fff"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" color="#6fb7c6" background-color="#fff"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" color="#ed7ab5" background-color="#fff"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" color="#ff534d" background-color="#fff"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" color="#e03636" background-color="#fff"></vzer-checkbox>
      </div>
    </div>
    <div class="example-checkbox-type">
      <div class="example-checkbox-title">自定义选中状态背景颜色</div>
      <div class="example-checkbox-list">
        <vzer-checkbox v-model="checked" :width="30" background-color="#25c6fc"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" background-color="#6fb7c6"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" background-color="#ed7ab5"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" background-color="#ff534d"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" background-color="#e03636"></vzer-checkbox>
      </div>
    </div>
    <div class="example-checkbox-type">
      <div class="example-checkbox-title">自定义未选中状态背景颜色</div>
      <div class="example-checkbox-list">
        <vzer-checkbox v-model="nochecked" :width="30" normal-color="#ddd" background-color="#25c6fc"></vzer-checkbox>
        <vzer-checkbox v-model="nochecked" :width="30" normal-color="#000" background-color="#6fb7c6"></vzer-checkbox>
      </div>
    </div>
    <div class="example-checkbox-type">
      <div class="example-checkbox-title">圆角</div>
      <div class="example-checkbox-list">
        <vzer-checkbox v-model="checked" :width="30" :round="true" background-color="#25c6fc"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" :round="true" background-color="#6fb7c6"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" :round="true" background-color="#ed7ab5"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" :round="true" background-color="#ff534d"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" :round="true" background-color="#e03636"></vzer-checkbox>
      </div>
    </div>
    <div class="example-checkbox-type">
      <div class="example-checkbox-title">禁用状态</div>
      <div class="example-checkbox-list">
        <vzer-checkbox v-model="checked" :width="30" background-color="#25c6fc" :disabled="true"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" background-color="#6fb7c6" :disabled="true"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" background-color="#ed7ab5" :disabled="true"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" background-color="#ff534d" :disabled="true"></vzer-checkbox>
        <vzer-checkbox v-model="checked" :width="30" background-color="#e03636" :disabled="true"></vzer-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      nochecked: false
    };
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
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    .vzer-checkbox {
      margin: 5px;
    }
  }
}
</style>
