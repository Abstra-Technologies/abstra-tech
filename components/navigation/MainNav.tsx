"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const headerRef = useRef<HTMLElement | null>(null);
    const logoRef = useRef<HTMLAnchorElement | null>(null);
    const ctaRef = useRef<HTMLAnchorElement | null>(null);
    const mobileMenuRef = useRef<HTMLDivElement | null>(null);

    /* =========================
       DESKTOP HEADER HOVER
    ========================= */
    useEffect(() => {
        if (!headerRef.current) return;

        const onEnter = () => {
            gsap.to(logoRef.current, { y: -2, duration: 0.3 });
            gsap.to(ctaRef.current, { y: -2, scale: 1.03, duration: 0.3 });
        };

        const onLeave = () => {
            gsap.to([logoRef.current, ctaRef.current], {
                y: 0,
                scale: 1,
                duration: 0.3,
            });
        };

        headerRef.current.addEventListener("mouseenter", onEnter);
        headerRef.current.addEventListener("mouseleave", onLeave);

        return () => {
            headerRef.current?.removeEventListener("mouseenter", onEnter);
            headerRef.current?.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    /* =========================
       MOBILE MENU ANIMATION
    ========================= */
    useEffect(() => {
        if (!mobileMenuRef.current) return;

        gsap.to(mobileMenuRef.current, {
            autoAlpha: open ? 1 : 0,
            y: open ? 0 : -12,
            duration: 0.35,
            ease: "power3.out",
            pointerEvents: open ? "auto" : "none",
        });
    }, [open]);

    /* Close on route change */
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const linkClass = (href: string) =>
        pathname === href
            ? "text-zinc-900 dark:text-zinc-100"
            : "text-zinc-700 dark:text-zinc-300";

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/company", label: "About Us" },
        { href: "/team", label: "The Team" },
        { href: "/careers", label: "Careers" },
    ];

    return (
        <>
            {/* ================= HEADER ================= */}
            <header
                ref={headerRef}
                className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6"
            >
                {/* LOGO */}
                <Link
                    href="/"
                    ref={logoRef}
                    className="flex items-center gap-3"
                >
                    <Image
                        src="/abstra_logo.png"
                        alt="Abstra Technologies logo"
                        width={40}
                        height={40}
                        priority
                    />

                    <span className="text-lg font-semibold tracking-tight">
            <span className="gold-shine">Abstra</span>{" "}
                        <span className="text-zinc-800 dark:text-zinc-200">
              Technologies
            </span>
          </span>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${linkClass(item.href)} transition`}
                            onMouseEnter={(e) =>
                                gsap.to(e.currentTarget, { y: -3, duration: 0.25 })
                            }
                            onMouseLeave={(e) =>
                                gsap.to(e.currentTarget, { y: 0, duration: 0.25 })
                            }
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* DESKTOP CTA */}
                <Link
                    ref={ctaRef}
                    href="/contact"
                    className="hidden md:inline-flex rounded-full bg-black/90 px-5 py-2 text-sm font-medium text-white dark:bg-white/90 dark:text-black"
                >
                    Contact Us
                </Link>

                {/* MOBILE HAMBURGER */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden rounded-full p-2 text-zinc-800 dark:text-zinc-200"
                    aria-label="Toggle Menu"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </header>

            {/* ================= MOBILE FLOATING MENU ================= */}
            <div
                ref={mobileMenuRef}
                className="
          fixed inset-x-4 top-20 z-50
          rounded-2xl border border-zinc-200/50
          bg-white/95 backdrop-blur-xl
          shadow-xl
          dark:bg-zinc-900/95 dark:border-zinc-800
          opacity-0 pointer-events-none
        "
            >
                <nav className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="px-6 py-4 text-sm font-medium text-zinc-800 dark:text-zinc-200"
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        className="px-6 py-4 text-sm font-semibold text-center text-white bg-black dark:bg-white dark:text-black rounded-b-2xl"
                    >
                        Contact Us
                    </Link>
                </nav>
            </div>
        </>
    );
}
