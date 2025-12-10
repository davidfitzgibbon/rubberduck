<script setup>
const emit = defineEmits(['addResult'])

const handleSubmit = (e) => {
  e.preventDefault()
  const textEl = e.target.querySelector('textarea')
  const text = textEl.value

  emit('addResult', text)

  textEl.value = ''
}
</script>
<template>
  <form @submit="handleSubmit">
    <textarea placeholder="Enter your prompt here..." />
    <button type="submit">Generate</button>
  </form>
</template>

<style scoped>
form {
  text-align: right;
  margin-top: 1rem;
}
textarea {
  field-sizing: content;
  border-radius: 0.5em;
}
</style>
