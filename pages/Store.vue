<script setup lang="ts">
const counterStore = useCounterStore();
</script>

<template>
  <div>
    <button
      btn-primary
      @click="counterStore.incrementCounter"
    >
      count is: {{ counterStore.counter }}
    </button>
  </div>
</template>

