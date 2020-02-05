<template>
    <div>
      <h3>Itens</h3>
      <div class="legend">
        <span>Clicar 2x para checar como completo</span>
        <span>
          <span class="inconplete-box"></span> = Incompleto
        </span>
        <span>
          <span class="complete-box"></span> = Completo
        </span>
      </div>
      <div class="items">
        <div 
          @dblclick="onDblClick(item)" 
          v-for="item in allItems" 
          :key="item.id" 
          class="item"
          v-bind:class="{'is-complete': item.completed}">
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
      ...mapActions(["fetchItems", "deleteItem", "updateItem"]),
      onDblClick(item) {
        const updItem = {
          id: item.id,
          title: item.title,
          complete: !item.completed
        }

        this.updateItem(updItem);
      }
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

  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }

  .complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #08368b;
  }

  .inconplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #5285e6;
  }

  .is-complete {
    background: #08368b;
    color: #fff;
  }

  @media (max-width: 500px) {
    .items {
      grid-template-columns: 1fr;
    }
  }
</style>
