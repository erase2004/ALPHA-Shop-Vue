import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'

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
    component: () => import('../views/Address.vue')
  },
  {
    path: '/shipping',
    name: 'shipping',
    component: () => import('../views/Shipping.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('../views/Payment.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router