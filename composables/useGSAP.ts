// useGSAP.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function useGSAP(targetClass: string) {
    const GSAP = () => {
        const timeline = gsap.timeline({ paused: true });

        const elements = gsap.utils.toArray(targetClass);

        elements.forEach(element => {
            const splitText = new SplitText(element as HTMLElement, {
                type: "words",
                charsClass: "words++",
            });

            const wordAnimation = gsap.from(splitText.words, {
                duration: 0.5,
                filter: "blur(20px)",
                opacity: 0,
                stagger: 0.05,
                ease: "power2.out"
            });

            timeline.add(wordAnimation, "<=0.4");
        });

        ScrollTrigger.create({
            trigger: ".entrance",
            start: "bottom bottom",
            end: "bottom 10%",
            onEnter: () => timeline.play(),
            once: true
        });
    }

    return {
        GSAP
    }
}