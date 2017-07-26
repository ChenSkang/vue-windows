// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import fileManager from './components/Filemanager'
import 'element-ui/lib/theme-default/index.css'
import dtmlxScheduler from './components/DtmlxScheduler.vue'
import dhtmlxGantt from './components/DhtmlxGantt.vue'
import vueDrag from 'vue-dragging'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(fileManager)
Vue.use(dtmlxScheduler)
Vue.use(vueDrag)
Vue.use(dhtmlxGantt)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

