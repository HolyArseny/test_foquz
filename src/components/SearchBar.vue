<script setup>
import IconButton from '@components/buttons/IconButton.vue';
import CrossIcon from '@components/icons/CrossIcon.vue';
import debounce from 'lodash.debounce'
import { reactive, watch } from 'vue';

const form = reactive({ search: '' });
const emit = defineEmits(['input']);

watch(form, debounce(() => {
  emit('input', form.search);
}, 200));

const removeSearch = () => form.search = '';
</script>

<template>
  <div class="search-bar">
    <label for="search" class="search-bar_icon"><img src="@assets/icons/search.svg" alt="Поиск"></label>
    <input v-model="form.search" name="search" id="search" type="text" class="search-bar_input">
    <IconButton
      v-show="form.search"
      @click="removeSearch"
      :appearanceTransition="true"
    >
      <CrossIcon />
    </IconButton>
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  height: 30px;
  border-bottom: 1px solid var(--color-border-03);
  transition: border-color var(--transition);
}
.search-bar:focus-within {
  border-color: var(--color-hover);
}
.search-bar_icon {
  cursor: text;
}
.search-bar_input {
  outline: none;
  width: 100%;
  height: 100%;
  padding: 0 12px 12px;
  border: none;
}
</style>