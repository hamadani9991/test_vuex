import Vue from 'vue'
import Vuex from 'vuex'
import shop from '../api/shop'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
  },

  getters: {
    availableProducts(state, getters) {
      return state.products
    },

    cartCount: state => {
      if(state.products.length === 0) {
        return ''
      } else {
        return state.products.reduce((a, b) => a + b.inventory, 0)
      }
    },

    cartTotal: state => {
      return (state.products.reduce((a, b) => a + (b.price * b.inventory), 0)).toFixed(2);
    },

    itemCount: (state) => (index) => {
      if (index >= 1) {
        return state.products[index].inventory
      }
    },

    itemTotal: (state) => (index) => {
      if (state.products[index]) {
        return (state.products[index].price * state.products[index].inventory);
      }
    },
  },

  actions: {
    fetchProducts({
      commit
    }) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    },

  },

  mutations: { // Setting and updating the state
    setProducts(state, products) {
      state.products = products
    },

    icrementQuantity(state, index) {
      state.products[index].inventory++
    },

    decrementQuantity(state, index) {
      if(state.products[index].inventory <= 1) {
        state.products[index].inventory += 1
      }
      state.products[index].inventory--
    },

    removeAll: (state) => {
      state.products.splice(0);
    },

    removeItem: (state, index) => {
      state.products.splice(index, 1);
    },
  }
})