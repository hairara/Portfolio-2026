<template>
  <section id="aboutme" class="bg-cream-light px-4 sm:px-8 lg:px-16 py-20 lg:py-28">
    <div class="max-w-[1312px] mx-auto">

      <!-- Section header -->
      <div class="mb-16 lg:mb-20">
        <div class="overflow-hidden">
          <h2 v-reveal="{ clip: true }" class="font-serif font-bold text-accent leading-tight" style="font-size: clamp(36px, 5.5vw, 72px);">
            The person
          </h2>
        </div>
        <div class="overflow-hidden">
          <h2 v-reveal="{ clip: true, delay: 90 }" class="font-serif italic text-grey-42 leading-tight" style="font-size: clamp(32px, 4.5vw, 72px);">
            behind the work.
          </h2>
        </div>
      </div>

      <!-- Bio + Quick stats -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 lg:gap-20 mb-20 lg:mb-24">
        <div v-reveal class="flex flex-col gap-5">
          <p class="text-dark leading-relaxed" style="font-size: clamp(16px, 1.3vw, 19px);">
            I'm Rifka — a UI/UX designer based in Jakarta with 3+ years of experience turning complex user problems into intuitive, impactful digital products. I operate at the intersection of design, data, and business strategy, delivering outcomes that move real metrics across healthcare, fintech, and media platforms.
          </p>
          <p class="text-muted leading-relaxed text-[15px]">
            My process starts with understanding the business context before touching any screen. Good design is invisible — it works when users accomplish what they came to do without friction. I've collaborated with engineering, product, clinical, and marketing teams in fast-paced organizations, and I thrive in environments where design has real stakes and measurable results.
          </p>
          <a
            href="https://www.linkedin.com/in/rifkaputrihairadifa/"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 bg-accent text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-accent/80 transition-colors duration-200 self-start mt-2"
          >
            View LinkedIn
            <ArrowIcon :size="16" />
          </a>
        </div>

        <!-- Quick stats -->
        <div v-reveal="{ delay: 100 }" class="grid grid-cols-2 lg:grid-cols-2 gap-0">
          <div v-for="stat in stats" :key="stat.label" class="border-t border-border pt-5 pb-5 pr-4">
            <p
              class="font-bold leading-none mb-1.5"
              :class="stat.accent ? 'text-accent' : 'text-dark'"
              style="font-size: clamp(22px, 2.5vw, 32px);"
            >
              {{ stat.value }}
            </p>
            <p class="text-[13px] text-muted">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <!-- Work Experience -->
      <div class="mb-20 lg:mb-24">
        <p v-reveal class="text-[11px] font-medium text-muted uppercase tracking-[1.32px] mb-8">Work Experience</p>
        <div class="flex flex-col">
          <div
            v-for="(exp, i) in experiences"
            :key="exp.company"
            v-reveal="{ delay: i * 60 }"
            class="grid grid-cols-1 sm:grid-cols-[1fr_180px] gap-3 sm:gap-8 py-8 border-t border-border last:border-b"
          >
            <div class="flex flex-col gap-3">
              <div class="flex flex-wrap items-center gap-3">
                <span class="font-semibold text-dark text-base">{{ exp.company }}</span>
                <span class="text-[11px] font-medium text-muted border border-border rounded-full px-3 py-0.5 tracking-wide">
                  {{ exp.role }}
                </span>
              </div>
              <ul class="flex flex-col gap-2">
                <li
                  v-for="point in exp.highlights"
                  :key="point"
                  class="text-[14px] text-muted leading-relaxed flex gap-2.5"
                >
                  <span class="text-accent shrink-0 mt-px">—</span>
                  {{ point }}
                </li>
              </ul>
            </div>
            <div class="sm:text-right">
              <span class="text-[13px] text-muted">{{ exp.period }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills & Tools -->
      <div v-reveal>
        <p class="text-[11px] font-medium text-muted uppercase tracking-[1.32px] mb-8">Skills & Tools</p>
        <div class="flex flex-col gap-6">
          <div
            v-for="group in skillGroups"
            :key="group.label"
            class="flex flex-col sm:flex-row gap-3 sm:gap-8 sm:items-baseline"
          >
            <span class="text-[13px] text-muted shrink-0 w-48">{{ group.label }}</span>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in group.skills"
                :key="skill"
                class="text-[13px] text-dark border border-border rounded-full px-3 py-1 leading-tight"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import ArrowIcon from './ArrowIcon.vue'

const stats = [
  { value: '3+',      label: 'Years of experience' },
  { value: '4',       label: 'Companies' },
  { value: 'Jakarta', label: 'Based in' },
  { value: 'Open',    label: 'For any opportunities', accent: true },
]

const experiences = [
  {
    company: 'Siloam Hospital',
    role: 'UI/UX Designer · Mid-Level',
    period: 'Apr 2025 — Present',
    highlights: [
      'Led the revamp of a medication administration system used by doctors, pharmacists, and nurses — creating a fully integrated digital workflow.',
      'Reduced insurance picking list inflation and medication errors through standardized digital processes that improved operational transparency.',
      'Designed integration of anesthesia data capture devices in operating rooms, ensuring accurate and real-time procedural data recording.',
    ],
  },
  {
    company: 'Alodokter',
    role: 'UI/UX Designer · Mid-Level',
    period: 'Jun 2023 — Mar 2025',
    highlights: [
      'Led Biteship shipment integration — reduced courier unavailability from 75% to below 10%.',
      'Initiated a gamified point redemption system that increased e-course and webinar revenue by 10–20%.',
      'Implemented autoplay media feature, boosting Forum Discussion engagement by 30–40%.',
      'Standardized media upload ratios, improving overall user interaction by 40–50%.',
    ],
  },
  {
    company: 'Transfez',
    role: 'UI/UX Designer · Intern',
    period: 'Feb 2023 — May 2023',
    highlights: [
      'Conducted competitive analysis across five international platforms to surface usability and design opportunities.',
      'Designed end-to-end website concepts covering nine distinct user interaction flows.',
    ],
  },
  {
    company: 'PT Vidio Dot Com',
    role: 'Product Design · Intern',
    period: 'Aug 2022 — Dec 2022',
    highlights: [
      'Collaborated with product, engineering, and design system teams to improve subscription and account experiences.',
      'Conducted user interviews to redesign the profile menu structure; delivered 10+ design case improvements across mobile and desktop.',
      'Integrated GoPay payment flows across multiple product interfaces.',
    ],
  },
]

const skillGroups = [
  {
    label: 'Business & Analytical',
    skills: ['Problem Solving', 'Data-Driven Decisions', 'Strategic Thinking', 'Product Strategy', 'User Behavior Analysis'],
  },
  {
    label: 'Leadership',
    skills: ['Cross-functional Collaboration', 'Stakeholder Communication', 'Team Coordination', 'Project Prioritization'],
  },
  {
    label: 'Tools & Tech',
    skills: ['Figma', 'FigJam', 'Miro', 'Adobe XD', 'VS Code', 'Claude', 'Cursor', 'GitHub', 'Lottiefiles', 'Lovable'],
  },
]
</script>
