import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/product',
    name: 'Product-List',
    component: () => import(/* webpackChunkName: "about" */ '../views/product/ProductListView.vue')
  },
  {
    path: '/register-product',
    name: 'Register-Product',
    component: () => import(/* webpackChunkName: "about" */ '../views/product/FormProductView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
