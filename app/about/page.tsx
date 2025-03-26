"use client";
import Skills from "@/components/Skills";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
  // Create refs for the sections we want to animate
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const journeyRef = useRef(null);
  
  // Check if elements are in view
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const imageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const journeyInView = useInView(journeyRef, { once: true, amount: 0.3 });
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen relative">
      <section className="bg-white dark:bg-gray-900 pt-16 sm:pt-20 md:pt-24">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <motion.div 
            ref={aboutRef}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="font-light text-gray-500 sm:text-lg dark:text-gray-400"
          >
            <motion.h1 
              variants={fadeInUp}
              className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
            >
              About Me
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="mb-4"
            >
              Hi there! I'm Muhammad Mohsin Saleem, a passionate Full Stack Blockchain Developer with expertise in building decentralized applications and blockchain solutions. I focus on creating secure, scalable, and user-friendly applications that leverage the power of blockchain technology.
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="mb-4"
            >
              My journey in blockchain development began with a strong foundation in web development, where I discovered the transformative potential of decentralized systems. Since then, I've been constantly learning and adapting to new blockchain technologies and methodologies to stay at the forefront of this rapidly evolving industry.
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="mb-4"
            >
              When I'm not coding smart contracts or building dApps, I enjoy researching new blockchain protocols, participating in hackathons, and contributing to the blockchain community. I believe in the power of blockchain to create more transparent, secure, and equitable systems across various industries.
            </motion.p>
          </motion.div>
          <motion.div 
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={fadeInRight}
            className="mt-8"
          >
            <motion.div 
              className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-lg shadow-xl overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                className="rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2055&q=80"
                alt="Muhammad Mohsin Saleem - Full Stack Blockchain Developer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <Skills />
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <motion.div 
            ref={journeyRef}
            initial="hidden"
            animate={journeyInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400"
          >
            <motion.h2 
              variants={fadeInLeft}
              className="mb-4 text-3xl sm:text-4xl tracking-tight font-bold text-gray-900 dark:text-white"
            >
              My Journey
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="mb-4 font-light"
            >
              I started my professional career after developing a strong foundation in full-stack web development. As blockchain technology began to emerge as a transformative force, I shifted my focus to specialize in this cutting-edge field, mastering smart contracts, decentralized applications, and blockchain architecture.
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="mb-4 font-light"
            >
              Throughout my career, I've worked with various blockchain platforms including Ethereum, Binance Smart Chain, Solana, and Polygon. I've developed expertise in smart contract development using Solidity, Web3.js, and Ethers.js, along with experience in building secure and optimized blockchain solutions for various use cases.
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="mb-4 font-medium"
            >
              My full-stack expertise allows me to create complete blockchain solutions—from designing secure smart contracts to developing intuitive front-end interfaces that make blockchain technology accessible to everyone. I remain committed to writing secure, efficient code and staying at the forefront of blockchain innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 