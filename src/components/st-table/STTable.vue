<script setup lang="ts">
import {ref, computed} from 'vue';

const page = ref<number>(1);

const coll = [
  'Id',
  'Name',
  'Type',
  'Status',
  'Data'
]

const rows = [
  { 
    id: '1', 
    name: 'Arnaldo', 
    type: 'normal', 
    status: 'ativo', 
    data: '22/12/2024'
  },
  { 
    id: '2', 
    name: 'Mario', 
    type: 'ausente', 
    status: 'desativado', 
    data: '25/12/2023'
  },
  { 
    id: '3', 
    name: 'Claudia', 
    type: 'normal', 
    status: 'ativo',
    data: '27/12/2022'
  },
  { 
    id: '4', 
    name: 'Eduardo', 
    type: 'ausente', 
    status: 'desativado', 
    data: '25/12/2023'
  },
  { 
    id: '5', 
    name: 'Vania', 
    type: 'normal', 
    status: 'ativo',
    data: '27/12/2022'
  },
  { 
    id: '6', 
    name: 'Donald Marley', 
    type: 'normal', 
    status: 'ativo', 
    data: '22/12/2024'
  },
  { 
    id: '7', 
    name: 'Phill Robson', 
    type: 'ausente', 
    status: 'desativado', 
    data: '25/12/2023'
  },
  { 
    id: '8', 
    name: 'Ducarmo', 
    type: 'normal', 
    status: 'ativo',
    data: '27/12/2022'
  },
  { 
    id: '9', 
    name: 'Eduardo', 
    type: 'ausente', 
    status: 'desativado', 
    data: '25/12/2023'
  },
  { 
    id: '10', 
    name: 'Derick', 
    type: 'normal', 
    status: 'ativo',
    data: '27/12/2022'
  }
];

const paginatedRows = computed(() => {
  const start = (page.value - 1) * 5;
  const end = start + 5;
  return rows.slice(start, end);
});
</script>

<template>
  <div >
    <n-table class="mb-4" :bordered="false" :single-line="false">
      <thead>
        <tr>
          <th v-for="col in coll" :key="col">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in paginatedRows" :key="row.id">
          <td>{{row.id}}</td>
          <td>{{row.name}}</td>
          <td>{{row.type}}</td>
          <td>{{row.status}}</td>
          <td>{{row.data}}</td>
        </tr>
      </tbody>
    </n-table>

    <n-pagination 
      v-model:page="page" 
      :page-count="2" 
      :show-quick-jumper="false" 
      :show-sizer="false"  
    />
  </div>
</template> 