# vzer-ui

## Build Setup

``` bash
#npm安装
npm install vzer-ui --save-dev

#项目中引入
import Vue from 'vue'
import Vzer from 'vzer-ui'
import 'vzer-ui/lib/vzer.css'
Vue.use(Vzer)


[在线演示地址](https://zengjielin.github.io/vzer-ui/dist/#/)

#组件使用示例
<vzer-button>默认按钮</vzer-button>
<vzer-button type="primary">主要按钮</vzer-button>
<vzer-button type="success">成功按钮</vzer-button>
<vzer-button type="info">信息按钮</vzer-button>
<vzer-button type="warning">警告按钮</vzer-button>
<vzer-button type="error">错误按钮</vzer-button>

#本地运行
npm install
npm run dev
#打包web服务命令
npm run build 
#打包npm包命令
npm run package
```

