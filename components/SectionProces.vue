<template>
    <div class="responsive-content relative flex-col pb-48 gap-y-20" >
        <div class="flex flex-col items-center gap-y-2">
            <h3 class="italic-heading">Our Process, Explained</h3>
            <h2 >Here's how it works</h2>
        </div>
        <div class="card-container relative flex w-full flex-row items-center justify-between gap-x-10">
            <svg class="curve absolute z-10" xmlns="http://www.w3.org/2000/svg" width="245px" height="75px" viewBox="0 0 247 69"><path d="M 10.716 56.236 C 10.716 56.236 38.876 9.087 88.573 3.406 C 138.271 -2.276 172.885 11.384 233.016 57.669 M 10.586 50.115 C 14.483 50.115 17.643 53.285 17.643 57.197 C 17.643 61.108 14.483 64.279 10.586 64.279 C 6.688 64.279 3.529 61.108 3.529 57.197 C 3.529 53.285 6.688 50.115 10.586 50.115 Z M 232.886 50.115 C 236.783 50.115 239.943 53.285 239.943 57.197 C 239.943 61.108 236.783 64.279 232.886 64.279 C 228.988 64.279 225.829 61.108 225.829 57.197 C 225.829 53.285 228.988 50.115 232.886 50.115 Z" stroke="var(--token-c53eeb35-d3d9-4feb-9e89-a54d60d4f299, rgb(255, 55, 0)) /* {&amp;quot;name&amp;quot;:&amp;quot;Orange&amp;quot;} */" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="transparent" opacity="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path></svg>
            <svg class="curl absolute z-10" xmlns="http://www.w3.org/2000/svg" width="121px" height="187px" viewBox="0 0 106 179"><path d="M 95.993 11.704 C 43.708 8.765 57.558 98.411 77.749 93.631 C 97.94 88.852 48.295 23.589 19.858 39.508 C -8.579 55.425 10.736 95.485 15.297 103.641 C 19.859 111.796 46.874 150.721 92.134 170.369 M 92.468 163.464 C 96.205 163.464 99.234 166.488 99.234 170.219 C 99.234 173.949 96.205 176.974 92.468 176.974 C 88.731 176.974 85.702 173.949 85.702 170.219 C 85.702 166.488 88.731 163.464 92.468 163.464 Z M 95.851 4.728 C 99.588 4.728 102.617 7.752 102.617 11.483 C 102.617 15.214 99.588 18.238 95.851 18.238 C 92.114 18.238 89.085 15.214 89.085 11.483 C 89.085 7.752 92.114 4.728 95.851 4.728 Z" stroke="var(--token-c53eeb35-d3d9-4feb-9e89-a54d60d4f299, rgb(255, 55, 0)) /* {&amp;quot;name&amp;quot;:&amp;quot;Orange&amp;quot;} */" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="transparent" opacity="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path></svg>
            <ProcessCard class="pc rotate-[-5deg] mt-14" number="1" title="Subscribe" description="Choose a plan and request as many designs as you need." />
            <ProcessCard class="pc rotate-[7deg] mb-14" number="2" title="Request" description="Submit your design requests and any specific requirements." />
            <ProcessCard class="pc rotate-[-4deg] mt-14" number="3" title="Get Your Designs" description="Receive your custom designs and provide feedback." />
        </div>
    </div>
</template>

<style scoped>
.curve {
    top: 0;
    left: 19%;
    transform: rotate(-25deg);
}

.curl {
    top: 180px;
    right: 28%;
    transform: rotate(-80deg);
}

@media (max-width: 767px) {
    .card-container {
        flex-direction: column;
        align-items: center;
        gap: 60px;
    }

    .pc {
        margin: 0 !important;
        height: 250px !important;
    }

    .curve {
        left: auto !important;
        bottom: auto !important;
        top: 30%;
        right: 0;
        transform: rotate(90deg);
    }

    .curl {
        bottom: 0;
        right: 0;
        transform: rotate(180deg);
    }
}
</style>