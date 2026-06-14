<template>
  <!-- Background -->
  <div class="absolute inset-0 overflow-hidden">
    <!-- Real image -->
    <template v-if="project.image">
      <img
        :src="project.image"
        :alt="project.title"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent"></div>
    </template>
    <!-- Abstract UI mockup fallback -->
    <template v-else>
      <div
        class="absolute inset-0 opacity-30"
        :style="{ background: bgGradient }"
      ></div>
      <div class="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
        <div class="w-full max-w-xs space-y-2 sm:space-y-3">
          <div class="h-1.5 sm:h-2 bg-white/20 rounded-full w-2/3"></div>
          <div class="h-1.5 sm:h-2 bg-white/10 rounded-full w-full"></div>
          <div class="h-1.5 sm:h-2 bg-white/10 rounded-full w-5/6"></div>
          <div class="mt-4 sm:mt-6 rounded-xl bg-white/10"
               :class="size === 'large' ? 'h-32 sm:h-40' : 'h-20 sm:h-28'"></div>
          <div class="flex gap-2 mt-2">
            <div class="h-5 sm:h-7 bg-accent/40 rounded-full flex-1"></div>
            <div class="h-5 sm:h-7 bg-white/10 rounded-full flex-1"></div>
          </div>
        </div>
      </div>
    </template>
  </div>

  <!-- Hover overlay -->
  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

  <!-- Info bar -->
  <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex items-end justify-between">
    <div class="flex flex-col gap-1.5">
      <!-- Tags -->
      <div class="flex gap-2 flex-wrap">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="bg-white text-[11px] text-black/60 border border-black/20 rounded-full px-2.5 py-0.5 leading-tight"
        >
          {{ tag }}
        </span>
      </div>
      <!-- Title & client -->
      <h3
        class="font-medium text-white leading-snug"
        :class="size === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'"
      >
        {{ project.title }}
      </h3>
      <p class="text-xs sm:text-sm text-white/100">{{ project.client }}</p>
      <p class="text-xs sm:text-sm text-white/80">{{ project.year }}</p>
    </div>
    <!-- Arrow -->
    <div
      class="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/50 flex items-center justify-center shrink-0 text-white group-hover:bg-white group-hover:text-dark transition-colors duration-300"
    >
      <ArrowIcon :size="16" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ArrowIcon from './ArrowIcon.vue'

const props = defineProps({
  project: { type: Object, required: true },
  size: { type: String, default: 'large' },
})

const gradients = [
  'radial-gradient(ellipse at 30% 40%, #2d1b69 0%, #11001c 70%)',
  'radial-gradient(ellipse at 70% 30%, #1a3a4a 0%, #0a0a0a 70%)',
  'radial-gradient(ellipse at 50% 60%, #3a1a0a 0%, #0d0d0d 70%)',
  'radial-gradient(ellipse at 20% 70%, #0a2a1a 0%, #0a0a0a 70%)',
]

const bgGradient = computed(() => {
  const idx = (props.project.id || 0) % gradients.length
  return gradients[idx]
})
</script>
