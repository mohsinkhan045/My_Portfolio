"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-lg text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
          Error 404
        </p>
        <h1 className="mt-4 bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-7xl font-black tracking-tight text-transparent dark:from-white dark:via-slate-200 dark:to-white sm:text-8xl">
          404
        </h1>
        <p className="mt-4 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
          Page not found
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or was moved. Head
          back home to explore the portfolio.
        </p>
        <Link
          href="/"
          className="btn-shine relative mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:from-blue-500 hover:to-indigo-500 sm:text-base"
        >
          Back to home
        </Link>
      </motion.div>
    </section>
  );
}
