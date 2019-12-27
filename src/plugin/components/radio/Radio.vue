<template>
  <div class="vzer-radio">
    <div class="vzer-radio-list" :class="{'vzer-radio-direction':direction=='vertical'}">
      <div class="vzer-radio-cell" v-for="(option,index) in options" :key="index" @change="handleChange">
        <input id="vzer-radio" class="vzer-radio-input" type="radio" :style="{width:width+'px',height:width+'px'}" v-model="currentValue" :disabled="option.disabled" :value="option.value || option" />
        <label for="vzer-radio" class="vzer-radio-label" :style="{width:width-2+'px',height:width-2+'px','background-color':option.value==currentValue?backgroundColor:normalColor,'border':option.value==currentValue?'1px solid'+backgroundColor:'1px solid'+normalColor}" :class="{'vzer-radio-disabled':option.disabled}"></label>
        <span class="vzer-radio-text" :style="{color:option.value==currentValue?backgroundColor:normalColor}">{{option.label}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  componentName: "Radio",
  data() {
    return {
      currentValue: this.value
    };
  },
  props: {
    width: {
      type: [Number, String],
      default: 20
    },
    value: String,
    options: {
      type: Array,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal" //可选vertical垂直，默认horizontal水平
    },
    normalColor: {
      type: String,
      default: "#c8c9cc"
    },
    backgroundColor: {
      type: String,
      default: "#25c6fc"
    }
  },
  methods: {
    handleChange() {
      this.$emit("input", this.currentValue).$emit("change", this.currentValue);
    }
  },
  created() {
    console.log(this.backgroundColor)
    if (typeof this.width == "string" && this.width.indexOf("px") != -1) {
      this.width = this.width.split("px")[0];
    }
  }
};
</script>

<style lang="scss">
.vzer-radio {
  display: inline-block;
  .vzer-radio-list {
    display: flex;
    .vzer-radio-cell {
      padding: 5px 10px;
      display: flex;
      align-items: center;
      position: relative;
      .vzer-radio-input {
        position: absolute;
        opacity: 0;
        z-index: 999;
        cursor: pointer;
      }
      .vzer-radio-label {
        border-radius: 100%;
        display: inline-block;
        margin-right: 5px;
        vertical-align: top;
        // cursor: pointer;
        text-align: center;
        -webkit-transition: all 250ms ease;
        transition: all 250ms ease;
        outline: none;
        box-shadow: inset 0 0 0 4px #f4f4f4;
      }
      .vzer-radio-disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .vzer-radio-text {
        display: inline-block;
      }
    }
  }
  .vzer-radio-direction {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
