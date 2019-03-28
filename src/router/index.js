import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home'
import newCar from '../page/newCar'
import secondhandCar from '../page/secondhandCar'
import mine from '../page/mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta:{
        keepAlive:true,
        title:'首页',
      },
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{
        keepAlive:true,
        title:'首页',
      },
    },
    {
      path: '/newCar',
      name: 'newCar',
      component: newCar,
      meta:{
        keepAlive:true,
        title:'新车',
      },
    },
    {
      path: '/secondhandCar',
      name: 'secondhandCar',
      component: secondhandCar,
      meta:{
        keepAlive:true,
        title:'二手车',
      },
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta:{
        keepAlive:true,
        title:'我的',
      },
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})
