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
      <h3>What kind of projects do you take on?</h3>
      <Icon class="toggle-icon" icon="bitcoin-icons:plus-filled" width="24" height="24" />
    </div>
    <div class="accordion-content">
      <p>I focus on web development projects from custom portfolio sites and e-commerce stores to MVPs for startups. I enjoy working with creative teams and founders to bring digital ideas to life through design, code, and strategy.</p>  
    </div>
  </div>

  <div class="accordion-group">
    <div class="accordion-menu">
      <h3>Do you work with specific tools or platforms?</h3>
      <Icon class="toggle-icon" icon="bitcoin-icons:plus-filled" width="24" height="24" />
    </div>
    <div class="accordion-content">
      <p>Yes! I specialize in Webflow, Shopify (Liquid), and custom JavaScript-based stacks. I also build custom CMS structures, integrate APIs, and occasionally work on early-stage machine learning features.</p>  
    </div>
  </div>

  <div class="accordion-group">
    <div class="accordion-menu">
      <h3>Can you help with both design and development?</h3>
      <Icon class="toggle-icon" icon="bitcoin-icons:plus-filled" width="24" height="24" />
    </div>
    <div class="accordion-content">
      <p>While my main focus is development, I often collaborate with design teams or work from existing brand guidelines. I can also support with layout structure, user flows, and basic UI/UX best practices when needed.</p>  
    </div>
  </div>

  <div class="accordion-group">
    <div class="accordion-menu">
      <h3>How does your process usually work?</h3>
      <Icon class="toggle-icon" icon="bitcoin-icons:plus-filled" width="24" height="24" />
    </div>
    <div class="accordion-content">
      <p>I typically start by understanding the client's goals, then move into prototyping or wireframes. From there, I build in agile cycles with regular feedback loops. I also provide documentation or CMS training so clients can manage things after launch.</p>  
    </div>
  </div>

  <div class="accordion-group">
    <div class="accordion-menu">
      <h3>Do you offer ongoing support or just one-time builds?</h3>
      <Icon class="toggle-icon" icon="bitcoin-icons:plus-filled" width="24" height="24" />
    </div>
    <div class="accordion-content">
      <p>Both! I offer project-based packages, as well as retainer options for updates, maintenance, or scaling. We can discuss what works best depending on the scope and your team's needs</p>  
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
    max-width: 450px;
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