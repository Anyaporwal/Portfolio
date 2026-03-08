import { useScrollReveal } from '../hooks/useScrollReveal';

export function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className={`reveal ${isVisible ? 'reveal-visible' : ''}`}>
        <div className="mb-6 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-accent-soft" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-soft">
              About
            </p>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
              A bit about who I am
            </h2>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-[3fr,2fr]">
          <div className="space-y-4 text-sm text-slate-600 sm:text-[15px] dark:text-slate-300">
            <p>
              I’m a frontend developer focused on building responsive, accessible
              interfaces with thoughtful motion and attention to detail. I enjoy
              turning complex ideas into clean, performant UI that feels effortless
              to use.
            </p>
            <p>
              My strengths are in React, modern JavaScript, and crafting
              consistent component libraries with Tailwind CSS.
            </p>
            <p>
              Outside of coding, I like exploring interaction design, reading about
              product thinking, and contributing to open source when I can.
            </p>

            <div className="mt-4 grid gap-3 text-xs sm:grid-cols-3 sm:text-[11px]">
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-slate-950/70">
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Focus</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
                  Frontend engineering & UI
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-slate-950/70">
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Location</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
                  Nagpur,Maharshtra,India (Remote friendly)
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-slate-950/70">
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Looking for
                </p>
                <p className="mt-1 font-semibold text-emerald-500 dark:text-emerald-400">
                  SDE & Frontend roles
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-lg shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Education
              </p>
              <ul className="mt-3 space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <li>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">
                    B.Tech in Computer Science (Data Science)
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Shri Ramdeobaba College of Engineering and Management,Nagpur • 2023 – 2027
                  </p>
                  <p className="mt-1 text-[11px]">
                    Coursework in Web Development, Human-Computer Interaction,
                    Algorithms, and Software Engineering.
                  </p>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-lg shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Highlights
              </p>
              <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <li>Built and deployed multiple production React applications.</li>
                <li>Implemented design systems with reusable component libraries.</li>
                <li>Improved performance and Lighthouse scores on existing projects.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

