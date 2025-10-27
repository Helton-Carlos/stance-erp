import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Index.vue";
import RegisterCustomer from "../pages/st-page-register/RegisterCustomer.vue";
import RegisterCustomerList from "../pages/st-page-register/RegisterCustomerList.vue";
import RegisterOrderService from "../pages/st-page-order-service/RegisterOrderService.vue";
import RegisterOrderServiceList from "../pages/st-page-order-service/RegisterOrderServiceList.vue";
import YourSales from "../pages/st-page-your-sales/YourSales.vue";
import YourSalesList from "../pages/st-page-your-sales/YourSalesList.vue";
import ControlStock from "../pages/st-page-stock/ControlStock.vue";
import StockList from "../pages/st-page-stock/StockList.vue";
import Construction from "../pages/st-construction/Construction.vue";
import Login from "../pages/st-page-login/Login.vue";
import NotFoundPage from "../pages/st-not-found-page/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    meta: {
      title: "Bem-vindo",
      subtitle: "O Stance ERP.",
    },
  },
  {
    path: "/cadastrar-cliente",
    name: "RegisterCustomer",
    component: RegisterCustomer,
    meta: {
      title: "Cadastrar Cliente",
      subtitle: "Preencha o formulario com os dados do clientes.",
    },
  },
  {
    path: "/lista-de-clientes",
    name: "RegisterCustomerList",
    component: RegisterCustomerList,
    meta: {
      title: "Lista de Cliente",
      subtitle: "Lista de clientes cadastradas no sistema.",
    },
  },
  {
    path: "/cadastrar-ordem-servico",
    name: "RegisterOrderService",
    component: RegisterOrderService,
    meta: {
      title: "Cadastrar Ordem de Serviço",
      subtitle: "Preencha o formulario com os dados do serviço.",
    },
  },
  {
    path: "/lista-cadastrar-ordem-servico",
    name: "RegisterOrderServiceList",
    component: RegisterOrderServiceList,
    meta: {
      title: "Lista de Ordem de Serviço",
      subtitle: "Lista de Ordem de Serviço cadastradas no sistema.",
    },
  },
  {
    path: "/minhas-vendas",
    name: "YourSales",
    component: YourSales,
    meta: {
      title: "Dashboard de Vendas",
      subtitle: "Veja suas estatisticas de vendas.",
    },
  },
  {
    path: "/lista-vendas",
    name: "YourSalesList",
    component: YourSalesList,
    meta: {
      title: "Lista de Ordem de Serviço",
      subtitle: "Lista de vendas.",
    },
  },
  {
    path: "/controle-estoque",
    name: "ControlStock",
    component: ControlStock,
    meta: {
      title: "Dashboard Controle de Estoque",
      subtitle: "Veja seu estoque.",
    },
  },
  {
    path: "/lista-estoque",
    name: "StockList",
    component: StockList,
    meta: {
      title: "Lista de Estoque",
      subtitle: "Estoque ativos.",
    },
  },
  {
    path: "/empresa",
    name: "Work",
    component: Construction,
    meta: {
      title: "Stance ERP",
      subtitle: "Empresa de gestão e gerenciamento.",
    },
  },
  {
    path: "/servicos",
    name: "Services",
    component: Construction,
    meta: {
      title: "Stance ERP",
      subtitle: "Empresa de gestão e gerenciamento.",
    },
  },
  {
    path: "/planos",
    name: "Flat",
    component: Construction,
    meta: {
      title: "Stance ERP",
      subtitle: "Empresa de gestão e gerenciamento.",
    },
  },
  {
    path: "/contato",
    name: "Contact",
    component: Construction,
    meta: {
      title: "Stance ERP",
      subtitle: "Empresa de gestão e gerenciamento.",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/:pathMatch(.*)",
    component: NotFoundPage,
    meta: {
      title: "Stance ERP",
      subtitle: "Página não encontrada.",
    },
  },
];

const router = createRouter({
  history: createWebHistory("app"),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login") next({ name: "Login" });
  else next();
});

export default router;
