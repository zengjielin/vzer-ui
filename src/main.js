import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugin/assets/scss/index.scss'
import Vzer from '@/plugin'
Vue.use(Vzer)

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
})
