import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/address'
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/shipping',
    name: 'shipping',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '*',
    name: 'not-found',
    redirect: '/address'
  }
]

const router = new VueRouter({
  routes
})

export default router
