import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const counter = ref(0);

  const incrementCounter = () => {
    counter.value += 1;
  };

  return {
    counter,
    incrementCounter,
  };
});

