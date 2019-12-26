<template>
    <div>
        <vzer-radio v-model="radio" label="单选一"></vzer-radio>
        <vzer-radio v-model="radio" label="单选二"></vzer-radio>
        <vzer-radio v-model="radio1" label="单选一"></vzer-radio>
        <vzer-radio v-model="radio1" label="单选二"></vzer-radio>
    </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "单选一",
      radio1:"单选一"
    };
  },
  watch: {
    radio(data){
      console.log("父组件v-model",data)
    }
  },
};
</script>

<style>
</style>
