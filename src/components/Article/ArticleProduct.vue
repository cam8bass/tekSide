<script setup lang="ts">
import type { ArticlesInterface } from "@/interfaces";

defineProps<{
  article: ArticlesInterface;
}>();

const emit = defineEmits<{
  (e: "addArticleToCart", articleId: number): void;
}>();
</script>

<template>
  <div class="product">
    <img :src="article.img" alt="image product" class="product__img" />
    <h4 class="product__title">{{ article.title }}</h4>
    <div class="product__description">
      <ul class="product__description-list">
        <li class="product__description-item">
          <img
            src="src/assets/images/icones/window-orange.png"
            alt="icone system "
            class="product__description-icon"
          />

          <span class="product__description-text">{{
            article.description.system
          }}</span>
        </li>
        <li class="product__description-item">
          <img
            src="src/assets/images/icones/processor-orange.png"
            alt="icone processor "
            class="product__description-icon"
          />

          <span class="product__description-text">{{
            article.description.processor
          }}</span>
        </li>
        <li class="product__description-item">
          <img
            src="src/assets/images/icones/graphicCard-orange.png"
            alt="icone graphic card "
            class="product__description-icon"
          />

          <span class="product__description-text">{{
            article.description.graphicCard
          }}</span>
        </li>
        <li class="product__description-item">
          <img
            src="src/assets/images/icones/ram-orange.png"
            alt="icone ram  "
            class="product__description-icon"
          />

          <span class="product__description-text">{{
            article.description.ram
          }}</span>
        </li>
        <li class="product__description-item">
          <img
            src="src/assets/images/icones/data-orange.png"
            alt="icone hard disk "
            class="product__description-icon"
          />

          <span class="product__description-text">{{
            article.description.harkDisk
          }}</span>
        </li>
        <li class="product__description-item">
          <img
            src="src/assets/images/icones/wifi-orange.png"
            alt="icone wifi "
            class="product__description-icon"
          />

          <span class="product__description-text">{{
            article.description.wifi ? "wifi intégré" : "wifi none"
          }}</span>
        </li>
      </ul>
    </div>
    <span class="product__status">Disponible</span>
    <span class="product__price">{{ article.price }} €</span>
    <button
      @click="emit('addArticleToCart', article.id)"
      class="btn product__btn"
    >
      <img
        src="src/assets/images/icones/cart-plus-white.png"
        alt="icone cart"
        class="product__btn-icon"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.product {
  background-color: #fff;
  padding: 2rem;
  display: grid;
  grid-template-rows: repeat(4, min-content);
  grid-template-columns: max-content max-content;
  gap: 0.5rem;
  padding: 1rem;
  box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.15);
  &__img {
    grid-row: 1/3;
    grid-column: 1/2;
    width: 100%;
    object-fit: cover;
    object-position: center;
    height: 20rem;
    transition: transform 0.2s;
    &:hover,
    &:active {
      transform: scale(1.2) rotate(2deg);
    }
  }

  &__title {
    grid-column: 2/-1;
    grid-row: 1/2;
    justify-self: center;
    font-size: 2.5rem;
    font-family: var(--fontSubtitle);
    font-weight: 400;
    margin-bottom: 1rem;
  }

  &__description {
    grid-column: 2/-1;
    grid-row: 2/3;
    border-left: 1px solid var(--colorText-1);
    padding-left: 1rem;

    &-item {
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    &-icon {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }

    &-text {
      font-size: 1.2rem;
      font-family: var(--fontSubtitle);
    }
  }

  &__status {
    grid-row: 3/4;
    font-size: 1.4rem;
    font-family: var(--fontSubtitle);
    color: var(--orange-1);
  }

  &__price {
    grid-row: 4/-1;
    align-self: center;
    font-size: 2.5rem;
    font-family: var(--fontTitle);
  }

  &__btn {
    grid-row: 4/-1;
    transition: background-color 0.2s;
    background-color: var(--orange-1);
    border-radius: 5px;
    padding: 1rem 1.5rem;
    box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.15);
    &-icon {
      width: 2.5rem;
      height: 2.5rem;
    }

    &:hover,
    &:active {
      background-color: var(--orange-2);
    }
  }
}
</style>
