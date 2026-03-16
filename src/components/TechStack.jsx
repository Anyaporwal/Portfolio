import { useScrollReveal } from "../hooks/useScrollReveal";

const skills = [
  { name: "React", icon: "devicon-react-original colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express.js", icon: "devicon-express-original colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original colored" },
  { name: "IntelliJ IDEA", icon: "devicon-intellij-plain colored" },
  { name: "Canva", icon: "devicon-canva-original colored" }
];

export function TechStack() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="tech"
      ref={ref}
      className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className={`reveal ${isVisible ? "reveal-visible" : ""}`}>

        {/* Heading */}
        <div className="mb-8 flex items-center justify-between gap-4">
       <div className="mb-6 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-accent-soft" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent-soft">
                Tech Stack
              </p>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                Technologies I work with
              </h2>
            </div>
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 shadow-sm transition hover:scale-[1.03] hover:border-green-400 dark:border-slate-800 dark:bg-slate-950/60"
            >
              
              {/* Icon */}
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-900">
                <i className={`${skill.icon} text-xl`}></i>
              </div>

              {/* Name */}
              <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                {skill.name}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}