<template>
    <div class="circle-container">
        <Icon icon="solar:folder-bold" height="50" width="50"/>
        <div class="see-recent-work absolute rotate-12 left-3 -top-16 w-40 h-12 bg-black flex items-center justify-center rounded-full">
            <div class="relative flex justify-center">
                <p class="text-white">See Recent Work</p>
                <div class="absolute h-5 w-5 bg-black rotate-45 -bottom-4"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.circle-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    z-index: 10;
    width: 150px;
    height: 150px;
    background-color: rgb(255, 255, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
    cursor: pointer;
    transition: background-color 0.4s ease-out;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.circle-container:hover {
    background-color: rgb(255, 255, 255);
}

.see-recent-work {
    transition: all 0.4s ease-in-out;
}

.circle-container:hover .see-recent-work {
    left: 16px;
    top: -70px;
}
</style>