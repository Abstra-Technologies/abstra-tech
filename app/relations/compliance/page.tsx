"use client";

import { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

export default function CompliancePage() {
    useEffect(() => {
        const splide = new Splide(".splide", {
            type: "loop",
            gap: "1.5rem",
            pagination: true,
            arrows: true,
            drag: true,
            height: "520px",
        });

        splide.mount();
    }, []);

    return (
        <main className="relative min-h-screen bg-black text-zinc-100 px-6">
            {/* Page header */}
            <section className="mx-auto max-w-5xl pt-24 pb-16 text-center">
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Relations
                </p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight">
                    Compliance
                </h1>
                <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
                    Official regulatory documents and statutory disclosures of
                    Abstra Technologies.
                </p>
            </section>

            {/* Hanging frame */}
            <section className="relative mx-auto max-w-4xl pb-32">
                {/* Hanging wires */}
                <div className="absolute left-1/2 -top-16 flex gap-24 -translate-x-1/2">
                    <div className="h-16 w-px bg-zinc-700/60" />
                    <div className="h-16 w-px bg-zinc-700/60" />
                </div>

                {/* Frame */}
                <div
                    className="
                        relative rounded-2xl border border-zinc-700/60
                        bg-zinc-900/70 backdrop-blur-xl
                        shadow-[0_40px_120px_rgba(0,0,0,0.6)]
                        px-8 py-10
                    "
                >
                    {/* Frame header */}
                    <div className="mb-6 text-center">
                        <h2 className="text-2xl font-medium">
                            Regulatory Compliance Documents
                        </h2>
                        <p className="mt-2 text-sm text-zinc-400">
                            SEC, BIR, and statutory registrations
                        </p>
                    </div>

                    {/* ================= SPLIDE ================= */}
                    <div className="splide rounded-xl border border-zinc-800 bg-black/40">
                        <div className="splide__track">
                            <ul className="splide__list">
                                {/* SEC */}
                                <li className="splide__slide">
                                    <div className="flex h-full flex-col">
                                        <div className="border-b border-zinc-800 px-4 py-2 text-center">
                                            <p className="text-sm font-medium">
                                                SEC Registration
                                            </p>
                                        </div>
                                        <iframe
                                            src="https://res.cloudinary.com/dptmeluy0/image/upload/v1767578041/Certificate_of_Incorp_vmb3mb.pdf"
                                            className="flex-1 w-full"
                                        />
                                    </div>
                                </li>

                                {/* BIR – 2303 */}
                                <li className="splide__slide">
                                    <div className="flex h-full flex-col">
                                        <div className="border-b border-zinc-800 px-4 py-2 text-center">
                                            <p className="text-sm font-medium">
                                                BIR Registration — 2303
                                            </p>
                                        </div>
                                        <iframe
                                            src="https://res.cloudinary.com/dptmeluy0/image/upload/v1767577580/bir_cor_033_arpww5.pdf"
                                            className="flex-1 w-full"
                                        />
                                    </div>
                                </li>


                                {/* Statutory */}
                                {/*<li className="splide__slide">*/}
                                {/*    <div className="flex h-full flex-col">*/}
                                {/*        <div className="border-b border-zinc-800 px-4 py-2 text-center">*/}
                                {/*            <p className="text-sm font-medium">*/}
                                {/*                Statutory Records*/}
                                {/*            </p>*/}
                                {/*        </div>*/}
                                {/*        <iframe*/}
                                {/*            src="https://res.cloudinary.com/YOUR_CLOUD/raw/upload/v1/statutory-records.pdf#view=FitH"*/}
                                {/*            className="flex-1 w-full"*/}
                                {/*        />*/}
                                {/*    </div>*/}
                                {/*</li>*/}

                            </ul>
                        </div>
                    </div>
                    {/* ================= END SPLIDE ================= */}

                    {/* Footer */}
                    <div className="mt-8 border-t border-zinc-800 pt-4 text-center">
                        <p className="text-xs text-zinc-500">
                            Regulatory disclosures · Philippines · Updated 2026
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
