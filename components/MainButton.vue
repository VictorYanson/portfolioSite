<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: 'Book a Free Call',
  }
})

onMounted(() => {
    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", "30min", {origin:"https://app.cal.com"});
    Cal.ns["30min"]("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
});
</script>

<template>
    <div class="stack w-max">
        <button 
            class="main-button flex flex-row justify-center w-full items-center gap-3 z-10"
            data-cal-config='{"layout":"month_view","theme":"light"}'
            data-cal-namespace="30min"
            data-cal-link="blurry-frame/30min"
        >
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
        </button>
    </div>
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

.stack {
    position: relative;
    z-index: 0;
}

.stack::before {
  content: '';
  position: absolute;
  top: var(--border-width);
  left: var(--border-width);
  right: var(--border-width);
  bottom: var(--border-width);
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 100px;
  z-index: -1;
}
</style>