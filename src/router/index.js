import Vue from 'vue'
import Router from 'vue-router'
import Window from '@/components/window'
import Filemanager from '@/components/Filemanager'
import DtmlxScheduler from '@/components/DtmlxScheduler'
import DhtmlxGantt from '@/components/DhtmlxGantt'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Window',
      component: Window
    },
    {
      path: '/Filemanager',
      component: Filemanager
    },
    {
      path: '/DtmlxScheduler',
      component: DtmlxScheduler
    },
    {
      path: '/DhtmlxGantt',
      component: DhtmlxGantt
    }
  ]
})
