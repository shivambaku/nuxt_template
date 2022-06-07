<script setup lang="ts">
import type { Character } from '~~/interfaces';

const { data: characters, pending, error, refresh } = await useFetch<Character[]>(
  () => 'https://rickandmortyapi.com/api/character', {
    transform: (response: any) => response.results,
  },
);
</script>

<template>
  <p v-if="error">
    {{ error }}
  </p>
  <p v-if="pending">
    Loading
  </p>
  <template v-else>
    {{ characters[0] }}
  </template>
</template>
