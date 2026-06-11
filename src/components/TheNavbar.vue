<template>
  <header
    class="sticky top-0 z-50 bg-cream border-b border-border h-[72px] flex items-center justify-between px-4 sm:px-8 lg:px-16 anim-nav"
  >
    <!-- Logo -->
    <a
      href="#"
      class="flex items-center gap-2 rounded-full pl-1 pr-4 py-1 shrink-0"
    >
      <img src="/logo-avatar.png" alt="Hairadifa" class="w-8 h-8 rounded-full object-cover shrink-0" />
      <span class="font-semibold text-sm text-dark tracking-wide leading-tight">HAIRADIFA</span>
    </a>

    <!-- Desktop nav -->
    <nav class="hidden md:flex items-center gap-10 lg:gap-12">
      <a
        v-for="link in navLinks"
        :key="link.label"
        :href="link.href"
        class="text-[15px] text-dark hover:text-accent transition-colors duration-200 font-normal"
      >
        {{ link.label }}
      </a>
    </nav>

    <!-- CTA + hamburger -->
    <div class="flex items-center gap-4">
      <a
        href="mailto:rifka.haira16@gmail.com"
        class="hidden sm:flex items-center gap-2 bg-accent text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-orange-600 transition-colors duration-200"
      >
        Hire Me
        <ArrowIcon :size="16" />
      </a>

      <!-- Hamburger -->
      <button
        class="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <span
          class="block w-6 h-0.5 bg-dark transition-all duration-300"
          :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span
          class="block w-6 h-0.5 bg-dark transition-all duration-300"
          :class="mobileOpen ? 'opacity-0' : ''"
        ></span>
        <span
          class="block w-6 h-0.5 bg-dark transition-all duration-300"
          :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="absolute top-[72px] left-0 right-0 bg-cream border-b border-border px-4 py-6 md:hidden flex flex-col gap-4"
    >
      <a
        v-for="link in navLinks"
        :key="link.label"
        :href="link.href"
        class="text-[15px] text-dark hover:text-accent font-normal py-2 border-b border-border last:border-0"
        @click="mobileOpen = false"
      >
        {{ link.label }}
      </a>
      <a
        href="mailto:rifka.haira16@gmail.com"
        class="flex items-center gap-2 bg-accent text-white rounded-full px-6 py-3 text-sm font-medium justify-center mt-2"
        @click="mobileOpen = false"
      >
        Hire Me
        <ArrowIcon :size="16" />
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import ArrowIcon from './ArrowIcon.vue'

const mobileOpen = ref(false)

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Articles', href: '#articles' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/12sEd0blE65jG5VLEv-6hb74R5_BQe1cq/view?usp=sharing', },
]
</script>

<style scoped>
.anim-nav {
  animation: slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
}
@keyframes slide-down {
  from { opacity: 0; transform: translateY(-16px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
