"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Skill = {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "blockchain" | "tools" | "other";
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const skills: Skill[] = [
    // Frontend
    { name: "HTML", icon: "📄", category: "frontend" },
    { name: "CSS", icon: "🎨", category: "frontend" },
    { name: "JavaScript", icon: "📜", category: "frontend" },
    { name: "TypeScript", icon: "📘", category: "frontend" },
    { name: "React", icon: "⚛️", category: "frontend" },
    { name: "Next.js", icon: "▲", category: "frontend" },
    { name: "Tailwind CSS", icon: "🌊", category: "frontend" },

    // Backend
    { name: "Node.js", icon: "🟢", category: "backend" },
    { name: "Express", icon: "🚂", category: "backend" },
    { name: "MongoDB", icon: "🍃", category: "backend" },
    { name: "PostgreSQL", icon: "🐘", category: "backend" },
    { name: "GraphQL", icon: "⬡", category: "backend" },

    // Blockchain
    { name: "Solidity", icon: "🔷", category: "blockchain" },
    { name: "Ethereum", icon: "💎", category: "blockchain" },
    { name: "Web3.js", icon: "🌐", category: "blockchain" },
    { name: "Ethers.js", icon: "⚡", category: "blockchain" },
    { name: "Hardhat", icon: "🧢", category: "blockchain" },
    { name: "Truffle", icon: "🍬", category: "blockchain" },
    { name: "Smart Contracts", icon: "📝", category: "blockchain" },
    { name: "DeFi", icon: "💰", category: "blockchain" },
    { name: "NFTs", icon: "🖼️", category: "blockchain" },
    { name: "Binance Smart Chain", icon: "🟡", category: "blockchain" },
    { name: "Polygon", icon: "🟣", category: "blockchain" },
    { name: "Solana", icon: "🟩", category: "blockchain" },

    // Tools
    { name: "Git", icon: "🔄", category: "tools" },
    { name: "Docker", icon: "🐳", category: "tools" },
    { name: "AWS", icon: "☁️", category: "tools" },
    { name: "VS Code", icon: "📝", category: "tools" },
    { name: "MetaMask", icon: "🦊", category: "tools" },
    { name: "IPFS", icon: "📦", category: "tools" },

    // Other
    { name: "Agile", icon: "🔄", category: "other" },
    { name: "UI/UX", icon: "🎯", category: "other" },
    { name: "Testing", icon: "🧪", category: "other" },
    { name: "CI/CD", icon: "⚙️", category: "other" },
    { name: "Tokenomics", icon: "📊", category: "other" },
    { name: "Consensus Mechanisms", icon: "🔗", category: "other" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 } 
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <motion.div 
        className="flex flex-wrap justify-center mb-8 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-full ${
            activeCategory === "all"
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          All
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => setActiveCategory("blockchain")}
          className={`px-4 py-2 rounded-full ${
            activeCategory === "blockchain"
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          Blockchain
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => setActiveCategory("frontend")}
          className={`px-4 py-2 rounded-full ${
            activeCategory === "frontend"
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          Frontend
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => setActiveCategory("backend")}
          className={`px-4 py-2 rounded-full ${
            activeCategory === "backend"
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          Backend
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => setActiveCategory("tools")}
          className={`px-4 py-2 rounded-full ${
            activeCategory === "tools"
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          Tools
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => setActiveCategory("other")}
          className={`px-4 py-2 rounded-full ${
            activeCategory === "other"
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          Other
        </motion.button>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          className="grid gap-8 mb-6 lg:mb-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                rotate: [0, 1, -1, 1, 0], 
                transition: { 
                  duration: 0.5, 
                  rotate: { repeat: 0, duration: 0.3 } 
                } 
              }}
              className="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600 p-6 text-center hover:shadow-md transition-shadow duration-300"
            >
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-bold dark:text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 