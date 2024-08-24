<script setup lang="ts">
import { type ITab } from '@/interfaces/ITab'
import './TabAccordion.css'

defineProps<{ tabs: ITab[] }>()
</script>

<template>
  <ul class="tabs__title-wrapper">
    <li v-for="tab in tabs" :key="'title' + tab.id" class="tabs__title">
      <a :href="'#panel' + tab.id">{{ tab.title }}</a>
    </li>
  </ul>

  <div class="tabs__content-wrapper" data-tabs-content="example-tabs">
    <div
      v-for="tab in tabs"
      class="tabs__content"
      :key="'content' + tab.id"
      :id="'#panel' + tab.id"
      v-html="tab.content"
    ></div>
  </div>
</template>
