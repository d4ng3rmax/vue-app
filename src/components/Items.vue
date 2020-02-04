<template>
    <div>
      <h3>Itens</h3>
      <div class="items">
        <div v-for="item in allItems" :key="item.id" class="item">
          {{ item.title }}
          <i @click="deleteItem(item.id)" class="fas fa-trash-alt"></i>
        </div>
      </div>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "Items",
    methods: {
      ...mapActions(["fetchItems", "deleteItem"])      
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

  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }
</style>
