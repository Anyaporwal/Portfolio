import { useScrollReveal } from "../hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    ],
  },

  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "ReactJS", icon: "devicon-react-original colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original colored" },
      { name: "Spring Boot", icon: "devicon-spring-plain colored" },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original colored" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "IntelliJ IDEA", icon: "devicon-intellij-plain colored" },
      { name: "Canva", icon: "devicon-canva-original colored" },
    ],
  },
];

export function TechStack() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-20 relative mx-auto max-w-6xl py-8 sm:px-6 lg:px-8"
    >
      <div className={`reveal ${isVisible ? "reveal-visible" : ""}`}>
        
        {/* Heading */}
        <div className="mb-10 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-accent-soft" />
          <div>
            <p className="text-lg font-bold uppercase tracking-[0.2em] text-accent-soft">
              Tech Stack
            </p>
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">
              Technologies I work with
            </h2>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {category.title}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {category.skills.map((skill) => (
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
          ))}
        </div>

      </div>
    </section>
  );
}