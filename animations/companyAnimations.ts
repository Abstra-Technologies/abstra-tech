import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

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


export const animateHeroPillars = (el: HTMLElement | null) => {
    if (!el) return;

    const items = el.querySelectorAll(".pillar-item");

    gsap.fromTo(
        items,
        {
            opacity: 0,
            y: 32,
            scale: 0.9,
            filter: "blur(6px)",
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            stagger: 0.25,
            scrollTrigger: {
                trigger: el,
                start: "top 75%",
                toggleActions: "play none none none",
                once: true,
            },
        }
    );
};

export const animateCraftHeadline = (el: HTMLElement | null) => {
    if (!el) return;

    document.fonts.ready.then(() => {
        gsap.set(el, { opacity: 1 });

        const split = SplitText.create(el, {
            type: "words",
            wordsClass: "craft-word",
            ignore: "sup",
        });

        gsap.from(split.words, {
            y: -100,
            opacity: 0,
            rotation: () => gsap.utils.random(-80, 80),
            stagger: 0.08,
            duration: 1,
            ease: "back.out(1.2)",
        });
    });
};

export const animateCraftManifesto = (
    section: HTMLElement | null,
    textEl: HTMLElement | null
) => {
    if (!section || !textEl) return;

    document.fonts.ready.then(() => {
        gsap.set(textEl, { opacity: 1 });

        const split = SplitText.create(textEl, {
            type: "words",
            wordsClass: "craft-word",
            ignore: "sup",
        });

        gsap.from(split.words, {
            y: -80,
            opacity: 0,
            rotation: () => gsap.utils.random(-60, 60),
            stagger: 0.08,
            duration: 1,
            ease: "back.out(1.2)",
            scrollTrigger: {
                trigger: section,
                start: "top 70%",
                toggleActions: "play none none none",
                once: true,
            },
        });
    });
};