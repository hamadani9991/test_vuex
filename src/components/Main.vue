<template>
  <div class="container">
    <!-- Section header -->
    <ul class="section__header__text">
      <li class="section__haeder__item"><span class="text">Главная</span></li>
      <li class="section__haeder__item"><img src="../assets/row_right.png"></li>
      <li class="section__haeder__item"><span class="text__secondary">Корзина</span></li>
    </ul>

    <div class="cart__section">
      <div class="cart__container">
        <ul class="cart__header__container">
          <li class="section__haeder__item">
            <h1>Ваша корзина</h1>
          </li>
          <li>
            <span class="text__secondary pd__left">{{products.length + ' товара'}} </span>
          </li>
          <li class="text__right">
            <span class="text__secondary underline" @click="removeAll">Очистить корзину</span>
          </li>
        </ul>

        <div class="cart__items">
          <div class="cart__item" v-for="(product, index) in products" :key="index">

            <div class="item__img">
              <img :src="product.img" class="item__img">
            </div>

            <div class="item__info">
              <p class="text__bold">{{product.title}}</p>
              <p>{{product.description}}</p>
              <p>{{product.code}}</p>
            </div>

            <div class="item__buttons">
              <button class="item__btn" @click="decrementQuantity(index)">-</button>
              <button class="item__btn">{{product.inventory}}</button>
              <button class="item__btn" @click="icrementQuantity(index)">+</button>
              <p v-if="product.inventory > 1">{{product.price | currency}} /шт.</p>
            </div>

            <div class="item__total__price">
              <p>{{itemTotal((index)) | currency}}</p>
            </div>

            <div class="item__delete">
              <img src="../assets/x.png" @click="removeItem(index)">
            </div>

          </div>

          <div class="input__container">
            <div class="input">
              <input type="checkbox" id="checkbox" v-model="selected">
            </div>
            <div class="input__img">
              <img src="../assets/tools.png">
            </div>
            <div class="input__text">
              <p class="text__bold">Установка</p>
              <p class="text__sml">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</p>
            </div>
          </div>

        </div>
      </div>
      <div class="cart__total__container">
        <h2>Итого</h2>
        <div class="cart__total__text">
          <p>Сумма заказа</p>
          <p>{{ cartTotal | currency}}</p>
        </div>
        <div class="cart__total__text">
          <p>Количество</p>
          <p>{{cartCount}} шт</p>
        </div>
        <div class="cart__total__text">
          <p>Установка</p>
          <p >{{selected ? 'Да' : 'Нет'}}</p>
        </div>
        <div class="cart__total__text line__top">
          <p>Стоимость товаров</p>
          <p>{{ cartTotal | currency}}</p>
        </div>

        <div class="cart__total__btn">
          <button class="primary__btn">Оформить заказ</button>
          <button class="secondary__btn">Купить в 1 клик</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Main',
    data() {
      return {
        loading: false,
        selected: ''
      }
    },

    computed: {
      products() {
        return this.$store.getters.availableProducts
      },

      itemCount() {
        return this.$store.getters.itemCount
      },

      itemTotal() {
        return this.$store.getters.itemTotal
      },

      cartTotal() {
      return this.$store.getters.cartTotal
      },

      cartCount() {
        return this.$store.getters.cartCount
      }

    },

    methods: {
      icrementQuantity(index) {
        return this.$store.commit('icrementQuantity', index)
      },
      decrementQuantity(index) {
        return this.$store.commit('decrementQuantity', index)
      },
      removeAll() {
        return this.$store.commit('removeAll')
      },
      removeItem(index) {
        return this.$store.commit('removeItem', index)
      }
    },

    created() {
      this.loading = true
      this.$store.dispatch('fetchProducts')
        .then(() => this.loading = false)
    }

  }
</script>

<style>
  .cart__section {
    display: flex;
    justify-content: space-between;
  }

  .cart__total__container {
    width: 380px;
    max-width: 100%;
    background: #EEF1F4;
    height: 400px;
    border-radius: 5px;
    padding: 2rem;
    margin-top: 4rem;
  }

  .cart__items {
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
  }

  .item__btn {
    text-align: center;
    padding: 8px 14px 8px 14px;
    border: none;
    background: #EEF1F4;
    margin: 0.1rem;
  }

  .underline {
    text-decoration: underline;
  }

  .cart__item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    flex: 1 1 auto;
  }

  .item__info {
    width: 363px;
    height: 93px;
    font-size: 12px;
  }

  .item__img {
    width: 100px;
    height: 100px;

  }

  .item__buttons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 40px;
  }

  .item__buttons p {
    /* align-self: center;
    justify-self: center;
    margin-left: 2rem; */
    justify-self: center;
  }

  .item__delete {
    align-self: flex-start;
  }

  .item__total__price {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    line-height: 73%;
  }

  .cart__total__text {
    display: flex;
    justify-content: space-between;
  }

  .cart__total__btn {
    margin-top: 1.2rem;
    display: flex;
    flex-direction: column;
  }


  .primary__btn {
    background: #0069B4;
    color: #ffffff;
    font-size: 18px;
    margin-bottom: 0.5rem;
    border: none;
  }

  .primary__btn,
  .secondary__btn {
    padding: 14px 0 14px 0;
    border-radius: 5px;
  }

  .secondary__btn {
    background: none;
    color: #0069B4;
    border: 1px solid #0069B4;
    font-size: 18px;
  }

  .line__top {
    border-top: 1px solid #AEB0B6;
  }

  .item__price {
    position: relative;
    right: 14.5%;
    top: 2rem;
  }

  .input__container {
    display: flex;
    align-items: center;
    background: #EEF1F4;
    width: 100%;
    padding: 1rem;
    height: 90px;
    margin-top: 1.5rem;
    border-radius: 5px;
  }

  .input__container > div {
    padding: 0.6em;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    
  }

  .text__sml {
    font-size: 12px;
  }

  .text__bold {
    font-size: 16px;
    font-weight: bold;
  }

</style>