<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
import { userLogin } from './stores/login';
import { storeToRefs } from 'pinia';

const store = userLogin();
const { user } = storeToRefs(store)
</script>

<template>
  <div>
    <router-link to="/" style="padding: 20px;">Go to Foo</router-link>
    <router-link to="/about">Go to Bar</router-link>
  </div>
  {{ user }}
  <RouterView  />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
