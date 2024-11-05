<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const metaPath = computed(()=>{
   const meta = {
    title: route.meta.title,
    subtitle: route.meta.subtitle
  }

  return meta
})
</script>

<template>
  <div>
    <h2 class="text-large">{{ metaPath.title }}</h2>
    <p class="text-normal">{{ metaPath.subtitle }}</p>
  </div>
</template>