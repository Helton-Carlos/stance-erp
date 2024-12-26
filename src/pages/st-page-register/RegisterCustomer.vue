<script setup lang="ts">
import { ref } from 'vue';
import type { FormInst } from 'naive-ui';
import { loader } from '../../utils/loader.ts';

const loading = ref(true);

const startLoader = async () => {
  loading.value = await loader(1400); 
};

startLoader()

const tema = ref<string>('Preencha o formulário');
const size = ref<string>('large')

const formRef = ref<FormInst | null>(null)

const model = ref({
  inputName: null,
  inputNameMom: null,
  selectValue: null,
  inputNumberValue: null,
  inputPhone: null,
  inputCep: null,
  inputStreet: null,
  inputNeighborhood: null,
  inputComplement: null,
  inputNumberHouse: null,
})

const generalOptions = ref(
  ['Masculino', 'Feminino', 'Outros'].map((v) => ({
    label: v,
    value: v
  }))
)

const rules = ref({
  inputName: {
    required: true,
    trigger: ['blur', 'input'],
  },
  inputNameMom: {
    required: true,
    trigger: ['blur', 'input'],
  },
  selectValue: {
    required: true,
    trigger: ['blur', 'change'],
  },
  inputNumberValue: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
  },
  inputPhone: {
    required: true,
    trigger: ['blur', 'input'],
  },
  inputCep: {
    required: true,
    trigger: ['blur', 'input'],
  },
  inputStreet: {
    required: true,
    trigger: ['blur', 'input'],
  },
  inputNeighborhood: {
    required: true,
    trigger: ['blur', 'input'],
  },
  inputComplement: {
    required: true,
    trigger: ['blur', 'input'],
  },
  inputNumberHouse: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
  },
})

function handleValidateButtonClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      console.log(model.value)
      console.log('success')
    } else {
      console.log(errors)
    }
  })
}

async function getCEP(cep: string) {
  await fetch(`https://viacep.com.br/ws/${cep ? cep : '01001000'}/json/`)
    .then(response => response.text())
    .then(texto => console.log(texto))
    .catch(err => console.log(err.message))
}

getCEP('01001000')
</script>

<template>
  <div>
    <n-card :title="tema" class="shadow">
        <n-form
          ref="formRef"
          :model="model"
          :rules="rules"
          :size="size"
          label-placement="top"
        >
          <strong>Dados do cliente:</strong>

          <n-grid  class="mt-4" :span="24" :x-gap="24">
            <n-form-item-gi :span="12" label="Nome completo" path="inputName">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-input v-else v-model:value="model.inputName" placeholder="ex: João Marinho Silva" />
            </n-form-item-gi>

            <n-form-item-gi :span="12" label="Nome da mãe" path="inputNameMom">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-input v-else v-model:value="model.inputNameMom" placeholder="ex: Maria de Lurdes Silva" />
            </n-form-item-gi>

            <n-form-item-gi :span="12" label="Sexo" path="selectValue">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-select
                v-else
                v-model:value="model.selectValue"
                placeholder="ex: Masculino"
                :options="generalOptions"
              />
            </n-form-item-gi>

            <n-form-item-gi :span="12" label="Idade" path="inputNumberValue">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-input-number v-else v-model:value="model.inputNumberValue" placeholder="ex: 32" />
            </n-form-item-gi>

            <n-form-item-gi :span="12" label="Telefone" path="inputPhone">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-input v-else v-model:value="model.inputPhone" placeholder="ex: (75)3281-7998" />
            </n-form-item-gi>
            
            <n-form-item-gi :span="12" label="CEP" path="inputCep">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-input v-else v-model:value="model.inputCep" placeholder="ex: 01001000" />
            </n-form-item-gi>

            <n-form-item-gi :span="12" label="Rua" path="inputStreet">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-input v-else v-model:value="model.inputStreet" placeholder="ex: José Brito" />
            </n-form-item-gi>

            <n-form-item-gi :span="12" label="Bairro" path="inputNeighborhood">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-input v-else v-model:value="model.inputNeighborhood" placeholder="ex: Itapevi" />
            </n-form-item-gi>

            <n-form-item-gi :span="12" label="Complemento" path="inputComplement">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-input v-else v-model:value="model.inputComplement" placeholder="ex: Casa de esquina, Branca" />
            </n-form-item-gi>
            
            <n-form-item-gi :span="12" label="Numero" path="inputNumberHouse">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-input-number v-else v-model:value="model.inputNumberHouse" placeholder="ex: 15"/>
            </n-form-item-gi>
            
            <n-gi :span="12">
              <div style="display: flex; justify-content: flex-start" class="gap-4">
                <n-skeleton 
                  v-if="loading" 
                  :width="142" 
                  :sharp="false" 
                  size="medium"  
                />

                <n-button v-else type="info" @click="handleValidateButtonClick">
                  <template #icon>
                    <n-icon>
                      <Save />
                    </n-icon>
                  </template>
                  Enviar
                </n-button>

                <n-skeleton 
                  v-if="loading" 
                  :width="142" 
                  :sharp="false" 
                  size="medium"  
                />

                <router-link to="/" v-else>
                  <n-button  type="info" ghost>
                    <template #icon>
                      <n-icon>
                        <ArrowBack />
                      </n-icon>
                    </template>
                    Voltar
                  </n-button>
                </router-link>
              </div>
            </n-gi>
          </n-grid>
        </n-form>
    </n-card>
  </div>
</template>