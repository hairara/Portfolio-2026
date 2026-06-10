<template>
  <section class="bg-cream-light py-8 sm:py-10 overflow-hidden relative">
    <!-- Edge fades -->
    <div class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream-light to-transparent z-10 pointer-events-none"></div>
    <div class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream-light to-transparent z-10 pointer-events-none"></div>

    <!-- Marquee track -->
    <div class="marquee-track flex items-center">
      <div
        v-for="n in 2"
        :key="n"
        class="flex items-center shrink-0"
        :aria-hidden="n === 2 ? 'true' : undefined"
      >
        <div
          v-for="client in clients"
          :key="`${n}-${client.name}`"
          class="flex items-center justify-center px-10 shrink-0"
        >
          <img
            v-if="client.src"
            :src="client.src"
            :alt="client.name"
            :style="{ height: client.height || '32px', width: 'auto' }"
            :class="client.invert ? 'brightness-0 opacity-100' : client.noBlend ? 'opacity-100' : 'mix-blend-multiply opacity-100'"
          />
          <span
            v-else
            class="font-semibold tracking-wide text-dark/40 whitespace-nowrap"
            :style="{ fontSize: client.size || '16px' }"
          >
            {{ client.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const clients = [
  { name: 'Siloam',        src: '/logos/logo-new-siloam.png',                               height: '30px' },
  { name: 'Alodokter',     src: '/logos/logo-header-5460a9c5763704812c35e250e155f873.png',   height: '16px' },
  { name: 'Alomedika',     src: '/logos/alomedika-logo-new-f9303b93896715640769844a07d455fc1350e308f7722b4c432e2b04f9f972ad.png', height: '18px', noBlend: true },
  { name: 'Jack',          src: '/logos/jack.png',                                           height: '40px', noBlend: true },
  { name: 'Vidio',         src: '/logos/vidio.png',                                          height: '32px', invert: true },
  { name: 'alterra',       src: '/logos/alterra.png?v=2',                                    height: '44px', noBlend: true },
  { name: 'harisenin.com', src: '/logos/logo_harisenin.svg',                                 height: '20px' },
]
</script>

<style scoped>
.marquee-track {
  width: max-content;
  animation: marquee 25s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>
