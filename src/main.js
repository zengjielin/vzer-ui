import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/index.scss'
import YwVue from '@'
Vue.use(YwVue)

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
})
