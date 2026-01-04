import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

/* ===============================
   TAGLINE SCRAMBLE
================================ */
export const animateTagline = (el: HTMLSpanElement | null) => {
    if (!el) return;

    gsap.to(el, {
        duration: 1.6,
        scrambleText: {
            text: "Abstracting Complexities, Engineering the Future.",
            chars:
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
            revealDelay: 0.4,
            speed: 0.5,
        },
        ease: "power3.out",
        delay: 0.8,
    });
};

/* ===============================
   HYPE OF TECH SECTION
================================ */
export const animateHypeSection = (
    section: HTMLElement | null,
    background: HTMLDivElement | null
) => {
    if (!section || !background) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 70%",        // when section enters viewport
            toggleActions: "play none none none",
            once: true,              // animate only once
        },
    });

    tl.fromTo(
        background,
        {
            scale: 0.85,
            opacity: 0,
        },
        {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "power4.out",
        }
    ).fromTo(
        section.querySelectorAll("h2, p"),
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
            stagger: 0.15,
            ease: "power3.out",
        },
        "-=0.6"
    );
};

/* ===============================
   FEATURE / PRINCIPLES REVEAL
================================ */
export const animatePrinciples = (section: HTMLElement | null) => {
    if (!section) return;

    gsap.fromTo(
        section.children,
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
            delay: 0.4,
        }
    );
};

/* ===============================
   PROCESS TIMELINE
================================ */
export const animateProcessTimeline = (
    section: HTMLElement | null
) => {
    if (!section) return;

    const steps = section.querySelectorAll(".process-step");
    const line = section.querySelector(".process-line");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
        },
    });

    // Draw horizontal line
    tl.fromTo(
        line,
        { scaleX: 0 },
        {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.out",
            transformOrigin: "left",
        }
    )
        // Reveal steps in sequence
        .fromTo(
            steps,
            {
                opacity: 0,
                y: 20,
                filter: "blur(6px)",
            },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.8,
                stagger: 0.25,
                ease: "power3.out",
            },
            "-=0.6"
        );
};
