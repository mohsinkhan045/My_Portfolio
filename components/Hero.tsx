"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

/** Above-the-fold: no scroll/mount gating so LCP and first paint stay fast. */
export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-500/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-500/20"
        aria-hidden
      />

      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:gap-12 sm:px-6 sm:py-14 lg:grid-cols-12 lg:gap-14 lg:py-20">
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-blue-700 shadow-sm backdrop-blur dark:border-blue-500/30 dark:bg-slate-900/70 dark:text-blue-300 sm:text-xs">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="truncate">{profile.currentBadge}</span>
            </div>

            <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl xl:text-6xl">
              Hi, I&apos;m{" "}
              <span className="text-gradient">Muhammad Mohsin Saleem</span>
            </h1>

            <h2 className="mt-3 max-w-2xl text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-2xl md:text-3xl xl:text-4xl">
              {profile.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              {profile.heroSummary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/projects"
                className="btn-shine relative inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:from-blue-500 hover:to-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] sm:text-base"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-300/90 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:border-blue-300 hover:bg-white hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-600 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-blue-500/50 dark:hover:bg-slate-900 sm:text-base"
              >
                Let&apos;s Talk
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3 border-t border-slate-200/80 pt-8 dark:border-slate-800">
              {profile.stats.map(({ value, label }) => (
                <div key={label} className="text-center sm:text-left">
                  <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 sm:text-xs">
                    {label}
                  </dt>
                  <dd className="mt-1 text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <motion.div
            initial={false}
            className="flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div
                className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-blue-600/25 via-indigo-500/20 to-sky-500/25 blur-2xl"
                aria-hidden
              />
              <motion.div
                className="animate-float-soft relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/60 bg-white shadow-2xl ring-1 ring-slate-900/5 motion-reduce:animate-none dark:border-slate-700 dark:bg-slate-900 dark:ring-white/10 sm:aspect-[3/4] lg:max-h-[min(520px,70vh)]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <Image
                  src="/images/Mohsin.jpeg"
                  alt={`${profile.name} — ${profile.title}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
