<script setup lang="ts">
defineProps<{
  totalCartQuantity: number;
}>();
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <a href="" class="navigation__link">Inscription</a>
      </li>
      <li class="navigation__item">
        <a href="" class="navigation__link">Mon compte</a>
      </li>
      <li class="navigation__item">
        <button class="btn navigation__link navigation__basket">
          <img
            src="src/assets/images/icones/shopping-basket-white.png"
            alt=""
            class="navigation__link-icon"
          />
          <span class="navigation__link-title">Mon Panier </span>
          <span class="navigation__link-article"
            >(
            <span class="navigation__link-article--number">{{
              totalCartQuantity
            }}</span>
            {{ totalCartQuantity > 1 ? "articles" : "article" }} )</span
          >
        </button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  grid-column: 3/-1;
  align-self: center;

  &__list {
    display: flex;
    align-items: center;
  }

  &__item {
    margin-right: 5rem;
  }

  &__link {
    font-family: var(--fontText);
    color: #fff;
    font-size: 1.6rem;
    transition: color 0.2s;
    &-icon {
    }

    &-title {
      font-size: 1.8rem;
    }

    &-article {
      &--number {
        color: var(--orange-1);
      }
    }

    &:hover,
    &:active {
      color: var(--colorText-1);
    }
  }

  &__basket {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
}
</style>
