// plugins/gsap.client.ts
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother)
  }

  return {
    provide: {
      gsap,
      SplitText,
      ScrollTrigger,
      ScrollSmoother
    },
  }
})