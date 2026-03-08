import { useScrollReveal } from '../hooks/useScrollReveal';

export function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="education"
      ref={ref}
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className={`reveal ${isVisible ? 'reveal-visible' : ''}`}>
        <div className="mb-8 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-accent-soft" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-soft">
              Education
            </p>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
              Academic background
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-lg shadow-slate-200/80 sm:p-6 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-slate-950/70">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  B.Sc. in Computer Science
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Your University • City, Country
                </p>
              </div>
              <p className="rounded-full bg-slate-100 px-3 py-1 text-[11px] text-slate-600 dark:bg-slate-900/80 dark:text-slate-300">
                2019 – 2023
              </p>
            </div>
            <ul className="mt-4 grid gap-2 text-xs text-slate-600 sm:grid-cols-2 dark:text-slate-300">
              <li>Strong foundation in algorithms, data structures, and OOP.</li>
              <li>Projects focused on web applications and user interfaces.</li>
              <li>Coursework: Web Development, HCI, Databases, Software Engineering.</li>
              <li>Graduated with distinction / your GPA or honors (edit here).</li>
            </ul>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-md shadow-slate-200/80 sm:p-5 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Certifications
              </p>
              <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <li>Frontend Web Development Certification – Platform / Year</li>
                <li>JavaScript Algorithms and Data Structures – Platform / Year</li>
                <li>Any other relevant certificate you want to highlight.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-md shadow-slate-200/80 sm:p-5 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Achievements
              </p>
              <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <li>Hackathon finalist / winner – event name and year.</li>
                <li>Top X% in a coding challenge / platform.</li>
                <li>Teaching assistant / mentor for web development course.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

