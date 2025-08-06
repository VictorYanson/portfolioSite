<script setup>
import { ref } from 'vue'

const isClosed = ref(true)
const menuRef = ref(null)

const toggleAnimation = () => {
  isClosed.value = !isClosed.value
}

const handleClickOutside = (event) => {
  if (!isClosed.value && menuRef.value && !menuRef.value.contains(event.target)) {
    isClosed.value = true
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
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
            class="menu flex flex-col gap-y-5 border border-gray-100 md:w-[300px] w-[200px] p-10 absolute top-[80px] right-[7.5%] bg-white rounded-l-3xl rounded-br-3xl rounded-tr transition-opacity duration-300"
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