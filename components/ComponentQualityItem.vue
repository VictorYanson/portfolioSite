<script setup>
const props = defineProps({
    icon: {
        type: String,
        default: 'hugeicons:smart-phone-01'
    },
    text: {
        type: String,
        default: 'Senior Level Quality'
    }
})
</script>

<template>
    <div class="flex flex-row gap-3 items-center z-10">
        <Icon :icon="icon" width="23" height="23" style="color: gray;"/>
        <p class="text-base" style="color: gray;">{{ text }}</p>
        <hr class="flex-grow border-solid border-1" style="border-color: #b0b0b0;">
    </div>
</template>