<script setup lang="ts">
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import { Options } from '@vicons/ionicons5';

const routePath = useRoute();

const routes = reactive([
  { path: '/', name: 'index' },
  { path: '/empresa', name: 'empresa' },
  { path: '/servicos', name: 'serviços' },
  { path: '/planos', name: 'planos' },
  { path: '/contato', name: 'contato' },
]);
</script>

<template>
  <div>
    <header class="bg-primary w-full">
      <div class="w-80 py-4 flex space-between item-center">
        <router-link to="/">
          <h1>
            <IconLogo class="pt-4" />
          </h1>
        </router-link>

        <div class="flex gap-8">
          <router-link 
            v-for="route in routes" 
            :key="route.path"
            :to="route.path"
            :class="{
              'text-positive' : route.path === routePath.path,
              'text-white' : route.path !== routePath.path
            }"
            class="font-bold capitalize"
          >
            {{ route.name }}
          </router-link>
        </div>
        
        <router-link to="/config">
          <n-button type="info">
            <template #icon>
              <n-icon>
                <Options />
              </n-icon>
            </template>
            Configuração
          </n-button>
        </router-link>
      </div>
    </header>
  </div>
</template>