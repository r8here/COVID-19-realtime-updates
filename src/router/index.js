import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WorldWide from '../components/WorldWide.vue'
import IndiaState from '../components/IndiaState.vue'
import Helplines from '../components/Helplines.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/worldwide',
    name: 'WorldWide',
    component: WorldWide
  },
  {
    path: '/india',
    name: 'India',
    component: IndiaState
  },
  {
    path: '/helplines-india',
    name: 'Helplines',
    component: Helplines
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
