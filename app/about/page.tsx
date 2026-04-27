"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/profile";
import Skills from "@/components/Skills";

export default function AboutPage() {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const journeyRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, amount: 0.25 });
  const imageInView = useInView(imageRef, { once: true, amount: 0.2 });
  const journeyInView = useInView(journeyRef, { once: true, amount: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 36 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.08 },
    },
  };

  return (
    <div className="min-h-screen">
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <motion.div
              ref={aboutRef}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={staggerChildren}
              className="text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
            >
              <motion.p
                variants={fadeInUp}
                className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400"
              >
                About
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
              >
                Building the{" "}
                <span className="text-gradient">decentralized</span> web
              </motion.h1>
              <motion.p variants={fadeInUp} className="mb-4">
                {profile.about.intro}
              </motion.p>
              <motion.p variants={fadeInUp} className="mb-4">
                {profile.about.mid}
              </motion.p>
              <motion.p variants={fadeInUp}>
                {profile.about.close}
              </motion.p>
            </motion.div>

            <motion.div
              ref={imageRef}
              initial="hidden"
              animate={imageInView ? "visible" : "hidden"}
              variants={fadeInRight}
              className="relative"
            >
              <div
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-600/20 via-indigo-500/15 to-sky-500/20 blur-2xl"
                aria-hidden
              />
              <motion.div
                className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border border-white/60 bg-white shadow-2xl ring-1 ring-slate-900/5 dark:border-slate-700 dark:bg-slate-900 dark:ring-white/10 lg:mx-0 lg:max-w-none"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
              >
                <Image
                  src="/images/mohsin-portrait.png"
                  alt={`${profile.name} — ${profile.title}`}
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-slate-50/80 py-12 dark:border-slate-800/80 dark:bg-slate-950/40 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Skills />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            ref={journeyRef}
            initial="hidden"
            animate={journeyInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="glass-panel mx-auto max-w-3xl rounded-2xl p-6 sm:p-10"
          >
            <motion.h2
              variants={fadeInUp}
              className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400"
            >
              Journey
            </motion.h2>
            <motion.h3
              variants={fadeInUp}
              className="mb-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
            >
              Experience &amp; education
            </motion.h3>
            <motion.ul
              variants={fadeInUp}
              className="mb-6 space-y-3 text-sm font-light text-slate-600 dark:text-slate-400 sm:text-base"
            >
              {profile.experience.map((job) => (
                <li key={job.company + job.period} className="flex flex-col border-b border-slate-200/80 pb-3 last:border-0 dark:border-slate-700/80 sm:flex-row sm:justify-between sm:gap-4">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {job.role} · {job.company}
                  </span>
                  <span className="text-slate-500 dark:text-slate-500">
                    {job.location} · {job.period}
                  </span>
                </li>
              ))}
            </motion.ul>
            <motion.p variants={fadeInUp} className="font-medium text-slate-800 dark:text-slate-200">
              {profile.education.degree} — {profile.education.school},{" "}
              {profile.education.location} ({profile.education.period}).
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
