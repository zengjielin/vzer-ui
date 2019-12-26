<template>
  <div class="radio-inside" @click="changeChecked($event)">
    <svg t="1577322877646" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6020" :width="width" :height="width">
      <path d="M512 1024C229.230208 1024 0 794.769792 0 512 0 229.230208 229.230208 0 512 0 794.769792 0 1024 229.230208 1024 512 1024 794.769792 794.769792 1024 512 1024ZM512 960C759.423565 960 960 759.423565 960 512 960 264.576432 759.423565 64 512 64 264.576432 64 64 264.576432 64 512 64 759.423565 264.576432 960 512 960ZM512 832C688.731117 832 832 688.731117 832 512 832 335.26888 688.731117 192 512 192 335.26888 192 192 335.26888 192 512 192 688.731117 335.26888 832 512 832Z" p-id="6021" :fill="fillColor"></path>
    </svg>
  </div>
</template>

<script>
export default {
  componentName: "Radio",
  data() {
    return {
      checked: false,
      fillColor: "#ddd"
    };
  },
  props: {
    value: [Number, String],
    label: String,
    width: {
      type: [Number, String],
      default: 30
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeChecked(e) {
      console.log(e)
      if (this.disabled) {
        return;
      }
      if (
        this.$parent &&
        this.$parent.$options &&
        this.$parent.$options.componentName === "RadioGroup"
      ) {
        this.$parent.handleChange();
      } else {
        this.$parent.$children.map(v => {
          if (this.value == v.value) {
            if (this.label == v.label) {
              v.checked = true;
              this.$emit("input", v.label);
            } else {
              v.checked = false;
            }
          }
        });
        this.$emit("change", this.value);
      }
    }
  },
  watch: {
    checked(data) {
      if (data) {
        this.fillColor = "#25c6fc";
      } else {
        this.fillColor = "#ddd";
      }
    }
  },
  created() {
    if (typeof this.width == "string" && this.width.indexOf("px") != -1) {
      this.width = this.width.split("px")[0];
    }
  }
};
</script>

<style>
</style>
