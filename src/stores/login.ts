import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useLoginStore = defineStore("login", () => {
  const user = ref("Helton");

  function login(name: string) {
    user.value = name;
  }

  const validationUser = computed(() => !!user.value.length);

  return {
    user,
    login,
    validationUser,
  };
});
