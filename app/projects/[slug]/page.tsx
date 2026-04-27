import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Record<string, string | string[] | undefined>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | My Portfolio`,
    description: project.description,
    openGraph: {
      images: [project.imageUrl],
      title: `${project.title} | My Portfolio`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Get 3 random projects different from the current one
  const relatedProjects = projects
    .filter((p) => p.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-6 flex" aria-label="Breadcrumb">
            <ol className="inline-flex flex-wrap items-center gap-1 text-sm md:gap-2">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 mr-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Link
                    href="/projects"
                    className="ml-1 font-medium text-slate-600 transition hover:text-blue-600 md:ml-2 dark:text-slate-400 dark:hover:text-white"
                  >
                    Projects
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ml-1 max-w-[12rem] truncate font-medium text-slate-500 md:ml-2 md:max-w-none dark:text-slate-400">
                    {project.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Case study
          </p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          <div className="mb-8 flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800 ring-1 ring-blue-100 dark:bg-blue-950/50 dark:text-blue-200 dark:ring-blue-800/50 sm:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="relative mb-10 aspect-[21/9] w-full min-h-[220px] overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-xl dark:border-slate-700 dark:bg-slate-800 sm:min-h-[280px] md:h-[400px] md:min-h-0">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
          </div>

          <div className="glass-panel mb-10 rounded-2xl p-6 sm:p-8">
            <p className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              {project.description}
            </p>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {project.longDescription}
            </p>
          </div>

          <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
            Key features
          </h2>
          <ul className="mb-10 list-disc space-y-2 pl-5 text-slate-600 marker:text-blue-500 dark:text-slate-400 sm:pl-6">
            {project.features.map((feature, index) => (
              <li key={index} className="leading-relaxed">
                {feature}
              </li>
            ))}
          </ul>

          <div className="mb-12 flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:from-blue-500 hover:to-indigo-500 sm:text-base"
              >
                Live demo
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300/90 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 sm:text-base"
              >
                View source
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
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
              </a>
            )}
          </div>

          <div className="mt-12 border-t border-slate-200/80 pt-10 dark:border-slate-800">
            <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
              Related projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
              {relatedProjects.map((relatedProject) => (
                <div 
                  key={relatedProject.slug} 
                  className="card-elevated flex flex-col overflow-hidden rounded-2xl"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      className="object-cover"
                      src={relatedProject.imageUrl}
                      alt={relatedProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-grow flex-col p-4 sm:p-5">
                    <h3 className="mb-2 text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                      {relatedProject.title}
                    </h3>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {relatedProject.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-950/50 dark:text-blue-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {relatedProject.tags.length > 2 && (
                        <span className="self-center text-xs text-slate-500 dark:text-slate-400">
                          +{relatedProject.tags.length - 2}
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/projects/${relatedProject.slug}`}
                      className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:from-blue-500 hover:to-indigo-500"
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 