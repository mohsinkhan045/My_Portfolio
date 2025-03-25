"use client";
import Skills from '@/components/Skills';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SkillsPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 pt-28 pb-8">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              My Technical Skills
            </h1>
            <p className="text-lg mb-12 text-gray-600 dark:text-gray-300">
              As a Full Stack Blockchain Developer, I have expertise in various technologies across frontend, backend, and blockchain development.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <Skills />
        </div>
      </section>
    </>
  );
} 