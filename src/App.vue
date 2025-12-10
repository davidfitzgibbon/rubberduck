<script setup>
import Intro from './components/Intro.vue'
import Results from './components/Results.vue'
import Form from './components/Form.vue'
import Footer from './components/Footer.vue'

import { ref } from 'vue'

const intro = ref(true)
const results = ref([])
const addResult = (result) => {
  results.value.push(result)
}
</script>

<template>
  <div class="container">
    <Intro v-if="intro" @endIntro="intro = false" />
    <Results v-if="!intro" :results />
    <Form v-if="!intro" @addResult="(result) => addResult(result)" />
  </div>
  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
:root {
  /* BASICS */
  --gutter: var(--space-s-l);
  --transition-base: 250ms ease;
  --transition-movement: 200ms linear;
  --transition-fade: 300ms ease;
  --transition-bounce: 500ms cubic-bezier(0.5, 0.05, 0.2, 1.5);
  --leading-standard: 1.5;

  /* COLORS */
  /* brand */
  --color-white: #fefff5;
  --color-yellow: #f7f83c;
  --color-red: #fe0334;
  --color-black: #190005;

  /* secondary */
  --color-orange: #e89135;
  --color-green: #c2fb50;
  --color-lime: #86fa4e;
  --color-teal: #89fbce;
  --color-blue: #4471f5;
  --color-purple: #471af3;
  --color-pink: #e235e9;

  /* greys */
  --color-g00: #fafafa;
  --color-g01: #e0e0e0;
  --color-g02: #c9c9c9;
  --color-g03: #b3b3b3;
  --color-g04: #999999;
  --color-g05: #828282;
  --color-g06: #6b6b6b;
  --color-g07: #525252;
  --color-g08: #3b3b3b;
  --color-g09: #242424;
  --color-g10: #0d0d0d;

  .color {
    vertical-align: middle;
    line-height: 1;
    margin-top: 1.5em;
  }
  .color:before {
    vertical-align: inherit;
    content: '';
    display: inline-block;
    margin-right: 0.5em;
    width: 2em;
    height: 2em;
    background: var(--col);
    border: 2px solid var(--color-black);
  }

  --color-dark: var(--color-black);
  --color-light: var(--color-white);
  --color-primary: #02394a;

  /* SPACING */
  --space-zero: clamp(0rem, -0.02rem + 0.11vw, 0.0625rem);
  --space-3xs: clamp(0.3125rem, 0.29rem + 0.11vw, 0.375rem);
  --space-2xs: clamp(0.5625rem, 0.49rem + 0.33vw, 0.75rem);
  --space-xs: clamp(0.875rem, 0.78rem + 0.44vw, 1.125rem);
  --space-s: clamp(1.125rem, 0.99rem + 0.67vw, 1.5rem);
  --space-m: clamp(1.6875rem, 1.48rem + 1vw, 2.25rem);
  --space-l: clamp(2.25rem, 1.98rem + 1.33vw, 3rem);
  --space-xl: clamp(3.375rem, 2.96rem + 2vw, 4.5rem);
  --space-2xl: clamp(4.5rem, 3.95rem + 2.67vw, 6rem);
  --space-3xl: clamp(6.75rem, 5.92rem + 4vw, 9rem);
  --space-4xl: clamp(9rem, 7.9rem + 5.33vw, 12rem);
  --space-3xs-2xs: clamp(0.3125rem, 0.15rem + 0.78vw, 0.75rem);
  --space-2xs-xs: clamp(0.5625rem, 0.36rem + 1vw, 1.125rem);
  --space-xs-s: clamp(0.875rem, 0.65rem + 1.11vw, 1.5rem);
  --space-s-m: clamp(1.125rem, 0.71rem + 2vw, 2.25rem);
  --space-m-l: clamp(1.6875rem, 1.21rem + 2.33vw, 3rem);
  --space-l-xl: clamp(2.25rem, 1.42rem + 4vw, 4.5rem);
  --space-xl-2xl: clamp(3.375rem, 2.41rem + 4.67vw, 6rem);
  --space-2xl-3xl: clamp(4.5rem, 2.85rem + 8vw, 9rem);
  --space-3xl-4xl: clamp(6.75rem, 4.83rem + 9.33vw, 12rem);
  --space-s-l: clamp(1.125rem, 0.44rem + 3.33vw, 3rem);
  --space-s-xl: clamp(1.125rem, -0.11rem + 6vw, 4.5rem);

  /* SIZING */
  --size-step-00: clamp(0.9375rem, 0.91rem + 0.11vw, 1rem);
  --size-step-0: clamp(1.125rem, 1.08rem + 0.22vw, 1.25rem);
  --size-step-1: clamp(1.35rem, 1.27rem + 0.38vw, 1.5625rem);
  --size-step-2: clamp(1.62rem, 1.5rem + 0.59vw, 1.953125rem);
  --size-step-3: clamp(1.94375rem, 1.76rem + 0.88vw, 2.44125rem);
  --size-step-4: clamp(2.44125rem, 2.22rem + 1.09vw, 3.051875rem);
  --size-step-5: clamp(2.799375rem, 2.43rem + 1.81vw, 3.815rem);
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Press Start 2P', system-ui;
}
body {
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  padding: 1rem;
  background: var(--color-white);
  color: var(--color-black);
  height: 100vh;
}
#app {
  display: grid;
  height: calc(100vh - 2rem);
  grid-template-rows: 6fr 5rem;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  align-self: end;
}
h1,
h2,
h3 {
  margin-bottom: 0.5em;
}
ul {
  list-style: none;
  margin-bottom: 1em;
  li {
    color: var(--color-g06);
    margin-bottom: 1em;
  }
  em {
    color: var(--color-black);
  }
}
button {
  font: inherit;
}
.red {
  --color: var(--color-red);
}
.orange {
  --color: var(--color-orange);
}
.green {
  --color: var(--color-green);
}
.lime {
  --color: var(--color-lime);
}
.teal {
  --color: var(--color-teal);
}
.blue {
  --color: var(--color-blue);
}
.purple {
  --color: var(--color-purple);
}
.pink {
  --color: var(--color-pink);
}

a {
  color: var(--color-red);
}

button {
  background: red;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  color: var(--color-white);
  box-shadow:
    0 0px 0 0 var(--color-red),
    0 4px 0 0 var(--color-black);
  text-shadow: 0px 2px 0 var(--color-black);
  text-decoration: none;
  margin: 1em auto;
  cursor: pointer;
  &:hover {
    background: var(--color-orange);
  }
  &:focus {
    color: var(--color-yellow);
  }
}

textarea {
  padding: 1em 1.5em;
  line-height: 1.5;
  width: 100%;
}
</style>
