import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import signupView from '../views/signupView.vue' //import view

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { //where the view will be routed to
    path: '/signup',
    name: 'signup',
    component: signupView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
