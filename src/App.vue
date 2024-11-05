<script setup lang="ts">
import {RouterView} from 'vue-router';
import STHeader from './components/STHeader/STHeader.vue';
import STMetaHeader from './components/STMetaHeader/STMetaHeader.vue';
</script>

<template>
  <div>
    <div>
      <STHeader />
    </div>

    <div class="w-80 mt-2">
      <STMetaHeader />
      
      <RouterView  />
    </div>
  </div>
</template>


<style lang="scss">
  @use "./assets/scss/global.scss";
</style>