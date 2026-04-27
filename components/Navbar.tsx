"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".navbar-container")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <nav
      className={`navbar-container fixed inset-x-0 top-0 z-[100] w-full transition-[background,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80"
          : "border-b border-transparent bg-white/70 backdrop-blur-md dark:bg-slate-950/55"
      }`}
    >
      <div className="mx-auto grid h-14 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:h-16 sm:px-6 md:grid-cols-[auto_1fr_auto] md:gap-4">
        <Link
          href="/"
          className="group flex min-w-0 items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="truncate text-sm font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300 sm:text-base">
            {profile.name}
          </span>
        </Link>

        <ul className="hidden min-w-0 items-center justify-center gap-1 md:flex lg:gap-2">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  prefetch
                  className={`relative block rounded-full px-3 py-2 text-sm font-medium transition-colors lg:px-4 ${
                    active
                      ? "bg-blue-600/10 text-blue-800 ring-1 ring-blue-600/20 dark:bg-blue-500/15 dark:text-blue-200 dark:ring-blue-400/30"
                      : "text-slate-700 hover:bg-slate-100 hover:text-blue-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center justify-end gap-2">
          <Link
            href="/contact"
            prefetch
            onClick={() => setIsMenuOpen(false)}
            className="btn-shine relative hidden items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-center text-xs font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:from-blue-500 hover:to-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 sm:inline-flex sm:px-5 sm:text-sm"
          >
            Contact Me
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 text-slate-600 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <FiX className="h-5 w-5" />
            ) : (
              <FiMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="border-t border-slate-200/80 bg-white/98 shadow-lg backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/98 md:hidden"
          >
            <ul className="flex max-h-[min(70vh,calc(100dvh-5rem))] flex-col gap-1 overflow-y-auto px-4 py-3">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      prefetch
                      onClick={() => setIsMenuOpen(false)}
                      className={`block rounded-xl px-3 py-3 text-sm font-medium transition ${
                        active
                          ? "bg-blue-600/10 text-blue-800 dark:text-blue-200"
                          : "text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/contact"
                  prefetch
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-shine relative mt-1 block rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-blue-600/25"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
