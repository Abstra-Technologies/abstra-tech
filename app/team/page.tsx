"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Mail,
    Phone,
    Facebook,
    Linkedin,
    Twitter
} from "lucide-react";

const team = [
    {
        name: "Bryan Lim",
        role: "Co-founder",
        bio: "Leads architecture, platform engineering, and long-term technical strategy. Focused on building durable systems that scale responsibly.",
        image: "https://media.licdn.com/dms/image/v2/D5603AQGMLSH52DJ5fQ/profile-displayphoto-crop_800_800/B56Zmj6kqcG4AI-/0/1759391666675?e=1769040000&v=beta&t=V-W5uNZWGRjdu_b7Zm7TdRSg1v9jStBzddqjrVTw2EE", // replace when ready
        socials: {
            linkedin: "https://www.linkedin.com/in/brylimziliang",
            email: "mailto:bryanqlim@gmail.com",
            phone: "mobile: +639213218888",
            wechat: "https://wechat.com/",
            twitter:"https://x.com/lim_bry53805"
        },
    },
    {
        name: "Christian Matthew Untalan",
        role: "Co-Founder",
        bio: "",
        image: "/team/placeholder.jpg",
        socials: {
            email: "mailto:mattuntalan2@gmail.com\n",
            linkedin: "https://www.linkedin.com/in/christianmatthewuntalan/",
            phone: "mobile: +639199928818",
        },
    },
];

export default function TeamPage() {
    return (
        <div className="bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">

            {/* ================= HERO ================= */}
            <section className="mx-auto max-w-7xl px-6 py-28 text-center">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                    Our Team
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    A small, focused group of engineers and builders committed to
                    clarity, responsibility, and long-term thinking.
                </p>
            </section>

            {/* ================= TEAM GRID ================= */}
            <section className="mx-auto max-w-7xl px-6 pb-32">
                <ul className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
                    {team.map((member) => (
                        <li
                            key={member.name}
                            className="flex flex-col items-center text-center"
                        >
                            {/* AVATAR */}
                            <div className="relative h-32 w-32 overflow-hidden rounded-full border border-zinc-300 dark:border-zinc-700">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* NAME */}
                            <h3 className="mt-6 text-lg font-semibold">
                                {member.name}
                            </h3>

                            {/* ROLE */}
                            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                {member.role}
                            </p>

                            {/* BIO */}
                            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                {member.bio}
                            </p>

                            {/* SOCIAL LINKS */}
                            <div className="mt-6 flex items-center gap-4">
                                {member.socials?.linkedin && (
                                    <Link
                                        href={member.socials.linkedin}
                                        target="_blank"
                                        aria-label="LinkedIn"
                                        className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </Link>
                                )}

                                {member.socials?.email && (
                                    <Link
                                        href={member.socials.email}
                                        aria-label="Email"
                                        className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                                    >
                                        <Mail className="h-5 w-5" />
                                    </Link>
                                )}

                                {member.socials?.phone && (
                                    <Link
                                        href={member.socials.phone}
                                        aria-label="Phone"
                                        className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                                    >
                                        <Phone className="h-5 w-5" />
                                    </Link>
                                )}

                                {member.socials?.twitter && (
                                    <Link
                                        href={member.socials.twitter}
                                        aria-label="twitter"
                                        className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                                    >
                                        <Twitter  className="h-5 w-5" />
                                    </Link>
                                )}

                                {member.socials?.wechat && (
                                    <Link
                                        href={member.socials.wechat}
                                        aria-label="Phone"
                                        className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                                    >
                                        <img width="30" height="30" src="https://img.icons8.com/color/48/weixing.png" alt="weixing"/>
                                    </Link>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ================= CLOSING ================= */}
            <section className="border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-black">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        We believe small, disciplined teams build better systems.
                        Every decision is guided by engineering integrity, patience,
                        and respect for the people who rely on our work.
                    </p>
                </div>
            </section>
        </div>
    );
}
