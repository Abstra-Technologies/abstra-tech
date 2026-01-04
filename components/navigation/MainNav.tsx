"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const linkClass = (href: string) =>
        `transition ${
            pathname === href
                ? "text-zinc-900 dark:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        }`;

    return (
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 bg-transparent">
            {/* LOGO */}
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black font-bold">
                    A
                </div>
                <span className="text-lg font-semibold tracking-tight">
          Abstra Technologies
        </span>
            </div>

            {/* NAVIGATION */}
            <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
                <Link href="/" className={linkClass("/")}>
                    Home
                </Link>
                <Link href="/products" className={linkClass("/products")}>
                    Products
                </Link>
                <Link href="/company" className={linkClass("/company")}>
                    Company
                </Link>
                <Link href="/careers" className={linkClass("/careers")}>
                    Careers
                </Link>
            </nav>

            {/* CTA */}
            <Link
                href="/contact"
                className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
                Contact Us
            </Link>
        </header>
    );
}
