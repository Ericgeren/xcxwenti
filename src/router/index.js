import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import One from '@/components/One'
import Two from '@/components/Two'
import Three from '@/components/Three'
import Four from '@/components/Four'
import Six from '@/components/Six'
import Seven from '@/components/Seven'
import Eight from '@/components/Eight'
import Nine from '@/components/Nine'
import Ac from '@/components/Ac'
import Ad from '@/components/Ad'
import Ai from '@/components/Ai'
import As from '@/components/As'
import Jie from '@/components/Jie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/one',
      name: 'One',
      component: One
    },
    {
      path: '/two',
      name: 'Two',
      component: Two
    },
    {
      path: '/three',
      name: 'Three',
      component: Three
    },
    {
      path: '/four',
      name: 'Four',
      component: Four
    },
    {
      path: '/six',
      name: 'Six',
      component: Six
    },
    {
      path: '/seven',
      name: 'Seven',
      component: Seven
    },
    {
      path: '/eight',
      name: 'Eight',
      component: Eight
    },
    {
      path: '/nine',
      name: 'Nine',
      component: Nine
    },
    {
      path: '/jie',
      name: 'Jie',
      component: Jie
    },
    {
      path: '/ac',
      name: 'Ac',
      component: Ac
    },
    {
      path: '/ad',
      name: 'Ad',
      component: Ad
    },
    {
      path: '/ai',
      name: 'Ai',
      component: Ai
    },
    {
      path: '/as',
      name: 'As',
      component: As
    }


  ]
})
