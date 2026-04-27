import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.metaDescription,
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.metaDescription,
    type: "website",
  },
};

const featuredProjects = [
  projects.find((p) => p.slug === "fry-staking-farming") ?? projects[0],
  projects.find((p) => p.slug === "fry-market") ?? projects[1],
  projects.find((p) => p.slug === "impactomoney") ?? projects[2],
].filter(Boolean);

export default function Home() {
  return (
    <>
      <Hero />

      <section className="relative border-y border-slate-200/80 bg-slate-50/80 py-14 dark:border-slate-800/80 dark:bg-slate-950/40 sm:py-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Portfolio
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Featured{" "}
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              A snapshot of recent blockchain work — DeFi, NFTs, and on-chain
              systems built for scale and security.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) =>
              project ? (
                <ProjectCard key={project.slug} {...project} />
              ) : null
            )}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="btn-shine relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:from-blue-500 hover:to-indigo-500 sm:text-base"
            >
              View All Projects
              <svg
                className="ml-2 h-4 w-4 sm:h-5 sm:w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
