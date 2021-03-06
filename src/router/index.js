import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/examples/Index"
import Button from "@/examples/Button"
import Checkbox from "@/examples/Checkbox"
import CheckboxGroup from "@/examples/CheckboxGroup"
import Radio from "@/examples/Radio"
import Switch from "@/examples/Switch"

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
  }, {
    path: '/example_checkbox_group',
    name: 'CheckboxGroup',
    component: CheckboxGroup
  }, {
    path: '/example_radio',
    name: 'Radio',
    component: Radio
  }, {
    path: '/example_switch',
    name: 'Switch',
    component: Switch
  }]
})
