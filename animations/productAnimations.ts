// animations/products.animations.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/* ================= HERO ================= */
export const animateProductsHero = (el: HTMLElement | null) => {
    if (!el) return;

    gsap.fromTo(
        el.children,
        {
            y: 28,
            opacity: 0.95,
            filter: "blur(6px)",
        },
        {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            stagger: 0.16,
            clearProps: "filter",
        }
    );
};

/* ================= PRODUCT ITEMS ================= */
export const animateProductItems = (
    items: HTMLElement[],
    section: HTMLElement | null
) => {
    if (!items.length || !section) return;

    gsap.fromTo(
        items,
        {
            y: 32,
            opacity: 0.96,
            filter: "blur(4px)",
        },
        {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
            clearProps: "filter",
            scrollTrigger: {
                trigger: section,
                start: "top 75%",
                once: true, // 🔑 important for useEffect
            },
        }
    );
};

/* ================= TAGS ================= */
export const animateProductTags = (section: HTMLElement | null) => {
    if (!section) return;

    gsap.fromTo(
        ".product-tag",
        {
            y: 6,
            scale: 0.92,
            opacity: 0.96,
        },
        {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.35,
            ease: "power3.out",
            stagger: 0.05,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                once: true,
            },
        }
    );
};
