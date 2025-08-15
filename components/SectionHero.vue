<script setup>
import { onMounted } from 'vue'
const { $gsap, $SplitText, $ScrollTrigger } = useNuxtApp()

onMounted(() => {
    $gsap.registerPlugin($ScrollTrigger);

    const splitText = new $SplitText(".hero-heading h1", { type: "chars" })
    const tl = $gsap.timeline();

    tl.from(splitText.chars, {
        duration: 1,
        y: 30,
        filter: "blur(20px)",
        opacity: 0,
        stagger: 0.05,
        ease: "power2.out"
    })
    .from(".fade-up", { opacity: 0, y: 100, duration: 1, ease: "power2.out" }, "<")
    .from(".fade-in", { opacity: 0, duration: 1.7, ease: "power2.out" }, "<")
    .from(".hero-image-container", { opacity: 0, y: -50, duration: 2, rotation: -15, ease: "power2.out" }, "<");
})
</script>

<template>
    <section class="flex justify-center">
        <div class="responsive-content pt-[180px] pb-[75px] flex-col gap-y-8">
            <div class="fade-in flex flex-row rounded-[100px] items-center bg-white pr-4 pl-3 py-2 gap-x-2">
                <Icon icon="icon-park-outline:dot" style="color: #0cb300;"/>
                <p class="text-black">Booking Open — 2 Spots Left</p>
            </div>
            <div class="hero-heading flex gap-x-6 justify-center items-center flex-wrap max-w-[450px] md:max-w-[900px] break-words">
                <h1>Full-Stack</h1>
                <div class="hero-image-container -rotate-2">
                    <div class="scroll-container-1 h-full w-full flex flex-col">
                        <img class="w-full h-full object-cover flex-shrink-0" src="https://framerusercontent.com/images/jSslhcqo8HKNjUvPEceq7bhbY.jpg" alt="">
                        <img class="w-full h-full object-cover flex-shrink-0" src="https://framerusercontent.com/images/jSslhcqo8HKNjUvPEceq7bhbY.jpg" alt="">
                    </div>
                </div>
                <h1 class="text-[#616160]">MVPs</h1>
                <h1 class="text-[#616160]">for</h1>
                <div class="hero-image-container rotate-2">
                    <div class="scroll-container-2 h-full w-max flex flex-row">
                        <img class="object-left object-cover flex-shrink-0 h-full w-auto" src="../assets/media/scrolling_logo.svg" alt="">
                        <img class="object-left object-cover flex-shrink-0 h-full w-auto" src="../assets/media/scrolling_logo.svg" alt="">
                    </div>
                </div>
                <h1>Solid</h1>
                <h1>Startups</h1>
            </div>
            <div class="fade-in flex justify-center items-center w-full max-w-[370px]">
                <p class="text-center">
                    I help non-technical founders turn raw ideas into smart, scalable digital products, fast and business-ready.
                </p>
            </div>
            <div class="fade-up flex flex-row items-center justify-center gap-x-6">
                <MainButton text="Choose your plan" link="#"/>
                <div class="flex flex-col">
                    <div class="flex flex-row items-center ml-[8px]">
                        <div class="client-img-container">
                            <img src="https://framerusercontent.com/images/75ILrhKQhUkwU1dH15BUDezAQ.png?scale-down-to=512" alt="">
                        </div>
                        <div class="client-img-container">
                            <img src="https://framerusercontent.com/images/75ILrhKQhUkwU1dH15BUDezAQ.png?scale-down-to=512" alt="">
                        </div>
                        <div class="client-img-container">
                            <img src="https://framerusercontent.com/images/75ILrhKQhUkwU1dH15BUDezAQ.png?scale-down-to=512" alt="">
                        </div>
                        <div class="client-img-container">
                            <img src="https://framerusercontent.com/images/75ILrhKQhUkwU1dH15BUDezAQ.png?scale-down-to=512" alt="">
                        </div>
                        <div class="client-img-container">
                            <img src="https://framerusercontent.com/images/75ILrhKQhUkwU1dH15BUDezAQ.png?scale-down-to=512" alt="">
                        </div>
                    </div>
                    <p class="text-[12px]">Trusted by Leaders</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.scroll-container-1 {
  animation: vertical-scroll 5s ease-in-out infinite;
}

.scroll-container-2 {
  animation: horizontal-scroll 15s linear infinite;
}

@keyframes horizontal-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes vertical-scroll {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

.client-img-container {
    width: 31px;
    height: 31px;
    border-radius: 100%;
    overflow: hidden;
    border: solid 2px var(--color-white);
    margin-left: -9px;
}

.hero-image-container {
    background-color: var(--color-bright-red);
    width: 130px;
    height: 110px;
    overflow: hidden;
    border-radius: 30px;
    border: solid 3px var(--color-black);
    box-shadow: .5652735987142659px .5652735987142659px .7994175897531614px -.7083333333333333px #00000080,1.4452495242585428px 1.4452495242585428px 2.0438914782196944px -1.4166666666666665px #0000007a,2.8974073717254214px 2.8974073717254214px 4.097552800813874px -2.125px #00000075,5.492479927784297px 5.492479927784297px 7.76753960493455px -2.833333333333333px #00000069,10.917409129219594px 10.917409129219594px 15.439548056518191px -3.541666666666667px #00000052,24px 24px 33.94112549695428px -4.25px #00000017;
}

@media (max-width: 767px) {
  .hero-image-container {
    max-width: 86px;
    max-height: 60px;
    border-radius: 20px;
  }

  .hero-heading {
    gap: 12px;
  }
}
</style>