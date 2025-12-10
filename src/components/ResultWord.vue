<script setup>
import random from '@/helpers/random'
const props = defineProps(['word'])
const color = `hsl(${random(360)}, 100%, 80%)`
</script>

<template>
  <span :style="{ background: color }">{{ word }}</span>
</template>

<style scoped>
span {
  margin: 0 0.5em 0em 0;
  display: inline-block;
  animation: fade 0.2s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 500ms;
}
@keyframes fade {
  100% {
    background: transparent;
  }
}
</style>
