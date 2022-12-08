<script setup lang="ts"></script>

<template>
  <footer>
    <span class="footer__copyright">Copyright 2022 @cam</span>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-image: linear-gradient(
    to right bottom,
    var(--backgrounColor-secondary-1),
    var(--backgrounColor-secondary-2)
  );
  padding: 1rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &__copyright {
    font-size: 1.4rem;
    font-family: var(--fontText);
    font-weight: 300;
    color: #fff;
  }
}
</style>
