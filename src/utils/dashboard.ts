import { reactive } from 'vue';
import { PersonAddOutline, List, ServerOutline, AnalyticsOutline } from '@vicons/ionicons5';

export const dashboard = reactive<string[] | any>([
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
        path: '/lista-cliente',
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
        path: '/lista-cliente', 
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
]);
