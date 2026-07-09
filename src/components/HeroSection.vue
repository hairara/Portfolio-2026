<template>
  <section class="bg-cream px-4 sm:px-8 lg:px-16 pt-24 md:pt-28 lg:pt-36 pb-16">
    <div class="max-w-[1312px] mx-auto flex flex-col gap-6">

      <!-- Badge -->
      <div class="flex items-center gap-2 anim-1">
        <span class="w-2 h-2 rounded-sm bg-accent shrink-0"></span>
        <span class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">
          UI/UX 3+ of Experiences
        </span>
      </div>

      <!-- Heading: each word clip-reveals from below its own mask -->
      <div class="flex flex-wrap items-baseline gap-2 sm:gap-3 leading-none">
        <span class="overflow-hidden inline-block pb-[1.4em]">
          <span
            class="font-bold text-accent leading-[0.95] whitespace-nowrap inline-block anim-clip-1"
            style="font-size: clamp(52px, 10vw, 160px);"
          >Design</span>
        </span>
        <span class="inline-block" style="font-size: clamp(48px, 10vw, 160px);">
          <span
            class="font-serif italic text-grey-42 leading-[0.875] whitespace-nowrap tracking-[-0.012em] inline-block anim-clip-2"
          >{{ displayText }}<span class="typing-cursor"></span></span>
        </span>
      </div>

      <!-- Meta row -->
      <div class="border-t border-border pt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 anim-3">
        <div class="md:col-span-1">
          <p class="text-[15px] text-dark leading-6 max-w-md">
            A multidisciplinary design practice bringing together business strategy, user-centered thinking,
            and technology to create refined digital experiences that scale with purpose.
          </p>
        </div>

        <div class="flex gap-8 md:gap-12 md:col-span-1">
          <div class="flex flex-col gap-0.5">
            <span class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">Location</span>
            <span class="text-[15px] text-dark leading-6">Jakarta</span>
          </div>
          <div class="flex flex-col gap-0.5">
            <span class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">Established</span>
            <span class="text-[15px] text-dark leading-6">2022</span>
          </div>
        </div>

        <div class="flex md:justify-end items-start">
          <a
            href="#projects"
            class="flex items-center gap-2 text-[15px] font-medium text-accent border-b border-accent/40 pb-0.5 hover:border-accent transition-colors duration-200"
          >
            Scroll to explore
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4v12.586l-3.293-3.293-1.414 1.414L12 19.414l4.707-4.707-1.414-1.414L12 16.586V4z"/>
            </svg>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const words = ['Intelligence.', 'Experience.', 'Interface.']
const currentIndex = ref(0)
const displayText = ref('')
const isDeleting = ref(false)

let timer = null

const TYPE_SPEED = 75
const DELETE_SPEED = 45
const PAUSE_AFTER_TYPE = 2000
const PAUSE_AFTER_DELETE = 320

onMounted(() => {
  // start typewriter after hero entrance animation finishes (~900ms)
  const tick = () => {
    const word = words[currentIndex.value]
    if (!isDeleting.value) {
      displayText.value = word.slice(0, displayText.value.length + 1)
      if (displayText.value === word) {
        isDeleting.value = true
        timer = setTimeout(tick, PAUSE_AFTER_TYPE)
        return
      }
      timer = setTimeout(tick, TYPE_SPEED)
    } else {
      displayText.value = displayText.value.slice(0, -1)
      if (displayText.value === '') {
        isDeleting.value = false
        currentIndex.value = (currentIndex.value + 1) % words.length
        timer = setTimeout(tick, PAUSE_AFTER_DELETE)
        return
      }
      timer = setTimeout(tick, DELETE_SPEED)
    }
  }
  timer = setTimeout(tick, 900)
})

onUnmounted(() => clearTimeout(timer))
</script>

<style scoped>
/* Page-load entrance animations */
@keyframes fade-up {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes clip-up {
  from { transform: translateY(110%); }
  to   { transform: translateY(0); }
}

.anim-1      { animation: fade-up  0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both; }
.anim-clip-1 { animation: clip-up  0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.30s both; }
.anim-clip-2 { animation: clip-up  0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.48s both; }
.anim-3      { animation: fade-up  0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.70s both; }

/* Typewriter cursor */
.typing-cursor {
  display: inline-block;
  width: 3px;
  height: 0.72em;
  background-color: #6b6b6b;
  margin-left: 4px;
  vertical-align: middle;
  border-radius: 1px;
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
</style>
