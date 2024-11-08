<script setup lang="ts">
import { dashboard } from '../utils/dashboard';
</script>

<template>
  <div>
    <div v-for="card in dashboard" :key="card">
      <n-card :title="card.title" class="flex shadow mb-4">
        <p class="mb-2">{{ card.describe }}</p>

        <div class="flex gap-2 mt-2">
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

          <router-link 
            v-if="card.button[1]?.type === 'secundary'" 
            :to="card.button[1]?.path"
          >
            <n-button type="info" ghost>
              <template #icon>
                <n-icon>
                  <component :is="card.button[1].icon" />
                </n-icon>
              </template>
              {{card.button[1].title}}
            </n-button>
          </router-link>
        </div>
      </n-card>
    </div>
  </div>
</template>