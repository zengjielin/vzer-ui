<template>
  <div class="example-index">
    <div class="example-header-wrapper">
      <div class="frame-info">
        <div class="freme-logo">
          <img src="@/assets/img/logo.png" alt="" srcset="">
        </div>
        <!-- <div class="frame-intro">轻量、可靠的移动端Vue组件库</div> -->
      </div>
    </div>
    <div class="example-header-title">基础组件</div>
    <div class="example-component-list-wrapepr">
      <routerLink to="/example_button" class="example-component-item-wrapper" @click="gotoButtonPage">
        <div>
          <img src="@/assets/img/button.png" alt="">
        </div>
        <div class="example-component-name">按钮</div>
      </routerLink>
    </div>
    <div class="example-header-title">表单组件</div>
    <div class="example-component-list-wrapepr">
      <routerLink to="/example_checkbox" class="example-component-item-wrapper">
        <div>
          <img src="@/assets/img/checkbox.png" alt="">
        </div>
        <div class="example-component-name">多选框</div>
      </routerLink>
      <routerLink to="/example_checkbox_group" class="example-component-item-wrapper">
        <div>
          <img src="@/assets/img/checkbox_group.png" alt="">
        </div>
        <div class="example-component-name">多选框组</div>
      </routerLink>
      <routerLink to="/example_radio" class="example-component-item-wrapper">
        <div>
          <img src="@/assets/img/radio.png" alt="">
        </div>
        <div class="example-component-name">单选框</div>
      </routerLink>
      <routerLink to="/example_switch" class="example-component-item-wrapper">
        <div>
          <img src="@/assets/img/switch.png" alt="">
        </div>
        <div class="example-component-name">开关</div>
      </routerLink>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoButtonPage() {
      this.$router.push({ name: "Button" });
    }
  }
};
</script>

<style lang='scss'>
.example-index {
  width: 100%;
  min-height: 100%;
  .example-header-wrapper {
    padding: 30px 30px 0px;
    box-sizing: border-box;
    .frame-info {
      display: flex;
      align-items: flex-end;
      padding-bottom: 10px;
      .freme-logo {
        width: 223px;
        height: 53px;
        img {
          width: 223px;
          height: 53px;
        }
      }
      .frame-intro {
        color: #7d7e80;
        font-size: 14px;
      }
    }
  }
  .example-header-title {
    font-size: 20px;
    font-weight: 600;
    color: #7d7e80;
    padding: 30px 30px 0px;
  }
  .example-component-list-wrapepr {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    .example-component-item-wrapper {
      width: 95px;
      height: 95px;
      margin: 10px;
      color: #7d7e80;
      font-size: 16px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .example-component-name {
        padding-top: 10px;
      }
    }
    .example-component-item-wrapper:active {
      background-color: #f2f3f5;
    }
  }
}
</style>
