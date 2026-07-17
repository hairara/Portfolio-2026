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

  <!-- Story Opener -->
  <section class="px-4 sm:px-8 lg:px-16 pb-20 lg:pb-28">
    <div class="max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-16">
      <div>
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">The Moment</p>
      </div>
      <div class="flex flex-col gap-6">
        <h2 class="font-medium text-dark leading-snug" style="font-size: clamp(22px, 3vw, 32px);">
          {{ study.opener.headline }}
        </h2>
        <div class="flex flex-col gap-4 border-l-2 border-border pl-6">
          <p
            v-for="(line, i) in study.opener.narrative"
            :key="i"
            class="text-[15px] leading-relaxed"
            :class="i === 1 || i === 3 ? 'text-dark font-medium' : 'text-muted'"
          >
            {{ line }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto">
      <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px] mb-12">The Gap — From Data & Surveys</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="stat in study.stats"
          :key="stat.value"
          class="rounded-2xl bg-dark p-6 flex flex-col gap-3"
        >
          <p class="font-bold text-white leading-none" style="font-size: clamp(28px, 4vw, 44px);">{{ stat.value }}</p>
          <p class="text-[13px] text-muted/80 leading-relaxed">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Opportunity Reframe -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-16">
      <div>
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">The Opportunity</p>
      </div>
      <div>
        <p class="font-serif italic text-dark" style="font-size: clamp(22px, 3vw, 36px); line-height: 1.5;">
          "{{ study.opportunity }}"
        </p>
      </div>
    </div>
  </section>

  <!-- Solution -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-16">
      <div>
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">The Solution</p>
      </div>
      <div class="flex flex-col gap-5">
        <h2 class="font-semibold text-accent text-xl">{{ study.solution.name }}</h2>
        <p class="text-[17px] sm:text-[19px] text-dark leading-relaxed max-w-2xl">{{ study.solution.desc }}</p>
      </div>
    </div>
  </section>

  <!-- Ecosystem -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto">
      <div class="mb-12">
        <p class="font-serif italic text-accent text-xl mb-3">Designing Across an Ecosystem</p>
        <h2 class="font-medium text-dark leading-tight" style="font-size: clamp(24px, 3.5vw, 40px);">A seamless bridge from diagnosis → prescription → delivery.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          v-for="(platform, i) in study.ecosystem"
          :key="platform.name"
          class="relative rounded-2xl border border-border p-6 sm:p-8 flex flex-col gap-4"
          :class="i === 1 ? 'bg-accent/5 border-accent/30' : 'bg-cream-light'"
        >
          <div class="flex items-start justify-between gap-2">
            <h3 class="font-semibold text-dark text-base">{{ platform.name }}</h3>
            <span class="text-[11px] font-medium text-accent uppercase tracking-[1.32px] bg-accent/10 px-2.5 py-1 rounded-full shrink-0">{{ platform.for }}</span>
          </div>
          <p class="text-[14px] text-muted leading-relaxed">{{ platform.desc }}</p>
          <div v-if="i < study.ecosystem.length - 1" class="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 text-center text-accent font-semibold text-lg">→</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Flows -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto">
      <div class="mb-12">
        <p class="font-serif italic text-accent text-xl mb-3">A Simple Flow, Powered by Complexity</p>
        <h2 class="font-medium text-dark leading-tight" style="font-size: clamp(24px, 3.5vw, 40px);">Two journeys. One connected experience.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="rounded-2xl bg-dark p-6 sm:p-8 flex flex-col gap-6">
          <p class="text-[11px] font-medium text-muted/60 uppercase tracking-[1.32px]">Doctor Flow</p>
          <div class="flex flex-col gap-4">
            <div v-for="(step, i) in study.flows.doctor" :key="i" class="flex items-start gap-4">
              <span class="font-serif italic text-accent text-lg leading-none shrink-0 mt-0.5">{{ String(i + 1).padStart(2, '0') }}</span>
              <p class="text-[14px] text-white/80 leading-relaxed">{{ step }}</p>
            </div>
          </div>
        </div>
        <div class="rounded-2xl border-2 border-accent p-6 sm:p-8 flex flex-col gap-6">
          <p class="text-[11px] font-medium text-accent uppercase tracking-[1.32px]">Patient Flow</p>
          <div class="flex flex-col gap-4">
            <div v-for="(step, i) in study.flows.patient" :key="i" class="flex items-start gap-4">
              <span class="font-serif italic text-accent text-lg leading-none shrink-0 mt-0.5">{{ String(i + 1).padStart(2, '0') }}</span>
              <p class="text-[14px] text-dark leading-relaxed">{{ step }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Impact -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto">
      <div class="mb-12">
        <p class="font-serif italic text-accent text-xl mb-3">Measuring Success</p>
        <h2 class="font-medium text-dark leading-tight" style="font-size: clamp(24px, 3.5vw, 40px);">Impact across three dimensions.</h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div
          v-for="group in study.impact"
          :key="group.group"
          class="rounded-2xl bg-cream-light border border-border p-6 sm:p-8 flex flex-col gap-6"
        >
          <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">{{ group.group }}</p>
          <div class="flex flex-col gap-5">
            <div v-for="metric in group.metrics" :key="metric.label" class="flex flex-col gap-1">
              <span
                class="font-bold leading-none"
                style="font-size: clamp(20px, 2.5vw, 28px);"
                :class="metric.direction === 'up' ? 'text-accent' : 'text-dark'"
              >{{ metric.value }}</span>
              <p class="text-[13px] text-muted leading-relaxed">{{ metric.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Behind the Scenes -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-16">
      <div>
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">Behind the Scenes</p>
        <p class="text-[13px] text-muted mt-2 leading-relaxed">None of this complexity surfaced in the UI.</p>
      </div>
      <div class="flex flex-col gap-3">
        <div
          v-for="item in study.complexity"
          :key="item"
          class="flex items-start gap-4 py-4 border-b border-border first:border-t"
        >
          <span class="text-accent shrink-0 font-semibold mt-0.5">✓</span>
          <p class="text-[15px] text-dark leading-relaxed">{{ item }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Learnings + Gaps -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      <div class="flex flex-col gap-6">
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">What We Learned</p>
        <h3 class="font-semibold text-dark text-xl">{{ study.learnings.headline }}</h3>
        <p class="text-[15px] text-muted leading-relaxed">{{ study.learnings.body }}</p>
      </div>
      <div class="flex flex-col gap-6">
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">What We Couldn't Measure Yet</p>
        <ul class="flex flex-col gap-3">
          <li
            v-for="gap in study.gaps"
            :key="gap"
            class="flex items-start gap-3 text-[15px] text-muted leading-relaxed"
          >
            <span class="shrink-0 text-border mt-1 font-semibold">○</span>
            {{ gap }}
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Reflection -->
  <section class="px-4 sm:px-8 lg:px-16 pb-24 lg:pb-32">
    <div class="max-w-[1312px] mx-auto">
      <div class="rounded-2xl bg-cream-light border border-border p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center gap-6">
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">Reflection</p>
        <p class="font-serif italic text-dark max-w-2xl" style="font-size: clamp(20px, 3vw, 32px); line-height: 1.55;">
          "{{ study.reflection }}"
        </p>
        <div class="w-8 h-0.5 rounded-full bg-accent"></div>
        <p class="text-[13px] text-muted">Hairadifa — UI/UX Designer</p>
      </div>
    </div>
  </section>
  </main>
</template>

<script setup>
import { alomedikaStudy as study } from '../../data/caseStudies/alomedika'
</script>
