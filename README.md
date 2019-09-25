# vzer-ui

## Build Setup

``` bash
#npm安装
npm install vzer-ui --save-dev

#项目中引入
import Vue from 'vue'
import VZer from 'vzer-ui'
import 'vzer-ui/lib/yw.css'
Vue.use(VZer)

#使用组件示例
<yw-button>default</yw-button>
<yw-button type="success">success</yw-button>
<yw-button type="error">error</yw-button>
<yw-button type="warning">warning</yw-button>
<yw-button type="info" style="min-width:120px">info</yw-button>

#本地运行
npm install
npm run dev
#打包web服务命令
npm run build 
#打包npm包命令
npm run package
```

