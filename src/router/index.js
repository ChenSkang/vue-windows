import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import meau from '@/components/meau'
import Filemanager from '@/components/Filemanager'
import DtmlxScheduler from '@/components/DtmlxScheduler'
import DhtmlxGantt from '@/components/DhtmlxGantt'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'meau',
      component: meau
    },
    {
      path: '/',
      name: 'Filemanager',
      component: Filemanager
    },
    {
      path: '/',
      name: 'DtmlxScheduler',
      component: DtmlxScheduler
    },
    {
      path: '/',
      name: 'DhtmlxGantt',
      component: DhtmlxGantt
    }
  ]
})
