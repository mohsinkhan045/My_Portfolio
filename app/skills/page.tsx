"use client";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => (
    <div className="flex min-h-[12rem] items-center justify-center">
      <div className="h-9 w-9 animate-spin rounded-full border-2 border-blue-600 border-t-transparent dark:border-blue-400" />
    </div>
  ),
});

export default function SkillsPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.35 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Expertise
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
              Technical <span className="text-gradient">skills</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              Frontend, backend, mobile, and blockchain — aligned with my CV
              (React, Next.js, Node, React Native, databases, Solidity &amp;
              multi-chain).
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-slate-50/80 py-12 dark:border-slate-800/80 dark:bg-slate-950/40 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Skills />
        </div>
      </section>
    </>
  );
}
