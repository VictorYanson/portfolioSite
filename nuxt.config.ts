// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'; 

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    head: {
      title: 'NullOne Labs',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon-120x120.png' }
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  devtools: { enabled: false },
  css: [
  '~/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module'
  ]
})