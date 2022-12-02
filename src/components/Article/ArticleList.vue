<script setup lang="ts">
import type { ArticlesInterface } from "@/interfaces";
import ArticleProductVue from "./ArticleProduct.vue";
defineProps<{
  articles: ArticlesInterface[];
}>();

const emit = defineEmits<{
  (e: "addArticleToCart", articleId: number): void;
}>();
</script>

<template>
  <div class="list">
    <ArticleProductVue
      v-for="article of articles"
      :key="article.id"
      :article="article"
      @addArticleToCart="emit('addArticleToCart', $event)"
    />
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min-content, 45rem));
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 2rem;
}
</style>
