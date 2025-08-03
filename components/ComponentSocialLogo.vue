<script setup>
const props = defineProps({
    link: {
        type: String,
        default: '#',
    },
    icon: {
        type: String,
        default: 'meteor-icons:at'
    }
})
</script>

<template>
    <a style="z-index: 1000; cursor: pointer;" :href="link">
        <div class="social-button rounded-full flex justify-center items-center p-2 border">
            <Icon class="icon" :icon="icon" width="20" height="20" style="color: rgb(255, 255, 255, 0.3); transition: color 0.3s ease-in-out;" />
        </div>
    </a>
</template>

<style scoped>
.social-button {
    border-color: rgb(255, 255, 255, 0.4);
    transition: all 0.3s ease-in-out;
}

.social-button:hover {
    border-color: white;
}

.social-button:hover .icon {
    color: white !important;
}
</style>