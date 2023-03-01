<script setup>
import { useKeyBuilder } from '@helpers/useKeyBuilder.js';

defineProps({
  important: { type: Boolean, default: false },
  tags: { type: Array },
});

const keyBuilder = useKeyBuilder();
</script>
<template>
  <ul :class="['tags', {'tags--important': important}]">
    <li
      v-for="tag in tags"
      :key="keyBuilder(tag)"
      class="tags_item"
    >{{ tag }}</li>
  </ul>
</template>
<style>
.tags {
  position: relative;
  display: flex;
  padding: 0;
  list-style: none;
  overflow: hidden;
  padding-right: 20px;
}
.tags:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 20px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0%) 0%,
    rgba(255, 255, 255, 100%) 100%
  );
}
.tags_item {
  color: var(--color-second-text);
  font-size: 11px;
  white-space: nowrap;
}
.tags_item:not(:last-child):after {
  content: ',\20';
  white-space: pre;
}
.tags.tags--important .tags_item {
  color: var(--color-important-text);
}
</style>