<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { userLogin } from '@/stores/login';
import { storeToRefs } from 'pinia';

import { Message } from '@/utils/message'

const route = useRoute();
const store = userLogin();
const { user } = storeToRefs(store);
const value = ref<number>(5);
const alert = ref<boolean>(false);

const metaPath = computed(()=>{
   const meta = {
    title: route.meta.title,
    subtitle: route.meta.subtitle
  }

  return meta;
})
</script>

<template>
  <div>
    <div class="flex space-between item-center my-4">
      <div>
        <h2>{{ metaPath.title }}</h2>
        <p class="text-normal">{{ metaPath.subtitle }}</p>
      </div>

      <n-space :size="24">
        <n-badge :value="value" :max="15">
          <n-avatar
            :style="{
              color: 'white',
              backgroundColor: 'blue',
            }"
          >
            {{ user }}
          </n-avatar>
        </n-badge>   
      </n-space>
    </div>

    <n-alert 
      v-if="alert" 
      class="my-4" 
      :title="Message.TittleWarning" 
      type="warning"
    >
      <strong>Ler avisos é importante!</strong>
      <br>Já está disponivel nova versão do seu pacote (V-1.1.1).
    </n-alert>
  </div>
</template>