import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld  from '@/components/HelloWorld'
import TabPage from '@/components/TabPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tabs',
      name: 'TabPage',
      component: TabPage
    }
  ]
})
