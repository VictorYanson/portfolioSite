// plugins/gsap.client.ts
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother, DrawSVGPlugin)
  }

  return {
    provide: {
      gsap,
      SplitText,
      ScrollTrigger,
      ScrollSmoother,
      DrawSVGPlugin
    },
  }
})