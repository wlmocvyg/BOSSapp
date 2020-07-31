import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index_jobList from '@/components/index_jobList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index_jobList',
      name: 'index_jobList',
      component: index_jobList
    }
  ]
})
