import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/profile";
import { Metadata } from "next";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

export const metadata: Metadata = {
  title: `Contact | ${profile.name}`,
  description: `Contact ${profile.name} — ${profile.title}. ${profile.metaDescription}`,
  openGraph: {
    title: `Contact | ${profile.name}`,
    description: `Contact ${profile.name} for blockchain engineering and Web3 projects.`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Let&apos;s build{" "}
            <span className="text-gradient">something great</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            Open to full stack, mobile, and blockchain engagements — product
            builds, integrations, and collaborations. I typically reply within 1–2
            business days.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <h2 className="mb-6 text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                Contact information
              </h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300">
                    <FiMail className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Email
                    </h3>
                    <a
                      href={`mailto:${profile.contact.email}`}
                      className="mt-1 inline-block text-sm text-blue-600 transition hover:underline dark:text-blue-400"
                    >
                      {profile.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600 dark:bg-indigo-400/20 dark:text-indigo-300">
                    <FiGithub className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      GitHub
                    </h3>
                    <a
                      href={profile.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm text-blue-600 transition hover:underline dark:text-blue-400"
                    >
                      {profile.contact.github.replace("https://", "")}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-600/10 text-sky-600 dark:bg-sky-400/20 dark:text-sky-300">
                    <FiLinkedin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      LinkedIn
                    </h3>
                    <a
                      href={profile.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm text-blue-600 transition hover:underline dark:text-blue-400"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300">
                    <FiPhone className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Phone / WhatsApp
                    </h3>
                    <a
                      href={`tel:${profile.contact.phoneTel}`}
                      className="mt-1 block text-sm text-blue-600 transition hover:underline dark:text-blue-400"
                    >
                      {profile.contact.phoneDisplay}
                    </a>
                    <a
                      href={profile.contact.whatsappWa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-blue-600 transition hover:underline dark:text-blue-400"
                    >
                      WhatsApp
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 border-t border-slate-200/80 pt-4 dark:border-slate-700">
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Location (CV):
                    </span>{" "}
                    {profile.contact.location}
                  </div>
                </li>
              </ul>
            </div>
            <p className="rounded-xl border border-slate-200/80 bg-white/60 px-4 py-3 text-xs leading-relaxed text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400 sm:text-sm">
              For project quotes, include stack (web / mobile / blockchain),
              timeline, and links to specs or repos.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
