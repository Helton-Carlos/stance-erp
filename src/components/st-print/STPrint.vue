<script setup lang='ts'>
defineProps<({  
  coll: string[],
  rows?: string[] | number[]
})>()
</script>

<template>
  <div>
    <n-table class="mb-4" :bordered="false" :single-line="false">
      <thead>
        <tr>
          <th v-for="col in coll" :key="col">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in rows" :key="key">
          <td>{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </n-table>
  </div>
</template>