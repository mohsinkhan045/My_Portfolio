"use client";
import Image from "next/image";
import Link from "next/link";

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
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
      <div className="relative w-full h-40 sm:h-48">
        <Image
          className="rounded-t-lg object-cover"
          src={imageUrl}
          alt={title}
          fill
        />
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
          {tags && tags.length > 0 && tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mb-3 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center px-3 py-1.5 sm:py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Details
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
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
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 sm:py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 