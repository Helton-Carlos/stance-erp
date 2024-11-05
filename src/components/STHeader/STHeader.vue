<script setup lang="ts">
import { reactive } from 'vue';
import {RouterLink} from 'vue-router';

const routes = reactive([
  { path: '/', name: 'index' },
  { path: '/empresa', name: 'empresa' },
  { path: '/servicos', name: 'serviços' },
  { path: '/planos', name: 'planos' },
  { path: '/contato', name: 'contato' },
  { path: '/cadastrar-cliente', name: 'cadastrar cliente' }
]);
</script>

<template>
  <div>
    <header class="bg-primary w-full">
      <div class="w-80 py-4 flex space-between item-center">
        <router-link to="/">
          <h1 class="text-white">
            logo
          </h1>
        </router-link>

        <div v-for="route in routes" :key="route.path">
          <router-link 
            class="text-white capitalize"
            :to="route.path"
          >
            {{ route.name }}
          </router-link>
        </div>

    
        <n-button type="info">
          Configuração
        </n-button>
      </div>
    </header>
  </div>
</template>