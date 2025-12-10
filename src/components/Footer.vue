<template>
  <div class="footer">
    Created with
    <svg viewBox="0 0 5 5">
      <rect x=".75" y="0" width="1.5" height="1" />
      <rect x="2.75" y="0" width="1.5" height="1" />
      <rect x="0" y="1" width="5" height="1" />
      <rect x="0" y="2" width="5" height="1" />
      <rect x="1" y="3" width="3" height="1" />
      <rect x="2" y="4" width="1" height="1" />
    </svg>
    by <a href="https://bsky.app/profile/davidfitz.dev" target="_blank">David Fitzgibbon</a>
  </div>
</template>

<style scoped>
.footer {
  text-align: center;
  padding-top: 1em;
  margin-top: 1em;

  border-top: 1px solid var(--color-g05);
}
svg {
  height: 1em;
}
rect {
  fill: var(--color-red);
}
</style>
