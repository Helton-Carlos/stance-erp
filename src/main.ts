import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from "pinia";
import naive from "naive-ui";

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(naive).mount('#app');