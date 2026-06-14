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

        <h1 v-if="study.layout === 'figma'" class="font-semibold text-accent leading-[1.05]" style="font-size: clamp(32px, 6vw, 64px);">
          {{ study.title }}
        </h1>
        <h1 v-else class="font-bold text-dark leading-[1.05]" style="font-size: clamp(32px, 6vw, 64px);">
          {{ study.title }}
          <span class="font-serif italic text-grey-42">{{ study.titleAccent }}</span>
        </h1>

        <div v-if="study.layout === 'figma'" class="border-t border-border pt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 mt-2">
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

    <template v-if="study.layout === 'figma'">
      <!-- Problems -->
      <section class="px-4 sm:px-8 lg:px-16 pb-20 lg:pb-28 border-t border-border">
        <div class="max-w-[1312px] mx-auto pt-20 lg:pt-28">
          <p class="font-serif italic text-2xl text-accent mb-4">Understanding</p>
          <h2 class="font-medium text-dark mb-12" style="font-size: clamp(28px, 5vw, 48px);">Our Problems</h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            <div v-for="problem in study.problems" :key="problem.number" class="flex flex-col gap-3">
              <span class="font-serif italic text-2xl text-accent">{{ problem.number }}</span>
              <h3 class="font-medium text-lg text-dark">{{ problem.title }}</h3>
              <p class="text-[13px] text-muted leading-relaxed">{{ problem.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Goals -->
      <section class="px-4 sm:px-8 lg:px-16 pb-20 lg:pb-28">
        <div class="max-w-[1312px] mx-auto">
          <h2 class="font-medium text-dark mb-8" style="font-size: clamp(28px, 5vw, 48px);">Our Goals</h2>
          <div class="flex flex-col">
            <div
              v-for="(goal, i) in study.goals"
              :key="i"
              class="flex items-center gap-6 py-6 border-b border-border last:border-0"
            >
              <span class="font-serif italic text-2xl text-accent">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="font-medium text-lg sm:text-xl text-dark">{{ goal }}</h3>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16">
            <div v-for="(img, i) in study.goalImages" :key="i" class="aspect-[644/483] rounded-2xl bg-border overflow-hidden">
              <img v-if="img" :src="img" :alt="study.title" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <!-- Solutions / Proof the Concepts -->
      <section class="px-4 sm:px-8 lg:px-16 pb-20 lg:pb-28 border-t border-border">
        <div class="max-w-[1312px] mx-auto pt-20 lg:pt-28">
          <p class="font-serif italic text-2xl text-accent mb-4">Solutions</p>
          <h2 class="font-medium text-dark mb-12" style="font-size: clamp(28px, 5vw, 48px);">Proof the Concepts</h2>
          <div class="flex flex-col gap-16">
            <div
              v-for="(solution, i) in study.solutions"
              :key="solution.number"
              class="flex flex-col gap-8 lg:gap-12 lg:items-center"
              :class="i % 2 === 1 ? 'lg:flex-row-reverse lg:flex' : 'lg:flex-row lg:flex'"
            >
              <div class="flex-1 flex flex-col gap-4">
                <span class="font-serif italic text-2xl text-accent">{{ solution.number }}</span>
                <h3 class="font-medium text-xl text-dark">{{ solution.title }}</h3>
                <p class="text-[13px] text-muted leading-relaxed whitespace-pre-line">{{ solution.description }}</p>
              </div>
              <div class="flex-[1.6] aspect-[644/483] rounded-2xl bg-border overflow-hidden">
                <img v-if="solution.image" :src="solution.image" :alt="solution.title" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Validation / Proof the Data Flow -->
      <section class="px-4 sm:px-8 lg:px-16 pb-20 lg:pb-28">
        <div class="max-w-[1312px] mx-auto">
          <p class="font-serif italic text-2xl text-accent mb-4">Validation</p>
          <h2 class="font-medium text-dark mb-12" style="font-size: clamp(28px, 5vw, 48px);">Proof the Data Flow</h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            <div v-for="scenario in study.validation" :key="scenario.label" class="flex flex-col gap-3">
              <span class="font-serif italic text-2xl text-accent">{{ scenario.label }}</span>
              <h3 class="font-medium text-lg text-dark">{{ scenario.title }}</h3>
              <p class="text-[13px] text-muted leading-relaxed">{{ scenario.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- The Insights -->
      <section class="px-4 sm:px-8 lg:px-16 pb-20 lg:pb-28 border-t border-border">
        <div class="max-w-[1312px] mx-auto pt-20 lg:pt-28">
          <h2 class="font-medium text-dark mb-12" style="font-size: clamp(28px, 5vw, 48px);">The Insights</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            <div v-for="(insight, i) in study.insights" :key="i" class="flex flex-col gap-4">
              <div class="aspect-[644/483] rounded-2xl bg-border overflow-hidden">
                <img v-if="insight.image" :src="insight.image" :alt="insight.title" class="w-full h-full object-cover" />
              </div>
              <h3 class="font-medium text-lg text-dark">{{ insight.title }}</h3>
              <p class="text-[13px] text-muted leading-relaxed whitespace-pre-line">{{ insight.description }}</p>
            </div>
          </div>

          <div class="mt-12 flex items-center gap-6 bg-cream-light border border-border rounded-lg px-6 sm:px-8 py-6">
            <div class="w-12 h-12 rounded-full bg-accent shrink-0 flex items-center justify-center shadow-[0_4px_8px_rgba(240,60,31,0.4)]">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
              </svg>
            </div>
            <p class="font-serif italic text-2xl text-dark">{{ study.specialNote }}</p>
          </div>
        </div>
      </section>

      <!-- Released / Post-Design Maintenance -->
      <section class="px-4 sm:px-8 lg:px-16 pb-24 lg:pb-32">
        <div class="max-w-[1312px] mx-auto">
          <p class="font-serif italic text-2xl text-accent mb-4">Released</p>
          <h2 class="font-medium text-dark mb-12" style="font-size: clamp(28px, 5vw, 48px);">Post-Design Maintenance</h2>
          <div class="flex flex-col gap-16">
            <div
              v-for="(scenario, i) in study.maintenance"
              :key="scenario.label"
              class="flex flex-col gap-8 lg:gap-12 lg:items-center"
              :class="i % 2 === 1 ? 'lg:flex-row-reverse lg:flex' : 'lg:flex-row lg:flex'"
            >
              <div class="flex-1 flex flex-col gap-4">
                <span class="font-serif italic text-2xl text-accent">{{ scenario.label }}</span>
                <h3 class="font-medium text-xl text-dark">{{ scenario.title }}</h3>
                <p class="text-[13px] text-muted leading-relaxed">{{ scenario.description }}</p>
              </div>
              <div class="flex-[1.6] aspect-[644/483] rounded-2xl bg-border overflow-hidden">
                <img v-if="scenario.image" :src="scenario.image" :alt="scenario.title" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>

    <template v-else>
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
    </template>
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
