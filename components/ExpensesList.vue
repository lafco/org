<template>
  <div>
    <DataTable :items="transactions" :fields="fields" />
  </div>
</template>

<script setup lang="ts">
const { data } = useFetch<Transaction[]>('/api/transaction')
const transactions = ref<Transaction[]>([])
const fields = ref([
  { label: 'ID', key: 'id' },
  { label: 'Value', key: 'value' },
  { label: 'Source', key: 'source' },
  { label: 'Title', key: 'title' },
  { label: 'Description', key: 'description' },
  { label: 'Date', key: 'date' },
])

onMounted(() => {
  transactions.value = data.value ?? []
})
</script>

