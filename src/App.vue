<template>
  <div id="app">
    <div class="container">
      <AddItem/>
      <FilterItems/>
      <Items/>
    </div>      
  </div>
</template>

<script>
  import Items from "./components/Items.vue";
  import AddItem from "./components/AddItem.vue";
  import FilterItems from "./components/FilterItems.vue";

  export default {
    name: "app",
    components: {
      Items,
      AddItem,
      FilterItems
    }
  };
</script>

<style>
  body {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    line-height: 1.6;
    background: #e8f7f0;
  }

  .container {
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
  }
</style>
