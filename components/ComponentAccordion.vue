<script setup>
import { onMounted } from 'vue';
const { $gsap } = useNuxtApp();


onMounted(() => {
    let groups = $gsap.utils.toArray(".accordion-group");
    let menus = $gsap.utils.toArray(".accordion-menu");
    let icons = $gsap.utils.toArray(".toggle-icon");
    let animations = groups.map(createAnimation);

    menus.forEach(menu => {
        menu.addEventListener("click", () => playAnimation(menu));
    });

    function playAnimation(selected) {
        animations.forEach(animate => animate(selected))
    }

    function createAnimation(element) {
        let menu = element.querySelector(".accordion-menu");
        let box  = element.querySelector(".accordion-content");
        let icon = element.querySelector(".toggle-icon");

        $gsap.set(box, { height: "auto"})

        let tween = $gsap.timeline();

        tween.from(box, { 
            height: 0, 
            duration: 0.3, 
            ease: "power2.inOut",
        }).reverse();
        tween.to(icon, {
            rotate: 45,
            duration: 0.5,
            ease: "back.out(1.7)",
        }, "-=0.5").reverse();

        return function(selected) {
            let reversed = selected !== menu ? true : !tween.reversed();
            tween.reversed(reversed);
        }
    }
});

</script>


<template>
    <div class="accordion">

  <div class="accordion-group border-t border-[var(--color-black-25)]">
    <div class="accordion-menu">
      <h3>What’s the difference between a subscription and a custom project?</ h3>
      <Icon class="toggle-icon" icon="bitcoin-icons:plus-filled" width="24" height="24" />
    </div>
    <div class="accordion-content">
      <p>The subscription is ongoing and flexible — ideal for continuous design needs. Custom projects are one-time, fixed-scope engagements for larger goals like a rebrand or product launch.</p>  
    </div>
  </div>

  <div class="accordion-group">
    <div class="accordion-menu">
      <h3>How fast is the turnaround?</h3>
      <Icon class="toggle-icon" icon="bitcoin-icons:plus-filled" width="24" height="24" />
    </div>
    <div class="accordion-content">
      <p>Most requests are delivered within 1–2 business days. Larger tasks may take longer, but you’ll always be kept in the loop.</p>  
    </div>
  </div>

  <div class="accordion-group">
    <div class="accordion-menu">
      <h3>How many requests can I make?</h3>
      <Icon class="toggle-icon" icon="bitcoin-icons:plus-filled" width="24" height="24" />
    </div>
    <div class="accordion-content">
      <p>As many as you like — with a subscription, you can queue unlimited requests, and they’ll be handled one at a time in priority order.</p>  
    </div>
  </div>

  <div class="accordion-group">
    <div class="accordion-menu">
      <h3>What types of design do you handle?</h3>
      <Icon class="toggle-icon" icon="bitcoin-icons:plus-filled" width="24" height="24" />
    </div>
    <div class="accordion-content">
      <p>Websites, product UI, landing pages, brand assets, decks, social media visuals — anything digital that needs to look and feel sharp.</p>  
    </div>
  </div>

  <div class="accordion-group">
    <div class="accordion-menu">
      <h3>What tools do you use?</h3>
      <Icon class="toggle-icon" icon="bitcoin-icons:plus-filled" width="24" height="24" />
    </div>
    <div class="accordion-content">
      <p>Figma for design, Notion for task management, and Slack or email for async communication.</p>  
    </div>
  </div>

</div>

</template>

<style scoped>
.accordion {
    width: 100%;
}

.accordion-group {
    border-bottom: solid 1px var(--color-black-25);
    padding: 24px 0;
}

.accordion-menu {
    padding: 10px;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: start;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
}

.accordion-content {
    height: 0;
    overflow: hidden;
}

.accordion-content.expanded {
    height: 0;
    overflow: hidden;
}

p {
    margin: 10px;
    font-size: 16px;
    font-weight: 300;
}

h3 {
    max-width: 400px;
    font-size: 24px;
    font-family: 'inter', sans-serif;
    font-weight: 300;
}

@media (max-width: 767px) {
    .accordion-menu h3 {
        font-size: 20px;
    }
}

.toggle-icon {
    color: var(--color-bright-red);
    min-width: 24px;
}
</style>