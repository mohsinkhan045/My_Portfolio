"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
                Muhammad Mohsin Saleem
              </span>
            </Link>
            <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xs">
              Full Stack Blockchain Developer specializing in DeFi, NFTs, and Web3 applications.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 sm:mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Navigation
              </h2>
              <ul className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-3 sm:mb-4">
                  <Link 
                    href="/" 
                    className={pathname === "/" ? "text-blue-600 dark:text-blue-500 hover:underline" : "hover:underline"}
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-3 sm:mb-4">
                  <Link 
                    href="/about" 
                    className={pathname === "/about" ? "text-blue-600 dark:text-blue-500 hover:underline" : "hover:underline"}
                  >
                    About
                  </Link>
                </li>
                <li className="mb-3 sm:mb-4">
                  <Link 
                    href="/projects" 
                    className={pathname === "/projects" ? "text-blue-600 dark:text-blue-500 hover:underline" : "hover:underline"}
                  >
                    Projects
                  </Link>
                </li>
                <li className="mb-3 sm:mb-4">
                  <Link 
                    href="/contact" 
                    className={pathname === "/contact" ? "text-blue-600 dark:text-blue-500 hover:underline" : "hover:underline"}
                  >
                    Contact
                  </Link>
                </li>
                <li className="mb-3 sm:mb-4">
                  <Link 
                    href="/skills" 
                    className={pathname === "/skills" ? "text-blue-600 dark:text-blue-500 hover:underline" : "hover:underline"}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/resume" 
                    className={pathname === "/resume" ? "text-blue-600 dark:text-blue-500 hover:underline" : "hover:underline"}
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 sm:mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Blockchain Focus
              </h2>
              <ul className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-3 sm:mb-4">
                  <span className="hover:underline">Smart Contracts</span>
                </li>
                <li className="mb-3 sm:mb-4">
                  <span className="hover:underline">DeFi Development</span>
                </li>
                <li className="mb-3 sm:mb-4">
                  <span className="hover:underline">NFT Solutions</span>
                </li>
                <li>
                  <span className="hover:underline">Web3 Integration</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 sm:mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Connect
              </h2>
              <ul className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-3 sm:mb-4">
                  <a
                    href="https://github.com/mohsinkhan045"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li className="mb-3 sm:mb-4">
                  <a
                    href="https://www.linkedin.com/in/muhammad-mohsin-saleem-745b22267/"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:ms0547884@gmail.com"
                    className="hover:underline"
                  >
                    Email Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xs sm:text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear}{" "}
            <Link href="/" className="hover:underline">
              Muhammad Mohsin Saleem
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-4 sm:space-x-5 sm:justify-center sm:mt-0">
            <a
              href="mailto:ms0547884@gmail.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
              </svg>
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://github.com/mohsinkhan045"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-mohsin-saleem-745b22267/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
              <span className="sr-only">LinkedIn account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 