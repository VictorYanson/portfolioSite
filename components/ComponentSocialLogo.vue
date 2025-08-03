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
    <a :href="link">
        <div class="social-button rounded-full flex justify-center items-center p-2 border border-[rgb(255, 255, 255, 0.5)]">
            <Icon :icon="icon" width="20" height="20" style="color: rgb(255, 255, 255, 0.5); transition: all 0.3s ease-in-out;" />
        </div>
    </a>
</template>

<style scoped>
.social-button {
    transition: all 0.3s ease-in-out;
}

.social-button:hover {
    border-color: white;
}

.social-button:hover svg {
    color: white;
}
</style>