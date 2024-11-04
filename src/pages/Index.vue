<script setup lang="ts">
import { ref } from 'vue';
const test = ref<string>('index');
</script>

<template>
  <div>
    <h1>
      {{ test }}
    </h1>
    <n-space>
      <n-button>Default</n-button>
      
      <n-button type="tertiary">
        Tertiary
      </n-button>
      <n-button type="primary">
        Primary
      </n-button>
      <n-button type="info">
        Info
      </n-button>
      <n-button type="success">
        Success
      </n-button>
      <n-button type="warning">
        Warning
      </n-button>
      <n-button type="error">
        Error
      </n-button>
    </n-space>
  </div>
</template>