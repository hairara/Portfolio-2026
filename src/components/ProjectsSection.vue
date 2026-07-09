<template>
  <section id="projects" class="bg-cream-light px-4 sm:px-8 lg:px-16 py-20 lg:py-28">
    <div class="max-w-[1312px] mx-auto">
      <!-- Section header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 lg:mb-16">
        <div>
          <div class="overflow-hidden">
            <h2 v-reveal="{ clip: true }" class="font-bold text-dark leading-tight" style="font-size: clamp(32px, 5vw, 68px);">
              Selected Work from
            </h2>
          </div>
          <div class="overflow-hidden">
            <h2
              v-reveal="{ clip: true, delay: 90 }"
              class="font-serif italic text-grey-42 leading-tight tracking-[-0.012em]"
              style="font-size: clamp(30px, 4.8vw, 64px);"
            >
              Recent Projects
            </h2>
          </div>
        </div>
        <a
          v-reveal="{ delay: 160 }"
          href="https://radifa.super.site/projects"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-2 bg-dark text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-zinc-700 transition-colors duration-200 shrink-0 self-start sm:self-end"
        >
          View all projects
          <ArrowIcon :size="16" />
        </a>
      </div>

      <!-- Row 1: large left + small right -->
      <div v-reveal="{ scale: true, delay: 50 }" class="grid grid-cols-1 lg:grid-cols-[1fr_35%] gap-4 sm:gap-5 mb-4 sm:mb-5">
        <ProjectCard :project="displayProjects[0]" size="large" />
        <ProjectCard :project="displayProjects[1]" size="small" />
      </div>
      <!-- Row 2: small left + large right -->
      <div v-reveal="{ scale: true, delay: 120 }" class="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-4 sm:gap-5">
        <ProjectCard :project="displayProjects[2]" size="small" />
        <ProjectCard :project="displayProjects[3]" size="large" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects as displayProjects } from '../data/projects.js'
import ProjectCard from './ProjectCard.vue'
import ArrowIcon from './ArrowIcon.vue'
</script>
