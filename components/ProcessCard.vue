<script setup>
const props = defineProps({
  number: {
    type: String,
    default: 'Number',
  },
  title: {
    type: String,
    default: 'Title'
  },
  description: {
    type: String,
    default: 'Description of the process step goes here.'
  }
})
</script>

<template>
    <div class="pseudo-border flex flex-col justify-between items-start bg-white py-6 px-10 w-full h-[430px]">
        <h2 class="text-6xl">{{ number }}</h2>
        <div class="flex flex-col gap-y-2 items-start w-4/5">
            <h3 class="text-xl">{{ title }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>