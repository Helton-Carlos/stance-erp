<script setup lang="ts">
import { ref } from 'vue';
import type { FormInst } from 'naive-ui';
import { loader } from '@utils/loader.ts';

const loading = ref<boolean>(true);
const tema = ref<string>('Preencha o formulário');
const size = ref<string>('large');
const formRef = ref<FormInst | null>(null);

const model = ref({
  selectValueClient: null,
  selectValuePay: null,
  inputUnit: null,
  inputDataInit: null,
  inputDelivery: null,
  inputNameService: null,
  inputPhone: null,
  inputComplement: null,
  selectValueWorker: null
});

const clientOptions = ref(
  ['Amanda Clara', 'Ana Costa', 'Beatriz Lima', 'Carlos Almeida', 'Gabriel Santos', 'João Pedro', 'José Freire', 'Juliana Pereira', 'Lucas Silva', 'Maria Oliveira']
  .map((v) => ({
    label: v,
    value: v
  }))
);

const payOptions = ref(
  ['A pagar', 'Pago', 'Cortesia']
  .map((v) => ({
    label: v,
    value: v
  }))
);

const workerOptions = ref(
  ['Arnaldo Souza', 'Maria Lurdes', 'Walter']
  .map((v) => ({
    label: v,
    value: v
  }))
);

const rules = ref({
  selectValueClient: {
    required: true,
    trigger: ['blur', 'change'],
  },
  selectValuePay: {
    required: true,
    trigger: ['blur', 'change'],
  },
  inputUnit: {
    type: 'number',
    trigger: ['blur', 'change'],
  },
  inputDataInit: {
    type:"date",
    required: true,
    trigger: ['blur', 'input'],
  },
  inputDelivery: {
    type:"date",
    required: true,
    trigger: ['blur', 'input'],
  },
  inputNameService: {
    required: true,
    trigger: ['blur', 'input'],
  },
  inputPhone: {
    required: true,
    trigger: ['blur', 'input'],
  },
  inputComplement: {
    required: true,
    trigger: ['blur', 'input'],
  },
  selectValueWorker: {
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

const startLoader = async () => {
  loading.value = await loader(1400); 
};

startLoader();
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
            <n-form-item-gi :span="5" label="Nome do cliente" path="selectValueClient">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-cascader
                v-else 
                v-model:value="model.selectValueClient"
                placeholder="Ex: José Freire"
                :options="clientOptions"
              />
            </n-form-item-gi>

            <n-form-item-gi :span="5" label="Status de pagamento" path="selectValuePay">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-cascader
                v-else 
                v-model:value="model.selectValuePay"
                placeholder="Ex: A pagar"
                :options="payOptions"
              />
            </n-form-item-gi>

            <n-form-item-gi :span="12" label="Unidade(s)" path="inputUnit">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-input-number v-else v-model:value="model.inputUnit" placeholder="ex: 2"/>
            </n-form-item-gi>

            <n-form-item-gi :span="12" label="Data do serviço" path="inputDataInit">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-date-picker v-else v-model:value="model.inputDataInit" type="date" />
            </n-form-item-gi> 

            <n-form-item-gi :span="12" label="Data de entrega" path="inputDelivery">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-date-picker v-else v-model:value="model.inputDelivery" type="date" />
            </n-form-item-gi> 
 
            <n-form-item-gi :span="12" label="Nome do serviço" path="inputNameService">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-input
                v-else v-model:value="model.inputNameService" 
                placeholder="ex: Ajuste na porta"
                type="textarea"
              />
            </n-form-item-gi>

            <n-form-item-gi :span="12" label="Telefone" path="inputPhone">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-input v-else v-model:value="model.inputPhone" placeholder="ex: (75) 3281-7998" />
            </n-form-item-gi>

            <n-form-item-gi :span="12" label="Observação" path="inputComplement">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-input v-else v-model:value="model.inputComplement" placeholder="ex: Verificar correia" />
            </n-form-item-gi>  

            <n-form-item-gi :span="5" label="Nome do colaborador" path="selectValueWorker">
              <n-skeleton v-if="loading" text :repeat="1" />

              <n-cascader
                v-else 
                v-model:value="model.selectValueWorker"
                placeholder="Ex: Arnaldo Souza"
                :options="workerOptions"
              />
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

<style>
@media print {
  body.printing > *:not(.printable) {
    display: none !important;
  }
  .printable {
    display: block !important;
  }
  @page {
    margin: 0 !important;
  }
  body {
    margin: 25px !important;
  }
}
</style>