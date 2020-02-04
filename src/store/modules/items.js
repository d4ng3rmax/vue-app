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
    const response = await axios.post(
      'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos',
      { title, completed: false }
    );

    commit('newItem', response.data);
  },

};

const mutations = {
  setItems: (state, items) => (state.items = items),
  newItem: (state, item) => state.items.unshift(item)
};

export default {
  state,
  getters,
  actions,
  mutations
};
