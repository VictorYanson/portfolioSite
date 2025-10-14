<script setup>
import { onMounted } from 'vue';
const { toggleVisibility, isVisible } = useToggleVisibility('toggle');
const { $gsap } = useNuxtApp();

let animation1 = null;
let animation2 = null;

onMounted(() => {
    animation1 = $gsap.timeline();
    animation2 = $gsap.timeline();

    const card1Elements = $gsap.utils.toArray('.card-1 .animate');
    const card2Elements = $gsap.utils.toArray('.card-2 .animate');

    animation1.from(card1Elements, {
        duration: 1,
        opacity: 0,
        stagger: 0.2,
        paused: false
    });

    animation2.from(card2Elements, {
        duration: 1,
        opacity: 0,
        stagger: 0.2,
        paused: false,
    });
});

let animationPlayed = false;
const cardAnimation = () => {
    if (!animationPlayed) {
        animation1.play(0);
        animation2.reverse(0);
        animationPlayed = true;
    } else if (animationPlayed) {
        animation2.play(0);
        animation1.reverse(0);
        animationPlayed = false;
    }
};

const handleToggle = () => {
    toggleVisibility();
    cardAnimation();
};
</script>

<template>
    <section class="flex justify-center mt-[50px] mb-[150px]">
        <div class="responsive-content flex-col w-full gap-y-10 md:p-0 px-4 relative">
            <div class="bg-rays"></div>
            <div class="flex flex-col items-center gap-y-2 z-10">
                <h3 class="italic-heading">Pricing</h3>
                <h2>Fixed Price, Zero Limits</h2>
            </div>
            <div class="w-full min-h-[760px] flex items-center flex-col md:flex-row p-6 md:p-14 gap-12 pseudo-border bg-[#F2F2F2]">
                <div class="flex flex-col md:w-1/2 md:p-0 p-4 justify-between md:h-full">
                    <div class="flex flex-col gap-10">
                        <div class="slider-container flex flex-row items-center gap-x-4">
                            <p :class="{ 'text-gray-400': isVisible, '!text-black': !isVisible }">MVP</p>
                            <label class="switch">
                                <input type="checkbox" @change="handleToggle" class="checkbox">
                                <div class="slider"></div>
                            </label>
                            <p :class="{ '!text-black' : isVisible, 'text-gray-400': !isVisible }">Strategy</p>
                        </div>
                        <div class="flex flex-col">
                            <div id="monthly" class="toggle flex flex-row">
                                <p id="price-mo" class="toggle text-5xl md:text-6xl text-black">from</p>
                                <p id="period-mo" class="toggle text-5xl md:text-6xl">€400</p>
                            </div>
                            <div id="yearly" class="toggle yearly flex flex-row gap-2">
                                <p id="price-ye" class="toggle text-5xl md:text-6xl">€500</p>
                                <p id="period-ye" class="toggle text-5xl md:text-6xl text-black">/project</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col w-full gap-3">
                        <div class="flex flex-row w-full min-w-[300px] items-center gap-x-2">
                            <Icon icon="icon-park-outline:dot" style="color: #0cb300;"/>
                            <p>Booking Open</p>
                        </div>
                        <MainButton class="w-max" text="Plan Discovery Call" />
                    </div>
                </div>
                <div class="flex flex-col w-full md:w-1/2 justify-between md:h-full rotate-[1deg]">
                    <div class="h-full w-full flex flex-col rounded-[15px] bg-white py-14 pl-14 pr-12">
                        <ComponentIncluded class="card-1" :class="{ 'h-auto opacity-1' : isVisible, 'h-0 opacity-0 pointer-events-none': !isVisible }"
                            testimonial= "Victor's clean and efficient development approach brought our digital presence to life. It gave us a real edge in a crowded online market."
                            imgLink= "img/alejandro_navarro.jpeg"
                            name= "Alejandro Navarro"
                            position= "Consultant at Técnicos365"
                            benefit1= "Bespoke Strategy Session"
                            benefit2= "Workflow Audit"
                            benefit3= "Custom Automation Blueprint"
                            benefit4= "Tool Recommendations"
                            benefit5= "Implementation Roadmap"
                            benefit6= "1:1 Support"
                        />
                        <ComponentIncluded class="card-2" :class="{ 'h-0 opacity-0 pointer-events-none' : isVisible, 'h-auto opacity-1': !isVisible }"
                            testimonial= "The entire process felt seamless. Victor handled the build with such speed and precision. The final store worked flawlessly."
                            imgLink= "img/juliana_gonzalez.jpeg"
                            name= "Juliana Gonzalez"
                            position= "Marketing Specialist at Mini Hako"
                            benefit1= "Clickable Prototype in Weeks"
                            benefit2= "User-Centered Design"
                            benefit3= "Scalable Codebase"
                            benefit4= "API & Third-Party Integrations"
                            benefit5= "Iterative Feedback Cycles"
                            benefit6= "Tech Stack Guidance"
                        />
                    </div>
                </div>
            </div>
            <div class="w-full grid gap-y-5 gap-x-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                <ComponentQualityItem icon="hugeicons:smart-phone-01" text="Senior-level quality"/>
                <ComponentQualityItem icon="hugeicons:ai-computer" text="Systems thinking"/>
                <ComponentQualityItem icon="hugeicons:codesandbox" text="Developer firendly"/>
                <ComponentQualityItem icon="hugeicons:ai-folder-01" text="Clear proces"/>
                <ComponentQualityItem icon="hugeicons:bulb" text="On-brand, every time"/>
                <ComponentQualityItem icon="hugeicons:settings-01" text="Reliable partner"/>
                <ComponentQualityItem icon="hugeicons:stars" text="Fast execution"/>
                <ComponentQualityItem icon="hugeicons:text-check" text="Thoughtful feedback"/>
                <ComponentQualityItem icon="hugeicons:waving-hand-01" text="Smooth handoff"/>
            </div>
        </div>
    </section>
