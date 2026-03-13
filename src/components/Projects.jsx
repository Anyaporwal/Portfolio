import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

const projects = [
  {
    title: "AI Resume Analyzer & Job Match Platform",
    description:
      "AI-powered MERN web app that analyzes resumes, extracts skills using NLP, and matches them with job descriptions. Integrated OpenAI API for resume improvement suggestions and built secure JWT authentication with role-based access.",
    // demo: "https://your-demo-link.com",
    github: "https://github.com/your-github/resume-analyzer",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "OpenAI API", "NLP"],
    year: "2026"
  },
  {
    title: "RCOEM Question Bank System",
    description:
      "Centralized MERN platform to manage and access previous year question papers. Includes AI-powered keyword search, automatic subject extraction from PDFs, and secure role-based authentication for Admin and Students.",
    // demo: "https://your-demo-link.com",
    github: "https://github.com/your-github/question-bank-system",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "AI Search"],
    year: "2025"
  }
];

export function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className={`reveal ${isVisible ? "reveal-visible" : ""}`}>
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-accent-soft" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-soft">
                Projects
              </p>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
              What I've Built              
              </h2>
            </div>
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="tilt-card group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-lg shadow-slate-200/80 transition hover:border-accent/60 hover:shadow-glow-accent dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-slate-950/70"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-fuchsia-500/5 to-emerald-400/10 opacity-0 transition group-hover:opacity-100" />

              <div className="relative flex-1">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    {project.title}
                  </h3>
                </div>

                <p className="mb-3 text-xs text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600 dark:bg-slate-900/80 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mt-2 flex items-center justify-between border-t border-slate-200 pt-3 text-xs dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-accent/90 px-3 py-1 text-[11px] font-semibold text-slate-50 shadow-sm shadow-accent/40 transition hover:-translate-y-0.5 hover:bg-accent"
                  >
                    Live Demo
                    <FiExternalLink className="h-3 w-3" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[11px] text-slate-800 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
                  >
                    <FiGithub className="h-3.5 w-3.5" />
                    Code
                  </a>
                </div>

                <span className="text-[10px] text-slate-400">
                  {project.year} · Full Stack
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}