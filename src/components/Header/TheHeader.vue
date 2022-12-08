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
        src="src/assets/images/logo/logo-2.png"
        alt="logo"
        class="header__logo-icon"
      />
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
  grid-template-columns: max-content 1fr max-content;
  &__logo {
    grid-column: 1/2;
    align-self: center;
    &-icon {
      width: auto;
      height: 5rem;

    }

    &-brand {
      font-family: var(--fontBrand);
      font-size: 2.5rem;
    }
  }
}
</style>
