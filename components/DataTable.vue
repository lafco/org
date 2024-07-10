<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(field, index) in fields" :key="index">{{ field.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td v-for="(field, index) in fields" :key="index">{{ item[field.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<
    Record<string, unknown>
  >,
  fields: Array<{
    label: string,
    key: string
  }>,
}>();
</script>

<style scoped>
table {
  border-collapse: collapse;
}
th, td {
  border: 1px solid gray;
  padding: 8px;
}
</style>


