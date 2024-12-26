<script setup lang="ts">
import { ref } from 'vue';
import { loader } from '../../utils/loader.ts';

const loading = ref(true);

const startLoader = async () => {
  loading.value = await loader(1400); 
};

startLoader();

const title = ref<string>('Page in Construction');
</script>

<template>
  <div class="container">
    <n-card :title="title" class="card flex flex-wrap mb-4">
      <n-skeleton v-if="loading" :repeat="30" />
      <n-image
        v-else 
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </n-card>
  </div>
</template>