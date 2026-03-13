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
        {/* Heading */}
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

        {/* About Content Cards */}
        <div className="mt-6 grid gap-4">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              I’m an aspiring Software Engineer with a strong foundation in Data
              Structures and Algorithms and hands-on experience building scalable
              full-stack applications using the MERN stack.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              I enjoy developing responsive and user-focused web applications while
              integrating modern technologies such as AI APIs to create intelligent,
              real-world solutions.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              With consistent practice in problem solving and competitive programming,
              I focus on writing clean, efficient code and continuously improving my
              engineering skills.
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-6 grid gap-3 text-xs sm:grid-cols-3 sm:text-[11px]">
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-slate-950/70">
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Focus
            </p>
            <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
              Full Stack Development & DSA
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-slate-950/70">
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Location
            </p>
            <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
              Nagpur, Maharashtra, India (Remote friendly)
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-slate-950/70">
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Open to
            </p>
            <p className="mt-1 font-semibold text-emerald-500 dark:text-emerald-400">
              Software Developer & <br/>Frontend Developer Roles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}