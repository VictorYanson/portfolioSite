<script setup>
import { onMounted } from 'vue';
const { $gsap, $SplitText } = useNuxtApp()

onMounted(() => {
    // Split Text Animation
    const splitText = new $SplitText(".intro-paragraph", { type: "words" })

    $gsap.from(splitText.words, {
        duration: 0.4,
        y: 30,
        filter: "blur(20px)",
        opacity: 0,
        stagger: 0.05,
        ease: "power2.out"
    });
    
    $gsap.utils.toArray('.fade-up').forEach(container => {
    $gsap.from(container, {
        duration: 1,
        y: -5,
        opacity: 0.3,
        scrollTrigger: {
            trigger: container,
            start: 'top 80%',
        }
    });
    });
});

const props = defineProps({
    title: {
        type: String,
        default: 'Strida'
    },
    tag1: {
        type: String,
        default: 'portfolio'
    },
    tag2: {
        type: String,
        default: 'sidebar'
    },
    description: {
        type: String,
        default: 'Strida offers a smooth and powerful experience when presenting your work in a full-screen format. It combines bold Swiss typography, smooth animations, sidebar navigations, flexible CMS — everything to make your portfolio rock.'
    },
    stack: {
        type: String,
        default: 'framer'
    },
    timeline: {
        type: String,
        default: '3 weeks'
    },
    img1: {
        type: String,
        default: 'https://framerusercontent.com/images/aLickQcDkn7JlTftxkq33tHE.jpg'
    },
    img2: {
        type: String,
        default: 'https://framerusercontent.com/images/aLickQcDkn7JlTftxkq33tHE.jpg'
    },
    img3: {
        type: String,
        default: 'https://framerusercontent.com/images/aLickQcDkn7JlTftxkq33tHE.jpg'
    },
    img4: {
        type: String,
        default: 'https://framerusercontent.com/images/aLickQcDkn7JlTftxkq33tHE.jpg'
    }
})
</script>

<template>
    <section class="flex justify-center py-[100px]">
        <div class="w-full flex flex-col gap-y-10 responsive-content !items-end">
            <div class="w-full md:max-w-[1000px] flex flex-col gap-y-10 items-start">
                <div class="w-full flex flex-col gap-y-4 items-start md:flex-row md:items-center justify-between">
                    <h2>{{ title }}</h2>
                    <div class="flex flex-row gap-2">
                        <div class="tag"><p>{{ tag1 }}</p></div>
                        <div class="tag"><p>{{ tag2 }}</p></div>
                    </div>
                </div>
                <p class="intro-paragraph md:w-3/5 md:text-[80px]">{{ description }}</p>
            </div>
            <div class="img-container fade-up">
                <img :src="img1" alt="">
            </div>
            <div class="flex flex-col md:flex-row gap-y-[30px] w-full justify-between">
                <div class="fade-up flex flex-col gap-y-1">
                    <h3>Stack</h3>
                    <p>{{ stack }}</p>
                </div>
                <div class="fade-up flex flex-col gap-y-1">
                    <h3>Timeline</h3>
                    <p>{{ timeline }}</p>
                </div>
            </div>
            <div class="img-container fade-up">
                <img :src="img2" alt="">
            </div>
            <div class="img-container fade-up">
                <img :src="img3" alt="">
            </div>
            <div class="img-container">
                <img :src="img4" alt="">
            </div>
        </div>
    </section>
</template>

<style scoped>
h3 {
    font-family: "Instrument Serif", serif;
    font-style: italic;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: var(--italic-heading-color);
}

p {
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    color: black;
}

.tag p {
  font-size: 14px;
  font-weight: 400;
  color: var(--color-black-50);
  line-height: 25px;
}

.tag {
    background-color: #ffffff;
    padding: 2px 10px;
    border-radius: 100px;
}

.img-container img {
    aspect-ratio: 4 / 3;
    border-radius: 25px;
    border: solid 1px #f7f7f7;
    overflow: hidden;
}

.img-container {
    width: 100%;
}
</style>