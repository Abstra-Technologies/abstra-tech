"use client";

import { useEffect, useRef } from "react";
import {
    animateCompanyHero,
    animateSection,animateHeroPillars, animateCraftHeadline, animateCraftManifesto
} from "@/animations/companyAnimations";

export default function CompanyPage() {
    const heroRef = useRef<HTMLElement | null>(null);
    const missionRef = useRef<HTMLElement | null>(null);
    const philosophyRef = useRef<HTMLElement | null>(null);
    const workRef = useRef<HTMLElement | null>(null);
    const valuesRef = useRef<HTMLElement | null>(null);
    const closingRef = useRef<HTMLElement | null>(null);
    const pillarsRef = useRef<HTMLUListElement | null>(null);
    const craftTextRef = useRef<HTMLDivElement | null>(null);
    const craftSectionRef = useRef<HTMLElement | null>(null);


    useEffect(() => {
        animateCompanyHero(heroRef.current);
        animateSection(missionRef.current);
        animateSection(philosophyRef.current);
        animateSection(workRef.current);
        animateSection(valuesRef.current);
        animateSection(closingRef.current);
        animateHeroPillars(pillarsRef.current);
        animateCraftHeadline(craftTextRef.current);
        animateCraftManifesto(
            craftSectionRef.current,
            craftTextRef.current
        );
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

                {/* ================= PEOPLE + DATA + PROCESS ================= */}
                <ul
                    ref={pillarsRef}
                    className="mx-auto mt-20 flex max-w-4xl flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-14"
                >
                    {/* PEOPLE */}
                    <li className="hero-pillar flex items-center gap-3 text-xl font-semibold tracking-wide sm:text-2xl">
                        <svg
                            className="h-6 w-6 text-zinc-900 dark:text-zinc-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M15 19a4 4 0 00-6 0m3-9a4 4 0 100-8 4 4 0 000 8z"
                            />
                        </svg>
                        People
                    </li>

                    {/* PLUS */}
                    <li className="text-2xl font-light text-zinc-400 dark:text-zinc-600">
                        +
                    </li>

                    {/* DATA */}
                    <li className="hero-pillar flex items-center gap-3 text-xl font-semibold tracking-wide sm:text-2xl">
                        <svg
                            className="h-6 w-6 text-zinc-900 dark:text-zinc-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        Data
                    </li>

                    {/* PLUS */}
                    <li className="text-2xl font-light text-zinc-400 dark:text-zinc-600">
                        +
                    </li>

                    {/* PROCESS */}
                    <li className="hero-pillar flex items-center gap-3 text-xl font-semibold tracking-wide sm:text-2xl">
                        <svg
                            className="h-6 w-6 text-zinc-900 dark:text-zinc-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M13 7h8m0 0v8m0-8l-8 8M11 17H3m0 0v-8m0 8l8-8"
                            />
                        </svg>
                        Process
                    </li>
                </ul>
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
                    We design and engineer practical, reliable systems that reduce friction, empower users, and stand up to real-world demands.
                </p>
            </section>

            {/* ================= VISION ================= */}
            <section
                ref={missionRef}
                className="mx-auto max-w-5xl px-6 py-24"
            >
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Our Vision
                </h2>
                <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    To abstract complexity so people and organizations can operate with clarity, confidence, and long-term resilience.
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

                    {/* MANIFESTO */}
                    <div className="mt-10 max-w-3xl">
                        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                            Our philosophy is grounded in discipline, patience, and respect for
                            people.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                            We believe meaningful technology is built by placing people at the
                            center — the users who rely on systems every day, and the teams who
                            maintain and evolve them over time. Technology should support human
                            judgment, not replace or burden it.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                            Inspired by the principle of <span className="font-medium">Kaizen</span>,
                            we pursue continuous improvement through small, deliberate refinements.
                            We improve workflows, architectures, and decisions incrementally,
                            knowing that lasting progress is achieved through consistency, not
                            sudden change.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                            We also practice <span className="font-medium">Gaman</span> — the quiet
                            endurance required to face complexity, constraints, and long-term
                            challenges with responsibility and care. We remain committed when
                            systems demand patience, and we do not compromise quality under
                            pressure.
                        </p>

                    </div>

                    {/* PHILOSOPHY PILLARS */}
                    <div className="mt-16 grid gap-12 sm:grid-cols-3">
                        <div>
                            <h3 className="text-lg font-semibold">
                                People at the Center
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                We design systems around real human workflows, responsibilities, and
                                limitations — respecting both users and maintainers.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold">
                                Continuous Improvement
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                We continuously refine systems through thoughtful iteration, ensuring
                                progress remains steady, intentional, and sustainable.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold">
                                Endurance with Integrity
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                We approach complexity with patience and accountability, understanding
                                that durable solutions often require time and perseverance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                ref={craftSectionRef}
                className="mx-auto max-w-7xl px-6 py-32"
            >
                <p
                    ref={craftTextRef}
                    className="craft-headline mx-auto max-w-5xl text-center text-2xl font-medium leading-relaxed tracking-tight text-zinc-800 dark:text-zinc-200 opacity-0 sm:text-3xl"
                >
                    For us, engineering is a craft shaped by people. Every system should
                    become clearer, more dependable, and more humane as it grows.
                </p>
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
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-center">
                        Our Values
                    </h2>

                    <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-zinc-600 dark:text-zinc-400">
                        {/* PEOPLE */}
                        <li className="flex gap-4">
                            <svg
                                className="h-6 w-6 shrink-0 text-zinc-900 dark:text-zinc-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M15 19a4 4 0 00-6 0m3-9a4 4 0 100-8 4 4 0 000 8z"
                                />
                            </svg>
                            <div>
                                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                                    People at the center
                                </h3>
                                <p className="mt-1 text-sm leading-6">
                                    Systems are designed around real human workflows and responsibilities.
                                </p>
                            </div>
                        </li>

                        {/* CLARITY */}
                        <li className="flex gap-4">
                            <svg
                                className="h-6 w-6 shrink-0 text-zinc-900 dark:text-zinc-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M3 12h18"
                                />
                            </svg>
                            <div>
                                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                                    Clarity over complexity
                                </h3>
                                <p className="mt-1 text-sm leading-6">
                                    We remove unnecessary complexity, even when simplification is harder.
                                </p>
                            </div>
                        </li>

                        {/* KAIZEN */}
                        <li className="flex gap-4">
                            <svg
                                className="h-6 w-6 shrink-0 text-zinc-900 dark:text-zinc-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M12 6v12m6-6H6"
                                />
                            </svg>
                            <div>
                                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                                    Continuous improvement
                                </h3>
                                <p className="mt-1 text-sm leading-6">
                                    Small, deliberate improvements compound into lasting progress.
                                </p>
                            </div>
                        </li>

                        {/* GAMAN */}
                        <li className="flex gap-4">
                            <svg
                                className="h-6 w-6 shrink-0 text-zinc-900 dark:text-zinc-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M12 3v18"
                                />
                            </svg>
                            <div>
                                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                                    Endurance with responsibility
                                </h3>
                                <p className="mt-1 text-sm leading-6">
                                    We remain steady and accountable when solving difficult problems.
                                </p>
                            </div>
                        </li>

                        {/* INTEGRITY */}
                        <li className="flex gap-4">
                            <svg
                                className="h-6 w-6 shrink-0 text-zinc-900 dark:text-zinc-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M12 6l6 6-6 6-6-6 6-6z"
                                />
                            </svg>
                            <div>
                                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                                    Engineering integrity
                                </h3>
                                <p className="mt-1 text-sm leading-6">
                                    Decisions are guided by sound engineering principles and longevity.
                                </p>
                            </div>
                        </li>

                        {/* LONG TERM */}
                        <li className="flex gap-4">
                            <svg
                                className="h-6 w-6 shrink-0 text-zinc-900 dark:text-zinc-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M12 8v4l3 3"
                                />
                            </svg>
                            <div>
                                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                                    Long-term thinking
                                </h3>
                                <p className="mt-1 text-sm leading-6">
                                    Systems are built to adapt, scale, and remain dependable over time.
                                </p>
                            </div>
                        </li>
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
