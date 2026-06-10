<template>
  <section id="articles" class="bg-cream px-4 sm:px-8 lg:px-16 py-20 lg:py-28  border-border">
    <div class="max-w-[1312px] mx-auto">
      <!-- Section header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 lg:mb-16">
        <div>
          <div class="overflow-hidden">
            <h2 v-reveal="{ clip: true }" class="font-bold text-dark leading-tight" style="font-size: clamp(32px, 5vw, 68px);">
              Published Articles
            </h2>
          </div>
          <div class="overflow-hidden">
            <h2
              v-reveal="{ clip: true, delay: 90 }"
              class="font-serif italic text-grey-42 leading-tight tracking-[-0.012em]"
              style="font-size: clamp(28px, 4.5vw, 60px);"
            >
              my thought about design
            </h2>
          </div>
        </div>
        <a
          v-reveal="{ delay: 150 }"
          href="https://medium.com/@rifka.haira16"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-2 bg-dark text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-zinc-700 transition-colors duration-200 shrink-0 self-start sm:self-end"
        >
          View all articles
          <ArrowIcon :size="16" />
        </a>
      </div>

      <!-- Article grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <a
          v-for="(article, i) in articles"
          :key="article.id"
          v-reveal="{ scale: true, delay: i * 70 }"
          :href="article.link"
          target="_blank"
          rel="noopener"
          class=" bg-cream-light group border  rounded-2xl p-6 sm:p-8 flex flex-col gap-4 hover:border-accent/30 transition-colors duration-300 cursor-pointer"
        >
          <div class="flex items-start justify-between">
            <span class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">
              {{ article.number }}
            </span>
            <ArrowIcon :size="20" class-name="text-dark/20 group-hover:text-accent transition-colors duration-300 shrink-0" />
          </div>
          <h3 class="text-lg sm:text-xl font-medium text-dark leading-snug group-hover:text-accent transition-colors duration-300">
            {{ article.title }}
          </h3>
          <p class="text-[15px] text-muted leading-6 flex-1">{{ article.excerpt }}</p>
          <span class="text-xs text-muted/70">{{ article.date }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { articles } from '../data/articles.js'
import ArrowIcon from './ArrowIcon.vue'
</script>
