<script setup lang="ts">
import type { ArticlesInterface } from "@/interfaces";
import ArticleListVue from "./ArticleList.vue";
defineProps<{
  articles: ArticlesInterface[];
}>();
const emit = defineEmits<{
  (e: "addArticleToCart", articleId: number): void;
}>();
</script>

<template>
  <div class="article">
    <ArticleListVue
      :articles="articles"
      @addArticleToCart="emit('addArticleToCart', $event)"
    />
  </div>
</template>

<style lang="scss" scoped>
.article {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
