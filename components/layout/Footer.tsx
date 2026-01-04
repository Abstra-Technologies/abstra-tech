"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!footerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                footerRef.current,
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%", // when footer enters viewport
                        once: true,       // ✅ animation runs only once
                    },
                }
            );
        }, footerRef);

        return () => ctx.revert(); // cleanup (important for Next.js)
    }, []);

    return (
        <footer
            ref={footerRef}
            className="border-t border-zinc-200 py-10 dark:border-zinc-800"
        >
            <div className="mx-auto max-w-7xl px-6 text-center">
                {/* SOCIAL LINKS */}
                <div className="mb-4 flex justify-center gap-6">
                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/profile.php?id=61584134979460"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abstra Technologies on Facebook"
                        className="text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-4 3.87-4 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.91h-2.4v7.04A10 10 0 0 0 22 12z" />
                        </svg>
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://instagram.com/abstratech"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abstra Technologies on Instagram"
                        className="text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10z" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/company/abstra-technologies-corporation"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abstra Technologies on LinkedIn"
                        className="text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96zM3 8.98h3.96V21H3zM9.5 8.98H13.3v1.64h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.08V21h-3.96v-5.46c0-1.3-.02-2.97-1.81-2.97-1.81 0-2.09 1.41-2.09 2.87V21H9.5z" />
                        </svg>
                    </a>
                </div>

                {/* COPYRIGHT */}
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    © {new Date().getFullYear()}{" "}
                    <span className="gold-shine font-medium">Abstra</span>{" "}
                    Technologies Corporation. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
