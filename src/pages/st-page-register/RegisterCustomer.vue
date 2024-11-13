<script setup lang="ts">
import { ref } from 'vue';
const test = ref<string>('cadastrar-clientes');
</script>

<template>
  <div>
    <h1>teste</h1>
    <n-card :title="test" class="shadow">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi, cumque incidunt debitis vero nisi sed dicta nam? Enim libero quos nisi, 
      incidunt odio nesciunt minima maxime quae. Eligendi, error.
    </n-card>
  </div>
</template>