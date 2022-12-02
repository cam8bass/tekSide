<script setup lang="ts">
import type { CartInterface } from "@/interfaces/CartInterface";

defineProps<{
  cart: CartInterface;
}>();

const emit = defineEmits<{
  (e: "removeArticleToCart", articleId: number): number;
}>();
</script>

<template>
  <li class="article">
    <span class="article__name">{{ cart.title }}</span>
    <span class="article__quantity"
      >x <span class="article__quantity-number">{{ cart.quantity }}</span></span
    >
    <span class="article__price">{{ cart.price }}€</span>
    <button
      @click="emit('removeArticleToCart', cart.id)"
      class="btn article__btn"
    >
      <img
        src="src/assets/images/icones/trash-o-white.png"
        alt=""
        class="article__btn-icon"
      />
    </button>
  </li>
</template>

<style lang="scss" scoped>
.article {
  display: grid;
  grid-template-columns:  repeat(4, minmax(max-content,1fr));
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  background-color: #fff;
  border: 1px solid var(--colorText-1);
  font-family: var(--fontText);
  margin: 0.8rem 1rem;
  box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.15);

  &__name {
    font-family: var(--fontSubtitle);
  }

  &__quantity {
    &-number {
      color: var(--orange-2);
    }
  }

  &__btn {
    background-color: var(--danger-1);
    transition: background-color 0.2s;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.15);
    &-icon {
      height: 2.2rem;
      width: 2.2rem;
    }

    &:hover,
    &:active {
      background-color: var(--danger-2);
    }
  }
}
</style>
