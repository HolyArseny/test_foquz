import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import service from '@services/documents.js';

export const useDocumentsStore = defineStore('documents', () => {
  const filter = reactive({ q: '' });
  const state = reactive({ sections: [], documents: [] });

  const filterBy = (list) => {
    if (!list) return [];
    return list.filter(({ name, children }) => {
      const lowerCasedQuery = filter.q.toLowerCase();
      const lowerCasedName = name.toLowerCase();
      if (lowerCasedName.startsWith(lowerCasedQuery)) return true;
      const filteredChildren = filterBy(children);
      return filteredChildren.length > 0;
    });
  };

  const documents = computed(() => filterBy(state.documents));
  const sections = computed(() => filterBy(state.sections));

  const setFilter = ({ key, value }) => filter[key] = value;
  const setSections = (value) => state.sections = value;
  const setDocuments = (value) => state.documents = value;

  const fetchSections = async () => {
    const data = await service.getSections();
    setSections(data);
  };

  const fetchDocuments = async () => {
    const data = await service.getDocuments();
    setDocuments(data);
  };

  return {
    documents,
    sections,
    setFilter,
    setSections,
    setDocuments,
    fetchSections,
    fetchDocuments
  };
});
