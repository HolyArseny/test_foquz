import { getCurrentInstance } from 'vue';

export const useKeyBuilder = () => (key) => `${getCurrentInstance().uid}-${key}`;