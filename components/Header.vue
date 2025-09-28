<script setup>
const { scrollTo } = useScrollTo()
import { ref, onMounted } from 'vue'
const { $gsap } = useNuxtApp()

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const goToSection = async (sectionId) => {
  if (route.path === '/') {
    scrollTo(sectionId)
    buttonClose()
  } else {
    await router.push(`/#${sectionId}`)
    buttonClose()
  }
}

const isClosed = ref(true)
const menuRef = ref(null)
let tl 

onMounted(() => {
  const menuItems = $gsap.utils.toArray(".menu-item")

  tl = $gsap.timeline()

  tl.from(menuItems, {
    x: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    delay: 0.3,
    ease: "power2.out"
  })
  .from('.buttons', {
    y: 30,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
  }, "-=1")
})

const toggleAnimation = () => {
  isClosed.value = !isClosed.value
  if (tl && !isClosed.value) tl.play(0) 
}

const handleClickOutside = (event) => {
  if (!isClosed.value && menuRef.value && !menuRef.value.contains(event.target)) {
    isClosed.value = true
  }
}

const buttonClose = () => {
  isClosed.value = true
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

onMounted(() => {
  $gsap.from("header", { opacity: 0, y: -100, duration: 1, delay: 1, ease: "power2.out" });
})
</script>

<template>
    <header class="top-0 left-0 w-full flex flex-row p-6 md:px-[100px] fixed px-6 justify-between items-center z-[1000]">
        <a href="/">
            <div class="rounded-full py-2 px-4 bg-[#ffffffde] w-max border border-gray-100">
                <h3 class="font-medium">NullOne Labs</h3>
            </div>
        </a>
        <button @click.stop="toggleAnimation" class="rounded-full p-3 bg-[#ffffffde] w-max border border-gray-100">
            <Icon v-if="!isClosed" icon="line-md:menu-to-close-transition" height="20" width="20"/>
            <Icon v-if="isClosed" icon="line-md:close-to-menu-transition" height="20" width="20"/>
        </button>
        <nav 
            ref="menuRef"
            :class="{'opacity-0 pointer-events-none': isClosed, 'opacity-100': !isClosed}"
            class="menu flex flex-col gap-y-5 border border-gray-100 md:w-[300px] min-w-[200px] p-10 absolute top-[80px] right-[7.5%] bg-white rounded-l-3xl rounded-br-3xl rounded-tr transition-opacity duration-300"
        >
            <button class="menu-item" @click="goToSection('process'), buttonClose()">
                <p>Process</p>
            </button>
            <button class="menu-item" @click="goToSection('case-studies'), buttonClose()">
                <p>Work</p>
            </button>
            <button class="menu-item" @click="goToSection('about-me'), buttonClose()">
                <p>About</p>
            </button>
            <button class="menu-item" @click="goToSection('pricing'), buttonClose()">
                <p>Pricing</p>
            </button>
            <button class="menu-item" @click="goToSection('faq'), buttonClose()">
                <p>FAQ</p>
            </button>
            <div class="buttons flex flex-row gap-x-3">
                <a style="z-index: 1000; cursor: pointer;" href="mailto:victor.yanson@outlook.com">
                    <div class="social-button-dark rounded-full flex justify-center items-center p-2 border">
                        <Icon class="icon" icon="meteor-icons:at" width="20" height="20" style="color: black; transition: color 0.3s ease-in-out;" />
                    </div>
                </a>
                <a style="z-index: 1000; cursor: pointer;" href="https://github.com/VictorYanson/">
                    <div class="social-button-dark rounded-full flex justify-center items-center p-2 border">
                        <Icon class="icon" icon="cuida:github-logo-outline" width="20" height="20" style="color: black; transition: color 0.3s ease-in-out;" />
                    </div>
                </a>
                <a style="z-index: 1000; cursor: pointer;" href="https://www.linkedin.com/in/victor-yanson-a49940211/">
                    <div class="social-button-dark rounded-full flex justify-center items-center p-2 border">
                        <Icon class="icon" icon="akar-icons:linkedin-v2-fill" width="20" height="20" style="color: black; transition: color 0.3s ease-in-out;" />
                    </div>
                </a>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.menu-item p {
    font-size: 20px;
    color: black;
    transition: color 0.3s;
}

.menu-item {
    @apply w-max;
}

.menu-item:hover p {
    color: var(--color-bright-red);
}

.social-button-dark {
    border-color: rgba(0, 0, 0, 0.5) !important;
    transition: all 0.3s ease-in-out;
}

.social-button-dark:hover {
    border-color: rgb(0, 0, 0, 0.5) !important;
}

.social-button-dark:hover .icon {
    color: rgba(0, 0, 0, 0.6) !important;
}
</style>