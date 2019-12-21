<template>
    <div class="checkbox-wrapper">
        <input id="vzer-checkbox" name="vzer-checkbox" type="checkbox" :disabled="disabled" :checked="checked" @change="$emit('change', $event.target.checked)">
        <label for="vzer-checkbox"></label>
        <slot>12</slot>
    </div>
</template>

<script>
export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: "#25c6fc"
    }
  },
  computed: {}
};
</script>

<style>
/*lable标签的大小、位置、背景颜色更改，在css选择时，“+”代表相邻元素，即当前元素的下一元素*/
#vzer-checkbox + label {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #ddd;
}
#vzer-checkbox:checked + label {
  background: #25c6fc;
}

#vzer-checkbox:disabled + label {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  cursor: not-allowed;
  border: 1px solid #ddd;
  background: #ddd;
}

/*当input框为选中状态时，lable标签的样式，其中在css选择时，“：”表示当前input框的值，即checked；
      该部分主要对显示的“对号”的大限居中方式，显示颜色进行了设置*/
#vzer-checkbox + label::before {
  display: block;
  content: "\2714   ";
  text-align: center;
  font-size: 14px;
  color: #fff;
}
</style>
