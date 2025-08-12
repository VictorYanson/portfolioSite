<template>
    <section class="flex justify-center mb-48">
        <div class="responsive-content w-full flex flex-col items-center px-6">
            <div class="flex flex-col items-center gap-y-2 py-12">
                <h3 class="italic-heading">FAQ</h3>
                <h2>Your Questions, Answered</h2>
            </div>
            <div class="flex flex-col gap-x-20 gap-y-24 md:flex-row w-full">
                <div class="w-full rotate-[-1.5deg] md:w-2/5">
                    <div class="flex pseudo-border w-full !bg-gray-100 flex-col gap-4 p-[30px] justify-between h-[300px]">
                        <div class="flex flex-row gap-6 items-center">
                            <div class="aspect-square w-20 !rounded-full pseudo-border overflow-hidden">
                                <img class="scale-[125%] translate-x-[-5%] translate-y-[-10%] saturate-[0.9]" src="../assets/media/victor_headshot.webp" alt="">
                            </div>
                            <div class="flex flex-col gap-y-1">
                                <p class="text-black text-xl">Have more questions?</p>
                                <p class="text-black text-xl">Book a free discovery call</p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-y-6 items-center">
                            <MainButton class="!w-full" text="Book a discovery call" />
                            <p class="self-center">Or, email me at <a style="color: var(--color-bright-red);" href="mailto:victor.yanson@outlook.com">victor.yanson@outlook.com</a></p>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-3/5 px-1 md:p-0">
                    <ComponentAccordion />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>