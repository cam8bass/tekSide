<script setup lang="ts">
import Navigation from "./HeaderNavigation.vue";
import Search from "./HeaderSearch.vue";
defineProps<{
  totalCartQuantity: number;
}>();
</script>

<template>
  <header>
    <a href="" class="header__logo">
      <img
        src="src/assets/images/logo.svg"
        alt="logo"
        class="header__logo-icon"
      />
      <span class="header__logo-brand">Tekside</span>
    </a>
    <Search />
    <Navigation :totalCartQuantity="totalCartQuantity" />
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-image: linear-gradient(
    to right bottom,
    var(--backgrounColor-secondary-1),
    var(--backgrounColor-secondary-2)
  );
  padding: 2rem;
  display: grid;
  grid-template-columns: min-content 1fr max-content;
  &__logo {
    grid-column: 1/2;
    display: flex;
    align-items: center;
    &-icon {
      width: 8rem;
      height: 8rem;
    }

    &-brand {
      font-family: var(--fontBrand);
      font-size: 2.5rem;
    }
  }
}
</style>
