"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = (
    <div className="bg-white dark:bg-gray-900">
      <section ref={ref} className="pt-16 sm:pt-20 md:pt-24">
        <div className="grid max-w-screen-xl px-4 py-4 sm:py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mr-auto place-self-center lg:col-span-7"
          >
            <motion.h1 
              className="max-w-2xl mb-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
              initial={{ opacity: 0, x: -20 }}
              animate={mounted && isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{" "}
              <motion.span
                className="text-blue-600 dark:text-blue-500"
                initial={{ opacity: 0, y: 20 }}
                animate={mounted && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.05,
                  color: "#2563eb",
                  transition: { duration: 0.3 }
                }}
              >
                Muhammad Mohsin Saleem
              </motion.span>
            </motion.h1>
            <motion.h2 
              className="max-w-2xl mb-4 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={mounted && isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Full Stack Blockchain Developer
            </motion.h2>
            <motion.p 
              className="max-w-2xl mb-6 font-light text-gray-500 md:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
              initial={{ opacity: 0, x: -20 }}
              animate={mounted && isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I'm a passionate Full Stack Blockchain Developer with expertise in building decentralized applications and blockchain solutions. I focus on creating secure, scalable, and user-friendly applications that leverage the power of blockchain technology.
            </motion.p>
            <motion.div 
              className="space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                My Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={mounted && isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-8 lg:mt-0 lg:col-span-5 flex justify-center items-center w-full"
          >
            <motion.div
              className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/Home.webp"
                alt="Muhammad Mohsin Saleem - Full Stack Blockchain Developer"
                fill
                className="rounded-lg object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );

  return content;
} 