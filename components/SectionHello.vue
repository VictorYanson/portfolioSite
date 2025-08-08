<script setup>
import { onMounted } from 'vue'
const { $gsap, $scrollTrigger, } = useNuxtApp()
import { SplitText } from 'gsap/SplitText'

onMounted(() => {
  nextTick (() => {
    // Split Text Animation
    const split = new SplitText('.intro-paragraph p', { type: 'words' })

    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: ".intro-paragraph",
        start: "top 90%",
        end: "bottom 50%",
        scrub: 0.5,
        markers: false
      }
    })
    
		tl.from(split.words, {
        duration: 0.5,
        opacity: 0.2,
        stagger: 0.75,
        ease: "power2.out"
    });

    // Service Pill Animation
    const pills = $gsap.utils.toArray('.service-pill')

    $gsap.from(pills, {
      x: (i) => {
        if (i < 3) {
          return -100
        } else {
          return 100
        }
      },
      y: i => {
        if (i < 3) {
          return -100 + (i * 100)
        } else {
          return -100 + ((i - 3) * 100)
        }
      },
      opacity: 0,
      duration: 1.5,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: '.intro-paragraph',
        start: 'top 80%',
        markers: false
      }
    })
  });
})
</script>

<template>
    <section class="flex justify-center">
      <div class="responsive-content relative flex-col pt-[180px] pb-48 gap-y-10">
        <div class="bg-rays"></div>
        <h3 class="italic-heading">Hello!</h3>
        <ServicePill class="p1" style="left: 25px; top: 250px; transform: rotate(2deg);" text="AI Solutions" bgColor="rgb(255, 94, 0)" icon="mingcute:ai-fill" iconColor="rgb(255, 243, 194)" />
        <ServicePill class="p2" style="left: 25px; top: 350px; transform: rotate(1deg);" text="Web Dev" bgColor="rgb(71, 71, 71)" icon="lucide:app-window-mac" iconColor="rgb(186, 255, 208)" />
        <ServicePill class="p3" style="left: 25px; top: 450px; transform: rotate(-2deg);" text="Databases" bgColor="rgb(5, 169, 255)" icon="streamline-sharp:database" iconColor="rgb(248, 255, 191)" />
        <ServicePill class="p4" style="right: 25px; top: 250px; transform: rotate(-3deg);" text="Automation" bgColor="rgb(82, 255, 105)" icon="fluent:flow-sparkle-16-filled" iconColor="rgb(50, 36, 255)" />
        <ServicePill class="p5" style="right: 25px; top: 350px; transform: rotate(-1deg);" text="Mobile Apps" bgColor="rgb(255, 69, 171)" icon="hugeicons:source-code" iconColor="rgb(201, 255, 251)" />
        <ServicePill class="p6" style="right: 25px; top: 450px; transform: rotate(3deg);" text="Strategy" bgColor="rgb(255, 213, 0)" icon="hugeicons:strategy" iconColor="rgb(102, 0, 128)" />
        <div class="intro-paragraph">
            <p>We help startups and enterprise to establish an emotional connection between their products and happy engaged customers</p>
        </div>
      </div>
    </section>
</template>

<style scoped>
.intro-paragraph p {
  font-size: 44px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4em;
  color: var(--color-black);
  text-align: center;
}

.intro-paragraph {
  width: 100%;
  max-width: 800px;
  position: relative;
}

@media (max-width: 767px) {
  .intro-paragraph p {
    font-size: 28px;
    line-height: 1.4em;
    letter-spacing: -0.04em;
    font-weight: 300;
  }

  .responsive-content {
    padding-bottom: 450px;
  }
  
  .p1 {
    top: 490px !important;
    left: 15px !important;
  }

  .p2 {
    top: 570px !important;
    left: 45px !important;
  }

  .p3 {
    top: 650px !important;
    left: 35px !important;
  }

  .p4 {
    top: 650px !important;
    transform: rotate(2deg) !important;
    right: 35px !important;
  }

  .p5 {
    top: 570px !important;
    right: 35px !important;
  }

  .p6 {
    top: 490px !important;
    transform: rotate(-2deg) !important;
    right: 20px !important;
  }
}

.bg-rays {
  background: linear-gradient(
    45deg,
    #ffffff 0%,
    rgb(255, 255, 255) 10.492552236961671%,
    rgb(255, 255, 255) 20.854762210110156%,
    rgba(255, 255, 255, .5) 28.904700423212677%,
    rgb(217, 217, 217) 36.8607922063697%,
    rgb(217, 217, 217) 46.662530445121476%,
    rgba(255, 255, 255, .5) 54.232809127391455%,
    rgb(217, 217, 217) 59.631585694533726%,
    rgb(217, 217, 217) 63.429759262050034%,
    rgba(255, 255, 255, .5) 67.32177925951184%,
    rgb(255, 255, 255) 72.91867606765015%,
    rgb(217, 217, 217) 76.11988206690206%,
    rgb(255, 255, 255) 80.81220356417685%,
    rgb(217, 217, 217) 84.7224714785725%,
    rgb(217, 217, 217) 89.80581976728685%,
    rgb(217, 217, 217) 100%
  );
  flex: none;
  inset: 0;
  mask: radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0,0,0,0) 100%) add;
  overflow: hidden;
  position: absolute;
  z-index: 0;
  height: 100%;
  width: 100%;
}
</style>
