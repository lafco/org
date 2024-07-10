// https://nuxt.com/docs/api/configuration/nuxt-config
// import const from './constants'

export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", '@nuxt/test-utils/module', "@nuxt/eslint", "@nuxtjs/i18n"],
  runtimeConfig: {
    spoonacularApiKey: process.env.NUXT_SPOONACULAR_API_KEY
  },
  $development: {
    nitro: {
      storage: {
        recipes: {
          driver: 'fs',
          base: 'recipes'
        }
      }
    }
  },
  i18n: {
    locales: [
      { code: 'pt', iso: 'pt-BR', name: 'Portuguese', file: 'pt.ts' },
      { code: 'en', iso: 'en-UK', name: 'English', file: 'en.ts' }
    ],
    langDir: 'lang',
    lazy: true,
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    defaultLocale: 'en'
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  eslint: {
    config: {
      stylistic: true
    }
  }
})
