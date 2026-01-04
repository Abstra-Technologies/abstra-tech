"use client";

import { useEffect, useRef } from "react";
import {
    animateCompanyHero,
    animateSection,
} from "@/animations/companyAnimations";

export default function CompanyPage() {
    const heroRef = useRef<HTMLElement | null>(null);
    const missionRef = useRef<HTMLElement | null>(null);
    const philosophyRef = useRef<HTMLElement | null>(null);
    const workRef = useRef<HTMLElement | null>(null);
    const valuesRef = useRef<HTMLElement | null>(null);
    const closingRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        animateCompanyHero(heroRef.current);
        animateSection(missionRef.current);
        animateSection(philosophyRef.current);
        animateSection(workRef.current);
        animateSection(valuesRef.current);
        animateSection(closingRef.current);
    }, []);

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
            {/* ================= HERO ================= */}
            <section
                ref={heroRef}
                className="mx-auto max-w-7xl px-6 py-28 text-center"
            >
                <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                    Who We Are
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Abstra Technologies is an engineering-driven technology company focused
                    on building systems that solve real-world problems with clarity,
                    scale, and long-term intent.
                </p>
            </section>

            {/* ================= MISSION ================= */}
            <section
                ref={missionRef}
                className="mx-auto max-w-5xl px-6 py-24"
            >
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Our Mission
                </h2>
                <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    To abstract complexity and engineer technology that is practical,
                    reliable, and meaningful.
                    We believe software should reduce friction, empower users, and
                    withstand real-world demands — not chase trends.
                </p>
            </section>

            {/* ================= PHILOSOPHY ================= */}
            <section
                ref={philosophyRef}
                className="border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-black"
            >
                <div className="mx-auto max-w-5xl px-6">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Our Philosophy
                    </h2>

                    <div className="mt-12 grid gap-12 sm:grid-cols-3">
                        {/* content unchanged */}
                    </div>
                </div>
            </section>

            {/* ================= HOW WE WORK ================= */}
            <section
                ref={workRef}
                className="mx-auto max-w-5xl px-6 py-24"
            >
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    How We Work
                </h2>
                <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Our approach is disciplined and intentional. We research deeply,
                    design thoughtfully, and build systems that integrate seamlessly
                    into real environments.
                </p>
                <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    At every stage, the user remains at the center — guiding decisions,
                    validating outcomes, and shaping meaningful impact.
                </p>
            </section>

            {/* ================= VALUES ================= */}
            <section
                ref={valuesRef}
                className="border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-black"
            >
                <div className="mx-auto max-w-5xl px-6">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Our Values
                    </h2>
                    <ul className="mt-10 space-y-6 text-zinc-600 dark:text-zinc-400">
                        {/* unchanged */}
                    </ul>
                </div>
            </section>

            {/* ================= CLOSING ================= */}
            <section
                ref={closingRef}
                className="mx-auto max-w-5xl px-6 py-24 text-center"
            >
                <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Abstra Technologies builds platforms for organizations that value
                    durability, responsibility, and thoughtful engineering — today
                    and into the future.
                </p>
            </section>
        </div>
    );
}
