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

        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-sm bg-accent shrink-0"></span>
          <span class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">{{ study.badge }}</span>
        </div>

        <h1 class="font-bold text-dark leading-[1.05]" style="font-size: clamp(32px, 6vw, 64px);">
          {{ study.title }}
          <span class="font-serif italic text-grey-42">{{ study.titleAccent }}</span>
        </h1>

        <div class="border-t border-border pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 mt-2">
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
            <span class="text-[15px] text-dark leading-6">{{ study.scope.join(', ') }}</span>
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

    <!-- Overview -->
    <section class="px-4 sm:px-8 lg:px-16 pb-20 lg:pb-28">
      <div class="max-w-[1312px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div>
          <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">Overview</p>
        </div>
        <div class="md:col-span-2">
          <p class="text-[17px] sm:text-[19px] text-dark leading-relaxed max-w-2xl">
            {{ study.overview }}
          </p>
        </div>
      </div>
    </section>

    <!-- Problems -->
    <section class="px-4 sm:px-8 lg:px-16 pb-20 lg:pb-28 border-t border-border">
      <div class="max-w-[1312px] mx-auto pt-20 lg:pt-28">
        <h2 class="font-serif italic text-3xl sm:text-4xl text-dark mb-12">The Problem</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          <div v-for="problem in study.problems" :key="problem.number" class="flex flex-col gap-3">
            <span class="font-serif italic text-2xl text-accent">{{ problem.number }}</span>
            <h3 class="font-medium text-lg text-dark">{{ problem.title }}</h3>
            <p class="text-[15px] text-muted leading-relaxed">{{ problem.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Goals -->
    <section class="px-4 sm:px-8 lg:px-16 pb-20 lg:pb-28">
      <div class="max-w-[1312px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div>
          <h2 class="font-serif italic text-3xl sm:text-4xl text-dark">Goals</h2>
        </div>
        <div class="md:col-span-2 flex flex-col gap-4">
          <div v-for="(goal, i) in study.goals" :key="i" class="flex items-start gap-4 pb-4 border-b border-border last:border-0">
            <span class="text-[13px] font-medium text-accent shrink-0 pt-0.5">{{ String(i + 1).padStart(2, '0') }}</span>
            <p class="text-[16px] sm:text-[17px] text-dark leading-relaxed">{{ goal }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process / Competitive analysis -->
    <section class="px-4 sm:px-8 lg:px-16 pb-20 lg:pb-28 border-t border-border">
      <div class="max-w-[1312px] mx-auto pt-20 lg:pt-28 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div>
          <h2 class="font-serif italic text-3xl sm:text-4xl text-dark">{{ study.process.title }}</h2>
        </div>
        <div class="md:col-span-2">
          <p class="text-[16px] sm:text-[17px] text-dark leading-relaxed max-w-2xl">
            {{ study.process.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Solutions -->
    <section class="px-4 sm:px-8 lg:px-16 pb-20 lg:pb-28">
      <div class="max-w-[1312px] mx-auto">
        <h2 class="font-serif italic text-3xl sm:text-4xl text-dark mb-12">The Solution</h2>
        <div class="flex flex-col gap-12">
          <div
            v-for="solution in study.solutions"
            :key="solution.number"
            class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 pb-12 border-b border-border last:border-0 last:pb-0"
          >
            <div class="flex items-start gap-4">
              <span class="font-serif italic text-2xl text-accent shrink-0">{{ solution.number }}</span>
              <h3 class="font-medium text-lg text-dark">{{ solution.title }}</h3>
            </div>
            <div class="md:col-span-2">
              <p class="text-[16px] sm:text-[17px] text-muted leading-relaxed max-w-2xl">
                {{ solution.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Validation -->
    <section class="px-4 sm:px-8 lg:px-16 pb-20 lg:pb-28 border-t border-border">
      <div class="max-w-[1312px] mx-auto pt-20 lg:pt-28">
        <h2 class="font-serif italic text-3xl sm:text-4xl text-dark mb-12">Design Validation</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          <div v-for="item in study.validation" :key="item.title" class="flex flex-col gap-3 p-6 rounded-2xl bg-cream-light border border-border">
            <h3 class="font-medium text-lg text-dark">{{ item.title }}</h3>
            <p class="text-[15px] text-muted leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Insights -->
    <section class="px-4 sm:px-8 lg:px-16 pb-24 lg:pb-32">
      <div class="max-w-[1312px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div>
          <h2 class="font-serif italic text-3xl sm:text-4xl text-dark">Key Insights</h2>
        </div>
        <div class="md:col-span-2 flex flex-col gap-4">
          <div v-for="(insight, i) in study.insights" :key="i" class="flex items-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
            <p class="text-[16px] sm:text-[17px] text-dark leading-relaxed">{{ insight }}</p>
          </div>
        </div>
      </div>
    </section>
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

const route = useRoute()
const study = computed(() => caseStudies[route.params.slug])
</script>
