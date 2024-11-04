import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/Index.vue'
import About from '../pages/About.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory('app'),
  routes
})

export default router