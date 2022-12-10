import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Product-List',
    component: () => import(/* webpackChunkName: "about" */ '../views/product/ProductListView.vue')
  },
  {
    path: '/register-product',
    name: 'Register-Product',
    component: () => import(/* webpackChunkName: "about" */ '../views/product/FormProductView.vue')
  },
  {
    path: '/client',
    name: 'Client-List',
    component: () => import(/* webpackChunkName: "about" */ '../views/cliente/ClientListView.vue')
  },
  {
    path: '/register-client',
    name: 'Register-Client',
    component: () => import(/* webpackChunkName: "about" */ '../views/cliente/RegisterClientView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
