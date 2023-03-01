<script setup>
const props = defineProps({
  appearanceTransition: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(['click']);
const emitClick = (event) => {
  if (props.disabled) return;
  emit('click', event);
};
</script>

<template>
  <Transition>
    <button
      @click="emitClick"
      :class="[
        'icon-button',
        { 'icon-button--transition': appearanceTransition },
        { 'icon-button--disabled': disabled }
      ]"
      :disabled="disabled"
    >
      <slot />
    </button>
  </Transition>
</template>

<style>
.icon-button {
  display: inline-flex;
  padding: 0;
  border: none;
  background-color: transparent;
  width: fit-content;
  cursor: pointer;
}
.icon-button.icon-button--disabled {
  opacity: 0.5;
  cursor: default;
}

/* conditional appearance transition */
.icon-button--transition.v-enter-active,
.icon-button--transition.v-leave-active {
  transition: opacity var(--transition);
}
.icon-button--transition.v-enter-from,
.icon-button--transition.v-leave-to {
  opacity: 0;
}
</style>