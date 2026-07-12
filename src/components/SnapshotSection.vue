<template>
  <section id="snapshot" class="bg-cream px-4 sm:px-8 lg:px-16 py-20 lg:py-28 pb-2">
    <div class="bg-cream-light rounded-2xl px-8 py-16 max-w-[1312px] mx-auto h-[480px] sm:h-[580px] lg:h-[700px]">
      <div class="overflow-hidden h-full">
        <div class="flex gap-8 h-full">

          <!-- Left column: vertical auto-scroll marquee -->
          <div class="flex-1 overflow-hidden h-full">
            <div class="left-col-track flex flex-col gap-8">
              <template v-for="n in 2" :key="n">
                <div class="aspect-[4/3] rounded-2xl bg-[#1a0a2e] shrink-0" :aria-hidden="n === 2 ? 'true' : undefined"></div>
                <div class="aspect-[4/3] rounded-2xl bg-[#1a0a2e] shrink-0" :aria-hidden="n === 2 ? 'true' : undefined"></div>
                <div class="aspect-[4/3] rounded-2xl bg-[#1a0a2e] shrink-0" :aria-hidden="n === 2 ? 'true' : undefined"></div>
              </template>
            </div>
          </div>

          <!-- Right column: vertical auto-scroll marquee (reverse direction) -->
          <div class="flex-1 overflow-hidden h-full">
            <div class="right-col-track flex flex-col gap-8">
              <template v-for="n in 2" :key="n">
                <div class="aspect-[4/3] rounded-2xl bg-[#1a0a2e] shrink-0" :aria-hidden="n === 2 ? 'true' : undefined"></div>
                <div class="aspect-[4/3] rounded-2xl bg-[#1a0a2e] shrink-0" :aria-hidden="n === 2 ? 'true' : undefined"></div>
                <div class="aspect-[4/3] rounded-2xl bg-[#1a0a2e] shrink-0" :aria-hidden="n === 2 ? 'true' : undefined"></div>
              </template>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.left-col-track {
  animation: marquee-up 12s linear infinite;
}
.left-col-track:hover {
  animation-play-state: paused;
}

.right-col-track {
  animation: marquee-down 12s linear infinite;
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
