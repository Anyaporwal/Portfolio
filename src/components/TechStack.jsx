import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiGit,
  SiFigma
} from 'react-icons/si';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skills = [
  {
    name: 'React',
    icon: SiReact,
    color: 'from-sky-400 to-cyan-400',
    category: 'Frontend'
  },
  {
    name: 'JavaScript (ES6+)',
    icon: SiJavascript,
    color: 'from-yellow-300 to-amber-400',
    category: 'Language'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: 'from-cyan-400 to-sky-400',
    category: 'Styling'
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: 'from-emerald-400 to-lime-400',
    category: 'Backend'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: 'from-slate-200 to-slate-400',
    category: 'Full‑stack'
  },
  {
    name: 'Git & GitHub',
    icon: SiGit,
    color: 'from-orange-400 to-red-400',
    category: 'Workflow'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: 'from-sky-400 to-blue-500',
    category: 'Typed'
  },
  {
    name: 'Figma',
    icon: SiFigma,
    color: 'from-pink-400 to-violet-400',
    category: 'Design'
  }
];

export function TechStack() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="tech"
      ref={ref}
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className={`reveal ${isVisible ? 'reveal-visible' : ''}`}>
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-accent-soft" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-soft">
                Tech stack
              </p>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
                Technologies I work with
              </h2>
            </div>
          </div>
          <p className="max-w-sm text-xs text-slate-500 dark:text-slate-400">
            A focused set of tools I use to design, build, and ship modern web
            experiences.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="tilt-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-md shadow-slate-200/70 transition hover:border-accent/70 dark:border-slate-800 dark:bg-slate-950/60 dark:shadow-slate-950/60"
              >
                <div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition group-hover:opacity-60">
                  <div
                    className={`h-full w-full bg-gradient-to-tr ${skill.color}`}
                  />
                </div>
                <div className="relative flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="icon-pop flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-accent-soft shadow shadow-slate-200/80 dark:bg-slate-900/80 dark:shadow-slate-950/70">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                        {skill.name}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500 dark:bg-slate-900/70 dark:text-slate-300">
                    Core tool
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

