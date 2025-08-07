<script setup>
import gsap from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
    gsap.to('.loading-screen', {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            document.querySelector('.loading-screen').style.display = 'none'
        }
    })
})
</script>

<template>
    <div class="loading-screen z-[10000] h-screen w-screen bg-gray-100 fixed top-0 left-0 pointer-events-none"></div>
</template>