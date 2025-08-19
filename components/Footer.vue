<template>
    <section class="flex justify-center">
        <footer class="h-[97vh] md:w-[97vw] w-[93vw] rounded-[25px] flex flex-col justify-center items-center relative p-16 m-3 bg-black overflow-hidden">
            <div class="rays-container">
                <div class="ray-19638bs"></div>
                <div class="ray-1q5tj4x"></div>
                <div class="ray-113bvzp"></div>
                <div class="ray-1h392ap"></div>
                <div class="ray-51qstn"></div>
                <div class="grain">
                    <div class="texture"></div>
                </div>
            </div>
            <div class="responsive-content flex-col items-center justify-between w-full h-full z-10">
                <div class="flex flex-col justify-center items-center gap-y-8">
                    <h3 class="italic-heading">Booking Spots Available</h3>
                    <h1 class="text-white md:text-8xl text-center">Let's Connect</h1>
                    <p class="text-white text-center md:text-lg leading-relaxed pb-4 max-w-[420px]">
                        Feel free to contact me if having any questions. I'm available for new projects or just for chatting.
                    </p>
                    <MainButton text="Book a Free Intro Call" link="#"/>
                </div>
            </div>
            <div class="flex w-full flex-col md:flex-row items-center justify-between gap-14 px-5">
                <p class="text-white text-sm py-3 px-1 border-y border-white">© NullOne Labs, 2025</p>
                <div class="flex flex-row items-center gap-4">
                    <ComponentSocialLogo link="mailto:victor.yanson@outlook.com" />
                    <ComponentSocialLogo link="https://www.linkedin.com/in/victor-yanson-a49940211/" icon="akar-icons:linkedin-v2-fill" />
                    <ComponentSocialLogo link="https://github.com/VictorYanson" icon="cuida:github-logo-outline"/>
                    <ComponentSocialLogo icon="fe:instagram"/>
                </div>
            </div>
        </footer>
    </section>
</template>

<style scoped>
.pseudo-border::after {
    background-color: rgba(255, 255, 255, 0.25)
}

.rays-container {
    flex: none;
    height: 100%;
    left: 0;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    background: radial-gradient(100% 100% at 0% 0%, rgb(46, 46, 46) 0%, var(--token-00af65c3-92fd-4f69-9228-cfe71d95f29a, rgb(0, 0, 0)) 100%);
    mask: radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%);
    opacity: 1;
}

.ray-19638bs {
    background: linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 83.9344%, rgba(255, 255, 255, 0) 100%);
    mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20.0362%, rgba(0, 0, 0, 0) 36.175%, rgb(0, 0, 0) 55.4054%, rgba(0, 0, 0, 0.13) 67.1171%, rgb(0, 0, 0) 78.2306%, rgba(0, 0, 0, 0) 97.2973%);
    opacity: 0.05;
    transform: skewX(45deg);
    flex: none;
    height: 1269px;
    left: calc(33.611111111111136% - min(960px,591.04338305692px) / 2);
    max-width: 960px;
    overflow: hidden;
    position: absolute;
    top: -209px;
    width: 591px;
}

.ray-1q5tj4x {
    background: linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 83.9344%, rgba(255, 255, 255, 0) 100%);
    mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 11.3985%, rgb(0, 0, 0) 25.5578%, rgba(0, 0, 0, 0.55) 41.6966%, rgba(0, 0, 0, 0.13) 67.1171%, rgb(0, 0, 0) 78.2306%, rgba(0, 0, 0, 0) 97.2973%);
    opacity: 0.05;
    transform: skewX(45deg);
    flex: none;
    height: 1269px;
    left: calc(-1.5277777777777555% - min(960px,582.0033895797204px) / 2);
    max-width: 960px;
    overflow: hidden;
    position: absolute;
    top: -209px;
    width: 582px;
}

.ray-113bvzp {
    background: linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 67%, rgba(255, 255, 255, 0) 100%);
    mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 9.81489%, rgb(0, 0, 0) 20.0362%, rgba(0, 0, 0, 0.55) 28.5878%, rgba(0, 0, 0, 0.424) 40.0901%, rgb(0, 0, 0) 48.6486%, rgba(0, 0, 0, 0.267) 54.5045%, rgba(0, 0, 0, 0.13) 78.579%, rgb(0, 0, 0) 88.554%, rgba(0, 0, 0, 0) 97.2973%);
    opacity: 0.05;
    transform: skewX(45deg);
    flex: none;
    height: 1269px;
    left: calc(33.68055555555558% - min(960px,441.23777686332323px) / 2);
    max-width: 960px;
    overflow: hidden;
    position: absolute;
    top: -209px;
    width: 441px;
}

.ray-1h392ap {
    background: linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 83.9344%, rgba(255, 255, 255, 0) 100%);
    mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17.6591%, rgba(0, 0, 0, 0.55) 26.6417%, rgb(0, 0, 0) 35.2302%, rgba(0, 0, 0, 0) 47.6985%, rgba(0, 0, 0, 0.13) 69.1776%, rgb(0, 0, 0) 79.1456%, rgba(0, 0, 0, 0) 97.2973%);
    opacity: 0.05;
    transform: skewX(45deg);
    flex: none;
    height: 1269px;
    left: calc(50.138888888888914% - min(960px,683.5956972282517px) / 2);
    max-width: 960px;
    overflow: hidden;
    position: absolute;
    top: -209px;
    width: 684px;
}

.ray-51qstn {
    background: linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 83.9344%, rgba(255, 255, 255, 0) 100%);
    mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20.0362%, rgba(0, 0, 0, 0.55) 27.5778%, rgb(0, 0, 0) 42.3423%, rgba(0, 0, 0, 0) 48.6047%, rgba(0, 0, 0, 0.13) 67.1171%, rgb(0, 0, 0) 74.9525%, rgb(0, 0, 0) 82.4324%, rgba(0, 0, 0, 0.47) 88.6719%, rgba(0, 0, 0, 0) 97.2973%);
    opacity: 0.05;
    transform: skewX(45deg);
    flex: none;
    height: 1269px;
    left: calc(49.09722222222224% - min(960px,426.1711210679905px) / 2);
    max-width: 960px;
    overflow: hidden;
    position: absolute;
    top: -209px;
    width: 426px;
}

.grain {
    opacity: 0.1;
    flex: none;
    inset: 0;
    position: absolute;
    z-index: 0;
}

.texture {
    position: absolute;
    border-radius: inherit;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-repeat: repeat;
    background-position: left top;
    background-size: 149.76px auto;
    background-image: url(https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png);
    border: 0;
}
</style>