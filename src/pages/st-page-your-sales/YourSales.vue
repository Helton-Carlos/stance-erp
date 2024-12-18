<script setup lang="ts">
import { ref } from 'vue';
import type { FormInst } from 'naive-ui';
import { Save, ArrowBack } from '@vicons/ionicons5';
import { loader } from '../../utils/loader.ts';

const loading = ref(true);

const startLoader = async () => {
  loading.value = await loader(1400); 
};

startLoader()

</script>

<template>
  <div>
    <div class="container">
      <n-card title="Gráfico anual" class="card mb-4">
        <n-skeleton v-if="loading" :repeat="30" />
        <STChart v-else />
      </n-card>

      <n-card title="Gráfico anual" class="card mb-4">
        <n-skeleton v-if="loading" :repeat="30" />
        <STChart v-else />
      </n-card>
    </div>
  </div>
</template>