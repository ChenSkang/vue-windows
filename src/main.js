// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import WindowsMenu from './components/WindowsMenu.vue'
import Filemanager from './components/Filemanager.vue'
import DtmlxScheduler from './components/DtmlxScheduler.vue'
import DhtmlxGantt from './components/DhtmlxGantt.vue'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
new Vue({
  el: '#WindowsMenu',
  router,
  template: '<WindowsMenu/>',
  components: { WindowsMenu }
})
new Vue({
  el: '#DhtmlxGantt',
  router,
  template: '<DhtmlxGantt/>',
  components: { DhtmlxGantt }
})
new Vue({
  el: '#DtmlxScheduler',
  router,
  template: '<DtmlxScheduler/>',
  components: { DtmlxScheduler }
})
new Vue({
  el: 'Filemanager',
  router,
  template: '<Filemanager/>',
  components: { Filemanager }
})
