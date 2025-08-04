<template>
    <section class="flex justify-center">
        <div class="responsive-content flex-col w-full gap-y-14 pb-48 md:p-0 px-4 relative">
            <div class="bg-rays"></div>
            <div class="w-full min-h-[700px] pseudo-border bg-[#F2F2F2]">

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
    top: -206px;
    width: 1200px;
    z-index: 0;
}
</style>