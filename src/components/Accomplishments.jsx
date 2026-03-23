import { useScrollReveal } from '../hooks/useScrollReveal';

export function Accomplishments() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="accomplishments"
      ref={ref}
      className="scroll-mt-20 relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8"
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

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">

          {/* Achievements */}
          <div
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/80 
            dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70
            transition-all duration-500 ease-out
            hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/20
            animate-fadeUp"
            style={{ animationDelay: '0.1s' }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
              Achievements
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li className="transition hover:translate-x-1">
                Solved 700+ DSA problems across LeetCode, CodeChef, and HackerRank.
              </li>
              <li className="transition hover:translate-x-1">
                233+ problems solved on LeetCode with 100+ Active Days badge.
              </li>
              <li className="transition hover:translate-x-1">
                5⭐ Java and 4⭐ SQL rating on HackerRank.
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/80 
            dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70
            transition-all duration-500 ease-out
            hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/20
            animate-fadeUp"
            style={{ animationDelay: '0.2s' }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
              Certifications
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li className="transition hover:translate-x-1">
                SQL (Basic) Certificate – HackerRank • 2025
              </li>
              <li className="transition hover:translate-x-1">
                SQL (Intermediate) Certificate – HackerRank • 2026
              </li>
              <li className="transition hover:translate-x-1">
                Problem Solving (Basic) Certificate – HackerRank • 2026
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}