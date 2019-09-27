<template>
    <div class="example-button">
        <div class="example-button-type">
            <div class="example-button-title">按钮类型</div>
            <div class="example-button-list">
                <vzer-button>默认按钮</vzer-button>
                <vzer-button type="primary">主要按钮</vzer-button>
                <vzer-button type="success">成功按钮</vzer-button>
                <vzer-button type="info">信息按钮</vzer-button>
                <vzer-button type="warning">警告按钮</vzer-button>
                <vzer-button type="error">错误按钮</vzer-button>
            </div>
        </div>
        <div class="example-button-type">
            <div class="example-button-title">按钮大小</div>
            <div class="example-button-list">
                <vzer-button type="primary">普通按钮</vzer-button>
                <vzer-button type="primary" size="large">大号按钮</vzer-button>
                <vzer-button type="primary" size="medium">中等按钮</vzer-button>
                <vzer-button type="primary" size="small">小号按钮</vzer-button>
            </div>
        </div>
        <div class="example-button-type">
            <div class="example-button-title">按钮形状</div>
            <div class="example-button-list">
                <vzer-button type="primary">普通按钮</vzer-button>
                <vzer-button type="primary" shape="rectangle">直角按钮</vzer-button>
                <vzer-button type="primary" shape="circle">圆角按钮</vzer-button>
            </div>
        </div>
        <div class="example-button-type">
            <div class="example-button-title">禁用状态</div>
            <div class="example-button-list">
                <vzer-button type="primary" :disabled="true">禁用按钮</vzer-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.example-button {
  padding: 10px 20px;
  .example-button-type {
    padding-top: 10px;
    .example-button-title {
      padding-bottom: 10px;
      color: rgba(69, 90, 100, 0.6);
      font-weight: normal;
      font-size: 14px;
    }
  }
  .example-button-list {
    .vzer-button {
      margin: 0 10px 10px 0;
    }
  }
}
</style>
