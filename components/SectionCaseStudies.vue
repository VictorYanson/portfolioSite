<template>
    <section class="flex justify-center">
        <div class="responsive-content flex-col gap-10 py-12">
            <div class="flex flex-col items-center gap-y-2">
                <h3 class="italic-heading">Our Projects</h3>
                <h2 >Recent Case Studies</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <CaseStudyComponent text="Project 1" link="#" imglink="https://framerusercontent.com/images/aLickQcDkn7JlTftxkq33tHE.jpg" tag1="portfolio" tag2="sidebar" />
                <CaseStudyComponent text="Project 2" link="#" imglink="https://framerusercontent.com/images/ISAjHKBwJV6BJzD55lhE8XAFBM.jpg" tag1="portfolio" tag2="sidebar" />
                <CaseStudyComponent text="Project 3" link="#" imglink="https://framerusercontent.com/images/nT9mTBoP2h9YdschdGP72ovRHk.jpg" tag1="portfolio" tag2="sidebar" />
                <CaseStudyComponent text="Project 4" link="#" imglink="https://framerusercontent.com/images/vzQsCEYy7zN2RmDQcgrizz0O0MI.jpg" tag1="portfolio" tag2="sidebar" />
            </div>
        </div>
    </section>
</template>