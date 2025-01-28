<script setup lang="ts">
import { ref } from 'vue';
import { loader } from '@utils/loader.ts';

const loading = ref(true);

const startLoader = async () => {
  loading.value = await loader(1400); 
};

startLoader()

const title = ref<string>('Lista de Vendas');
</script>

<template>
  <div>
    <n-card :title="title" class="shadow">
      <n-skeleton 
        v-if="loading"  
        :height="250" 
        :sharp="false" 
        animated
        size="large"  
      />

      <STTable v-else />
    </n-card>
  </div>
</template>