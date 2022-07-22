import { defineNuxtConfig } from 'nuxt';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
  unocss: {
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
  },
  vite: {
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
  },
  ssr: false,
});
