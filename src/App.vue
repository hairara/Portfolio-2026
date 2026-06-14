<template>
  <div class="min-h-screen bg-cream">
    <TheNavbar />
    <router-view />
    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
</script>
