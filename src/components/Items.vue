<template>
    <div>
      <h3>Itens</h3>
      <div class="items">
        <div v-for="item in allItems" :key="item.id" class="item">
          {{ item.title }}
        </div>
      </div>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "Items",
    methods: {
      ...mapActions(['fetchItems'])      
    },
    computed: mapGetters(['allItems']),
    created() {
      this.fetchItems();
    }
  };
</script>

<style scoped>
  .items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  .item {
    border: 1px solid #ccc;
    background: #5285e6;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
</style>
