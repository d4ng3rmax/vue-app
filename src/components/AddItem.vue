<template>
  <div>
    <h3>Adicionar Item</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Adicionar Item" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    name: "AddItem",
    data() {
      return {
        title: ""
      }
    },
    methods: {
      ...mapActions(['addItem']),
      onSubmit(e) {
        e.preventDefault();
        this.addItem(this.title);
      }
    }
  }
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #0f87e9;
    outline: 0;
  }

  input[type="submit"] {
    flex: 2;
    background: #0f87e9;
    color: #fff;
    border: 1px #0f87e9 solid;
    cursor: pointer;
  }
</style>