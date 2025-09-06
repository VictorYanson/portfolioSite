<template>
    <section class="flex justify-center">
        <div class="responsive-content flex-col gap-10 py-12">
            <div class="flex flex-col items-center gap-y-2">
                <h3 class="italic-heading">Our Projects</h3>
                <h2 >Recent Case Studies</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <CaseStudyComponent text="Pulse Primary" link="/pulse-primary" imglink="/img/pulse-primary-1.jpg" tag1="Healthcare" tag2="Business Page" />
                <CaseStudyComponent text="Royal Renders" link="/royal-renders" imglink="/img/royal-renders-1.jpg" tag1="Webflow" tag2="CMS" />
                <CaseStudyComponent text="Chiquita Room" link="/chiquita-room" imglink="/img/chiquita-room-1.jpg" tag1="WordPress" tag2="Woocommerce" />
                <CaseStudyComponent text="Mini Hako" link="/mini-hako" imglink="/img/mini-hako-1.jpg" tag1="E-Commerce" tag2="Shopify" />
            </div>
        </div>
    </section>
</template>