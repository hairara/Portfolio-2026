<template>
  <main v-if="study" class="bg-cream">
    <!-- Hero -->
    <section class="px-4 sm:px-8 lg:px-16 pt-12 lg:pt-16 pb-12">
      <div class="max-w-[1312px] mx-auto flex flex-col gap-6">
        <router-link
          to="/"
          class="inline-flex items-center gap-2 text-[13px] font-medium text-muted hover:text-accent transition-colors duration-200 w-fit"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 rotate-180" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4v12.586l-3.293-3.293-1.414 1.414L12 19.414l4.707-4.707-1.414-1.414L12 16.586V4z"/>
          </svg>
          Back to projects
        </router-link>

        <div v-if="study.badge" class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-sm bg-accent shrink-0"></span>
          <span class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">{{ study.badge }}</span>
        </div>

        <div v-if="study.subtitle" class="flex items-center gap-2">
          <span class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">{{ study.subtitle }}</span>
        </div>

        <h1 v-if="study.titleAccent" class="font-bold text-dark leading-[1.05]" style="font-size: clamp(32px, 6vw, 64px);">
          {{ study.title }}
          <span class="font-serif italic text-grey-42">{{ study.titleAccent }}</span>
        </h1>
        <h1 v-else class="font-semibold text-accent leading-[1.05]" style="font-size: clamp(32px, 6vw, 64px);">
          {{ study.title }}
        </h1>

        <div v-if="study.meta" class="border-t border-border pt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 mt-2">
          <div v-for="item in study.meta" :key="item.label" class="flex flex-col gap-0.5">
            <span class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">{{ item.label }}</span>
            <span class="text-[15px] text-dark leading-6">{{ item.value }}</span>
          </div>
        </div>
        <div v-else class="border-t border-border pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 mt-2">
          <div class="flex flex-col gap-0.5">
            <span class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">Client</span>
            <span class="text-[15px] text-dark leading-6">{{ study.client }}</span>
          </div>
          <div class="flex flex-col gap-0.5">
            <span class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">Role</span>
            <span class="text-[15px] text-dark leading-6">{{ study.role }}</span>
          </div>
          <div class="flex flex-col gap-0.5">
            <span class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">Year</span>
            <span class="text-[15px] text-dark leading-6">{{ study.year }}</span>
          </div>
          <div class="flex flex-col gap-0.5">
            <span class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">Scope</span>
            <span class="text-[15px] text-dark leading-6">{{ study.scope?.join(', ') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Cover image -->
    <section class="px-4 sm:px-8 lg:px-16 pb-16 lg:pb-24">
      <div class="max-w-[1312px] mx-auto">
        <div class="rounded-2xl overflow-hidden bg-zinc-900 aspect-[16/9]">
          <img :src="study.cover" :alt="study.title" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <!-- Layout -->
    <component :is="layoutComponent" :study="study" />
  </main>

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

const layoutComponent = computed(() => layouts[study.value?.layout] ?? VidioLayout)
</script>
