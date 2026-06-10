<template>
  <section class="bg-cream px-4 sm:px-8 lg:px-16 py-20 lg:py-28">
    <div class="max-w-[1312px] mx-auto">
      <!-- Top: label + quote + stats -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pb-10 lg:pb-16">
        <!-- Left label -->
        <div class="overflow-hidden flex items-start">
          <p v-reveal="{ clip: true }" class="text-[15px] text-dark leading-6">Pixel Perfection</p>
        </div>

        <!-- Right: quote + stats -->
        <div class="flex flex-col gap-8">
          <div class="overflow-hidden border-b border-border pb-12">
            <p v-reveal="{ clip: true, delay: 80 }" class="text-[22px] sm:text-[26px] lg:text-[28px] font-medium text-dark leading-[1.45]">
              I don't just design experiences; I define how they perform. Every flow, interaction,
              and detail is built to connect user needs with business outcomes.
            </p>
          </div>

          <!-- Stats with counter -->
          <div ref="statsRef" class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div
              v-for="(stat, i) in stats"
              :key="stat.label"
              v-reveal="120 + i * 50"
              class="flex flex-col gap-0.5"
            >
              <span class="text-2xl font-medium text-dark leading-tight">
                {{ stat.prefix }}{{ stat.displayed }}{{ stat.suffix }}
              </span>
              <span class="text-[15px] text-dark/70">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Project image cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-8 lg:pt-16">
        <div
          v-for="(img, i) in featuredImages"
          v-reveal="{ scale: true, delay: i * 120 }"
          :key="img.id"
          class="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br"
          :class="img.gradient"
        >
          <!-- Real photo -->
          <template v-if="img.image">
            <img
              :src="img.image"
              :alt="img.title"
              class="absolute inset-0 w-full h-full object-cover"
              :style="{ objectPosition: img.objectPosition || 'center' }"
            />
            <div class="absolute inset-0 bg-black/20"></div>
          </template>
          <!-- Abstract placeholder fallback -->
          <template v-else>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-full h-full opacity-20 grid grid-cols-6 grid-rows-4 gap-0.5 p-4">
                <div
                  v-for="n in 24"
                  :key="n"
                  class="rounded-sm"
                  :class="n % 7 === 0 ? 'bg-white/60' : n % 3 === 0 ? 'bg-white/20' : 'bg-white/10'"
                ></div>
              </div>
            </div>
            <div class="absolute inset-0 flex items-center justify-center p-8">
              <div class="w-full max-w-[280px] space-y-2">
                <div class="h-2 bg-white/20 rounded-full w-3/4"></div>
                <div class="h-2 bg-white/10 rounded-full w-full"></div>
                <div class="h-2 bg-white/10 rounded-full w-5/6"></div>
                <div class="mt-4 h-20 bg-white/10 rounded-xl"></div>
                <div class="flex gap-2 mt-2">
                  <div class="h-6 bg-accent/40 rounded-full flex-1"></div>
                  <div class="h-6 bg-white/10 rounded-full flex-1"></div>
                </div>
              </div>
            </div>
          </template>
          <div class="absolute bottom-4 left-4 right-4 flex flex-col gap-1.5">
            <div class="flex gap-2 flex-wrap">
              <span class="bg-white text-[11px] text-black/70 border border-black/20 rounded-full px-2.5 py-0.5 leading-tight">
                {{ img.category }}
              </span>
            </div>
            <p class="text-white text-sm font-medium">{{ img.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const statsRef = ref(null)

const stats = ref([
  { displayed: 0, target: 10, suffix: '+', prefix: '', label: 'Illustration Created' },
  { displayed: 0, target: 40, suffix: '+', prefix: '', label: 'Projects solved' },
  { displayed: 0, target: 100, suffix: '%', prefix: '', label: 'Independent' },
  { displayed: '24/7', target: null, suffix: '', prefix: '', label: 'Creative Support' },
])

function runCounters() {
  stats.value.forEach((stat, i) => {
    if (stat.target === null) return
    const duration = 1400
    const steps = stat.target
    const stepTime = duration / steps
    let current = 0
    setTimeout(() => {
      const timer = setInterval(() => {
        current++
        stat.displayed = current
        if (current >= stat.target) clearInterval(timer)
      }, stepTime)
    }, i * 60)
  })
}

onMounted(() => {
  if (!statsRef.value) return
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      runCounters()
      observer.disconnect()
    }
  }, { threshold: 0.2 })
  observer.observe(statsRef.value)
})

const featuredImages = [
  {
    id: 1,
    title: 'Speakers for Mini Course Harisenin.com',
    category: 'BRANDING',
    gradient: 'from-zinc-900 via-zinc-800 to-zinc-900',
    image: '/projects/harisenin-speaker.jpg',
    objectPosition: 'center top',
  },
  {
    id: 2,
    title: 'Training Experience Feature Nurse App Siloam',
    category: 'UX/UI',
    gradient: 'from-stone-900 via-neutral-800 to-stone-900',
    image: '/projects/siloam-presentation.jpg',
  },
]
</script>
