<script setup>

import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

</script>

<template>
    <section class="flex justify-center">
        <div class="responsive-content flex-col gap-14 py-36 xl:px-0 px-6">
            <div class="flex flex-col items-center gap-y-2">
                <h3 class="italic-heading">About Me</h3>
                <h2 >Recent Case Studies</h2>
            </div>
            <div class="flex flex-col md:h-[500px] md:flex-row items-center gap-16">
                <div class="flex flex-col h-full justify-between md:w-1/2 gap-y-8">
                    <div class="pseudo-border rotate-[-2deg] w-full aspect-[4/3]">
                        <img class="aspect-[4/3]"  style="border-radius: inherit; object-position: 90%;" loading="lazy" src="../assets/media/portrait_2.jpg" alt="">
                    </div>
                    <div class="flex flex-row justify-between items-end">
                        <div class="flex flex-row gap-x-3">
                            <a href="">
                                <Icon class="social-icon" width="20" icon="hugeicons:linkedin-01" />
                            </a>
                            <a href="">
                                <Icon class="social-icon" width="20" icon="hugeicons:github" />
                            </a>
                            <a href="">
                                <Icon class="social-icon" width="20" icon="hugeicons:instagram" />
                            </a>
                        </div>
                        <div class="flex flex-col items-end gap-y-2">
                            <p class="text-black text-base leading-none">Victor Yanson</p>
                            <p class="text-gray-400 leading-none">Hanzo Studio, Founder</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col h-full justify-between md:w-1/2 gap-y-12">
                    <div class="flex flex-row justify-between w-full items-start">
                        <p class="md:w-4/5 w-full text-black text-lg text-light leading-relaxed">Victor Yanson is a Dutch designer known for his minimalist, expressive digital work. He helps startups and studios create clean interfaces and strong branding. Based in Utrecht, he blends function with emotion — and often spends his free time cycling or exploring generative art.</p>
                        <Icon class="social-icon md:block hidden" width="13" style="color: var(--color-bright-red);" icon="akar-icons:face-happy" />
                    </div>
                    <div class="flex flex-col w-full border-l border-[#bfbfbf] md:pl-12 pl-6">
                        <ExperienceComponent />
                        <ExperienceComponent />
                        <ExperienceComponent />
                        <ExperienceComponent class="border-none" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .social-icon {
        aspect-ratio: 1 / 1;
        color: gray;
        transition: color 0.3s ease-in-out;
    }

    .social-icon:hover {
        color: rgb(56, 56, 56);
    }
</style>