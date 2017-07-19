// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
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
  el: '#DhtmlxGantt',
  template: '<DhtmlxGantt/>',
  components: { DhtmlxGantt }
})
new Vue({
  el: '#DtmlxScheduler',
  template: '<DtmlxScheduler/>',
  components: { DtmlxScheduler }
})
new Vue({
  el: '#Filemanager',
  template: '<Filemanager/>',
  components: { Filemanager }
})
