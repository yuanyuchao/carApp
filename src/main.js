// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'//自适应方案

Vue.config.productionTip = false
//在每次进入路由之前都会执行此方法
router.beforeEach(function (to,from,next) {
  document.title = to.meta.title;
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
