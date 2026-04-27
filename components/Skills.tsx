"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Skill = {
  name: string;
  icon: string;
  category:
    | "frontend"
    | "backend"
    | "mobile"
    | "blockchain"
    | "tools"
    | "other";
};

const categories: { id: string; label: string }[] = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "mobile", label: "Mobile" },
  { id: "backend", label: "Backend" },
  { id: "blockchain", label: "Blockchain" },
  { id: "tools", label: "Tools" },
  { id: "other", label: "Other" },
];

/** Aligned with My CV.pdf — Technical Skills + Core Strengths */
const skills: Skill[] = [
    { name: "HTML5", icon: "📄", category: "frontend" },
    { name: "CSS3", icon: "🎨", category: "frontend" },
    { name: "JavaScript", icon: "📜", category: "frontend" },
    { name: "TypeScript", icon: "📘", category: "frontend" },
    { name: "React.js", icon: "⚛️", category: "frontend" },
    { name: "Next.js", icon: "▲", category: "frontend" },
    { name: "Tailwind CSS", icon: "🌊", category: "frontend" },
    { name: "Bootstrap", icon: "🅱️", category: "frontend" },
    { name: "React Native", icon: "📱", category: "mobile" },
    { name: "Expo", icon: "📲", category: "mobile" },
    { name: "Node.js", icon: "🟢", category: "backend" },
    { name: "Express.js", icon: "🚂", category: "backend" },
    { name: "REST APIs", icon: "🔌", category: "backend" },
    { name: "JWT / Auth", icon: "🔐", category: "backend" },
    { name: "MongoDB", icon: "🍃", category: "backend" },
    { name: "PostgreSQL", icon: "🐘", category: "backend" },
    { name: "MySQL", icon: "🐬", category: "backend" },
    { name: "Solidity", icon: "🔷", category: "blockchain" },
    { name: "Ethereum", icon: "💎", category: "blockchain" },
    { name: "BSC", icon: "🟡", category: "blockchain" },
    { name: "Polygon", icon: "🟣", category: "blockchain" },
    { name: "Algorand", icon: "🔺", category: "blockchain" },
    { name: "Web3.js", icon: "🌐", category: "blockchain" },
    { name: "Ethers.js", icon: "⚡", category: "blockchain" },
    { name: "Smart Contracts", icon: "📝", category: "blockchain" },
    { name: "Git", icon: "🔄", category: "tools" },
    { name: "GitHub", icon: "🐙", category: "tools" },
    { name: "Hardhat", icon: "🧢", category: "tools" },
    { name: "Foundry", icon: "⚒️", category: "tools" },
    { name: "Remix", icon: "🧪", category: "tools" },
    { name: "Postman", icon: "📮", category: "tools" },
    { name: "VS Code", icon: "📝", category: "tools" },
    { name: "UI / UX implementation", icon: "🎯", category: "other" },
    { name: "Scalable architecture", icon: "🏗️", category: "other" },
    { name: "Debugging", icon: "🔍", category: "other" },
    { name: "Team collaboration", icon: "🤝", category: "other" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.06 },
    },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 14, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 380, damping: 26 },
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-0 sm:px-0">
      <div className="chip-scroll -mx-1 mb-10 flex gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
        {categories.map((cat) => {
          const active = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 snap-start rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                active
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/25"
                  : "border border-slate-200/90 bg-white/90 text-slate-700 hover:border-blue-200 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-blue-500/40"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={`${activeCategory}-${skill.name}`}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-elevated group rounded-2xl p-4 text-center sm:p-6"
            >
              <div className="mb-3 text-3xl transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:text-4xl">
                {skill.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
