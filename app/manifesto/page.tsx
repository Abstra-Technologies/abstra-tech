"use client";

import { useEffect, useRef } from "react";
import {
    animateManifestoIntro,
    animateManifestoHeadline,
    animateHumilitySection,
    animateManifestoSignature
} from "@/animations/manifestoAnimations";

export default function ManifestoPage() {
    const introRef = useRef<HTMLParagraphElement | null>(null);
    const headlineRef = useRef<HTMLSpanElement | null>(null);

    const humilityTitleRef = useRef<HTMLHeadingElement | null>(null);
    const humilityP1Ref = useRef<HTMLParagraphElement | null>(null);
    const humilityP2Ref = useRef<HTMLParagraphElement | null>(null);
    const signatureRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        animateManifestoIntro(introRef.current);
        animateManifestoHeadline(headlineRef.current);
        animateHumilitySection(humilityTitleRef.current, [
            humilityP1Ref.current!,
            humilityP2Ref.current!,
        ]);
        animateManifestoSignature(signatureRef.current);

    }, []);

    return (
        <main className="relative mx-auto max-w-4xl px-6 py-28 text-zinc-900 dark:text-zinc-100">
            {/* INTRO */}
            <section className="mb-24">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    The Abstra Manifesto
                </h1>

                <p
                    ref={introRef}
                    className="mt-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                    At Abstra Technologies, we believe that complexity is not a feature —
                    clarity is.
                </p>

                <span
                    ref={headlineRef}
                    className="
            mt-6
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
          The world is overloaded with systems that are powerful yet fragile,
          advanced yet inaccessible.
        </span>

                <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Too many are built not from necessity, but from fear of being left behind —
                    driven by hype, trends, and the illusion of progress.
                </p>


                <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2">
                    <span className="mini-word-block">We</span>
                    <span className="mini-word-block">exist</span>
                    <span className="mini-word-block">to</span>
                    <span className="mini-word-block">change</span>
                    <span className="mini-word-block">that.</span>
                </p>
            </section>

            {/* SECTION — ABSTRACT */}
            <section className="mb-20">
                <h2 className="text-2xl font-medium tracking-tight">
                    We Abstract, So Humans Can Build
                </h2>

                <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Abstraction is not about hiding complexity —
                    <br />
                    it’s about taming it.
                </p>

                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    We design systems that remove noise, reduce friction, and surface only
                    what truly matters. When technology disappears into clarity, people
                    can focus on progress.
                </p>
            </section>

            {/* SECTION — HUMILITY */}
            <section className="mb-20">
                <h2
                    ref={humilityTitleRef}
                    className="text-2xl font-medium tracking-tight"
                >
                    We Start With Humility
                </h2>

                <p
                    ref={humilityP1Ref}
                    className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                    We are early in our journey. We are learning. We are listening.
                    <br />
                    We don’t assume we know better — we assume there is always more to
                    understand.
                </p>

                <p
                    ref={humilityP2Ref}
                    className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                    Humility keeps our systems honest and our decisions grounded.
                </p>
            </section>

            {/* SECTION — CRAFT */}
            <section className="mb-20">
                <h2 className="text-2xl font-medium tracking-tight">
                    Engineering Is a Craft
                </h2>

                <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    We treat engineering not as output, but as craftsmanship.
                    <br />
                    Every decision has intent.
                    <br />
                    Every system has responsibility.
                    <br />
                    Every line exists to serve a purpose.
                </p>

                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Speed without structure fails.
                    <br />
                    Structure without empathy stagnates.
                    <br />
                    We balance both.
                </p>
            </section>

            {/* SECTION — HUMAN CENTERED */}
            <section className="mb-20">
                <h2 className="text-2xl font-medium tracking-tight">
                    Human-Centered by Default
                </h2>

                <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Technology should amplify human capability, not replace judgment.
                    <br />
                    We design for people first — operators, builders, decision-makers —
                    because systems are only as strong as the humans who trust them.
                </p>
            </section>

            {/* SECTION — SIMPLICITY */}
            <section className="mb-20">
                <h2 className="text-2xl font-medium tracking-tight">
                    Simplicity Is Our Competitive Edge
                </h2>

                <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    We reject bloated features.
                    <br />
                    We reject needless complexity.
                    <br />
                    We reject trends without purpose.
                </p>

                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Simplicity is not minimalism for aesthetics —
                    <br />
                    it is discipline.
                </p>
            </section>

            {/* SECTION — ENDURE */}
            <section className="mb-20">
                <h2 className="text-2xl font-medium tracking-tight">
                    Built to Endure
                </h2>

                <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    We build for today, but engineer for tomorrow.
                    <br />
                    Scalable by design.
                    <br />
                    Secure by principle.
                    <br />
                    Flexible by architecture.
                </p>

                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Our systems are meant to evolve without breaking.
                </p>
            </section>

            {/* SECTION — QUIET POWER */}
            <section className="mb-24">
                <h2 className="text-2xl font-medium tracking-tight">
                    Quietly Powerful
                </h2>

                <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    We don’t chase noise.
                    <br />
                    We don’t chase hype.
                </p>

                <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    We build tools that work — consistently, reliably, invisibly —
                    <br />
                    so progress can speak for itself.
                </p>
            </section>

            {/* PROMISE */}
            <section className="mb-24">
                <h2 className="text-2xl font-medium tracking-tight">
                    Our Promise
                </h2>

                <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    To design technology that feels inevitable.
                    <br />
                    To create systems that earn trust.
                    <br />
                    To abstract complexity into confidence.
                </p>
            </section>

            {/* FOOTER */}
            <footer
                ref={signatureRef}
                className="border-t border-zinc-200 pt-14 dark:border-zinc-800"
            >
                <div className="signature-wrap">
    <span className="signature-line primary gold-shine">
      This is Abstra.
    </span>
                    <span className="signature-line secondary gold-shine">
      Clarity, engineered.
    </span>
                </div>
            </footer>


        </main>
    );
}
