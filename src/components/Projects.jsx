import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

const projects = [
  {
    title: "CrimeGuard",
    category: ["Full Stack", "Frontend", "AI/ML"],
    description:
      "Built an AI-powered Crime Hotspot Prediction and Safety Analytics System using DBSCAN clustering to identify crime-prone regions from geospatial datasets. Implemented safest-route recommendation using OSRM API with hotspot-based risk scoring, real-time alerts, incident reporting, authentication, women safety SOS, and GeoJSON-based visual analytics.",
    github: "https://github.com/Anyaporwal/MiniProject_6th_sem",
    stack: [
      "React.js",
      "FastAPI",
      "Python",
      "Machine Learning",
      "DBSCAN",
    ],
    year: "2026",
  },
  {
    title: "RCOEM Question Bank System",
    category: ["Full Stack", "Frontend", "AI/ML"],
    description:
      "Developed a centralized MERN platform for managing academic question repositories. Automated PDF parsing, data extraction, and AI-based subject classification. Integrated semantic AI-powered search, analytics-based filtering, JWT authentication, and a responsive admin dashboard for dynamic content management.",
    github: "https://github.com/Anyaporwal/RCOEM_RBU_Question_Bank",
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "AI Search",
    ],
    year: "2026 - Present",
  },
  {
  title: "Flight Management System",
  category: ["Full Stack"],
  description:
    "Built a full-stack Flight Management System with React, Spring Boot, MySQL, and Docker, implementing Create, Read, Search, and Delete operations, RESTful APIs, JPA/Hibernate integration, Axios-based frontend communication, and JUnit testing.Practice project developed to strengthen Spring Boot CRUD operations and REST API development. ",
  github: "https://github.com/Anyaporwal/Flight_Management_System",
  stack: [
    "Spring Boot",
    "Java",
    "React.js",
    "MySQL",
    "Hibernate",
    "Docker"
  ],
  year: "2026",
  },
      {
    title: "Library Search Lite",
    category: ["Frontend"],
    description:
      "Built a responsive book discovery web application with real-time search, smart filtering, persistent bookmarking using Local Storage, dark mode, keyboard accessibility, live statistics, and a mobile-first UI. Implemented instant search by title or author, bookmark management, responsive layouts, and accessibility-focused interactions.",
    demo: "https://librarysearchlitee.netlify.app/",
    github: "https://github.com/Anyaporwal/LibrarySearchLite",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Local Storage",
      "Responsive Design"
    ],
    year: "2025",
  },
  {
    title: "E-Commerce Product Review Intelligence System",
    category: ["AI/ML", "Data Science"],
    description:
      "Developed an end-to-end NLP analytics system to analyze Amazon product reviews and generate actionable business insights. Implemented VADER sentiment analysis and TF-IDF with Logistic Regression classification. Built an interactive Streamlit dashboard for sentiment trends, product performance, and customer insights.",
    demo: "https://e-comproreviewai.streamlit.app/",
    github:
      "https://github.com/Anyaporwal/E-Commerce_Product_Review_Intelligence_System",
    stack: [
      "Python",
      "NLP",
      "Machine Learning",
      "Streamlit",
      "TF-IDF",
    ],
    year: "2026",
  },
  {
    title: "Car Sales Analytics Dashboard",
    category: ["Data Science"],
    description:
      "Developed an interactive Power BI dashboard to analyze sales performance, revenue trends, and customer purchasing patterns across multiple car brands. Performed data cleaning and transformation using SQL and Excel, designed KPI dashboards, and generated actionable insights through trend analysis and reporting.",
    github: "https://github.com/Anyaporwal/Car_Sales_Analytics_Dashboard",
    stack: [
      "Power BI",
      "SQL",
      "Excel",
      "Data Analysis",
      "Dashboarding",
    ],
    year: "2025",
  },
];

const filters = [
  "All",
  "Frontend",
  "Full Stack",
  "AI/ML",
  "Data Science",
];

export function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
  activeFilter === "All"
    ? projects
    : projects.filter((project) =>
        project.category.includes(activeFilter)
      );

  return (
    <section
      id="projects"
      ref={ref}
      className="scroll-mt-20 relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className={`reveal ${isVisible ? "reveal-visible" : ""}`}>
        {/* Heading */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-accent-soft" />

            <div>
              <p className="text-lg font-bold uppercase tracking-[0.2em] text-accent-soft">
                Projects
              </p>

              <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                What I've Built
              </h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-accent text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-accent hover:text-white dark:bg-slate-800 dark:text-slate-300"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="tilt-card group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-lg shadow-slate-200/80 transition hover:border-accent/60 hover:shadow-glow-accent dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-slate-950/70"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-fuchsia-500/5 to-emerald-400/10 opacity-0 transition group-hover:opacity-100" />

              <div className="relative flex-1">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap justify-end gap-1">
                    {project.category.map((cat) => (
                    <span
                      key={cat}
                      className="rounded-full bg-accent/10 px-2 py-1 text-[10px] font-semibold text-accent"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                </div>

                

                

                <p className="mb-3 text-xs text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-2 py-1 text-[10px] text-slate-600 dark:bg-slate-900 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-800">
                <div className="flex gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white transition hover:scale-105"
                    >
                      Live Demo
                      <FiExternalLink size={12} />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1 text-[11px] transition hover:border-accent hover:text-accent dark:border-slate-700"
                  >
                    <FiGithub size={13} />
                    Code
                  </a>
                </div>

                <span className="text-[10px] text-slate-400">
                  {project.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}