import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login,
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login,
    },
    // {
    //   path: '/home',
    //   component: Index,
    //   children:[{
    //     path: '/home',
    //     component: Home,
    //     meta: [],
    //   }, {
    //     path:'/UserList',
    //     component:UserList,
    //     meta: ['数据管理', '用户列表'],
    //   },{
    //     path:'/daily',
    //     component:Daily,
    //     meta: ['数据管理', '日报发布'],
    //   }]
    // },
  ]
})

