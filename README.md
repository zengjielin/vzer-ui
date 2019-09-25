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

#使用组件示例
<vzer-button>default</vzer-button>
<vzer-button type="success">success</vzer-button>
<vzer-button type="error">error</vzer-button>
<vzer-button type="warning">warning</vzer-button>

#本地运行
npm install
npm run dev
#打包web服务命令
npm run build 
#打包npm包命令
npm run package
```

