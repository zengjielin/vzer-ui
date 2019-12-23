<template>
  <div class="vzer-checkbox-wrapper">
    <div class="vzer-checkbox" :style="{width: width+'px',height: width+'px','border-radius': round ? '50%' : '10%','background-color': checked ? backgroundColor : normalColor}" @click="changeChecked" :class="{'disabled':disabled}">
      <svg t="1577064177263" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2586" :width="width/2" :height="width/2">
        <path d="M933.6 128 C663.5 293.8 467.5 503 379.1 607.9L163 438.6l-95.4 77L440.4 895c63.9-164.5 267.5-485.7 515.9-714.1L933.6 128z m0 0" p-id="2587" :fill="color"></path>
      </svg>
    </div>
    <div class="checkbox-text" :style="{color: checked ? backgroundColor : normalColor}">
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  },
  props: {
    width: {
      type: Number,
      default: 30
    },
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "#fff"
    },
    normalColor: {
      type: String,
      default: "#ddd"
    },
    backgroundColor: {
      type: String,
      default: "#25c6fc"
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeChecked() {
      if (this.disabled) {
        return;
      }
      this.checked ? (this.checked = false) : (this.checked = true);
      this.$emit("change", this.checked);
    }
  },
  watch: {
    checked(data, old) {
      this.$emit("input", data);
    }
  },
  created() {
    if (this.checked != this.value) {
      this.checked = this.value;
    }
    if (typeof this.width == "string" && this.width.indexOf("px") != -1) {
      this.width = this.width.split("px")[0];
    }
  }
};
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.vzer-checkbox-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  .vzer-checkbox {
    width: 30px;
    height: 30px;
    display: flex;
    background: #ddd;
    border: 1px solid #ddd;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
