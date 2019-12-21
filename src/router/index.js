import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/examples/Index"
import Button from "@/examples/Button"
import Checkbox from "@/examples/Checkbox"

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/example_index',
    name: 'Index',
    component: Index
  }, {
    path: '/example_button',
    name: 'Button',
    component: Button
  }, {
    path: '/example_checkbox',
    name: 'Checkbox',
    component: Checkbox
  }]
})
