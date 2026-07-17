<template>
  <component v-if="layoutComponent" :is="layoutComponent" :study="study" />
  <main v-else class="bg-cream px-4 sm:px-8 lg:px-16 py-32 text-center">
    <p class="text-muted">Project not found.</p>
    <router-link to="/" class="text-accent font-medium">Back to home</router-link>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { caseStudies } from '../data/caseStudies'
import AnesthesiaLayout from './projectLayouts/AnesthesiaLayout.vue'
import AlomedikaLayout from './projectLayouts/AlomedikaLayout.vue'
import ClmaLayout from './projectLayouts/ClmaLayout.vue'
import VidioLayout from './projectLayouts/VidioLayout.vue'

const route = useRoute()
const study = computed(() => caseStudies[route.params.slug])

const layouts = {
  anesthesia: AnesthesiaLayout,
  alomedika: AlomedikaLayout,
  clma: ClmaLayout,
}

const layoutComponent = computed(() => {
  if (!study.value) return null
  return layouts[study.value.layout] ?? VidioLayout
})
</script>
