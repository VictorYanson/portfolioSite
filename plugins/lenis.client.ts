import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis()

  const raf = (time: number) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // Optional: expose lenis globally via Nuxt's provide/inject
  nuxtApp.provide('lenis', lenis)
})
