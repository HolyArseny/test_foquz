<script setup>
import HeaderBar from '@components/HeaderBar.vue';
import SearchBar from '@components/SearchBar.vue';
import DocumentsList from '@components/documents/DocumentsList.vue';
import { useDocumentsStore } from '@stores/documents.js';
import { provide } from 'vue';

const store = useDocumentsStore();
const searchDocs = (value) => store.setFilter({ key: 'q', value });

provide('setSections', (list) => store.setSections(list));
provide('setChildren', (list) => store.setDocuments(list));

store.fetchSections();
store.fetchDocuments();
</script>

<template>
  <main class="app">
    <HeaderBar title="Документы" class="app_header"/>
    <div class="app_search-bar"><SearchBar @input="searchDocs"/></div>
    <DocumentsList :list="store.sections" class="app_list" />
    <DocumentsList
      :list="store.documents"
      parentGroup="document"
      class="app_list app_list--docs"
    />
  </main>
</template>

<style scoped>
.app_header {
  margin-bottom: 22px;
}
.app_search-bar {
  margin-bottom: 20px;
  max-width: 564px;
}
.app_list + .app_list {
  margin-top: 14px;
}
.app_list--docs {
  min-height: 30px;
}
</style>
