<script setup lang="ts">
import type {
  FormInst,
  FormItemInst,
  FormItemRule,
  FormRules,
  FormValidationError,
} from "naive-ui";
import { ref } from "vue";
import { ModelType } from "@types/login";
import { useRouter } from "vue-router";

const formRef = ref<FormInst | null>(null);
const rPasswordFormItemRef = ref<FormItemInst | null>(null);
const modelRef = ref<ModelType>({
  email: null,
  password: null,
  reenteredPassword: null,
});
const router = useRouter();

function validatePasswordStartWith(
  _rule: FormItemRule,
  value: string
): boolean {
  return (
    !!modelRef.value.password &&
    modelRef.value.password.startsWith(value) &&
    modelRef.value.password.length >= value.length
  );
}

function validatePasswordSame(_rule: FormItemRule, value: string): boolean {
  return value === modelRef.value.password;
}

const rules: FormRules = {
  email: [
    {
      required: true,
      validator(_rule: FormItemRule, value: string) {
        if (!value) {
          return new Error("E-mail is required");
        }
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],
  password: [
    {
      required: true,
      message: "Password is required",
    },
  ],
  reenteredPassword: [
    {
      required: true,
      message: "Re-entered password is required",
      trigger: ["input", "blur"],
    },
    {
      validator: validatePasswordStartWith,
      message: "Password is not same as re-entered password!",
      trigger: "input",
    },
    {
      validator: validatePasswordSame,
      message: "Password is not same as re-entered password!",
      trigger: ["blur", "password-input"],
    },
  ],
};

function handlePasswordInput() {
  if (modelRef.value.reenteredPassword) {
    rPasswordFormItemRef.value?.validate({ trigger: "password-input" });
  }
}

function handleValidateButtonClick(e: MouseEvent) {
  e.preventDefault();
  formRef.value?.validate((errors: Array<FormValidationError> | undefined) => {
    if (!errors) {
      router.push("/");
    } else {
      console.log(errors);
    }
  });
}
</script>

<template>
  <div class="center">
    <n-form class="form" ref="formRef" :model="modelRef" :rules="rules">
      <n-form-item path="email" label="E-mail">
        <n-input v-model:value="modelRef.email" @keydown.enter.prevent />
      </n-form-item>

      <n-form-item path="password" label="Password">
        <n-input
          v-model:value="modelRef.password"
          type="password"
          @input="handlePasswordInput"
          @keydown.enter.prevent
        />
      </n-form-item>

      <n-form-item
        ref="rPasswordFormItemRef"
        first
        path="reenteredPassword"
        label="Re-enter Password"
      >
        <n-input
          v-model:value="modelRef.reenteredPassword"
          :disabled="!modelRef.password"
          type="password"
          @keydown.enter.prevent
        />
      </n-form-item>

      <n-row :gutter="[0, 24]">
        <n-col :span="24">
          <div style="display: flex; justify-content: flex-end">
            <n-button
              :disabled="modelRef.email === null"
              round
              type="primary"
              @click="handleValidateButtonClick"
            >
              Validate
            </n-button>
          </div>
        </n-col>
      </n-row>
    </n-form>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  width: 450px;
  flex-flow: column;
  background-color: #c0c0c0;
  padding: 25px 15px;
  border-radius: 5px;
}
</style>
