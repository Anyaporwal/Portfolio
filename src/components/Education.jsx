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
        {/* Heading */}
        <div className="mb-4 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-accent-soft" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-soft">
              Education
            </p>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
              My Academic Background
            </h2>
          </div>
        </div>

        {/* Academic Details */}
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70">
          <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
            B.Tech in Computer Science & Engineering (Data Science)
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Shri Ramdeobaba College of Engineering and Management, Nagpur • 2023 – 2027
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Coursework: Data Structures & Algorithms, DBMS, Object-Oriented Programming,
            Web Development.
          </p>
        </div>

        {/* Certifications */}
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-md shadow-slate-200/80 sm:p-5 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-slate-950/70">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Certifications
          </p>
          <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300">
            <li>Frontend Web Development Certification – Platform / Year</li>
            <li>JavaScript Algorithms and Data Structures – Platform / Year</li>
            <li>Any other relevant certificate you want to highlight.</li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Achievements
          </p>
          <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300">
            <li>Solved 667+ DSA problems across LeetCode, CodeChef, and HackerRank.</li>
            <li>233+ problems solved on LeetCode with 100+ Active Days badge.</li>
            <li>5⭐ Java and 4⭐ SQL rating on HackerRank.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}