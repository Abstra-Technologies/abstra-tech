"use client";
import { useEffect, useRef } from "react";
import { animateManifestoIntro,
    animateManifestoHeadline

} from "@/animations/manifestoAnimations";

export default function ManifestoPage() {
    const introRef = useRef<HTMLParagraphElement | null>(null);
    const headlineRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        animateManifestoIntro(introRef.current);
        animateManifestoHeadline(headlineRef.current);

    }, []);


    return (
        <main className="relative mx-auto max-w-4xl px-6 py-28 text-zinc-900 dark:text-zinc-100">
            {/* INTRO */}
            <section className="mb-24">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    Our Manifesto
                </h1>

                <p
                    ref={introRef}
                    className="mt-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
<span
    ref={headlineRef}
    className="
    manifesto-line
    flex
    flex-wrap
    items-center
    gap-x-3 gap-y-2
    text-2xl sm:text-3xl md:text-4xl
    font-medium
    leading-tight
    tracking-tight
    text-zinc-800 dark:text-zinc-100
  "
>
  We still might be amateurs in the industry — and we don’t pretend otherwise.
</span>

                    <span className="manifesto-line block mt-2">
    But we care deeply about how systems are built, how people experience them,
    and how technology should feel when it’s done right.
  </span>
                </p>

            </section>

            {/* SECTION 1 */}
            <section className="mb-20">
                <h2 className="text-2xl font-medium tracking-tight">
                    We Start With Humility
                </h2>

                <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    We are early in our journey. We are learning. We are listening.
                    <br />
                    We don’t assume we know better — we assume there is always more to
                    understand.
                </p>

                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Humility keeps our systems honest and our decisions grounded.
                </p>
            </section>

            {/* SECTION 2 */}
            <section className="mb-20">
                <h2 className="text-2xl font-medium tracking-tight">
                    We Believe Complexity Should Serve People
                </h2>

                <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    The world doesn’t need more complicated tools.
                    <br />
                    It needs tools that respect attention, reduce friction, and make sense
                    to the people who use them.
                </p>

                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    We don’t remove complexity because it’s hard —
                    <br />
                    we remove it because people deserve clarity.
                </p>
            </section>

            {/* SECTION 3 */}
            <section className="mb-20">
                <h2 className="text-2xl font-medium tracking-tight">
                    Engineering Is a Responsibility
                </h2>

                <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Every system we design affects someone’s work, time, or trust.
                    <br />
                    That makes engineering more than execution — it makes it a
                    responsibility.
                </p>

                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    We aim to build things that last, evolve gracefully, and fail
                    thoughtfully when they must.
                </p>
            </section>

            {/* SECTION 4 */}
            <section className="mb-20">
                <h2 className="text-2xl font-medium tracking-tight">
                    We Choose Discipline Over Hype
                </h2>

                <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Trends come and go. Noise fades.
                    <br />
                    Discipline endures.
                </p>

                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    We focus on fundamentals: structure, clarity, security, and purpose —
                    even when no one is watching.
                </p>
            </section>

            {/* SECTION 5 */}
            <section className="mb-24">
                <h2 className="text-2xl font-medium tracking-tight">
                    We Are Building Toward Trust
                </h2>

                <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Trust isn’t claimed. It’s earned — slowly, quietly, consistently.
                </p>

                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Our goal is not to impress.
                    <br />
                    Our goal is to be reliable, understandable, and worthy of use.
                </p>
            </section>

            {/* FOOTER LINE */}
            <footer className="border-t border-zinc-200 pt-10 dark:border-zinc-800">
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    This is how we build.
                    <br />
                    This is what we believe.
                </p>
            </footer>
        </main>
    );
}
