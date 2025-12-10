<script setup>
import { ref, computed } from 'vue'
import responses from '@/assets/responses'
import random from '@/helpers/random'
import ResultWord from './ResultWord.vue'
const props = defineProps(['result'])
let thinking = ref(true)
let response = ref('true')
let timestamp = ref('')
let currentDisplayedWords = ref(0)

const words = props.result.split(' ')

const displayWords = computed(() => {
  return words.slice(0, currentDisplayedWords.value)
})

console.log(props.result)

function init() {
  response.value = random(responses)

  const timestampRaw = new Date(Math.random() * new Date().getTime())
  timestamp.value = timestampRaw.toLocaleString('en-IE', { timeZone: 'UTC' })

  const duration = random(200) + 200 * words.length
  const serverDuration = duration + 1000

  const incrementTime = duration / words.length

  const increment = () => {
    const container = document.querySelector('.container')
    currentDisplayedWords.value++
    if (currentDisplayedWords.value < words.length) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })

      setTimeout(increment, incrementTime)
    }
  }
  increment()

  setTimeout(() => {
    thinking.value = false
  }, serverDuration)
}
init()
</script>

<template>
  <div class="result">
    <p class="user">
      <ResultWord v-for="word in displayWords" :word />
    </p>
    <div class="duck">
      <p class="thinking" v-if="thinking">
        {{ response }}
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </p>
      <svg viewBox="31 11 17 17" v-if="!thinking">
        <path
          d="M43.9 19.18h1.27v.64h1.26v1.25h.63v4.41H45.8v.63h-.63v.63h-.63v.63H34.46v-.63h-.63v-.63h-.63v-.63h-1.26v-6.3h4.41v-1.25H35.1v-4.41h.63v-1.26h1.9v-.63h5.03v.63h1.89v5.67h-.63z"
          style="fill: #f7f83c"
        />
        <path d="M47.06 17.93h-5.04v-1.26h1.26v-.63h3.78z" style="fill: #e89135" />
        <path d="M43.9 17.93h-1.88v-.63h5.04v.63h-2.52v.63h-.63z" style="fill: #fe0334" />
        <path
          d="M43.9 12.26h.64v.63h-.63zm-1.25-.63h1.26v.63h-1.26zm-10.7 13.22h-.63v-5.67h.62zm14.48-4.4h-.63v-.63h.63zm.63.62h-.63v-.63h.63zm0 3.78v-3.78h.63v3.78zm-.63.63v-.63h.63v.63zm-.63.63v-.63h.63v.63zm-.63.63v-.63h.63v.63zm-.63.63v-.63h.63v.63zm-10.08 0h10.08V28H34.46zm-.63-.63h.63v.63h-.63zm-.63-.63h.63v.63h-.63zm-.63-.63h.63v.63h-.63zm-.63-.63h.63v.63h-.63zm3.15-6.92h-.63v-4.41h.63zm1.26 1.25v-.62h.63v.63zm-1.26-5.66v-1.26h.63v1.26zm.63-1.26v-.63h1.9v.63zm.63 6.3H35.1v-.63h1.26zm1.26-6.93V11h5.04v.63zm-3.15 7.55h1.9v.64h-1.9zm-2.52 0v-.62h2.52v.63zm10.08-1.25h-.63v-1.26h.63zm1.89.63h.63v.63h-.63zm-1.9-.63h1.9v.63H42zm5.05-1.9h-4.41v-.62h1.89v-1.26h.63v1.26h1.89zm0 1.9v-1.9h.63v1.9zm-2.52.63v-.63h2.52v.63zM38.87 14.78h1.26v1.26h-1.26z"
        />
        <path
          d="M33.2 25.48h.63v.63h-.63zm1.26 1.26h10.08v.63H34.46zm-.63-.63h.63v.63h-.63zm-1.26-1.26h.63v.63h-.63zm0 0h-.63v-.63h.63z"
          style="fill: #e89135"
        />
        <path d="M42.65 21.07h-1.9v-.63h2.53v.63h1.89v.63h-2.52z" style="fill: #fff" />
        <path
          d="M0 11V0h80v11h-4v1h-1v-1h-4v-1h-2V9h-1V8h-1V7h-1V5h-7v1h-1V5h-6V4h-1V3h-1V2h-1V1h-2v1h-2v1h-1v1h-4v1h-2V4h-4V3h-2V2h-2v1h-1v1h-1v1h-1v1h-2v1h-4v1h-1V7h-4V6h-2v1h-1v1h-1v1h-1v1H9v1H5v1H3v-1z"
          style="fill: #fefff5"
        />
      </svg>
      <div class="timestamp" v-if="!thinking">
        <span>Message&nbsp;recieved:</span> {{ timestamp.replace(' ', '&nbsp;') }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.duck {
  text-align: right;
  float: right;
}
.result {
  background: var(--color-green);
  color: var(--color-black);
  border-radius: 0.5em;
  padding: 0 1em;
  position: relative;
  overflow: none;
  clear: both;
  float: left;
  width: 100%;
  margin-bottom: 1em;
}
.user,
.duck {
  background: var(--color-lime);
  border-radius: 0.5em;
  background: var(--color-white);
  padding: 0.5em 1em;
  margin: 1em 0;
  width: fit-content;
  clear: both;
}
.thinking {
  display: inline;
  width: min-content;
  opacity: 0.4;
  --duration: 1s;
  --delay: calc(var(--duration) / 3);
  span {
    animation: think var(--duration) infinite;
    &:nth-child(2) {
      animation-delay: var(--delay);
    }
    &:nth-child(3) {
      animation-delay: calc(var(--delay) * 2);
    }
  }
}
@keyframes think {
  0% {
    color: var(--color-g03);
  }
  33% {
    color: var(--color-g03);
  }
  33.01% {
    color: var(--color-black);
  }
  100% {
    color: var(--color-black);
  }
}
svg {
  height: 2lh;
  animation: reveal both 0.5s;
  animation-delay: 0.3s;
  display: inline-block;
  margin-bottom: 0.5em;
}
.timestamp {
  font-size: 0.75em;
  color: var(--color-g03);
  animation: reveal both 0.5s;
  animation-delay: 0.6s;
}
@keyframes reveal {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
