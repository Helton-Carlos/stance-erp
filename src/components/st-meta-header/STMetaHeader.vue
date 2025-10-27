<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLoginStore } from "@stores/login";
import { storeToRefs } from "pinia";
import { ChevronBack } from "@vicons/ionicons5";

import { Message } from "@utils/message";

const route = useRoute();
const router = useRouter();
const store = useLoginStore();
const { user } = storeToRefs(store);
const value = ref<number>(5);
const alert = ref<boolean>(false);

const metaPath = computed(() => {
  const meta = {
    title: route.meta.title,
    subtitle: route.meta.subtitle,
  };

  return meta;
});

const metaName = computed(() => {
  return String(route.name) === "Index";
});

function goBack() {
  router.push("/");
}
</script>

<template>
  <div>
    <div class="flex space-between item-center my-4">
      <div>
        <div class="flex gap-2">
          <ChevronBack
            v-if="!metaName"
            style="width: 20px; cursor: pointer"
            @click="goBack"
          />

          <h2>
            {{ metaPath.title }}
            <span v-if="metaName">{{ user }}</span>
          </h2>
        </div>

        <p :class="['text-normal', metaName ? '' : 'pl-11']">
          {{ metaPath.subtitle }}
        </p>
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

      <br />Já está disponivel nova versão do seu pacote (V-1.1.1).
    </n-alert>
  </div>
</template>
