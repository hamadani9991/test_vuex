import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {currency} from './currency'

Vue.config.productionTip = false

Vue.filter('currency', currency)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')


// const store = new Vuex.Store({
// 	state: {
// 		cartItems: [],
// 		products: [],
// 		loading: true,
// 		errored: false
// 	},
// 	mutations: {
// 		ADD_NEW_ITEM: (state, item) => {
// 			item.isDeleting = false;
// 			item = { ...item,
// 				quantity: 1
// 			}
// 			state.cartItems = [...state.cartItems, item];
// 		},
// 		UPDATE_CART: (state, item) => {
// 			let findIndex = state.cartItems.findIndex(x => x.name == item.name);
// 			state.cartItems[findIndex].quantity++;
// 		},
// 		CHANGE_QUANTITY: (state, {
// 			index,
// 			increase
// 		}) => {
// 			if (increase) {
// 				state.cartItems[index].quantity++;
// 			} else {
// 				if (state.cartItems[index].quantity == 1) {
// 					state.cartItems.splice(index, 1);
// 				} else {
// 					state.cartItems[index].quantity--;
// 				}
// 			}
// 		},
// 		REMOVE_ALL: (state, index) => {
// 			state.cartItems.splice(index, 1);
// 		},
// 		LOAD_PRODUCTS: (state, products) => {
// 			state.products = products
// 			state.loading = false
// 		},
// 		ERRORED: (state, error) => {
// 			state.errored = true;
// 			console.error(error);
// 		}
// 	},
// 	actions: {
// 		removeAll: ({
// 			commit
// 		}, index) => {
// 			return new Promise((resolve) => {
// 				setTimeout(() => {
// 					commit('REMOVE_ALL', index)
// 					resolve()
// 				}, 700)
// 			})
// 		},
// 		retrieveProducts: ({
// 			commit
// 		}) => {
// 			// eslint-disable-next-line no-undef
// 			axios
// 				.get('https://api.jsonbin.io/b/5c6eadd27bded36fef1b653e/1')
// 				.then(response => {
// 					commit('LOAD_PRODUCTS', response.data.products)
// 				})
// 				.catch(error => {
// 					commit('ERRORED', error)
// 				})
// 		},
// 		addToCart: ({
// 			commit,
// 			state
// 		}, product) => {
// 			let found = state.cartItems.some((el) => {
// 				return el.name === product.name
// 			});
// 			if (!found) {
// 				commit('ADD_NEW_ITEM', product)
// 			} else {
// 				commit('UPDATE_CART', product)
// 			}
// 		}
// 	},
// 	getters: {
// 		cartCount: state => {
// 			if (state.cartItems.length === 0) {
// 				return 'empty'
// 			} else {
// 				return state.cartItems.reduce((a, b) => a + b.quantity, 0);
// 			}
// 		},
// 		cartTotal: state => {
// 			return (state.cartItems.reduce((a, b) => a + (b.price * b.quantity), 0)).toFixed(2);
// 		},
// 		itemCount: (state) => (index) => {
// 			if (index >= 0) {
// 				return state.cartItems[index].quantity
// 			}
// 		},
// 		itemTotal: (state) => (index) => {
// 			if (state.cartItems[index]) {
// 				return (state.cartItems[index].price * state.cartItems[index].quantity);
// 			}
// 		}
// 	}
// })