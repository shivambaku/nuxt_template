import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counterStore', () => {
  const counter = ref(0);

  const incrementCounter = () => {
    counter.value += 1;
  };

  return {
    counter,
    incrementCounter,
  };
});

