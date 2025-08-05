<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Unlimited design requests'
    },
})
</script>

<template>
    <div class="flex flex-row gap-4 items-center">
        <Icon icon="hugeicons:plus-sign-circle" height="20" width="20" />
        <p>{{ text }}</p>
    </div>
</template>