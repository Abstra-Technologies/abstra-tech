export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 py-10 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            © {new Date().getFullYear()}{" "}
            <span className="gold-shine font-medium">Abstra</span>{" "}
            Technologies Corporation. All rights reserved.
        </footer>
    );
}
