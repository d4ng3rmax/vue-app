import Vuex from 'vuex';
import Vue from 'vue';
import items from './modules/items';

// Load Vuex
Vue.use(Vuex);

// Store
export default new Vuex.Store({
  modules: {
    items
  }
})