<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Book a Free Call',
    required: true
  },
  link: {
    type: String,
    default: '#'
  }
})
</script>

<template>
    <a class="main-button pseudo-border flex flex-row justify-center items-center gap-3" :href="link">
        {{ text }} 
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 256 256" 
        focusable="false" 
        color="rgb(255, 255, 255)" 
        style="user-select: none; width: 22.5px; height: 22.5px; display: inline-block; fill: white; color: white; flex-shrink: 0;">
            <g color="white" weight="regular">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
            </g>
        </svg> 
    </a>
</template>

<style scoped>
.main-button {
    box-shadow: 3px 3px 12px 3px rgba(1,1,1,0.4);
    background-color: black;
    color: white;
    font-size: 14px;
    border-radius: 100px;
    padding: 13px 20px 13px 25px;
    transition: all 0.3s ease-in-out;
}

.main-button:hover {
    background-color: rgb(63, 63, 63);
}

.pseudo-border::after {
    border-radius: inherit;
}
</style>