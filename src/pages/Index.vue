<script setup lang="ts">
import { ref } from 'vue';
import { dashboard } from '@utils/dashboard.ts';
import { loader } from '@utils/loader.ts';

const loading = ref(true);

const startLoader = async () => {
  loading.value = await loader(1400); 
};

startLoader()
</script>

<template>
  <div>
    <div class="container">
      <div v-for="card in dashboard" :key="card.title">
        <n-card :title="card.title" class="card flex flex-wrap mb-4">
          <n-skeleton v-if="loading" text :repeat="1" />
          <p v-else class="mb-2">{{ card.describe }}</p>
        
          <div class="flex gap-2 mt-2">
            <n-skeleton 
              v-if="loading" 
              :width="142" 
              :sharp="false" 
              size="medium"  
            />
            <div v-else>
              <router-link 
                v-if="card.button[0]?.type === 'primary'" 
                :to="card.button[0]?.path"
              >
                <n-button type="info">
                  <template #icon>
                    <n-icon>
                      <component :is="card.button[0].icon" />
                    </n-icon>
                  </template>
                  {{card.button[0].title}}
                </n-button>
              </router-link>
            </div>

            <n-skeleton 
              v-if="loading" 
              :width="142" 
              :sharp="false" 
              size="medium"  
            />
            <div v-else>
              <router-link 
                v-if="card.button[1]?.type === 'secundary'" 
                :to="card.button[1]?.path"
              >
                <n-button  type="info" ghost>
                  <template #icon>
                    <n-icon>
                      <component :is="card.button[1].icon" />
                    </n-icon>
                  </template>
                  {{card.button[1].title}}
                </n-button>
              </router-link>
            </div>
          </div>
        </n-card>
      </div>
    </div>

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