<script setup>
import { ref } from 'vue'

const isOpen = ref(true)

const toggleAnimation = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
    <header class="top-0 left-0 w-full flex flex-row p-6 md:px-[100px] fixed px-6 justify-between items-center z-[1000]">
        <div class="rounded-full py-2 px-4 bg-[#ffffffde] w-max border border-gray-100">
            <h3 class="font-semibold">NullOne Labs</h3>
        </div>
        <button @click="toggleAnimation" class="rounded-full p-3 bg-[#ffffffde] w-max border border-gray-100">
            <Icon v-if="!isOpen" icon="line-md:menu-to-close-transition" height="20" width="20"/>
            <Icon v-if="isOpen" icon="line-md:close-to-menu-transition" height="20" width="20"/>
        </button>
        <nav 
            :class="{'opacity-0': isOpen, 'opacity-100': !isOpen}"
            class="flex flex-col gap-y-5 border border-gray-100 w-[300px] p-10 absolute top-[80px] right-[7%] bg-white rounded-l-3xl rounded-br-3xl rounded-tr transition-opacity duration-300"
        >
            <a class="menu-item" href="">
                <p>Process</p>
            </a>
            <a class="menu-item" href="">
                <p>Work</p>
            </a>
            <a class="menu-item" href="">
                <p>About</p>
            </a>
            <a class="menu-item" href="">
                <p>Pricing</p>
            </a>
            <a class="menu-item" href="">
                <p>FAQ</p>
            </a>
            <a class="menu-item" href="">
                <p>Contact</p>
            </a>
        </nav>
    </header>
</template>

<style scoped>
.menu-item p {
    font-size: 20px;
    color: black;
    transition: color 0.3s;
}

.menu-item:hover p {
    color: var(--color-bright-red);
}
</style>