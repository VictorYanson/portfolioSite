<script setup>
const props = defineProps({
  testimonial: {
    type: String,
    default: 'Effortless process. Exceptional results. Working with Joris felt like having an in-house designer on speed dial.',
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
  },
  benefit1: {
    type: String,
    default: 'Unlimited design requests'
  },
  benefit2: {
    type: String,
    default: 'Unlimited design requests'
  },
  benefit3: {
    type: String,
    default: 'Unlimited design requests'
  },
  benefit4: {
    type: String,
    default: 'Unlimited design requests'
  },
  benefit5: {
    type: String,
    default: 'Unlimited design requests'
  },
  benefit6: {
    type: String,
    default: 'Unlimited design requests'
  },
})
</script>

<template>
    <div class="flex flex-col gap-14 w-full">
        <div class="flex flex-col gap-10">
            <h3 class="animate text-xl font-medium">What's included</h3>
            <div class="animate flex flex-col gap-y-3">
                <ComponentIncludedBenefit :text="benefit1" />
                <ComponentIncludedBenefit :text="benefit2" />
                <ComponentIncludedBenefit :text="benefit3" />
                <ComponentIncludedBenefit :text="benefit4" />
                <ComponentIncludedBenefit :text="benefit5" />
                <ComponentIncludedBenefit :text="benefit6" />
            </div>
        </div>
        <div class="animate flex flex-col gap-y-6">
            <p class="text-black md:text-lg text-[16px] text-light md:leading-relaxed leading-[23px]">
                {{ testimonial }}
            </p>
            <div class="flex flex-row items-center gap-x-4">
                <div class="aspect-square w-16 rounded-full overflow-hidden">
                    <img :src="imgLink" alt="">
                </div>
                <div class="flex flex-col gap-y-1 items-start">
                    <p class="text-black sm:text-base">{{ name }}</p>
                    <p class="text-gray-400 sm:text-base text-sm">{{ position }}</p>
                </div>
            </div>
        </div>
    </div>
</template>