<script setup lang="ts">
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";

const router = useRoute();

const onLogin = computed(() => router.name === "Login");
</script>

<template>
  <div>
    <div>
      <STHeader v-if="!onLogin" />
    </div>

    <div class="w-80 mt-2">
      <div v-if="!onLogin">
        <STMetaHeader />
        <STChat />
      </div>

      <transition name="fade" mode="out-in">
        <RouterView />
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
@use "./assets/scss/global.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
