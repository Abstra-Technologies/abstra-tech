import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);

export const animateManifestoIntro = (element: HTMLParagraphElement | null) => {
    if (!element) return;

    const lines = element.querySelectorAll(".manifesto-line");

    gsap.fromTo(
        lines,
        {
            opacity: 0,
            y: 16,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.18,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        }
    );
};

export const animateManifestoHeadline = (
    element: HTMLElement | null
) => {
    if (!element) return;

    const split = new SplitText(element, {
        type: "words",
        wordsClass: "manifesto-word",
    });

    gsap.fromTo(
        split.words,
        {
            opacity: 0,
            y: 20,
            scale: 0.96,
            filter: "blur(6px)",
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.045,
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        }
    );
};


export const animateHumilitySection = (
    heading: HTMLElement | null,
    paragraphs: HTMLElement[]
) => {
    if (!heading) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none none",
        },
    });

    // Heading appears cleanly (no scramble)
    tl.fromTo(
        heading,
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
        }
    );

    // Paragraphs scramble into clarity
    paragraphs.forEach((p) => {
        tl.from(
            p,
            {
                duration: 1.1,
                scrambleText: {
                    text: p.textContent || "",
                    chars: "░▒▓",
                    revealDelay: 0.2,
                    speed: 0.35,
                },
                opacity: 0,
                ease: "none",
            },
            "-=0.2"
        );
    });
};