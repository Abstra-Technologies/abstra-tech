import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
            {/* ================= HEADER ================= */}
            <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black font-bold">
                        A
                    </div>
                    <span className="text-lg font-semibold tracking-tight">
            Abstra Technologies
          </span>
                </div>

                <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400 md:flex">
                    <Link href="#">Products</Link>
                    <Link href="#">Solutions</Link>
                    <Link href="#">Company</Link>
                    <Link href="#">Careers</Link>
                </nav>

                <Link
                    href="#"
                    className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >
                    Contact Us
                </Link>
            </header>

            {/* ================= HERO ================= */}
            <main className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <span className="mb-4 inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          Technology • Platforms • Engineering
        </span>

                <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
  <span className="inline-block gold-shine">
    Abstra
  </span>{" "}
                    Technologies
                    <span className="block bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent dark:from-white dark:to-zinc-400">
    Corporation
  </span>
                </h1>


                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            Abstracting Complexities, Engineering the Future.
          </span>{" "}
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

            {/* ================= FEATURE STRIP ================= */}
            <section className="border-t border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-black">
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

            {/* ================= FOOTER ================= */}
            <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                © {new Date().getFullYear()} Abstra Technologies Corporation. All rights
                reserved.
            </footer>
        </div>
    );
}
