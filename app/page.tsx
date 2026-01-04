"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

import {
    animateTagline,
    animateHypeSection,
    animatePrinciples,
    animateProcessTimeline
} from "@/animations/landingAnimations";

export default function Home() {
    const taglineRef = useRef<HTMLSpanElement | null>(null);
    const hypeSectionRef = useRef<HTMLElement | null>(null);
    const hypeTextRef = useRef<HTMLDivElement | null>(null);
    const principlesRef = useRef<HTMLElement | null>(null);
    const processRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        animateTagline(taglineRef.current);
        animateHypeSection(hypeSectionRef.current, hypeTextRef.current);
        animatePrinciples(principlesRef.current);
        animateProcessTimeline(processRef.current);

    }, []);

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">


            {/* ================= HERO ================= */}
            <main className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <span className="mb-6 inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          Technology • Platforms • Engineering
        </span>

                <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl overflow-hidden">
          <span
              ref={taglineRef}
              className="block font-semibold text-zinc-900 dark:text-zinc-100"
          >
            Abstracting Complexities,
            <br />
            Engineering the Future.
          </span>
                </h1>

                <h2 className="mt-6 text-lg font-medium tracking-wide text-zinc-600 dark:text-zinc-400 sm:text-xl">
                    <span className="gold-shine">Abstra</span> Technologies
                    <span className="block text-sm uppercase tracking-[0.25em] text-zinc-500">
            Corporation
          </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                    We build scalable platforms, intelligent systems, and digital
                    solutions that empower businesses to move faster and smarter.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Link
                        href="#"
                        className="flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                    >
                        Explore Our Solutions
                    </Link>

                    <Link
                        href="#"
                        className="flex h-12 items-center justify-center rounded-full border border-zinc-300 px-8 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
                    >
                        Learn More
                    </Link>
                </div>
            </main>

            {/* ================= HYPE SECTION ================= */}
            <section
                ref={hypeSectionRef}
                className="relative mx-auto max-w-7xl overflow-hidden px-6 py-32 text-center"
            >
                <div
                    ref={hypeTextRef}
                    className="pointer-events-none absolute inset-0 flex items-center justify-center"
                >
          <span className="select-none whitespace-nowrap text-[14rem] font-extrabold uppercase tracking-tight text-zinc-900/5 dark:text-white/5 sm:text-[18rem] md:text-[22rem]">
           Abstra
          </span>
                </div>

                <div className="relative z-10">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        We are not just for the hype of tech.
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Technology is only valuable when it solves real problems.
                        We focus on building systems that are practical, scalable,
                        and engineered for long-term impact.
                    </p>
                </div>
            </section>

            {/* ================= PROCESS SECTION ================= */}
            <section
                ref={processRef}
                className="mx-auto max-w-7xl px-6 py-32"
            >
                {/* HEADER */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        How Abstra Works
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        A disciplined, user-centered approach to building technology that lasts.
                    </p>
                </div>

                {/* TIMELINE */}
                <div className="relative mx-auto mt-20 max-w-6xl">
                    {/* Horizontal Line */}
                    <div className="process-line absolute left-0 right-0 top-6 h-px bg-zinc-300 dark:bg-zinc-700 origin-left" />

                    {/* STEPS */}
                    <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-4">
                        {[
                            {
                                title: "Research",
                                desc: "We deeply understand users, constraints, and real-world problems before writing a single line of code.",
                            },
                            {
                                title: "Design",
                                desc: "We design purposeful systems and experiences shaped around clarity, usability, and intent.",
                            },
                            {
                                title: "Develop",
                                desc: "We engineer scalable, reliable solutions with performance, security, and longevity in mind.",
                            },
                            {
                                title: "Integrate",
                                desc: "We seamlessly embed technology into real environments, workflows, and users’ lives.",
                            },
                        ].map((step) => (
                            <div
                                key={step.title}
                                className="process-step relative text-center"
                            >
                                {/* Dot */}
                                <div className="mx-auto mb-6 h-3 w-3 rounded-full bg-zinc-900 dark:bg-zinc-100" />

                                <h3 className="text-lg font-semibold">{step.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* USER AT THE CENTER */}
                <p className="mx-auto mt-24 max-w-3xl text-center text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    At every stage, the user remains at the center — guiding decisions,
                    validating outcomes, and shaping meaningful impact.
                </p>
            </section>


            {/* ================= FEATURE STRIP ================= */}
            <section
                ref={principlesRef}
                className="border-t border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-black"
            >
                <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-3">
                    {[
                        {
                            title: "Platform Engineering",
                            desc: "Robust, scalable architectures designed for growth and long-term performance.",
                        },
                        {
                            title: "Data & Intelligence",
                            desc: "Analytics-ready systems built to support AI-driven insights and decision-making.",
                        },
                        {
                            title: "Enterprise Solutions",
                            desc: "Custom software tailored to complex operational and business requirements.",
                        },
                    ].map((item) => (
                        <div key={item.title} className="text-center sm:text-left">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                © {new Date().getFullYear()} Abstra Technologies Corporation. All rights
                reserved.
            </footer>
        </div>
    );
}
