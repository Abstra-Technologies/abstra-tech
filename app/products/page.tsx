"use client";

import {useEffect, useRef} from "react";
import Link from "next/link";
import Image from "next/image";

import {
    animateProductsHero,
    animateProductItems,
    animateProductTags,
} from "@/animations/productAnimations";

const products = [
    {
        name: "Upkyp",
        subtitle: "Property Rental Management Platform",
        url: "https://www.upkyp.com",
        description:
            "A unified property and operations management platform designed to simplify complex workflows for landlords, tenants, and administrators.",
        tags: ["Property Tech", "Operations", "Billing", "Analytics-ready"],
    },
];

export default function ProductsPage() {
    /* ================= REFS ================= */
    const heroRef = useRef<HTMLElement | null>(null);
    const productsSectionRef = useRef<HTMLElement | null>(null);
    const itemRefs = useRef<HTMLLIElement[]>([]);

    const addToRefs = (el: HTMLLIElement) => {
        if (el && !itemRefs.current.includes(el)) {
            itemRefs.current.push(el);
        }
    };

    /* ================= ANIMATIONS ================= */
    useEffect(() => {
        animateProductsHero(heroRef.current);

        animateProductItems(
            itemRefs.current,
            productsSectionRef.current
        );

        animateProductTags(productsSectionRef.current);
    }, []);


    return (
        <div className="min-h-screen bg-black text-white">
            {/* ================= HERO ================= */}
            <section
                ref={heroRef}
                className="mx-auto max-w-7xl px-6 py-28 text-center"
            >
                <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                    Products
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    A focused set of platforms designed to solve real operational
                    problems — built with clarity, scale, and long-term reliability.
                </p>
            </section>

            {/* ================= PRODUCT LIST ================= */}
            <section
                ref={productsSectionRef}
                className="mx-auto max-w-7xl px-6 pb-32"
            >
                <ul className="space-y-24">
                    {products.map((product) => (
                        <li
                            ref={addToRefs}
                            key={product.name}
                            className="grid items-center gap-12 md:grid-cols-2"
                        >
                            {/* LEFT — PRODUCT INFO */}
                            <div className="max-w-xl">
                                <h2 className="text-2xl font-semibold">
                                    {product.name}
                                    <span className="block text-sm font-medium text-zinc-500 dark:text-zinc-400">
                                        {product.subtitle}
                                    </span>
                                </h2>

                                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                                    {product.description}
                                </p>

                                {/* TAGS */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {product.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="product-tag rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* LINK */}
                                <div className="mt-8">
                                    <Link
                                        href={product.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative inline-flex items-center text-sm font-medium text-black dark:text-white
                                        after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current
                                        after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Visit Website →
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT — LIVE WEBSITE PREVIEW */}
                            <div className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                                <div className="flex h-8 items-center gap-2 bg-zinc-100 px-3 dark:bg-zinc-800">
                                    <span className="h-3 w-3 rounded-full bg-red-400" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                    <span className="h-3 w-3 rounded-full bg-green-400" />
                                </div>

                                <Image
                                    src="https://api.microlink.io/?url=https%3A%2F%2Fwww.upkyp.com%2F&screenshot=true&embed=screenshot.url"
                                    alt={`${product.name} website preview`}
                                    width={1200}
                                    height={800}
                                    className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