</template>

<style scoped>
.slider-container p {
    font-size: 25px;
    font-weight: 300;
    transition: color 0.3s;
}

.slider-container:hover p {
    color: var(--color-bright-red);
}

.checkbox {
  display: none;
}

.slider {
  width: 60px;
  height: 30px;
  background-color: lightgray;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  border: 4px solid transparent;
  transition: .3s;
  box-shadow: 0 0 10px 0 rgb(0, 0, 0, 0.03) inset;
  cursor: pointer;
  box-shadow: 8px 9px 12px 1px rgba(1,1,1,0.15);;
}

.slider::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transform: translateX(-30px);
  border-radius: 20px;
  transition: .3s;
  box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
}

.checkbox:checked ~ .slider::before {
  transform: translateX(30px);
  box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
}

.checkbox:checked ~ .slider {
  background-color: var(--color-bright-red);
}

.checkbox:active ~ .slider::before {
  transform: translate(0);
}

.bg-rays {
    background: linear-gradient(
        45deg, #ffffff 0%,
        var(--token-cd9f24d5-f0ad-4213-bead-63c4e991dc40, 
        rgb(255, 255, 255)) 10.492552236961671%,
        var(--token-cd9f24d5-f0ad-4213-bead-63c4e991dc40, 
        rgb(255, 255, 255)) 20.854762210110156%,
        var(--token-547b5c15-77fe-4f79-a0d6-e024d7d798f1,
        rgba(255, 255, 255, .5)) 28.904700423212677%,
        var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, 
        rgb(217, 217, 217)) 36.8607922063697%,
        var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, 
        rgb(217, 217, 217)) 46.662530445121476%,
        var(--token-547b5c15-77fe-4f79-a0d6-e024d7d798f1, 
        rgba(255, 255, 255, .5)) 54.232809127391455%,
        var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, 
        rgb(217, 217, 217)) 59.631585694533726%,
        var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, 
        rgb(217, 217, 217)) 63.429759262050034%,
        var(--token-547b5c15-77fe-4f79-a0d6-e024d7d798f1, 
        rgba(255, 255, 255, .5)) 67.32177925951184%,
        var(--token-cd9f24d5-f0ad-4213-bead-63c4e991dc40, 
        rgb(255, 255, 255)) 72.91867606765015%,
        var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, 
        rgb(217, 217, 217)) 76.11988206690206%,
        var(--token-cd9f24d5-f0ad-4213-bead-63c4e991dc40, 
        rgb(255, 255, 255)) 80.81220356417685%,
        var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, 
        rgb(217, 217, 217)) 84.7224714785725%,
        var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, 
        rgb(217, 217, 217)) 89.80581976728685%,
        var(--token-aa303802-e5d1-4856-bfe5-30475052d91c, 
        rgb(217, 217, 217)) 100%);
    bottom: 0;
    flex: none;
    left: calc(50.00000000000002% - 1200px / 2);
    mask: radial-gradient(50% 50% at 50% 50%,#000000 0%,rgba(0,0,0,0) 100%) add;
    overflow: hidden;
    position: absolute;
    top: -450px;
    width: 1200px;
    z-index: 0;
}

#period-mo, #price-mo, #price-ye, #period-ye {
    transition: transform 0.15s ease-out;
}

#period-mo.highlight, #period-ye {
    transform: translateX(-130px);
}


#period-mo, #period-ye.highlight {
    transform: translateX(0);
}

#price-mo.highlight, #price-ye {
    transform: translateX(130px);
}

#price-mo, #price-ye.highlight {
    transform: translateX(0);
}

#monthly {
    opacity: 1;
}

#monthly.highlight {
    opacity: 0;
    order: 2;
}

#yearly {
    opacity: 0;
}

#yearly.highlight {
    opacity: 1;
}
</style>