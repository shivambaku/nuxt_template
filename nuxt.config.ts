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
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [
      {
        'btn': 'py-2 px-4 font-semibold rounded',
        'btn-primary': 'btn text-white bg-blue-500 hover:bg-blue-700',
      },
    ],
    rules: [],
  },
  build: {
    transpile: [
      'naive-ui',
      'vueuc',
      '@css-render/vue3-ssr',
      '@juggle/resize-observer',
    ],
  },
  vite: {
    optimizeDeps: {
      include: ['date-fns-tz/esm/formatInTimeZone'],
    },
  },
  ssr: false,
});
