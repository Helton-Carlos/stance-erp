<script setup lang="ts">
import { ref } from 'vue';
const test = ref<string>('index');
</script>

<template>
  <div>
    <h1>
      {{ test }}
    </h1>
  </div>
</template>