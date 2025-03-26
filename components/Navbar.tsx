"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <nav className="navbar-container fixed w-full bg-white dark:bg-gray-900 shadow-sm z-[9999]">
      <div className="w-[90%] max-w-4xl flex flex-wrap items-center justify-between mx-auto p-2 sm:p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-lg sm:text-xl font-semibold whitespace-nowrap dark:text-white">
            Muhammad Mohsin Saleem
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            href="/contact"
            className="hidden md:inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2 sm:mr-3"
          >
            Contact Me
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-1.5 sm:p-2 w-8 h-8 sm:w-10 sm:h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <FiX className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <FiMenu className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>
        <div className="hidden md:flex md:w-auto md:order-1">
          <ul className="flex flex-row space-x-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm hover:text-blue-700 dark:hover:text-blue-500 ${
                    pathname === link.href
                      ? "text-blue-700 dark:text-blue-500"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="items-center justify-between w-[90%] max-w-4xl mx-auto md:hidden absolute top-full left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 z-[9999]"
            >
              <ul className="flex flex-col p-2 mt-2 font-medium border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block py-2 px-3 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
                        pathname === link.href
                          ? "text-blue-700 dark:text-blue-500"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="block py-2 px-3 text-sm rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
} 