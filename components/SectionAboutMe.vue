<script setup>
const { $gsap } = useNuxtApp()
import { onMounted } from 'vue';

onMounted(() => {
    $gsap.from(".rotate-img", { 
        rotate: 0,
        duration: 1, 
        delay: 0.75, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".rotate-img",
            start: "top 80%"
        }
    });

    const stagger = $gsap.utils.toArray(".fade-down")
    $gsap.from(stagger, { 
        opacity: 0, 
        y: -50, 
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        stagger: 0.25,
        scrollTrigger: {
            trigger: '.rotate-img',
            start: "top 80%"
        }
    });
});

</script>

<template>
    <section class="flex justify-center">
        <div class="responsive-content flex-col gap-14 py-36 xl:px-0 px-6">
            <div class="flex flex-col items-center gap-y-2">
                <h3 class="italic-heading">About Me</h3>
                <h2>Your Tech Wingman</h2>
            </div>
            <div class="flex flex-col md:h-[500px] md:flex-row items-center gap-16">
                <div class="flex flex-col h-full justify-between w-full md:w-1/2 gap-y-8">
                    <div class="pseudo-border rotate-img rotate-[-2deg] w-full aspect-[4/3]">
                        <img class="aspect-[4/3]"  style="border-radius: inherit; object-position: 90%;" loading="lazy" src="../assets/media/portrait_2.jpg" alt="">
                    </div>
                    <div class="fade-down flex flex-row justify-between items-end">
                        <div class="flex flex-row gap-x-3">
                            <a href="https://www.linkedin.com/in/victor-yanson-a49940211">
                                <Icon class="social-icon" width="20" icon="hugeicons:linkedin-01" />
                            </a>
                            <a href="https://github.com/VictorYanson">
                                <Icon class="social-icon" width="20" icon="hugeicons:github" />
                            </a>
                            <a href="">
                                <Icon class="social-icon" width="20" icon="hugeicons:instagram" />
                            </a>
                        </div>
                        <div class="flex flex-col items-end gap-y-2">
                            <p class="text-black text-base leading-none">Victor Yanson</p>
                            <p class="text-gray-400 leading-none">NullOne Labs, Founder</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col h-full justify-between md:w-1/2 w-full gap-y-12">
                    <div class="flex flex-row justify-between w-full items-start">
                        <p class="md:w-4/5 w-full text-black text-lg text-light leading-relaxed md:text-left text-justify">Hi! I’m Victor Yanson, a Dutch business strategist and full-stack developer based in Barcelona. With a background in business administration and a passion for digital innovation, I specialize in web development, marketing tech, and strategic growth. I currently work freelance on various projects and I'm always looking for a new challenge. </p>
                        <Icon class="social-icon md:block hidden" width="13" style="color: var(--color-bright-red);" icon="akar-icons:face-happy" />
                    </div>
                    <div class="flex flex-col w-full border-l border-[#bfbfbf] md:pl-12 pl-6">
                        <ExperienceComponent class="fade-down" title="Business Developer" company="TD Synnex" dates="2022 → 2023"/>
                        <ExperienceComponent class="fade-down" title="Administration Dev" company="Chiquita Room" dates="2023 → 2024"/>
                        <ExperienceComponent class="fade-down" title="Workflow Consultant" company="Técnicos365" dates="2024 → 2024"/>
                        <ExperienceComponent class="fade-down" title="Freelance" company="NullOne Labs" dates="2024 → Now"/>
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

    .pseudo-border::after {
        background-color: rgba(255, 255, 255, 0.4);
    }
</style>