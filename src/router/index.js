import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld  from '@/components/HelloWorld'
import BootstrapTabPage from '@/components/BootstrapTabPage'
import VueTabs from '@/components/VueTabs'
import HandTabs from '@/components/HandRolledTabs'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bstabs',
      name: 'BootstrapTabPage',
      component: BootstrapTabPage
    },
    {
      path: '/vue-tabs',
      name: 'vue-tabs',
      component: VueTabs
    },
    {
      path: '/handrolled-tabs',
      name: 'vue-tabs',
      component: HandTabs
    }
  ]
})
