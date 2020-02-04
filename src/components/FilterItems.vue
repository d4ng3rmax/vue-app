<template>
  <div>
    Filtrar Itens
    <select>
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FilterItems"
}
</script>

<style scoped>
  select {
    margin-top: 20px;
    padding: 6px;
    border: #41b883 1px solid;
  }
</style>