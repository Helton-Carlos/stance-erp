import { reactive } from 'vue';
import { PersonAddOutline, List, ServerOutline, AnalyticsOutline } from '@vicons/ionicons5';
import { Card } from '../types/list-card.ts'

export const dashboard = reactive<Card[]>([
  { 
    title: 'Cadastro de Clientes', 
    describe: 'Cadastre seus clientes de forma rápida.', 
    button: [
      {
        type: 'primary',
        title: 'Cadastrar Cliente',
        path: '/cadastrar-cliente', 
        icon: PersonAddOutline
      },
      {
        type: 'secundary',
        title: 'Lista de Clientes',
        path: '/lista-de-clientes',
        icon: List 
      },
    ]
  },
  { 
    title: 'Ordem de Serviço(O.S)', 
    describe: 'Crie uma ordem de serviço(O.S).', 
    button: [
      {
        type: 'primary',
        title: 'Cadastrar O.S',
        path: '/cadastrar-ordem-servico', 
        icon: ServerOutline
      },
      {
        type: 'secundary',
        title: 'Lista de O.S',
        path: '/lista-cadastrar-ordem-servico', 
        icon: List 
      },
    ]
  },
  { 
    title: 'Minhas Vendas', 
    describe: 'Percentual de vendas mensais.', 
    button: [
      {
        type: 'primary',
        title: 'Minhas vendas',
        path: '/minhas-vendas', 
        icon: AnalyticsOutline
      },
      {
        type: 'secundary',
        title: 'Lista de vendas',
        path: '/lista-vendas', 
        icon: List 
      },
    ]
  },
  { 
    title: 'Estoque de produtos', 
    describe: 'Organize seu estoque.', 
    button: [
      {
        type: 'primary',
        title: 'Controle estoque',
        path: '/controle-estoque', 
        icon: ServerOutline
      },
      {
        type: 'secundary',
        title: 'Lista de estoque',
        path: '/lista-estoque', 
        icon: List 
      },
    ]
  },
]);
