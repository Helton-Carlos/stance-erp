import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const userLogin = defineStore("login", () => {
  const user = ref("Helton");

  function login(name: string) {
    user.value = name;
    console.log(user.value);
  }

  const validationUser = computed(() => !!user.value.length);

  return {
    user,
    login,
    validationUser,
  };
});