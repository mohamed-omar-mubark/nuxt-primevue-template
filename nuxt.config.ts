// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    //theme
    "primevue/resources/themes/lara-light-indigo/theme.css",

    //core
    "primevue/resources/primevue.min.css",

    //icons
    "primeicons/primeicons.css",
  ],
  build: {
    transpile: ["primevue"],
  },
});
