<script setup>
import { useKeyBuilder } from '@helpers/useKeyBuilder.js';

defineProps({
  markers: { type: Array },
});

const keyBuilder = useKeyBuilder();
const bgColor = (color) => `background-color: ${color};`;
</script>

<template>
  <ul class="markers">
      <li
        v-for="marker in markers"
        :key="keyBuilder(marker)"
        :style="bgColor(marker)"
        class="markers_item"
      />
    </ul>
</template>

<style scoped>
.markers {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  list-style: none;
}
.markers_item {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
</style>