<template>
  <div class="example-radio">
    <div class="example-radio-type">
      <div class="example-radio-title">基础用法</div>
      <div class="example-radio-list">
        <vzer-radio v-model="radioA" :options="optionsA" @change="changeRadio"></vzer-radio>
      </div>
      <div class="example-radio-text">返回值：{{radioA}}</div>
    </div>
    <div class="example-radio-type">
      <div class="example-radio-title">自定义未选中状态颜色</div>
      <div class="example-radio-list">
        <vzer-radio v-model="radioF" normal-color="#000" :options="optionsF"></vzer-radio>
      </div>
    </div>
    <div class="example-radio-type">
      <div class="example-radio-title">自定义选中状态颜色</div>
      <div class="example-radio-list">
        <vzer-radio v-model="radioB" background-color="#ff976a" :options="optionsB"></vzer-radio>
      </div>
    </div>
    <div class="example-radio-type">
      <div class="example-radio-title">自定义大小</div>
      <div class="example-radio-list">
        <vzer-radio v-model="radioC" width="20" :options="optionsC"></vzer-radio>
        <vzer-radio v-model="radioC" width="25" :options="optionsC"></vzer-radio>
      </div>
    </div>
    <div class="example-radio-type">
      <div class="example-radio-title">垂直排序（默认水平）</div>
      <div class="example-radio-list">
        <vzer-radio v-model="radioE" direction="vertical" :options="optionsE"></vzer-radio>
      </div>
    </div>
    <div class="example-radio-type">
      <div class="example-radio-title">禁用状态</div>
      <div class="example-radio-list">
        <vzer-radio v-model="radioD" :options="optionsD"></vzer-radio>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioA: "optionA",
      optionsA: [
        {
          label: "选项一",
          value: "optionA"
        },
        {
          label: "选项二",
          value: "optionB"
        }
      ],
      radioB: "optionA",
      optionsB: [
        {
          label: "选项一",
          value: "optionA"
        },
        {
          label: "选项二",
          value: "optionB"
        }
      ],
      radioC: "optionA",
      optionsC: [
        {
          label: "选项一",
          value: "optionA"
        }
      ],
      radioD: "optionA",
      optionsD: [
        {
          label: "选项一",
          value: "optionA",
          disabled: true
        },
        {
          label: "选项二",
          value: "optionB",
          disabled: true
        }
      ],
      radioE: "optionA",
      optionsE: [
        {
          label: "选项一",
          value: "optionA"
        },
        {
          label: "选项二",
          value: "optionB"
        }
      ],
      radioF: "optionA",
      optionsF: [
        {
          label: "选项一",
          value: "optionA"
        },
        {
          label: "选项二",
          value: "optionB"
        }
      ]
    };
  },
  methods: {
    changeRadio(data) {
      console.log(data);
    }
  }
};
</script>

<style lang='scss'>
.example-radio {
  padding: 10px 20px;
  .example-radio-type {
    padding-top: 10px;
    .example-radio-title {
      padding-bottom: 10px;
      color: rgba(69, 90, 100, 0.6);
      font-weight: normal;
      font-size: 14px;
    }
    .example-radio-text {
      padding: 10px;
      color: #34495e;
      font-weight: normal;
      font-size: 16px;
    }
  }
  .example-radio-list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
  }
}
</style>
