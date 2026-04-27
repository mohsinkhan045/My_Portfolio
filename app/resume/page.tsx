"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const CV_PATH = "/resume/My%20CV.pdf";

export default function ResumePage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <motion.div
          className="mx-auto mb-10 max-w-2xl text-center lg:mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            Resume
          </motion.p>
          <motion.h1
            className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Experience &amp;{" "}
            <span className="text-gradient">education</span>
          </motion.h1>
          <motion.p
            className="text-sm font-light text-slate-600 dark:text-slate-400 sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Matches <strong className="font-medium">My CV.pdf</strong> in{" "}
            <code className="rounded bg-slate-100 px-1 text-xs dark:bg-slate-800">
              public/resume/
            </code>
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={CV_PATH}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:from-blue-500 hover:to-indigo-500 sm:text-base"
            >
              Download CV (PDF)
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/90 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-500/50 sm:text-base"
            >
              View CV
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="card-elevated mx-auto mb-10 max-w-3xl rounded-2xl border border-slate-200/80 p-6 sm:p-8 dark:border-slate-700/80"
          {...fadeIn}
        >
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
            About me
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            {profile.resume.aboutMe}
          </p>
        </motion.div>

        <motion.div className="mx-auto max-w-3xl space-y-4" {...fadeIn}>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Professional experience
          </h2>
          {profile.resume.jobs.map((job, index) => (
            <motion.div
              key={job.company + job.period}
              className="card-elevated rounded-2xl border border-slate-200/80 p-5 sm:p-6 dark:border-slate-700/80"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.45 }}
              whileHover={{ y: -2 }}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {job.title}
              </h3>
              <p className="mb-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                {job.company} | {job.period}
              </p>
              <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
                {job.location}
              </p>
              <ul className="list-inside list-disc space-y-1.5 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {"companyUrl" in job && job.companyUrl ? (
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Website:
                  </span>{" "}
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {job.companyUrl.replace("https://", "")}
                  </a>
                </p>
              ) : null}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-3xl space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Key projects (CV)
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.resume.keyProjects.map((kp) => (
              <div
                key={kp.title}
                className="card-elevated rounded-2xl border border-slate-200/80 p-4 dark:border-slate-700/80"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {kp.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {kp.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="space-y-4">
            {profile.resume.educationDetailed.map((ed) => (
              <div
                key={ed.title + ed.period}
                className="card-elevated rounded-2xl border border-slate-200/80 p-5 dark:border-slate-700/80"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {ed.title}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {ed.institution} | {ed.period}
                </p>
                <p className="text-slate-500 dark:text-slate-400">{ed.location}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
            Certifications
          </h2>
          <div className="space-y-3">
            {profile.resume.certifications.map((c) => (
              <div
                key={c.title + c.issuer}
                className="card-elevated rounded-2xl border border-slate-200/80 p-4 dark:border-slate-700/80"
              >
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {c.issuer} | {c.period}
                </p>
                {"url" in c && c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {c.url.replace("https://", "")}
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
            Soft skills
          </h2>
          <div className="card-elevated rounded-2xl border border-slate-200/80 p-5 dark:border-slate-700/80">
            <ul className="grid list-inside list-disc gap-2 text-slate-600 dark:text-slate-400 sm:grid-cols-2">
              {profile.resume.softSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
