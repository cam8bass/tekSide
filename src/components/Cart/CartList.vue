<script setup lang="ts">
import type { CartInterface } from "@/interfaces/CartInterface";
import CartArticleVue from "./CartArticle.vue";
defineProps<{
  carts: CartInterface[];
}>();

const emit = defineEmits<{
  (e: "removeArticleToCart", articleId: number): void;
}>();
</script>

<template>
  <ul class="list">
    <CartArticleVue
      v-for="cart of carts"
      :key="cart.id"
      :cart="cart"
      @removeArticleToCart="emit('removeArticleToCart', $event)"
    />
  </ul>
</template>

<style lang="scss" scoped></style>
