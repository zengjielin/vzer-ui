<template>
    <div class="vzer-switch">
        <div class="vzer-switch-outside" :style="{'width':width+'px','height': height+'px','border-radius': (height/2)+'px','background':status?backgroundColor:normalColor}" :class="{'vzer-switch-disabled':this.disabled}" @click="handleChange">
            <div class="vzer-switch-inside" :style="{'width':(height-2)+'px','height':(height-2)+'px','left':left+'px'}"></div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      status: this.value,
      left: 1
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    width: {
      type: [Number, String],
      default: 40
    },
    height: {
      type: [Number, String],
      default: 20
    },
    backgroundColor: {
      type: String,
      default: "#25c6fc"
    },
    normalColor: {
      type: String,
      default: "#e9ebef"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(data, old) {
      this.status = this.value; //拿到父组件传给子组件的值
      this.changeStatus();
    },
    width() {
      this.changeStatus();
    },
    height() {
      this.changeStatus();
    }
  },
  methods: {
    changeStatus() {
      if (this.status) {
        this.left = this.width - (this.height - 1);
      } else {
        this.left = 1;
      }
    },
    handleChange() {
      if (this.disabled) {
        return;
      }
      this.status ? (this.status = false) : (this.status = true);
      this.changeStatus();
      this.$emit("input", this.status).$emit("change", this.status); //传change事件，可以让父组件使用@change
    }
  },
  mounted() {
    this.changeStatus();
  }
};
</script>

<style lang='scss' scoped>
.vzer-switch {
  display: inline-block;
  .vzer-switch-outside {
    width: 60px;
    height: 30px;
    background: #ff4949;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
  }
  .vzer-switch-disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  .vzer-switch-inside {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #ffffff;
    position: absolute;
    top: 1px;
    left: 1px;
    z-index: 3;
    transition: all 0.4s;
  }
}
</style>
