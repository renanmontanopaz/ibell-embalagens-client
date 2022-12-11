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
    component: () => import(/* webpackChunkName: "about" */ '../views/product/RegisterProductView.vue')
  },
  {
    path: '/update-product/:id',
    name: 'Update-Product',
    component: () => import(/* webpackChunkName: "about" */ '../views/product/UpdateProductView.vue')
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
  },
  {
    path: '/update-client/:id',
    name: 'Update-Client',
    component: () => import(/* webpackChunkName: "about" */ '../views/cliente/UpdateClientView.vue')
  },
  {
    path: '/provider',
    name: 'Provider-List',
    component: () => import(/* webpackChunkName: "about" */ '../views/provider/ProviderListView.vue')
  },
  {
    path: '/register-provider',
    name: 'Register-Provider',
    component: () => import(/* webpackChunkName: "about" */ '../views/provider/RegisterProviderView.vue')
  },
  {
    path: '/update-provider/:id',
    name: 'Update-Provider',
    component: () => import(/* webpackChunkName: "about" */ '../views/provider/UpdateProviderView.vue')
  },
  {
    path: '/stock-input',
    name: 'Stock-Input-List',
    component: () => import(/* webpackChunkName: "about" */ '../views/stockInput/StockInputListView.vue')
  },
  {
    path: '/register-stock-input',
    name: 'Register-Stock-Input',
    component: () => import(/* webpackChunkName: "about" */ '../views/stockInput/RegisterStockInputView.vue')
  },
  {
    path: '/update-stock-input/:id',
    name: 'Update-Stock-Input',
    component: () => import(/* webpackChunkName: "about" */ '../views/stockInput/UpdateStockInputView.vue')
  },
  {
    path: '/stock-output',
    name: 'Stock-Output-List',
    component: () => import(/* webpackChunkName: "about" */ '../views/stockOutput/StockOutputListView.vue')
  },
  {
    path: '/register-stock-output',
    name: 'Register-Stock-Output',
    component: () => import(/* webpackChunkName: "about" */ '../views/stockOutput/RegisterStockOutputView.vue')
  },
  {
    path: '/update-stock-output/:id',
    name: 'Update-Stock-Output',
    component: () => import(/* webpackChunkName: "about" */ '../views/stockOutput/UpdateStockOutputView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
