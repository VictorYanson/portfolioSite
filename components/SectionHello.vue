<template>
    <div class="responsive-content relative flex-col pt-48 pb-48 gap-y-10">
        <h3 class="italic-heading">Hello!</h3>
        <ServicePill class="p1" style="left: 25px; top: 250px; transform: rotate(2deg);" text="Design Systems" bgColor="rgb(255, 94, 0)" icon="tabler:layout-grid-filled" iconColor="rgb(255, 243, 194)" />
        <ServicePill class="p2" style="left: 25px; top: 350px; transform: rotate(1deg);" text="UX/UI" bgColor="rgb(71, 71, 71)" icon="lucide:app-window-mac" iconColor="rgb(186, 255, 208)" />
        <ServicePill class="p3" style="left: 25px; top: 450px; transform: rotate(-2deg);" text="Research" bgColor="rgb(5, 169, 255)" icon="ri:search-2-line" iconColor="rgb(248, 255, 191)" />
        <ServicePill class="p4" style="right: 25px; top: 250px; transform: rotate(-3deg);" text="Animation" bgColor="rgb(82, 255, 105)" icon="hugeicons:ease-curve-control-points" iconColor="rgb(50, 36, 255)" />
        <ServicePill class="p5" style="right: 25px; top: 350px; transform: rotate(-1deg);" text="Prototyping" bgColor="rgb(255, 69, 171)" icon="hugeicons:source-code" iconColor="rgb(201, 255, 251)" />
        <ServicePill class="p6" style="right: 25px; top: 450px; transform: rotate(3deg);" text="Strategy" bgColor="rgb(255, 213, 0)" icon="hugeicons:strategy" iconColor="rgb(102, 0, 128)" />
        <div class="intro-paragraph">
            <p>We help startups and enterprise to establish an emotional connection between their products and happy engaged customers</p>
        </div>
    </div>
</template>

<style scoped>
.intro-paragraph p {
    font-size: 44px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4em;
    color: var(--color-black);
    text-align: center;
}

.intro-paragraph {
    width: 100%;
    max-width: 800px;
    position: relative;
}

@media (max-width: 767px) {
  .intro-paragraph p {
    font-size: 28px;
    line-height: 1.4em;
    letter-spacing: -0.04em;
    font-weight: 300;
  }

  .responsive-content {
    padding-bottom: 450px;
  }
  
  .p1 {
    top: 470px !important;
  }

  .p2 {
    top: 550px !important;
  }

  .p3 {
    top: 630px !important;
  }

  .p4 {
    top: 630px !important;
    transform: rotate(2deg) !important;
  }

  .p5 {
    top: 550px !important;
  }

  .p6 {
    top: 470px !important;
    transform: rotate(-2deg) !important;
  }
}

</style>
