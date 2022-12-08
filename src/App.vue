<script setup lang="ts">
import HeaderVue from "./components/Header/TheHeader.vue";
import ArticleVue from "./components/Article/Article.vue";
import CartVue from "./components/Cart/Cart.vue";
import FooterVue from "./components/TheFooter.vue";
import { reactive } from "vue";
import type { ArticlesInterface } from "./interfaces";
import data from "./data/articles";
import type { CartInterface } from "./interfaces/CartInterface";
import { computed } from "vue";

const state = reactive<{
  articles: ArticlesInterface[];
  cart: CartInterface[];
}>({
  articles: data,
  cart: [],
});
function addArticleToCart(articleId: number): void {
  const article = state.articles.find((article) => article.id === articleId);

  if (article) {
    const articleInCart = state.cart.find(
      (article) => article.id === articleId
    );

    if (articleInCart) {
      articleInCart.quantity++;
      articleInCart.pricePerItem = article.price * articleInCart.quantity;
    } else {
      state.cart.push({ ...article, quantity: 1, pricePerItem: article.price });
    }
  }
}

function removeArticleToCart(articleId: number): void {
  const startingPrice = state.articles.find(
    (article) => article.id === articleId
  );

  const articleFromCart = state.cart.find(
    (article) => article.id === articleId
  );
  if (articleFromCart && startingPrice) {
    if (articleFromCart?.quantity === 1) {
      state.cart = state.cart.filter((articles) => articles.id !== articleId);
    } else {
      articleFromCart.pricePerItem -= startingPrice.price;
      articleFromCart.quantity--;
    }
  }
}

const totalArticlesQuantityInCart = computed<number>(() => {
  return state.cart.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);
});
</script>

<template>
  <div class="app-container">
    <HeaderVue
      class="header"
      :totalCartQuantity="totalArticlesQuantityInCart"
    />
    <ArticleVue
      class="article"
      :articles="state.articles"
      @addArticleToCart="addArticleToCart"
    />
    <CartVue
      v-if="state.cart.length > 0"
      class="cart"
      :carts="state.cart"
      @removeArticleToCart="removeArticleToCart"
    />
    <FooterVue class="footer" />
  </div>
</template>

<style lang="scss">
@import "./assets/sass/base.scss";
@import "./assets/sass/debug.scss";

.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(min-content, 1fr) min-content;
  grid-template-rows: min-content auto min-content;
  grid-template-areas:
    "header header"
    "article cart"
    "footer footer";
}

.header {
  grid-area: header;
}
.article {
  grid-area: article;
}
.cart {
  grid-area: cart;
}
.footer {
  grid-area: footer;
}
</style>
