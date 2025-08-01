<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Strida'
    },
    link: {
        type: String,
        default: '#'
    },
    imglink: {
        type: String,
        default: 'https://framerusercontent.com/images/aLickQcDkn7JlTftxkq33tHE.jpg'
    },
    tag1: {
        type: String,
        default: 'portfolio'
    },
    tag2: {
        type: String,
        default: 'sidebar'
    },
})
</script>

<template>
    <div class="element-case-study h-full w-full flex-col items-center cursor-pointer">
        <a :href="link">
            <div class="aspect-[4/3] rounded-[25px] border border-gray-100 overflow-hidden mb-2">
                <img class="transition-all duration-500" :src="imglink" alt="">
            </div>
            <div class="flex flex-row w-full justify-between items-center">
                <p class="project-title text-gray-500 text-lg transition-colors duration-300">{{ text }}</p>
                <div class="tags-wrapper flex flex-row gap-1">
                    <div class="tag"><p>{{ tag1 }}</p></div>
                    <div class="tag"><p>{{ tag2 }}</p></div>
                </div>
            </div>
        </a>
    </div>
</template>

<style scoped>
.element-case-study:hover img {
    scale: 1.03;
}

.element-case-study:hover .project-title {
    color: var(--color-black);
}

.tag {
    background-color: #f0f0f0;
    padding: 2px 10px;
    border-radius: 100px;
}
</style>