<template>
  <header>
    <div class="container">
      <div class="header__items">
        <div class="cart__icon">
          <img src="../assets/Vector.png" class="header__item" />
        </div>
        <ul>
          <li><span>Ваша корзина</span></li>
          <li class="text__secondary"><span>{{products.length}} товара</span></li>
          <li><span>{{cartTotal | currency}}</span></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    computed: {
      products() {
        return this.$store.getters.availableProducts
      },

      cartTotal() {
        return this.$store.getters.cartTotal
      },
    }
  }
</script>

<style>

</style>