<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import TabAccordion from '@/components/TabAccordion.vue'
import { type ITab } from '@/interfaces/ITab'

const tabs: Ref<ITab[]> = ref([])
async function fetchTabs(): Promise<Partial<ITab>[]> {
  try {
    const response = await fetch('/data.json')
    if (!response.ok) {
      throw new Error(`Http Error, status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching JSON data:', error)
  }
  return []
}

function addAnswerToTabs(tabs: Partial<ITab>[]): Partial<ITab>[] {
  const answerTab = {
    title: 'Bonus QA',
    content:
      "<p>No way! Why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana?</p> <p>Answer: I asked ChatGPT, it says the 'nan' part turn out to be not a number. Then I realized that the '+ a' in the middle may be translated by Javascript meaning turning a string 'a' to a number, which is not a number. Then the string becomes baNANa and finally all turn to lowercase. EUREKA! </p>"
  }
  tabs.unshift(answerTab)
  return tabs
}

function addIDToTabs(tabs: Partial<ITab>[]): ITab[] {
  let index = 1
  const tabsWithID = tabs.map((tab) => {
    return {
      ...tab,
      id: index++
    }
  })
  return tabsWithID as ITab[]
}

onMounted(async () => {
  const fetchedTabs = await fetchTabs()
  const answerAddedTabs = addAnswerToTabs(fetchedTabs)
  tabs.value = addIDToTabs(answerAddedTabs)
})
</script>

<template>
  <section class="flex justify-center mt-10">
    <TabAccordion :tabs="tabs" />
  </section>
  <RouterLink class="button--display-sm" to="/">Home</RouterLink>
</template>
