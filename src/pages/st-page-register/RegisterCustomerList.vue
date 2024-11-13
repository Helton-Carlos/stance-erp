<script setup lang="ts">
import { ref } from 'vue';
const test = ref<string>('Lista de Clientes');
</script>

<template>
  <div>
    <n-card :title="test" class="shadow">
      <STTable />
    </n-card>
  </div>
</template>