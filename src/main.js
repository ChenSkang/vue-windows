// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
* MIT License
*
* Copyright (c) 2017 Shichao Inc.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
/**
 * Revision History:
 *     Initial: 2017/07/19       Wang Bofeng
 */

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

