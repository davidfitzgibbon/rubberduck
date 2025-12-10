<script setup>
import Result from './Result.vue'

const props = defineProps(['results'])
</script>

<template>
  <div class="results">
    <Result :result="result" v-if="results.length" v-for="result in results"> </Result>
  </div>
</template>

<style scoped>
.results {
}
</style>
