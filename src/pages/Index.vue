<script setup lang="ts">
import { ref } from 'vue';

const test = ref<string>('test')
</script>

<template>
  <div>
    <n-space>
      <n-card :title="test" class="shadow mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi, cumque incidunt debitis vero nisi sed dicta nam? Enim libero quos nisi, 
        incidunt odio nesciunt minima maxime quae. Eligendi, error.
      </n-card>
    </n-space>
   
    <n-space>
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