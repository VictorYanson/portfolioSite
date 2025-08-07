<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Freelance Practice',
    },
    company: {
        type: String,
        default: 'Hanzo Co.'
    },
    dates: {
        type: String,
        default: '2011  →  Now'
    }
})
</script>

<template>
    <div class="w-full flex flex-row justify-between items-center py-4 border-b border-[#bfbfbf]">
        <div class="w-[58%] flex flex-row justify-between items-center">
            <p class="text-xs text-black">{{ title }}</p>
            <p class="text-xs">{{ company }}</p>
        </div>
        <p class="text-xs text-black">{{ dates }}</p>
    </div>
</template>