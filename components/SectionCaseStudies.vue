<template>
    <section class="flex justify-center">
        <div class="responsive-content flex-col gap-10 py-12">
            <div class="flex flex-col items-center gap-y-2">
                <h3 class="italic-heading">Our Projects</h3>
                <h2 >Recent Case Studies</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <CaseStudyComponent text="Custom AI Tool" link="/portfolio" imglink="https://framerusercontent.com/images/aLickQcDkn7JlTftxkq33tHE.jpg?scale-down-to=1024" tag1="AI solution" tag2="Automation" />
                <CaseStudyComponent text="Full-Stack MVP" link="/portfolio" imglink="https://framerusercontent.com/images/ISAjHKBwJV6BJzD55lhE8XAFBM.jpg?scale-down-to=1024" tag1="Web Dev" tag2="SaaS" />
                <CaseStudyComponent text="Mobile App" link="/portfolio" imglink="https://framerusercontent.com/images/nT9mTBoP2h9YdschdGP72ovRHk.jpg" tag1="IOS" tag2="Android" />
                <CaseStudyComponent text="Process Automation" link="/portfolio" imglink="https://framerusercontent.com/images/vzQsCEYy7zN2RmDQcgrizz0O0MI.jpg" tag1="Automation" tag2="Scalability" />
            </div>
        </div>
    </section>
</template>