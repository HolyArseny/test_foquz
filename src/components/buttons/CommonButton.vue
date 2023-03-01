<script setup>
defineProps({
  name: { type: String, required: true }
});
const emit = defineEmits(['click']);
const emitClick = (event) => emit('click', event);
</script>

<template>
  <button @click="emitClick" class="common-button">
    <slot></slot>
    <span>{{ name }}</span>
  </button>
</template>

<style scoped>
.common-button {
  display: inline-flex;
  align-items: center;
  padding: 0 20px 0 10px;
  height: 30px;
  gap: var(--gap-01);
  border: 1px solid var(--color-border-02);
  border-radius: 50px;
  background-color: var(--color-background-01);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: border-color var(--transition);
}
.common-button:hover {
  border-color: var(--app-blue-01);
}
</style>