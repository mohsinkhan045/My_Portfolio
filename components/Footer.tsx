"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `transition-colors ${
      pathname === href
        ? "text-blue-600 dark:text-blue-400"
        : "text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
    }`;

  return (
    <footer className="relative mt-auto border-t border-slate-200/80 bg-white/70 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/70">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-block text-lg font-semibold tracking-tight text-slate-900 dark:text-white"
            >
              {profile.name}
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {profile.footerTagline}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={`mailto:${profile.contact.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
                aria-label="Email"
              >
                <FiMail className="h-4 w-4" />
              </a>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
                aria-label="GitHub"
              >
                <FiGithub className="h-4 w-4" />
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <div>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Navigation
              </h2>
              <ul className="space-y-3 text-sm font-medium">
                {[
                  ["/", "Home"],
                  ["/about", "About"],
                  ["/projects", "Projects"],
                  ["/skills", "Skills"],
                  ["/resume", "Resume"],
                  ["/contact", "Contact"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className={linkClass(href)}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Focus
              </h2>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li>Web &amp; mobile apps</li>
                <li>REST APIs &amp; backends</li>
                <li>Smart contracts &amp; Web3</li>
                <li>Dashboards &amp; e-commerce</li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Connect
              </h2>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a
                    href={profile.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={profile.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-8 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500 sm:flex-row sm:text-sm">
          <span>
            © {currentYear}{" "}
            <Link href="/" className="font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">
              {profile.name}
            </Link>
            . All rights reserved.
          </span>
          <span className="text-slate-400 dark:text-slate-600">
            Built with Next.js &amp; Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
