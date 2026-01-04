"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Header() {
    const pathname = usePathname();

    const headerRef = useRef<HTMLHeadElement | null>(null);
    const logoRef = useRef<HTMLAnchorElement | null>(null);
    const navRef = useRef<HTMLElement | null>(null);
    const ctaRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        if (!headerRef.current) return;

        const header = headerRef.current;

        /* =========================
           HEADER HOVER (GROUP)
        ========================= */
        const onEnter = () => {
            gsap.to(logoRef.current, {
                y: -2,
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
            });

            gsap.to(ctaRef.current, {
                y: -2,
                scale: 1.03,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const onLeave = () => {
            gsap.to([logoRef.current, ctaRef.current], {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        header.addEventListener("mouseenter", onEnter);
        header.addEventListener("mouseleave", onLeave);

        return () => {
            header.removeEventListener("mouseenter", onEnter);
            header.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    const linkClass = (href: string) =>
        `relative transition ${
            pathname === href
                ? "text-zinc-900 dark:text-zinc-100"
                : "text-zinc-700 dark:text-zinc-300"
        }`;

    return (
        <header
            ref={headerRef}
            className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 bg-transparent"
        >
            {/* LOGO */}
            <Link
                href="/"
                ref={logoRef}
                className="flex items-center gap-3 will-change-transform"
            >
                <div className="flex h-10 w-10 items-center justify-center">
                    <Image
                        src="/abstra_logo.png"
                        alt="Abstra Technologies logo"
                        width={40}
                        height={40}
                        className="object-contain"
                        priority
                    />
                </div>

                <span className="text-lg font-semibold tracking-tight">
                    <span className="gold-shine">Abstra</span>{" "}
                    <span className="text-zinc-800 dark:text-zinc-200">
                        Technologies
                    </span>
                </span>
            </Link>

            {/* NAVIGATION */}
            <nav
                ref={navRef}
                className="hidden items-center gap-8 text-sm select-none font-medium md:flex"
            >
                {[
                    { href: "/", label: "Home" },
                    { href: "/products", label: "Products" },
                    { href: "/company", label: "About Us" },
                    { href: "/team", label: "The Team" },
                    { href: "/careers", label: "Careers" },
                ].map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`${linkClass(item.href)} will-change-transform`}
                        onMouseEnter={(e) =>
                            gsap.to(e.currentTarget, {
                                y: -3,
                                duration: 0.25,
                                ease: "power2.out",
                            })
                        }
                        onMouseLeave={(e) =>
                            gsap.to(e.currentTarget, {
                                y: 0,
                                duration: 0.25,
                                ease: "power2.out",
                            })
                        }
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            {/* CTA */}
            <Link
                ref={ctaRef}
                href="/contact"
                className="rounded-full bg-black/90 px-5 py-2 text-sm font-medium text-white transition dark:bg-white/90 dark:text-black will-change-transform"
            >
                Contact Us
            </Link>
        </header>
    );
}
