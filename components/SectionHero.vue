<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import SeeRecentWorkButton from './SeeRecentWorkButton.vue';

const stackedImg = useTemplateRef('scroller-child');

onMounted(() => {
    const clone = stackedImg.value.cloneNode(true);
    stackedImg.value.parentNode.appendChild(clone);

    const scrollerParent = stackedImg.value.parentNode;
    const height = scrollerParent.offsetHeight;

    gsap.to(".left-scroller-child", {
    y: -height,
    duration: 7,
    repeat: -1,
    ease: "none"
    });
});
</script>

<template>
    <section class="m-10" style="height: 200vh;">
        <div class="pseudo-border relative">
            <SeeRecentWorkButton />
            <div class="gradient"></div>
            <div class="overflow-hidden rounded-2xl px-12 gap-6 bg-gray-600 flex flex-row justify-evenly items-center h-screen">
                <div class="scroller-parent w-full flex flex-col gap-6 h-full">
                    <div ref="scroller-child" class="left-scroller-child h-full flex flex-col gap-6 w-full">
                        <div class="work-image-container"><img decoding="async" src="https://framerusercontent.com/images/wo0P2ApHuac8yCSOoIU4GYSCkOc.png" alt=""/></div>
                        <div class="work-image-container"><img decoding="async" src="https://framerusercontent.com/images/9nNEv94U4EwW3ZkcswuOBMt2jk.jpg" alt=""/></div>
                        <div class="work-image-container"><img decoding="async" src="https://framerusercontent.com/images/cpbJvQoTTkomFOd8RSNsHF3b8.jpg" alt=""/></div>
                    </div>
                </div>
                <div class="w-full flex flex-col gap-6 h-full">
                    <div class="left-scroller-child h-full flex flex-col gap-6 w-full">
                        <div class="work-image-container"><img decoding="async" src="https://framerusercontent.com/images/wo0P2ApHuac8yCSOoIU4GYSCkOc.png" alt=""/></div>
                        <div class="work-image-container"><img decoding="async" src="https://framerusercontent.com/images/9nNEv94U4EwW3ZkcswuOBMt2jk.jpg" alt=""/></div>
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
    height: 60%; 
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
    background: linear-gradient(180deg,var(rgb(38, 38, 38), #2b2b2b) 0%,rgba(43,43,43,0) 100%);
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
