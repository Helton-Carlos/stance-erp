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
    
      <transition name="fade" mode="out-in">
        <RouterView />
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
  @use "./assets/scss/global.scss";

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
