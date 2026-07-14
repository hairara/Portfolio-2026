<template>
  <section id="snapshot" class="bg-cream px-4 sm:px-4 lg:px-16 py-20 lg:py-28 pb-2">
    <div class="relative bg-cream-light rounded-2xl px-8 py-16 max-w-[1312px] mx-auto h-[480px] sm:h-[580px] lg:h-[700px]">
      <!-- Top inner shadow fade -->
      <div
        class="absolute inset-x-0 top-0 z-10 pointer-events-none rounded-t-2xl"
        style="height: 210px; background: linear-gradient(to bottom, #fdfcf3 40%, transparent 60%); filter: blur(20px);"
      ></div>
      <div class="overflow-hidden h-full">
        <div class="flex gap-8 h-full">

          <!-- Left column: vertical auto-scroll marquee (upward) -->
          <div class="flex-1 overflow-hidden h-full">
            <div class="left-col-track flex flex-col gap-6">
              <template v-for="pass in 2" :key="pass">
                <div
                  v-for="img in leftImages"
                  :key="`left-${pass}-${img}`"
                  class="aspect-[4/3] rounded-lg bg-border shrink-0 overflow-hidden"
                  :aria-hidden="pass === 2 ? 'true' : undefined"
                >
                  <img :src="img" alt="" class="w-full h-full object-cover" />
                </div>
              </template>
            </div>
          </div>

          <!-- Right column: vertical auto-scroll marquee (downward) -->
          <div class="flex-1 overflow-hidden h-full">
            <div class="right-col-track flex flex-col gap-6">
              <template v-for="pass in 2" :key="pass">
                <div
                  v-for="img in rightImages"
                  :key="`right-${pass}-${img}`"
                  class="aspect-[4/3] rounded-lg bg-border shrink-0 overflow-hidden"
                  :aria-hidden="pass === 2 ? 'true' : undefined"
                >
                  <img :src="img" alt="" class="w-full h-full object-cover" />
                </div>
              </template>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const leftImages = [
  '/snapshots/1.png',
  '/snapshots/3.png',
  '/snapshots/5.png',
  '/snapshots/7.png',
  '/snapshots/9.png',
  '/snapshots/11.png',
  '/snapshots/13.png',
  '/snapshots/15.png',
  '/snapshots/details.png',
  '/snapshots/res1.png',
  '/snapshots/Dribbble shot HD - 7.png',
]

const rightImages = [
  '/snapshots/2.png',
  '/snapshots/4.png',
  '/snapshots/6.png',
  '/snapshots/8.png',
  '/snapshots/10.png',
  '/snapshots/12.png',
  '/snapshots/14.png',
  '/snapshots/Cover.png',
  '/snapshots/jack.png',
  '/snapshots/Dribbble shot HD - 8.png',
  '/snapshots/Dribbble shot HD - 9.png',
]
</script>

<style scoped>
.left-col-track {
  animation: marquee-up 30s linear infinite;
}
.left-col-track:hover {
  animation-play-state: paused;
}

.right-col-track {
  animation: marquee-down 30s linear infinite;
}
.right-col-track:hover {
  animation-play-state: paused;
}

@keyframes marquee-up {
  from { transform: translateY(0); }
  to   { transform: translateY(-50%); }
}
@keyframes marquee-down {
  from { transform: translateY(-50%); }
  to   { transform: translateY(0); }
}
</style>
