export default defineNuxtConfig({
  app: {
    head: {
      title: '3DM-Mod-Comment',
      meta: [{ name: 'description', content: 'A comment system built with Nuxt 3 and Pinia' }]
    }
  },

  modules: [
    '@pinia/nuxt'
  ],

  css: [
    '@/assets/styles.css'
  ],

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate']
  },

  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3000/api'
    }
  },

  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },

  compatibilityDate: '2025-01-31',
});