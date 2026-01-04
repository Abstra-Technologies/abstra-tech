"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function ChineseTagline({ delay = 0 }) {
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        gsap.fromTo(
            textRef.current,
            {
                opacity: 0,
                filter: "brightness(0.7)",
            },
            {
                opacity: 1,
                duration: 1.3,
                delay,
                ease: "power3.out",
                scrambleText: {
                    text: "化繁为简，工程未来",
                    chars: "口工土日木",
                    speed: 0.35,
                    revealDelay: 0.25,
                },
                onComplete: () => {
                    gsap.to(textRef.current, {
                        backgroundPosition: "200% center",
                        duration: 2.5,
                        repeat: -1,
                        ease: "linear",
                    });
                },
            }
        );
    }, [delay]);

    return (
        <h2
            ref={textRef}
            className="
        mt-6 text-5xl typographica font-medium tracking-tight
        bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-200
        bg-[length:200%_100%]
        bg-clip-text text-transparent
        select-none
      "
        >
            化繁为简，工程未来
        </h2>
    );
}
