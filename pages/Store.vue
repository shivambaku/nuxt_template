<script setup lang="ts">
const counterStore = useCounterStore();
</script>

<template>
  <div>
    <button
      @click="counterStore.incrementCounter"
    >
      count is: {{ counterStore.counter }}
    </button>
  </div>
</template>

