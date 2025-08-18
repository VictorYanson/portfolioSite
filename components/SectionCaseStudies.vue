<template>
    <section class="flex justify-center">
        <div class="responsive-content flex-col gap-10 py-12">
            <div class="flex flex-col items-center gap-y-2">
                <h3 class="italic-heading">Our Projects</h3>
                <h2 >Recent Case Studies</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <CaseStudyComponent text="Custom AI Tool" link="/portfolio" imglink="/img/case_study_mockup_3.jpg" tag1="AI solution" tag2="Automation" />
                <CaseStudyComponent text="Full-Stack MVP" link="/portfolio" imglink="/img/case_study_mockup_4.jpg" tag1="Web Dev" tag2="SaaS" />
                <CaseStudyComponent text="Mobile App" link="/portfolio" imglink="/img/case_study_mockup_1.jpg" tag1="IOS" tag2="Android" />
                <CaseStudyComponent text="Process Automation" link="/portfolio" imglink="/img/case_study_mockup_5.jpg" tag1="Automation" tag2="Scalability" />
            </div>
        </div>
    </section>
</template>