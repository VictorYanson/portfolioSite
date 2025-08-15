<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
const { $gsap } = useNuxtApp()

let leftAnimation
let rightAnimation

onMounted(() => {
    const leftContent = document.querySelector('.left-scroller-child')
    const rightContent = document.querySelector('.right-scroller-child')

    leftContent.innerHTML += leftContent.innerHTML
    rightContent.innerHTML += rightContent.innerHTML

    const leftScrollDistance = (leftContent.scrollHeight / 2) + 10
    const rightScrollDistance = (rightContent.scrollHeight / 2) + 10

    leftAnimation = $gsap.to(leftContent, {
        y: -leftScrollDistance,
        duration: 13,
        ease: "none",
        repeat: -1
    })

    rightAnimation = $gsap.to(rightContent, {
        y: -rightScrollDistance,
        duration: 15,
        ease: "none",
        repeat: -1
    })
})

onBeforeUnmount(() => {
  leftAnimation?.kill()
  rightAnimation?.kill()
})
</script>

<template>
    <section class="flex justify-center">
        <div class="pseudo-border relative responsive-content">
            <SeeRecentWorkButton />
            <div class="gradient"></div>
            <div class="inner-container overflow-hidden bg-[#262626] rounded-2xl px-[30px] gap-[25px] flex flex-row justify-evenly items-center h-screen">
                <div class="scroller-parent w-full flex flex-col gap-[20px] h-full">
                    <div ref="el" class="left-scroller-child h-full flex flex-col gap-[20px] w-full">
                        <div class="work-image-container"><img decoding="async" src="../assets/media/pulse_primary.png" alt=""/></div>
                        <div class="work-image-container"><img decoding="async" src="https://framerusercontent.com/images/9nNEv94U4EwW3ZkcswuOBMt2jk.jpg" alt=""/></div>
                        <div class="work-image-container"><img decoding="async" src="https://framerusercontent.com/images/cpbJvQoTTkomFOd8RSNsHF3b8.jpg" alt=""/></div>
                    </div>
                </div>
                <div class="scroller-parent w-full flex flex-col h-full hidden md:flex">
                    <div class="right-scroller-child h-full flex flex-col gap-[20px] w-full">
                        <div class="work-image-container"><img decoding="async" src="https://framerusercontent.com/images/J4Ox47KYv4g8Lb2C0PXNkjDaA.jpg" alt=""/></div>
                        <div class="work-image-container"><img decoding="async" src="https://framerusercontent.com/images/TWgBR6dpy8VfcVcGIy2oyBYzyY.jpg" alt=""/></div>
                        <div class="work-image-container"><img decoding="async" src="https://framerusercontent.com/images/cpbJvQoTTkomFOd8RSNsHF3b8.jpg" alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.work-image-container {
    width: 100%;
    height: 350px;
}

.work-image-container img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    border-radius: 15px; 
    object-position: center center;
    object-fit: cover;
}

.gradient {
    background: linear-gradient(180deg,rgb(38, 38, 38) 0%,rgba(38, 38, 38,0) 100%);
    border-radius: inherit;
    flex: none;
    z-index: 5;
    gap: 10px;
    height: 75%;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
}
</style>