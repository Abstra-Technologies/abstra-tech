"use client";

import Link from "next/link";
// IMPLEMENTATION of form using FormSpark

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
            {/* ================= HERO ================= */}
            <section className="mx-auto max-w-7xl px-6 py-28 text-center">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                    Contact Us
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Whether you’re exploring a product, considering a partnership, or
                    discussing a complex system — we’re here to talk.
                </p>
            </section>

            {/* ================= CONTACT OPTIONS ================= */}
            <section className="mx-auto max-w-5xl px-6 py-24">
                <div className="grid gap-16 sm:grid-cols-2">
                    {/* LEFT — INFO */}
                    <div>
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Get in Touch
                        </h2>

                        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                            We approach every conversation with clarity and intent.
                            Tell us about your context, goals, or challenges — and we’ll
                            respond thoughtfully.
                        </p>

                        <div className="mt-8 space-y-4 text-zinc-600 dark:text-zinc-400">
                            <p>
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            Email:
          </span>{" "}
                                <a
                                    href="mailto:abstra.technologies@gmail.com"
                                    className="hover:underline"
                                >
                                    abstra.technologies@gmail.com
                                </a>
                            </p>

                            <p>
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            Website:
          </span>{" "}
                                <a
                                    href="https://abstra.upkyp.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Abstra Technologies
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* RIGHT — FORM */}
                    <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                        <h3 className="text-lg font-semibold">
                            Send Us a Message
                        </h3>

                        <form
                            action="https://submit-form.com/eN56EUQIS"
                            method="POST"
                            className="mt-6 space-y-6"
                        >
                            {/* 🔁 Custom redirect after success */}
                            <input
                                type="hidden"
                                name="_redirect"
                                value="http://localhost:3000/thankyou"
                            />

                            {/* Honeypot (anti-spam) */}
                            <input type="text" name="_honeypot" className="hidden" />

                            {/* Optional subject */}
                            <input
                                type="hidden"
                                name="_subject"
                                value="New Contact Message — Abstra Technologies"
                            />

                            <div>
                                <label className="block text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your name"
                                    className="mt-2 w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-2 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:focus:border-zinc-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="you@example.com"
                                    className="mt-2 w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-2 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:focus:border-zinc-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Tell us about your project or inquiry"
                                    className="mt-2 w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-2 text-sm focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:focus:border-zinc-100"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* ================= CLOSING ================= */}
            <section className="mx-auto max-w-5xl px-6 py-24 text-center">
                <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    We value clarity, thoughtful engineering, and long-term collaboration.
                    If that aligns with how you work — let’s start a conversation.
                </p>
            </section>
        </div>
    );
}
