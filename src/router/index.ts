import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/Index.vue'
import RegisterCustomer from '../pages/RegisterCustomer.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      title: 'Bem-vindo',
      subtitle: 'O Stance ERP.',
    }
  },
  {
    path: '/cadastrar-cliente',
    name: 'RegisterCustomer',
    component: RegisterCustomer,
    meta: {
      title: 'Cadastrar Cliente',
      subtitle: 'Preencha o formulario com os dados do clientes.',
    }
  },
]

const router = createRouter({
  history: createWebHistory('app'),
  routes
})

export default router