<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
import { userLogin } from './stores/login';
import { storeToRefs } from 'pinia';
import TitleHeader from './components/TittleHeader/TittleHeader.vue';

const store = userLogin();
const { user } = storeToRefs(store)
</script>

<template>
  <div>
    <router-link to="/" style="padding: 20px;">index</router-link>
    <router-link to="/cadastrar-cliente">cadastrar-cliente</router-link>
  </div>
  
  <TitleHeader />
  <h2>{{ user }}</h2>
  <RouterView  />
</template>
