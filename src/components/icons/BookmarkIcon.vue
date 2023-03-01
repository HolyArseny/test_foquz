<script setup>
defineProps({
  fill: { type: String, default: '#fff' },
  stroke: { type: Array, default: () => ['#D3D8DF', '#8E9CBB'] },
});
</script>

<template>
  <svg class="bookmark-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" :fill="fill" :stroke="stroke[0]" />
    <path d="M20 21.8571L15 18.2857L10 21.8571V10.4286C10 10.0497 10.1505 9.68633 10.4184 9.41842C10.6863 9.15051 11.0497 9 11.4286 9H18.5714C18.9503 9 19.3137 9.15051 19.5816 9.41842C19.8495 9.68633 20 10.0497 20 10.4286V21.8571Z" :stroke="stroke[1]" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<style scoped>
.bookmark-icon rect, .bookmark-icon path {
  transition: stroke var(--transition);
}
.bookmark-icon:hover rect, .bookmark-icon:hover path {
  stroke: var(--color-hover);
}
</style>