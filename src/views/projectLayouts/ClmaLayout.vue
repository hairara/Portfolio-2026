<template>
  <main class="bg-cream">
  <!-- Hero -->
  <section class="px-4 sm:px-8 lg:px-16 pt-12 lg:pt-16 pb-12">
    <div class="max-w-[1312px] mx-auto flex flex-col gap-6">
      <router-link to="/" class="inline-flex items-center gap-2 text-[13px] font-medium text-muted hover:text-accent transition-colors duration-200 w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 rotate-180" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4v12.586l-3.293-3.293-1.414 1.414L12 19.414l4.707-4.707-1.414-1.414L12 16.586V4z"/>
        </svg>
        Back to projects
      </router-link>
      <div class="flex items-center gap-2">
        <span class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">{{ study.subtitle }}</span>
      </div>
      <h1 class="font-semibold text-accent leading-[1.05]" style="font-size: clamp(32px, 6vw, 64px);">{{ study.title }}</h1>
      <div class="border-t border-border pt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 mt-2">
        <div v-for="item in study.meta" :key="item.label" class="flex flex-col gap-0.5">
          <span class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">{{ item.label }}</span>
          <span class="text-[15px] text-dark leading-6">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </section>
  <!-- Cover -->
  <section class="px-4 sm:px-8 lg:px-16 pb-16 lg:pb-24">
    <div class="max-w-[1312px] mx-auto">
      <div class="rounded-2xl overflow-hidden bg-zinc-900 aspect-[16/9]">
        <img :src="study.cover" :alt="study.title" class="w-full h-full object-cover" />
      </div>
    </div>
  </section>

  <!-- Placeholder -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28">
    <div class="max-w-[1312px] mx-auto">
      <p class="text-muted text-[15px]">Case study coming soon.</p>
    </div>
  </section>
  </main>
</template>

<script setup>
import { clmaStudy as study } from '../../data/caseStudies/clma'
</script>
