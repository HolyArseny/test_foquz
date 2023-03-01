<script setup>
import IconButton from '@components/buttons/IconButton.vue';
import CommonButton from '@components/buttons/CommonButton.vue';
import BookmarkIcon from '@components/icons/BookmarkIcon.vue';
import PlusIcon from '@components/icons/PlusIcon.vue';

defineProps({
  title: { type: String, required: true },
});

const addBookmark = (event) => console.log('Add bookmark', event);
const addType = (event) => console.log('Add bookmark', event);
const addDocument = (event) => console.log('Add bookmark', event);
</script>

<template>
  <header class="header-bar">
    <h1 class="header-bar_head">{{ title }}</h1>
    <nav class="header-bar_nav">
      <IconButton @click="addBookmark">
        <BookmarkIcon />
      </IconButton>
      <CommonButton @click="addType" name="Новый тип">
        <PlusIcon />
      </CommonButton>
      <CommonButton @click="addDocument" name="Новый документ">
        <PlusIcon />
      </CommonButton>
    </nav>
  </header>
</template>
<style scoped>
.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-bar_head {
  margin-right: var(--gap-01);
  font-size: 22px;
  font-weight: 500;
}
.header-bar_nav {
  display: flex;
  align-items: center;
  gap: var(--gap-01);
}
</style>