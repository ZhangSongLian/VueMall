import Vue from 'vue'
import VueRouter from 'vue-router'
// import Cart from '../pages/cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cart',
    component: () => import('../pages/cart.vue')
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/addres',
    name: '地址列表',
    component: () => import('../pages/addres.vue')
  },
  

]

const router = new VueRouter({
  routes
})

export default router
