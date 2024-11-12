<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <div>
      <STHeader />
    </div>

    <div class="w-80 mt-2">
      <STMetaHeader />

      <STChat />
    
      <RouterView  />
    </div>
  </div>
</template>


<style lang="scss">
  @use "./assets/scss/global.scss";
</style>