<template>
  <router-link
    v-if="project.slug"
    :to="`/projects/${project.slug}`"
    class="group relative rounded-2xl overflow-hidden block bg-zinc-900 hover:scale-[1.01] transition-transform duration-300"
    :class="size === 'large' ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[4/3]'"
  >
    <ProjectCardContent :project="project" :size="size" />
  </router-link>
  <a
    v-else
    :href="project.link"
    target="_blank"
    rel="noopener"
    class="group relative rounded-2xl overflow-hidden block bg-zinc-900 hover:scale-[1.01] transition-transform duration-300"
    :class="size === 'large' ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[4/3]'"
  >
    <ProjectCardContent :project="project" :size="size" />
  </a>
</template>

<script setup>
import ProjectCardContent from './ProjectCardContent.vue'

defineProps({
  project: { type: Object, required: true },
  size: { type: String, default: 'large' },
})
</script>
