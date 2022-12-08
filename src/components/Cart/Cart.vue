<script setup lang="ts">
import type { CartInterface } from "@/interfaces/CartInterface";
import { computed } from "vue";
import CartListVue from "./CartList.vue";
const props = defineProps<{
  carts: CartInterface[];
}>();
const emit = defineEmits<{
  (e: "removeArticleToCart", articleId: number): void;
}>();

const totalPrice = computed(() =>
  props.carts.reduce((acc, article) => {
    return acc + article.price;
  }, 0)
);
</script>

<template>
  <div>
    <h3 class="cart__title">Panier : {{ totalPrice }}€</h3>

    <CartListVue
      :carts="carts"
      @removeArticleToCart="emit('removeArticleToCart', $event)"
    />
    <button v-if="carts.length > 0" class="btn cart__btn">Commander</button>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  background-color: var(--backgroundColor-primary-2);
  border-left: 1px solid var(--orange-1);
  display: flex;
  flex-direction: column;

  &__title {
    margin: 2rem 1rem;
    font-size: 2rem;
    font-family: var(--fontText);
    border-bottom: 1px solid var(--colorText-2);
  }

  &__btn {
    margin-top: 2rem;
    align-self: center;
    background-color: var(--orange-1);
    color: #fff;
    font-family: var(--fontText);
    padding: 1rem 1.5rem;
    font-size: 1.6rem;
    border-radius: 5px;
    box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.15);
    transition: background-color 0.2s;

    &:hover,
    &:active {
      background-color: var(--orange-2);
    }
  }
}
</style>
