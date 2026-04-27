"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  slug: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tags = [],
  demoUrl,
  codeUrl,
  slug,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={false}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className="group card-elevated flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-blue-950/20"
    >
      <div className="relative h-44 w-full overflow-hidden sm:h-52">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-slate-950/60" />
        <Image
          className="object-cover transition duration-500 group-hover:scale-105"
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-grow flex-col p-5 sm:p-6">
        <h3 className="mb-2 text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl">
          {title}
        </h3>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {tags?.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-800 ring-1 ring-blue-100 dark:bg-blue-950/50 dark:text-blue-200 dark:ring-blue-800/50"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="self-center text-xs text-slate-500 dark:text-slate-400">
              +{tags.length - 4}
            </span>
          )}
        </div>
        <p className="mb-4 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
          {description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          <Link
            href={`/projects/${slug}`}
            className="btn-shine relative inline-flex flex-1 min-w-[120px] items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:from-blue-500 hover:to-indigo-500 sm:flex-initial"
          >
            Details
            <svg
              className="ml-2 h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 14 10"
              aria-hidden
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/90 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-500/50"
            >
              Live Demo
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/90 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
