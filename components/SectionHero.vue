<script setup>
import { onMounted } from 'vue'
// import { gsap } from 'gsap'

const stackedImg = useTemplateRef('scroller-child');

onMounted(() => {
    const clone = stackedImg.value.cloneNode(true);
    stackedImg.value.parentNode.appendChild(clone);

    const scrollerParent = stackedImg.value.parentNode;
    const height = scrollerParent.offsetHeight;

    // gsap.to(".left-scroller-child", {
    // y: -height,
    // duration: 7,
    // repeat: -1,
    // ease: "none"
    // });
});
</script>

<template>
    <section class="flex justify-center">
        <div class="pseudo-border relative responsive-content">
            <SeeRecentWorkButton />
            <div class="gradient"></div>
            <div class="inner-container overflow-hidden bg-gray-800 rounded-2xl px-[30px] gap-[25px] flex flex-row justify-evenly items-center h-screen">
                <div class="scroller-parent w-full flex flex-col gap-[20px] h-full">
                    <div ref="scroller-child" class="left-scroller-child h-full flex flex-col gap-[20px] w-full">
                        <div class="work-image-container"><img decoding="async" src="https://framerusercontent.com/images/wo0P2ApHuac8yCSOoIU4GYSCkOc.png" alt=""/></div>
                        <div class="work-image-container"><img decoding="async" src="https://framerusercontent.com/images/9nNEv94U4EwW3ZkcswuOBMt2jk.jpg" alt=""/></div>
                        <div class="work-image-container"><img decoding="async" src="https://framerusercontent.com/images/cpbJvQoTTkomFOd8RSNsHF3b8.jpg" alt=""/></div>
                    </div>
                </div>
                <div class="w-full flex flex-col gap-[20px] h-full hidden md:flex">
                    <div class="left-scroller-child h-full flex flex-col gap-[20px] w-full">
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
    background: linear-gradient(180deg,rgb(31, 41, 55) 0%,rgba(31, 41, 55,0) 100%);
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
