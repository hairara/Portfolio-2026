<template>
  <section class="bg-cream px-4 sm:px-8 lg:px-16 pt-2 lg:pt-8 pb-24 lg:pb-28">
    <div class="max-w-[1312px] mx-auto">
      <!-- Header row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 mb-16 lg:mb-20">
        <div class="overflow-hidden">
          <p v-reveal="{ clip: true }" class="text-[15px] text-dark leading-6">My Workflow</p>
        </div>
        <div v-reveal="100">
          <p class="text-[15px] sm:text-[17px] text-dark leading-7">
            From first insight to final asset — end-to-end creative direction across every discipline
            that shapes how a brand lives in the world.
          </p>
        </div>
      </div>

      <!-- Workflow grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div
          v-for="step in steps"
          :key="step.id"
          v-reveal="{ scale: true, delay: (step.id - 1) * 70 }"
          class="bg-cream-light group border rounded-2xl p-6 sm:p-8 lg:p-10 grid grid-cols-[56px_1fr] gap-x-2"
        >
          <span class="text-[11px] font-medium text-muted uppercase tracking-[1.32px] pt-1">
            {{ step.number }}
          </span>
          <div class="flex flex-col gap-3">
            <h3 class="text-xl sm:text-2xl font-medium text-dark leading-tight">{{ step.title }}</h3>
            <p class="text-[15px] text-muted leading-6">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { workflowSteps as steps } from '../data/workflow.js'
import ArrowIcon from './ArrowIcon.vue'
</script>
