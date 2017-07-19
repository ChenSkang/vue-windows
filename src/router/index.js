import Vue from 'vue'
import Router from 'vue-router'
import Window from '@/components/window'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Window',
      component: Window
    }
  ]
})
