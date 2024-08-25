<script setup lang="ts">
import { type IBlog } from '@/interfaces/IBlog'
defineProps<IBlog>()
</script>

<template>
  <article class="blog">
    <img class="blog__image" :src="imageSource" />

    <p class="blog__description">
      {{ description }}
    </p>
    <button class="button--primary">Read More</button>
  </article>
</template>

<style scoped>
.blog {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem;
  padding: 1.25rem;
  margin: 1.25rem;
  border-width: 1px;
  border-radius: 0.25rem;
}

.blog:hover{
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.blog__description {
  text-align: center;
  flex: 1 1 auto;
}
</style>
