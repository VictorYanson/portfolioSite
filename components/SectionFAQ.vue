<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
</script>

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
                                <img src="https://framerusercontent.com/images/zRVCa2eOgJIf1mJK5PYcBLrYI.png?scale-down-to=1024" alt="">
                            </div>
                            <div class="flex flex-col gap-y-1">
                                <p class="text-black text-xl">Have more questions?</p>
                                <p class="text-black text-xl">Book a free discovery call</p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-y-6 items-center">
                            <MainButton class="!w-full" text="Book a discovery call" />
                            <p class="self-center">Or, email me at <a style="color: var(--color-bright-red);" href="mailto:victor.yanson@outlook.com">VictorYa@outlook.com</a></p>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-3/5 px-1 md:p-0">
                    <Accordion :value="['0']" multiple class="w-full border-none">
                        <AccordionPanel value="0" class="!border-t !border-[#acacac]">
                            <AccordionHeader>What's the difference between a subscription and a custom project?</AccordionHeader>
                            <AccordionContent>
                                <p class="m-0">
                                    The subscription is ongoing and flexible — ideal for continuous design needs. Custom projects are one-time, fixed-scope engagements for larger goals like a rebrand or product launch.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="1">
                            <AccordionHeader>How fast is the turnaround?</AccordionHeader>
                            <AccordionContent>
                                <p class="m-0">
                                    Most requests are delivered within 1-2 business days. Larger tasks may take longer, but you'll always be kept in the loop.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="2">
                            <AccordionHeader>How many requests can I make?</AccordionHeader>
                            <AccordionContent>
                                <p class="m-0">
                                    As many as you like — with a subscription, you can queue unlimited requests, and they'll be handled one at a time in priority order.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel value="3">
                            <AccordionHeader>What types of design do you handle?</AccordionHeader>
                            <AccordionContent>
                                <p class="m-0">
                                    Websites, product UI, landing pages, brand assets, decks, social media visuals — anything digital that needs to look and feel sharp.
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.p-accordionheader {
    font-size: 22px;
    line-height: 34px;
    align-items: start;
    gap: 250px !important;
}

.p-accordioncontent p {
    font-size: 14px;
    line-height: 26px;
}

svg.p-icon.p-accordionheader-toggle-icon {
    margin: 10px 0 0 300px !important;
}

.p-accordionpanel {
    border-bottom: solid 1px #acacac;
    padding: 30px 0;
}
</style>