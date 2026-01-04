"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

interface Props {
    delay?: number;
}

export default function ChineseTagline({ delay = 0 }: Props) {
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        gsap.fromTo(
            textRef.current,
            {
                opacity: 0,
                scrambleText: { text: "" },
            },
            {
                opacity: 1,
                duration: 1.3,
                ease: "power3.out",
                delay, // 👈 controlled externally
                scrambleText: {
                    text: "化繁为简，工程未来",
                    chars: "口工土日木",
                    speed: 0.35,
                    revealDelay: 0.25,
                },
            }
        );
    }, [delay]);

    return (

        <h2
            ref={textRef}
            className="mt-6 text-5xl typographica  font-medium tracking-tight
                 text-zinc-700 dark:text-zinc-300"
        >
            化繁为简，工程未来
        </h2>

    );
}
