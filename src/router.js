import { createRouter, createWebHistory } from 'vue-router'
import store from './store'
import Login from './components/Login.vue'
import Private from './components/Private.vue'

const routes = [
  {
    path: '/',
    redirect: {
      name: 'login'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/private',
    name: 'private',
    component: Private,
    beforeEnter: (to, from, next) => {
      if (!store.state.authenticated) {
        console.log('Need login')
        next('login')
      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
