<template>
  <svg :width="size" :height="size" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" :class="className">
    <path d="M5.24521 14.7035L4.375 13.8333L12.5754 5.625H5.12021V4.375H14.7035V13.9583H13.4535V6.50313L5.24521 14.7035Z" fill="currentColor"/>
  </svg>
</template>

<script setup>
defineProps({
  size: { type: [String, Number], default: 20 },
  className: { type: String, default: '' },
})
</script>
