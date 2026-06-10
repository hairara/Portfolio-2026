<template>
  <div class="min-h-screen bg-cream">
    <TheNavbar />
    <main>
      <HeroSection />
      <ClientLogos />
      <ValueSection />
      <WorkflowSection />
      <ProjectsSection />
      <ArticlesSection />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import ClientLogos from './components/ClientLogos.vue'
import ValueSection from './components/ValueSection.vue'
import WorkflowSection from './components/WorkflowSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ArticlesSection from './components/ArticlesSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>
