import { createWebHistory, createRouter } from 'vue-router'

import ExerciseOneView from '@/views/ExerciseOneView.vue'
import ExerciseTwoView from '@/views/ExerciseTwoView.vue'
import HomeView from '@/views/HomeView.vue'
const routes = [
  { path: '/', component: HomeView },
  { path: '/exercise-1', component: ExerciseOneView },
  { path: '/exercise-2', component: ExerciseTwoView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
