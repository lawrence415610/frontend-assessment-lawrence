<script setup lang="ts">
import { type ITab } from '@/interfaces/ITab'
import { ref, onMounted } from 'vue'

const props = defineProps<{ tabs: ITab[] }>()
const activeTab = ref(props.tabs[0]?.id || 1)
const screenWidth = ref(window.innerWidth)
const isOpen = ref(true)
const mobileScreenSize = 767

function updateScreenWidth() {
  screenWidth.value = window.innerWidth
}

function setActiveTabDesktop(tabId: number) {
  activeTab.value = tabId
  isOpen.value = true
}

function setActiveTabMobile(tabId: number) {
  if (activeTab.value !== tabId) {
    activeTab.value = tabId
    isOpen.value = true
  } else {
    isOpen.value = !isOpen.value
  }
}

function setActiveTab(tabId: number) {
  if (screenWidth.value > mobileScreenSize) {
    setActiveTabDesktop(tabId)
  } else {
    setActiveTabMobile(tabId)
  }
}

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
})
</script>

<template>
  <div class="tabs lg:w-[768px] md:w-3/4">
    <div class="tabs__title-wrapper">
      <a
        v-for="tab in props.tabs"
        :key="'title' + tab.id"
        :href="'#panel' + tab.id"
        @click.prevent="setActiveTab(tab.id)"
        class="tabs__title"
        :class="{ 'tabs__title--active': tab.id === activeTab && isOpen }"
      >
        <div class="tabs__title-header">
          <span class="tabs__title-text">{{ tab.title }}</span>
          <span
            class="tabs__title-arrow"
            :class="{ 'tabs__title-arrow--active': tab.id === activeTab && isOpen }"
            >&#8963;</span
          >
        </div>
        <div
          class="tabs__accordion-content"
          :class="{ 'tabs__accordion-content--active': tab.id === activeTab && isOpen }"
          v-html="tab.content"
        ></div>
      </a>
    </div>

    <div class="tabs__content-wrapper">
      <div
        class="tabs__content"
        v-for="tab in props.tabs"
        :key="'content' + tab.id"
        :class="{ 'tabs__content--active': tab.id === activeTab }"
        v-html="tab.content"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}

.tabs__accordion-content {
  display: none;
}

.tabs__title-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.tabs__title {
  border: 1.5px solid #6b7280;
  width: 10rem;
  padding: 0.25rem;
  border-left: none;
  z-index: 9;
}

.tabs__title--active {
  border-bottom: 1.5px white solid;
}

.tabs__title:first-child {
  border-left: 1.5px solid #6b7280;
}

.tabs__title-text {
  font-weight: 700;
}

.tabs__title-arrow {
  display: none;
}

.tabs__content-wrapper {
  width: 100%;
  border: 1.5px solid #6b7280;
  padding: 1rem;
  margin-top: -1.5px;
}

.tabs__content {
  display: none;
}

.tabs__content--active {
  display: block;
}

@media (max-width: 767px) {
  .tabs__title-wrapper {
    flex-direction: column;
  }

  .tabs__title {
    border-left: 1.5px solid #6b7280;
    width: 22rem;
    border-bottom: none;
  }

  .tabs__title:last-child {
    border-bottom: 1.5px solid #6b7280;
  }

  .tabs__title-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .tabs__title-arrow {
    display: block;
    transition: all 0.2s ease-in-out;
  }

  .tabs__title-arrow--active {
    transform: rotate(180deg);
  }

  .tabs__content-wrapper {
    display: none;
  }

  .tabs__accordion-content--active {
    display: block;
  }
}
</style>
