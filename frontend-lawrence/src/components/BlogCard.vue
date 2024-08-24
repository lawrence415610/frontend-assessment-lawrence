<script setup lang="ts">
import { type IBlog } from '@/interfaces/IBlog'
import './BlogCard.css'
defineProps<IBlog>()
</script>
<template>
  <article
    class="blog"
  >
    <img class="blog__image" :src="imageSource" />

    <p class="blog__description">
      {{ description }}
    </p>

    <a :href="link">
      <button class="button--primary">Read More</button>
    </a>
  </article>
</template>
