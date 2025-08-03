<script setup>
const props = defineProps({
  bodyText: {
    type: String,
    default: 'Joris brings clarity to chaos. His design work is not only beautiful but deeply strategic. He helped us rebrand from the ground up, and our audience response has been incredible.',
    required: true
  },
  imgLink: {
    type: String,
    default: 'https://framerusercontent.com/images/GQYbkjoIOqJZo9gC9bpE4YLn18.png'
  },
  name: {
    type: String,
    default: 'Sophie Lemaire'
  },
  position: {
    type: String,
    default: 'Product Lead at Loomi'
  }
})
</script>

<template>
    <div class="flex flex-col gap-y-10 w-full py-14 md:px-14">
        <div class="flex flex-row items-start">
            <p class="w-4/5 text-black text-lg text-light leading-relaxed">{{ bodyText }}</p>
            <p class="text-7xl w-1/5 text-gray-400 flex flex-col justify-end items-end">"</p>
        </div>
        <div class="flex flex-row items-center gap-x-4">
            <div class="aspect-square w-16 rounded-full overflow-hidden">
              <img :src="imgLink" alt="">
            </div>
            <div class="flex flex-col gap-y-1 items-start">
              <p class="text-black text-base">{{ name }}</p>
              <p class="text-gray-400 text-base">{{ position }}</p>
            </div>
        </div>
    </div>
</template>