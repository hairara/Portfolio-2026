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
      <div v-if="study.badge" class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-sm bg-accent shrink-0"></span>
        <span class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">{{ study.badge }}</span>
      </div>
      <h1 class="font-bold text-accent leading-[1.05]" style="font-size: clamp(32px, 6vw, 64px);">
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
          <span class="text-[15px] text-dark leading-6">{{ study.scope?.join(', ') }}</span>
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


  <!-- Context -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-16">
      <div>
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">The Context</p>
      </div>
      <div class="flex flex-col gap-6">
        <p class="font-medium text-dark text-[17px] sm:text-[19px] leading-relaxed">{{ study.context.intro }}</p>
        <p class="text-[16px] text-muted leading-relaxed">{{ study.context.body }}</p>
        <p class="text-[16px] text-muted leading-relaxed">{{ study.context.detail }}</p>
        <div class="flex flex-col gap-2 border-l-2 border-border pl-6">
          <p v-for="q in study.context.questions" :key="q" class="text-[15px] text-dark font-medium italic leading-relaxed">{{ q }}</p>
        </div>
        <p class="text-[15px] text-accent font-medium">{{ study.context.close }}</p>
      </div>
    </div>
  </section>

  <!-- Problem -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto flex flex-col gap-12">
      <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-16">
        <div>
          <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">The Problem</p>
        </div>
        <div class="flex flex-col gap-4">
          <p class="text-[16px] text-muted leading-relaxed max-w-2xl">{{ study.problem.intro }}</p>
          <p class="font-serif italic text-accent" style="font-size: clamp(18px, 2vw, 24px); line-height: 1.5;">"{{ study.problem.quote }}"</p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          v-for="issue in study.problem.issues"
          :key="issue.label"
          class="rounded-2xl bg-dark p-6 sm:p-8 flex flex-col gap-3"
        >
          <h3 class="font-semibold text-white text-base">{{ issue.label }}</h3>
          <p class="text-[14px] text-muted/80 leading-relaxed">{{ issue.desc }}</p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="rounded-2xl overflow-hidden bg-zinc-100 border border-border">
          <img src="/projects/vidio/struktur.png" alt="Information Architecture" class="w-full h-full object-cover" />
        </div>
        <div class="rounded-2xl overflow-hidden bg-zinc-100 border border-border">
          <img src="/projects/vidio/old design.png" alt="Old Design" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>

  <!-- Insight -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-16">
      <div>
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">The Insight</p>
      </div>
      <div class="flex flex-col gap-6">
        <p class="font-serif italic text-accent" style="font-size: clamp(20px, 2.5vw, 30px); line-height: 1.5;">
          "{{ study.insight.reframe }}"
        </p>
        <p class="text-[16px] text-muted leading-relaxed">{{ study.insight.body }}</p>
        <div class="flex flex-col gap-2">
          <div v-for="intent in study.insight.intents" :key="intent" class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
            <p class="text-[15px] text-dark leading-relaxed">{{ intent }}</p>
          </div>
        </div>
        <p class="text-[16px] text-dark font-medium leading-relaxed">{{ study.insight.close }}</p>
      </div>
    </div>
  </section>

  <!-- Approach -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto">
      <div class="mb-12">
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px] mb-3">The Approach</p>
        <h2 class="font-medium text-dark leading-tight" style="font-size: clamp(24px, 3.5vw, 40px);">Three principles we designed around.</h2>
      </div>
      <div class="flex flex-col gap-0">
        <div
          v-for="item in study.approach"
          :key="item.number"
          class="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-4 py-8 border-t border-border"
        >
          <span class="font-serif italic text-accent text-2xl leading-none">{{ item.number }}</span>
          <div class="flex flex-col gap-2">
            <h3 class="font-semibold text-dark text-base">{{ item.title }}</h3>
            <p class="text-[15px] text-muted leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Solution -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto">
      <div class="mb-12">
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px] mb-3">The Solution</p>
        <h2 class="font-medium text-dark leading-tight" style="font-size: clamp(24px, 3.5vw, 40px);">We brought the answers to them.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="solution in study.solutions"
          :key="solution.title"
          class="rounded-2xl bg-cream-light border border-border p-6 sm:p-8 flex flex-col gap-3"
        >
          <div class="flex items-start justify-between gap-2">
            <h3 class="font-semibold text-dark text-base">{{ solution.title }}</h3>
            <span class="text-[11px] font-medium text-accent uppercase tracking-[1.32px] bg-accent/10 px-2.5 py-1 rounded-full shrink-0">{{ solution.label }}</span>
          </div>
          <p class="text-[14px] text-muted leading-relaxed">{{ solution.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Impact -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      <div class="flex flex-col gap-6">
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">The Impact</p>
        <div class="flex flex-col gap-3">
          <div v-for="bullet in study.impact.bullets" :key="bullet" class="flex items-start gap-3">
            <span class="text-accent shrink-0 font-semibold mt-0.5">✓</span>
            <p class="text-[15px] text-dark leading-relaxed">{{ bullet }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-6 justify-center">
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">The Shift</p>
        <div class="flex flex-col gap-4">
          <div class="rounded-xl bg-dark p-5">
            <p class="font-serif italic text-muted/70 text-lg">Before</p>
            <p class="font-serif italic text-white mt-1" style="font-size: clamp(16px, 2vw, 22px);">{{ study.impact.shiftBefore }}</p>
          </div>
          <div class="rounded-xl border-2 border-accent p-5">
            <p class="font-serif italic text-accent text-lg">After</p>
            <p class="font-serif italic text-dark mt-1" style="font-size: clamp(16px, 2vw, 22px);">{{ study.impact.shiftAfter }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Takeaway -->
  <section class="px-4 sm:px-8 lg:px-16 pb-24 lg:pb-32">
    <div class="max-w-[1312px] mx-auto">
      <div class="rounded-2xl bg-cream-light border border-border p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center gap-8">
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">Key Takeaway</p>
        <p class="font-serif italic text-dark max-w-2xl" style="font-size: clamp(20px, 3vw, 32px); line-height: 1.55;">
          "{{ study.takeaway.headline }}"
        </p>
        <div class="w-8 h-0.5 rounded-full bg-accent"></div>
        <p class="text-[13px] text-muted">Hairadifa — UI/UX Designer</p>
      </div>
    </div>
  </section>

  </main>
</template>

<script setup>
import { vidioStudy as study } from '../../data/caseStudies/vidio'
</script>
