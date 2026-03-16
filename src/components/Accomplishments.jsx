import { useScrollReveal } from '../hooks/useScrollReveal';

export function Accomplishments() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="accomplishments"
      ref={ref}
      className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className={`reveal ${isVisible ? 'reveal-visible' : ''}`}>
        {/* Heading */}
        <div className="mb-4 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-accent-soft" />
          <div>
            <p className="text-lg font-bold uppercase tracking-[0.2em] text-accent-soft">

              Accomplishments
            </p>
<h2 className="text-base font-semibold text-slate-900 dark:text-slate-50 sm:text-base">   
                Achievements & Certifications
            </h2>
          </div>
        </div>

        {/* Achievements & Certifications Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          
          {/* Achievements */}
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Achievements
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>Solved 700+ DSA problems across LeetCode, CodeChef, and HackerRank.</li>
              <li>233+ problems solved on LeetCode with 100+ Active Days badge.</li>
              <li>5⭐ Java and 4⭐ SQL rating on HackerRank.</li>
            </ul>
          </div>
          {/* Certifications */}
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Certifications
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>SQL (Basic) Certificate – HackerRank • 2025</li>
              <li>SQL (Intermediate) Certificate – HackerRank • 2026</li>
              <li>Problem Solving (Basic) Certificate – HackerRank • 2026</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}