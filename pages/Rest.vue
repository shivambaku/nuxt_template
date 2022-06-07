<script setup lang="ts">
import {
  NDataTable,
} from 'naive-ui';

import type { Character } from '~~/interfaces';

const { data: characters, pending, error, refresh } = await useFetch<Character[]>(
  () => 'https://rickandmortyapi.com/api/character', {
    transform: (response: any) => response.results,
  },
);

const columns = [
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Status',
    key: 'status',
  },
  {
    title: 'Gender',
    key: 'gender',
  },
];

const pagination = {
  pageSize: 5,
};
</script>

<template>
  <div>
    <p v-if="error">
      {{ error }}
    </p>
    <p v-if="pending">
      Loading
    </p>
    <template v-else>
      <NDataTable
        pl10 pr10
        :columns="columns"
        :data="characters"
        :pagination="pagination"
      />
    </template>
  </div>
</template>
