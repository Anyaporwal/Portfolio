import { useScrollReveal } from '../hooks/useScrollReveal';

export function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="education"
      ref={ref}
      className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className={`reveal ${isVisible ? 'reveal-visible' : ''}`}>
        {/* Heading */}
        <div className="mb-4 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-accent-soft" />
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-[0.15em] text-accent-soft">
              Education
            </h2>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
              My Academic Background
            </h2>
          </div>
        </div>

        {/* Academic Details */}
        <div className="space-y-6">
          {/* B.Tech */}
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70">
            <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
              B.Tech in Computer Science & Engineering (Data Science)
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Shri Ramdeobaba College of Engineering and Management, Nagpur • 2023 – 2027
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Coursework: Data Structures & Algorithms (DSA), Database Management Systems (DBMS), Object-Oriented Programming (OOP), Artificial Intelligence (AI), Software Engineering, Operating Systems, and Computer Networks.
            </p>
          </div>

          {/* HSC */}
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70">
            <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
              HSC – Higher Secondary Certificate
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Jain International School, Nagpur • 2023
            </p>
          </div>

          {/* SSC */}
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70">
            <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
              SSC – Secondary School Certificate
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Bhavan's B.P Vidya Mandir (B.V.M Ashti), Nagpur • 2021
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}