# vzer-ui是一款轻量、可靠的移动端Vue组件库

## 项目持续更新维护，喜欢的可以给个star

## github地址
[https://github.com/zengjielin/vzer-ui](https://github.com/zengjielin/vzer-ui)

## 点击下方查看demo
[在线演示地址](https://zengjielin.github.io/vzer-ui/dist/#/)

## 快速入门教程

``` bash
# npm安装
npm install vzer-ui --save-dev

# 项目中引入
import Vue from 'vue'
import Vzer from 'vzer-ui'
import 'vzer-ui/lib/vzer.css'
Vue.use(Vzer)
```

## 组件持续更新中

# 基础组件-按钮
## 使用案例
```
<vzer-button>默认按钮</vzer-button>
```
## API
参数|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
type|类型|string|default/primary/success/warning/error/info|default
size|尺寸|string|large/medium/small|—
shape|按钮形状|string|circle/rectangle|—
disabled|是否禁用状态|boolean|—|false

# 表单组件-多选框
## 使用案例
```
<vzer-checkbox v-model="checked">未选中</vzer-checkbox>
```
## API
参数|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
v-model|绑定值|boolean|—|—
width|宽度|number|—|—
label|多选框组作为单个选项的值必填|string|—|—
color|文字和图标颜色|string|—|#fff
normal-color|未选中是背景色|string|—|#ddd
background-color|选中时的背景色|string|—|#25c6fc
round|是否使用圆形|boolean|—|false
disabled|是否禁用状态|boolean|—|false

## Event
参数|说明|回调参数
:--:|:--:|:--:
change|当绑定值变化时触发的事件|更新后的值

# 表单组件-多选框组
## 使用案例
```
<vzer-checkbox-group>
    <vzer-checkbox label="被选中">被选中</vzer-checkbox>
    <vzer-checkbox label="选中并禁用" :disabled="true">选中并禁用</vzer-checkbox>
    <vzer-checkbox label="未选中">未选中</vzer-checkbox>
</vzer-checkbox-group>
```
## API
参数|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
v-model|绑定值|array|—|—

## Event
参数|说明|回调参数
:--:|:--:|:--:
change|当绑定值变化时触发的事件|更新后的值


