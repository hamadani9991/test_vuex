import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500, 'quantity': 6 },
      { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 300, 'quantity': 3 },
      { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 1000, 'quantity': 2 },
      { 'id': 4, 'title': 'Charli OOO - Suck USB', 'price': 99, 'quantity': 4 }
    ],

    cart: []
  },

  getters: {  // For computed property
    // Get All Products From state
    
    allProducts: (state) => state.products,

    cartProducts(state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product = product.id === cartItem.id)
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },
   
  },

  actions: { 
    // Add to cart function
    addToCart(context, product) {
      if(product.quantity > 0) {
        // check if item excect in a cart
        const cartItem = context.state.cart.find(item => item.id === product.id)
        if(!cartItem) {
          context.commit('pushProductToCart', product.id)
        } else {
          context.commit('incrementItemQuantity', cartItem)
        }

        context.commit('decrementProductInventory', product)

      }
      // find cart item
      
    },

    // decrement Cart Item price / quantity
    // decrementCartItem({commit}, index) {
    //   commit('decrement', index)
    // },

    // // increment Cart Item price / quantity
    // incrementCartItem({commit}, index) {
    //   commit('increment', index)
    // },

    
  },

  mutations: {  // Setting and updating the state
    pushProductToCart(state, productId){
      state.cart.push({
        id: productId,
        quantity: 1
      })
      
    },
    // increment Cart Item price / quantity from state
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++
    },

     // decrement Cart Item price / quantity from state
     decrementProductInventory(state, product) {
      product.quantity--
    },  
  },
  
  modules: {

  }
})
