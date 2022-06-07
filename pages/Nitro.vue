<script setup lang="ts">
const { data: hello } = await useFetch('api/hello');
</script>

<template>
  <div>
    {{ hello }}
  </div>
</template>

