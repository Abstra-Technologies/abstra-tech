"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
    const pathname = usePathname();

    const linkClass = (href: string) =>
        `relative transition ${
            pathname === href
                ? "text-zinc-900 dark:text-zinc-100"
                : "text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
        }`;

    return (
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 bg-transparent">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
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

                {/* Brand Name */}
                <span className="text-lg font-semibold tracking-tight">
          <span className="gold-shine">Abstra</span>{" "}
                    <span className="text-zinc-800 dark:text-zinc-200">
            Technologies
          </span>
        </span>
            </Link>

            {/* NAVIGATION */}
            <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
                <Link href="/" className={linkClass("/")}>
                    Home
                </Link>
                <Link href="/products" className={linkClass("/products")}>
                    Products
                </Link>
                <Link href="/company" className={linkClass("/company")}>
                    About Us
                </Link>
                <Link href="/team" className={linkClass("/team")}>
                    The Team
                </Link>
                <Link href="/careers" className={linkClass("/careers")}>
                    Careers
                </Link>
            </nav>

            {/* CTA */}
            <Link
                href="/contact"
                className="rounded-full bg-black/90 px-5 py-2 text-sm font-medium text-white transition hover:bg-black dark:bg-white/90 dark:text-black dark:hover:bg-white"
            >
                Contact Us
            </Link>
        </header>
    );
}
