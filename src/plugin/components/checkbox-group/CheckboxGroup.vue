<template>
  <div @click="changeCheckboxGroup">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CheckboxGroup",
  componentName: "CheckboxGroup",
  data() {
    return {};
  },
  props: {
    value: {
      type: Array,
      default: []
    }
  },
  methods: {
    handleChange() {
      let checkedList = [];
      this.$children.map(v => {
        if (v.checked && v.label) {
          checkedList.push(v.label);
        }
      });
      this.$emit("input", checkedList);
    },
    changeCheckboxGroup() {
      this.$emit("change", this.value);
    }
  },
  created() {
    this.$nextTick(() => {
      this.$children.map(v => {
        this.value.map(c => {
          if (c == v.label) {
            v.checked = true;
          }
        });
      });
    });
  }
};
</script>

<style>
</style>
