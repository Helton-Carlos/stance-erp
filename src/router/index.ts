import { createRouter, createWebHistory } from 'vue-router';
import Index from '../pages/Index.vue';
import RegisterCustomer from '../pages/st-page-register/RegisterCustomer.vue';
import RegisterCustomerList from '../pages/st-page-register/RegisterCustomerList.vue';

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
  {
    path: '/lista-de-clientes',
    name: 'RegisterCustomerList',
    component: RegisterCustomerList,
    meta: {
      title: 'Lista de Cliente',
      subtitle: 'Lista de clientes cadastradas no sistema.',
    }
  },
]

const router = createRouter({
  history: createWebHistory('app'),
  routes
})

export default router