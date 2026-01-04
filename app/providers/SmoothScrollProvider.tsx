"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScrollProvider({
                                                 children,
                                             }: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        // Prevent duplicate smoother (Strict Mode safe)
        if (ScrollSmoother.get()) return;

        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.1,        // professional, calm
            effects: false,    // no parallax by default
            smoothTouch: false,
        });

        ScrollTrigger.refresh();
    }, []);

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                {children}
            </div>
        </div>
    );
}
