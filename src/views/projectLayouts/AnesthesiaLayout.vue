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

  <!-- Overview -->
  <section class="px-4 sm:px-8 lg:px-16 pb-20 lg:pb-28">
    <div class="max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-16">
      <div>
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">Overview</p>
      </div>
      <div class="flex flex-col gap-6">
        <p class="text-[18px] sm:text-[20px] text-dark leading-relaxed">{{ study.overview.context }}</p>
        <div class="bg-cream-light border border-border rounded-2xl p-6 sm:p-8">
          <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px] mb-5">This forced clinicians to</p>
          <ul class="flex flex-col gap-3">
            <li v-for="item in study.overview.pain" :key="item" class="flex items-start gap-3">
              <span class="text-accent mt-0.5 shrink-0">—</span>
              <span class="text-[15px] text-dark leading-relaxed">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Problems -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto">
      <div class="mb-12">
        <p class="font-serif italic text-accent text-xl mb-3">The Problem</p>
        <h2 class="font-medium text-dark leading-tight" style="font-size: clamp(28px, 4vw, 44px);">Manual workflow,<br>critical consequences.</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="p in study.problems"
          :key="p.number"
          class="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-cream-light"
        >
          <span class="font-serif italic text-2xl text-accent">{{ p.number }}</span>
          <div>
            <h3 class="font-semibold text-dark text-base mb-2">{{ p.title }}</h3>
            <p class="text-[14px] text-muted leading-relaxed">{{ p.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Objective + My Role -->
  <section class="px-4 sm:px-8 lg:px-16 pb-20 lg:pb-28">
    <div class="max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
      <div>
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px] mb-8">Objective</p>
        <div class="flex flex-col">
          <div
            v-for="(goal, i) in study.objective"
            :key="i"
            class="flex items-start gap-5 py-5 border-b border-border first:border-t"
          >
            <span class="font-serif italic text-accent text-xl shrink-0">{{ String(i + 1).padStart(2, '0') }}</span>
            <p class="text-[15px] text-dark leading-relaxed">{{ goal }}</p>
          </div>
        </div>
      </div>
      <div>
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px] mb-8">My Role</p>
        <div class="flex flex-col gap-5">
          <p class="font-semibold text-accent text-lg">{{ study.role.title }}</p>
          <ul class="flex flex-col gap-3">
            <li
              v-for="r in study.role.responsibilities"
              :key="r"
              class="flex items-start gap-3 text-[14px] text-muted leading-relaxed"
            >
              <span class="text-accent shrink-0 mt-0.5">—</span>
              {{ r }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Design Process -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto">
      <div class="mb-12 lg:mb-16">
        <p class="font-serif italic text-accent text-xl mb-3">Design Process</p>
        <h2 class="font-medium text-dark leading-tight" style="font-size: clamp(28px, 4vw, 44px);">From problem to operating room.</h2>
      </div>
      <div class="flex flex-col">
        <div
          v-for="step in study.process"
          :key="step.number"
          class="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-12 py-12 border-t border-border last:border-b"
        >
          <div class="flex flex-row lg:flex-col gap-3 lg:gap-1.5 items-start">
            <span class="font-serif italic text-3xl text-accent leading-none">{{ step.number }}</span>
            <div class="flex flex-col gap-0.5 mt-0.5">
              <p v-if="step.label" class="text-[11px] font-medium text-accent uppercase tracking-[1.32px]">{{ step.label }}</p>
              <h3 class="font-semibold text-dark text-base">{{ step.title }}</h3>
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <p class="text-[15px] text-dark leading-relaxed">{{ step.body }}</p>
            <ul v-if="step.bullets" class="flex flex-col gap-2">
              <li v-for="b in step.bullets" :key="b" class="flex items-start gap-3 text-[14px] text-muted">
                <span class="text-accent shrink-0 mt-0.5">—</span>{{ b }}
              </li>
            </ul>
            <div v-if="step.outcome" class="inline-flex items-center gap-2 bg-cream-light border border-border rounded-full px-4 py-2 w-fit">
              <span class="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
              <span class="text-[13px] text-dark">{{ step.outcome }}</span>
            </div>
            <blockquote v-if="step.insight" class="border-l-2 border-accent pl-5 italic text-[15px] text-muted leading-relaxed">
              {{ step.insight }}
            </blockquote>
            <blockquote v-if="step.quote" class="border-l-2 border-accent pl-5 italic text-[15px] text-muted leading-relaxed">
              "{{ step.quote }}"
            </blockquote>
            <template v-if="step.images">
              <div v-if="step.images.length === 1" class="rounded-2xl overflow-hidden aspect-[16/9] bg-border mt-2">
                <img :src="step.images[0]" :alt="step.title" class="w-full h-full object-cover" />
              </div>
              <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div v-for="img in step.images" :key="img" class="rounded-2xl overflow-hidden aspect-[4/3] bg-border">
                  <img :src="img" :alt="step.title" class="w-full h-full object-cover" />
                </div>
              </div>
            </template>
            <div v-if="step.isComplex" class="flex flex-col gap-4 mt-2">
              <div
                v-for="sub in step.subSteps"
                :key="sub.id"
                class="rounded-2xl bg-cream-light border border-border p-6 sm:p-8 flex flex-col gap-5"
              >
                <div class="flex items-start gap-3">
                  <span class="font-serif italic text-accent text-xl leading-none shrink-0 mt-0.5">{{ sub.id }}</span>
                  <div>
                    <p v-if="sub.label" class="text-[11px] font-medium text-accent uppercase tracking-[1.32px] mb-1">{{ sub.label }}</p>
                    <h4 class="font-semibold text-dark text-base">{{ sub.title }}</h4>
                  </div>
                </div>
                <p class="text-[14px] text-muted leading-relaxed">{{ sub.body }}</p>
                <div v-if="sub.categories" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div v-for="cat in sub.categories" :key="cat.label" class="rounded-xl border border-border bg-cream p-4">
                    <p class="text-[11px] font-medium text-accent uppercase tracking-[1.32px] mb-1.5">{{ cat.label }}</p>
                    <p class="text-[13px] text-muted leading-relaxed">{{ cat.description }}</p>
                  </div>
                </div>
                <ul v-if="sub.impact" class="flex flex-col gap-2">
                  <li v-for="imp in sub.impact" :key="imp" class="flex items-start gap-2 text-[13px] text-dark">
                    <span class="text-accent shrink-0 font-semibold">✓</span> {{ imp }}
                  </li>
                </ul>
                <div v-if="sub.hybrid" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div v-for="h in sub.hybrid" :key="h.category" class="rounded-xl border border-border bg-cream p-4 flex flex-col gap-2">
                    <p class="text-[11px] font-medium text-accent uppercase tracking-[1.32px]">{{ h.category }}</p>
                    <p class="text-[13px] text-dark font-semibold">{{ h.approach }}</p>
                    <p class="text-[12px] text-muted leading-relaxed">{{ h.detail }}</p>
                  </div>
                </div>
                <p v-if="sub.why" class="text-[13px] text-muted italic leading-relaxed border-t border-border pt-4">
                  {{ sub.why }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Impact -->
  <section class="px-4 sm:px-8 lg:px-16 pb-20 lg:pb-28">
    <div class="max-w-[1312px] mx-auto">
      <div class="mb-12">
        <p class="font-serif italic text-accent text-xl mb-3">Impact</p>
        <h2 class="font-medium text-dark leading-tight" style="font-size: clamp(28px, 4vw, 44px);">The results that matter.</h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div class="rounded-2xl bg-dark p-8 lg:p-10 flex flex-col gap-8">
          <p class="text-[11px] font-medium text-muted/60 uppercase tracking-[1.32px]">Before</p>
          <div>
            <p class="font-bold text-white" style="font-size: clamp(52px, 8vw, 96px); line-height: 1;">{{ study.impact.beforeMetric }}</p>
            <p class="text-[15px] text-muted mt-2">minutes per patient</p>
          </div>
          <ul class="flex flex-col gap-3 border-t border-white/10 pt-6">
            <li v-for="b in study.impact.before" :key="b" class="flex items-start gap-3 text-[14px] text-muted">
              <span class="shrink-0 text-muted/50 mt-px">✕</span>
              <span>{{ b }}</span>
            </li>
          </ul>
        </div>
        <div class="rounded-2xl border-2 border-accent p-8 lg:p-10 flex flex-col gap-8">
          <p class="text-[11px] font-medium text-accent uppercase tracking-[1.32px]">After</p>
          <div>
            <p class="font-bold text-accent" style="font-size: clamp(52px, 8vw, 96px); line-height: 1;">{{ study.impact.metric.value }}</p>
            <p class="text-[15px] text-dark mt-2">{{ study.impact.metric.label }}</p>
            <div class="inline-flex items-center gap-2 mt-3 bg-accent/10 rounded-full px-3 py-1.5">
              <span class="text-accent font-medium text-[13px]">↓ {{ study.impact.reduction }} reduction in documentation time</span>
            </div>
          </div>
          <ul class="flex flex-col gap-3 border-t border-border pt-6">
            <li v-for="a in study.impact.after" :key="a" class="flex items-start gap-3 text-[14px] text-dark">
              <span class="text-accent shrink-0 mt-px font-semibold">✓</span>
              <span>{{ a }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Key Design Principles -->
  <section class="px-4 sm:px-8 lg:px-16 py-20 lg:py-28 border-t border-border">
    <div class="max-w-[1312px] mx-auto">
      <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px] mb-12">Key Design Principles</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(p, i) in study.principles"
          :key="p.title"
          class="flex flex-col gap-3 p-6 rounded-2xl border border-border"
        >
          <span class="font-serif italic text-2xl text-accent">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="font-semibold text-dark text-base">{{ p.title }}</h3>
          <p class="text-[14px] text-muted leading-relaxed">{{ p.desc }}</p>
        </div>
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
        <p class="text-[13px] text-muted">Rifka Hairadifa — UI/UX Designer</p>
      </div>
    </div>
  </section>
  </main>
</template>

<script setup>
import { anesthesiaStudy as study } from '../../data/caseStudies/anesthesia'
</script>
