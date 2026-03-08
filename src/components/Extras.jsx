import { useScrollReveal } from '../hooks/useScrollReveal';

const softSkills = ['Communication', 'Collaboration', 'Ownership', 'Problem solving'];

export function Extras() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="extras"
      ref={ref}
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className={`reveal ${isVisible ? 'reveal-visible' : ''}`}>
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-accent-soft" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-soft">
                Extras
              </p>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
                Beyond the code
              </h2>
            </div>
          </div>
          <p className="max-w-sm text-xs text-slate-500 dark:text-slate-400">
            A quick look at soft skills, awards, and things I&apos;m proud of.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[3fr,2fr]">
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-md shadow-slate-200/80 sm:p-6 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-slate-950/70">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Soft skills
            </p>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
              The non-technical skills that help me collaborate effectively and ship
              projects with a high level of polish.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] text-slate-600 shadow-sm shadow-slate-200/80 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:shadow-slate-950/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-md shadow-slate-200/80 sm:p-5 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Awards & highlights
              </p>
              <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <li>Best UI/UX in a hackathon – Event name, Year.</li>
                <li>Recognized for improving performance on a production app.</li>
                <li>Speaker / mentor at a local tech meetup or workshop.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-md shadow-slate-200/80 sm:p-5 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Blog & learning
              </p>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                I enjoy writing about frontend, design systems, and developer
                experience. Add links to your blog or content here.
              </p>
              <a
                href="https://your-blog-or-notion-link.com"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-[11px] font-medium text-accent-soft underline-offset-4 hover:underline"
              >
                Read my notes on building better UIs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

