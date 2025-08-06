<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Placeholder',
    required: true
  },
  bgColor: {
    type: String,
    default: 'blue'
  },
  icon: {
    type: String,
    default: 'solar:folder-bold'
  },
  iconColor: {
    type: String,
    default: 'white'
  }
})
</script>

<template>
<div class="service-pill w-max pseudo-border flex flex-row items-center gap-x-2 bg-white rounded-full justify-center pl-1 pr-5 py-1 z-10">
    <div class="icon rounded-full flex justify-center items-center" :style="{'background-color': bgColor}">
        <Icon :icon="icon" height="17" width="17" :style="{'color': iconColor}"/>
    </div>
    <p class="text-black">{{ text }}</p>
</div>
</template>

<style scoped>
.service-pill {
    position: absolute !important;
}

.icon {
    width: 30px;
    aspect-ratio: 1 / 1;
}

.pseudo-border::after{
  border-radius: 1000px;
  background-color: rgba(255, 255, 255, 0.4);
}
</style>