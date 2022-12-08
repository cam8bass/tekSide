<script setup lang="ts"></script>

<template>
  <div class="search">
    <input
      type="text"
      class="search__input"
      placeholder="Rechercher un produit"
    />
  </div>
</template>

<style lang="scss" scoped>
.search {
  grid-column: 2/3;
  justify-self: center;
  align-self: center;
  display: flex;
  align-items: center;
  width: 80%;
  &__input {
    height: 4rem;
    border: none;
    width: 100%;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.15);
    font-size: 1.8rem;
    font-family: var(--fontText);
    padding-left: 1rem;
    outline: none;
  }
}
</style>
