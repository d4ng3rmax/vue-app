import axios from 'axios';

const state = {
  items: []
};

const getters = {
  allItems: state => state.items
};

const actions = {
  async fetchItems({ commit }) {
    const response = await axios.get(
      // 'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos'
      'https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/d4ng3rmax/demo-api/posts'
    );

    commit('setItems', response.data);
  },

  async addItem({ commit }, title) {
    console.log("Item " + title + " Adicionado!");
    const response = await axios.post(
      // 'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos',
      'https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/d4ng3rmax/demo-api/posts',
      { title, completed: false }
    );

    commit('newItem', response.data);
  },

  async deleteItem({ commit }, id) {
    console.log("Item " + id + " Removido!");

    // await axios.delete(`https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos/${id}`);
    await axios.delete(`https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/d4ng3rmax/demo-api/posts/${id}`);
    
    commit('deleteItem', id);
  },

  async filterItems({ commit }, e) {

    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      // `https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
      `https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/d4ng3rmax/demo-api/posts?_limit=${limit}`
    );

    commit('setItems', response.data);
    console.log(limit);
  },

  async updateItem({ commit }, updTodo) {
    const response = await axios.put(
      // `https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
      `https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/d4ng3rmax/demo-api/posts/${updTodo.id}`,
      updTodo
    );

    // console.log(response.data);
    commit('updateItem', response.data);
  }
};

const mutations = {
  setItems: (state, items) => (state.items = items),
  newItem: (state, item) => state.items.unshift(item),
  deleteItem: (state, id) => state.items = state.items.filter(item => item.id !== id),
  updateItem: (state, updItem) => {
    const index = state.items.findIndex(item => item.id ===updItem.id);
    if (index !== -1){
      state.items.splice(index, 1, updItem)
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
