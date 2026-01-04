export default function ThankYouPage() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50 flex items-center justify-center px-6">
            <div className="mx-auto max-w-xl text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                    <svg
                        className="h-8 w-8 text-emerald-600 dark:text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>

                <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Message Sent
                </h1>

                <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Thank you for reaching out to Abstra Technologies.
                    We’ve received your message and will respond thoughtfully as soon as possible.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <a
                        href="/"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                    >
                        Back to Home
                    </a>

                    <a
                        href="/company"
                        className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-8 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
                    >
                        Learn About Us
                    </a>
                </div>
            </div>
        </div>
    );
}
