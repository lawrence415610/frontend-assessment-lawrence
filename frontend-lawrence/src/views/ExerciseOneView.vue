<script setup>
import BlogCard from '@/components/BlogCard.vue'
import { blogs } from '@/data/Blogs'
</script>

<template>
  <header
    class="flex flex-col items-center justify-center bg-[url('/images/banner-mobile.jpg')] md:bg-[url('/images/banner-desktop.jpg')] h-[50vh] w-full bg-cover bg-no-repeat"
  >
    <h1
      class="text-white font-bold lg:text-5xl text-3xl leading-relaxed tracking-wider text-center"
    >
      Hello Developer!
    </h1>
    <p class="text-white md:text-2xl text-l text-center tracking-widest">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </header>
  <section class="flex justify-center mb-8">
    <div
      class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:p-8 p-4 justify-center w-[1400px]"
    >
      <BlogCard :key="blog.id" v-for="blog in blogs" v-bind="blog" />
    </div>
  </section>
  <RouterLink class="button--display-sm" to="/">Home</RouterLink>
</template>
