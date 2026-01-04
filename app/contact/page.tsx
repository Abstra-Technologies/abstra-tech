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

                {/* SOCIAL LINKS */}
                <div className="mt-10 flex items-center justify-center gap-6">
                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/profile.php?id=61584134979460"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abstra Technologies on Facebook"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-100 dark:hover:text-zinc-100"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-4 3.87-4 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.91h-2.4v7.04A10 10 0 0 0 22 12z" />
                        </svg>
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://instagram.com/abstratech"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abstra Technologies on Instagram"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-100 dark:hover:text-zinc-100"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm5.75-2.75a1.25 1.25 0 1 1-1.25-1.25 1.25 1.25 0 0 1 1.25 1.25z" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/company/abstra-technologies-corporation"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abstra Technologies on LinkedIn"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-100 dark:hover:text-zinc-100"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96zM3 8.98h3.96V21H3zM9.5 8.98H13.3v1.64h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.08V21h-3.96v-5.46c0-1.3-.02-2.97-1.81-2.97-1.81 0-2.09 1.41-2.09 2.87V21H9.5z" />
                        </svg>
                    </a>
                </div>
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
                                value="https://abstra.upkyp.com/thankyou"
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
