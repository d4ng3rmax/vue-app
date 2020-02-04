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
      'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos'
    );

    commit('setItems', response.data);
  },

  async addItem({ commit }, title) {
    console.log("Item " + title + " Adicionado!");
    const response = await axios.post(
      'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos',
      { title, completed: false }
    );

    commit('newItem', response.data);
  },

  async deleteItem({ commit }, id) {
    console.log("Item " + id + " Removido!");

    await axios.delete(`https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/items/${id}`);
    
    commit('removeItem', id);
  },

  async filterItems({ commit }, e) {

    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/items?_limit=${limit}`
    );

    commit('setItems', response.data);
    console.log(limit);
  },

  async updateTodo({ commit }, updTodo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/items/${updTodo.id}`,
      updTodo
    );

    // console.log(response.data);
    commit('updateTodo', response.data);
  }
};

const mutations = {
  setItems: (state, items) => (state.items = items),
  newItem: (state, item) => state.items.unshift(item),
  deleteItem: (state, id) => state.items = state.items.filter(item => item.id !== id)
};

export default {
  state,
  getters,
  actions,
  mutations
};
