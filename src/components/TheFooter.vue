<template>
  <footer class="bg-cream-light px-4 sm:px-8 lg:px-16 pt-20 lg:pt-28 pb-8 ">
    <div class="max-w-[1312px] mx-auto">
      <!-- Top: CTA + logo -->
      <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-8 pb-16 lg:pb-20">
        <div>
          <div class="overflow-hidden">
            <p
              v-reveal="{ clip: true }"
              class="font-serif font-black text-accent leading-tight"
              style="font-size: clamp(36px, 5.5vw, 72px);"
            >
              Let's build
            </p>
          </div>
          <div class="overflow-hidden">
            <p
              v-reveal="{ clip: true, delay: 80 }"
              class="font-serif italic text-grey-42 leading-tight"
              style="font-size: clamp(36px, 5.5vw, 72px);"
            >
              something great.
            </p>
          </div>
        </div>

        <a
          v-reveal="{ delay: 140 }"
          href="#"
          class="hidden sm:flex items-center gap-2 rounded-full pl-1 pr-4 py-1 shrink-0 self-start"
        >
          <img src="/logo-avatar.png" alt="Hairadifa" class="w-8 h-8 rounded-full object-cover shrink-0" />
          <span class="font-semibold text-sm text-dark tracking-wide">HAIRADIFA</span>
        </a>
      </div>

      <!-- Mid: 3 columns -->
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12 pb-16 border-b border-border">
        <!-- Navigation -->
        <div v-reveal class="flex flex-col gap-4">
          <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">Navigation</p>
          <div class="flex flex-col gap-3">
            <a
              v-for="link in navLinks"
              :key="link.label"
              :href="link.href"
              class="text-[15px] text-dark hover:text-accent transition-colors duration-200"
            >
              {{ link.label }}
            </a>
          </div>
        </div>

        <!-- Connect -->
        <div v-reveal="70" class="flex flex-col gap-4">
          <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">Connect</p>
          <div class="flex flex-col gap-3">
            <a
              v-for="link in connectLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener"
              class="text-[15px] text-dark hover:text-accent transition-colors duration-200"
            >
              {{ link.label }}
            </a>
          </div>
        </div>

        <!-- Contact -->
        <div v-reveal="140" class="col-span-2 sm:col-span-1 flex flex-col gap-4">
          <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px]">Contact</p>
          <div class="flex flex-col gap-3">
            <a
              href="mailto:rifka.haira16@gmail.com"
              class="text-[15px] text-dark hover:text-accent transition-colors duration-200 break-all"
            >
              rifka.haira16@gmail.com
            </a>
            <span class="text-[15px] text-dark">Jakarta, ID</span>
            <div class="flex items-center gap-2 mt-1">
              <span class="w-2 h-2 rounded-sm bg-accent shrink-0"></span>
              <span class="text-[13px] font-medium text-dark uppercase tracking-[1.32px]">
                FREELANCE AVAILABLE
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-8">
        <p class="text-[13px] text-muted">© 2026 HAIRADIFA. All rights reserved.</p>
        <p class="text-[13px] text-muted">Est. 2022 — Jakarta, ID</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Articles', href: '#articles' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/12sEd0blE65jG5VLEv-6hb74R5_BQe1cq/view?usp=sharing' },
]

const connectLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/hairadifa/' },
  { label: 'LinkedIn', href: 'www.linkedin.com/in/rifkaputrihairadifa' },
  { label: 'Dribbble', href: 'https://dribbble.com/haiibyde' },
]
</script>
