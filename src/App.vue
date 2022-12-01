<script setup lang="ts">
import HeaderVue from "./components/Header.vue";
import ArticleVue from "./components/Article.vue";
import CartVue from "./components/Cart.vue";
import FooterVue from "./components/Footer.vue";
</script>

<template>
  <div class="app-container">
    <HeaderVue class="header b1" />
    <ArticleVue class="article b2" />
    <CartVue class="cart b3" />
    <FooterVue class="footer b4" />
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
