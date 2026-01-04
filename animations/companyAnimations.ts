import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ===============================
   HERO
================================ */
export const animateCompanyHero = (el: HTMLElement | null) => {
    if (!el) return;

    gsap.fromTo(
        el.children,
        {
            opacity: 0,
            y: 24,
            filter: "blur(6px)",
        },
        {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            stagger: 0.15,
        }
    );
};

/* ===============================
   SECTION REVEAL
================================ */
export const animateSection = (el: HTMLElement | null) => {
    if (!el) return;

    gsap.fromTo(
        el.querySelectorAll("h2, h3, p, li"),
        {
            opacity: 0,
            y: 24,
            filter: "blur(6px)",
        },
        {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
                trigger: el,
                start: "top 75%",
                toggleActions: "play none none none",
                once: true,
            },
        }
    );
};
