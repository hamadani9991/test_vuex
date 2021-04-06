<template>
  <div class="hello">
    <h1>Product list</h1>
    <img src="" alt="">
    <ul>
      <li v-for="(product, index) in products" :key="index"  @addProductToCart="addProductToCart(product)">
        {{product.title}} 
        <button>-</button>
        <span>{{product.quantity}}</span>
         <button @click="addProductToCart(product)">+</button>
         <span>{{product.price}}</span>
        
      </li>
    </ul>
    <input type="checkbox" checked>
  </div>
</template>

<script>



export default {
  name: 'Main',
  computed: {
    products() {
      return this.$store.getters.allProducts
    }

  },

  methods: {
    addProductToCart(product) {
      this.$store.dispatch('addToCart', product)
    },
    // increment(index) {
    //   console.log('increment');
    //   this.$store.dispatch('incrementCartItem', index)
    // },
    // decrement(index) {
    //   console.log('decrement');
    //   this.$store.dispatch('decrementCartItem', index)
    // }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
