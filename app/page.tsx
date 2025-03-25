import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhammad Mohsin Saleem | Full Stack Blockchain Developer",
  description: "Portfolio of Muhammad Mohsin Saleem, a Full Stack Blockchain Developer specializing in DeFi, NFTs, and Web3 applications.",
  openGraph: {
    title: "Muhammad Mohsin Saleem | Full Stack Blockchain Developer",
    description: "Portfolio of Muhammad Mohsin Saleem, a Full Stack Blockchain Developer specializing in DeFi, NFTs, and Web3 applications.",
    type: "website",
  },
};

// Select featured projects for homepage
const featuredProjects = [
  projects.find(p => p.slug === "fry-staking-farming") || projects[0],
  projects.find(p => p.slug === "fry-market") || projects[1],
  projects.find(p => p.slug === "cross-chain-dex") || projects[2],
];

export default function Home() {
  return (
    <>
      <Hero />
      
      <section className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 text-sm sm:text-base lg:text-xl dark:text-gray-400">
              Check out some of my recent blockchain work
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              project ? <ProjectCard key={index} {...project} /> : null
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <a
              href="/projects"
              className="inline-flex items-center px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View All Projects
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
