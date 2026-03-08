import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ParticlesBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2.5rem]"
    >
      <div className="absolute -inset-40 bg-[radial-gradient(circle_at_0_0,#4f46e5_0,transparent_55%),radial-gradient(circle_at_100%_0,#ec4899_0,transparent_55%),radial-gradient(circle_at_0_100%,#22c55e_0,transparent_55%)] opacity-30 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,#1e293b_0,transparent_55%)] opacity-70" />
    </div>
  );
}

export function Hero() {
  const { ref, isVisible } = useScrollReveal();

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center px-4 pt-24 sm:px-6 lg:px-8"
    >
      <div
        className={`reveal mx-auto flex w-full max-w-6xl flex-col items-center gap-10 rounded-[2.5rem] border border-slate-200/80 bg-gradient-to-br from-white/95 via-slate-50/95 to-slate-100/95 p-6 shadow-xl shadow-slate-200/80 dark:border-slate-800/70 dark:from-slate-900/90 dark:via-slate-950/95 dark:to-slate-950/95 dark:shadow-2xl dark:shadow-slate-950/80 sm:p-10 lg:flex-row lg:gap-16 lg:p-14 ${
          isVisible ? 'reveal-visible' : ''
        }`}
      >
        <ParticlesBackground />

        <div className="relative flex-1 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-md shadow-slate-200/70 backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-300 dark:shadow-slate-950/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Open to SDE & frontend roles
          </p>

          <div className="space-y-3">
            <h1 className="float-slow text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50">
              <span className="font-[Poppins]">Anya Porwal</span>
              <span className="block bg-gradient-to-r from-accent via-sky-400 to-emerald-400 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl lg:text-4xl">
                Aspiring Software Developer & Frontend Developer 
              </span>
            </h1>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base dark:text-slate-300">
              I build fast, accessible, and delightful web experiences using
              React, JavaScript, and modern tooling. I care deeply about UX,
              clean architecture, and pixel-perfect implementation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => handleScrollTo('projects')}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent via-accent-soft to-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-50 shadow-glow-accent transition hover:-translate-y-0.5 hover:shadow-glow-accent"
            >
              View projects
              <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium text-slate-800 shadow-md shadow-slate-200/70 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:shadow-slate-950/60"
            >
              Let&apos;s collaborate
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-300">
            <div className="flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 shadow-md shadow-slate-200/70 dark:border-slate-700/70 dark:bg-slate-900/80 dark:shadow-slate-950/70">
              <span className="h-6 w-6 rounded-full bg-gradient-to-tr from-sky-500 to-accent-soft" />

            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noreferrer"
                className="icon-pop flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-slate-800 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100"
              >
                <FiGithub className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
                className="icon-pop flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-slate-800 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100"
              >
                <FiLinkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="tilt-card relative mx-auto flex h-64 w-64 items-center justify-center rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-xl shadow-slate-200/80 dark:border-slate-700/80 dark:from-slate-900/90 dark:via-slate-950 dark:to-slate-950 dark:shadow-2xl dark:shadow-slate-950/80 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            <div className="absolute -inset-0.5 rounded-[2.1rem] bg-gradient-to-tr from-accent/40 via-fuchsia-500/40 to-emerald-400/40 opacity-70 blur-xl dark:from-accent/80 dark:via-fuchsia-500/70 dark:to-emerald-400/70" />
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 rounded-[2rem] bg-white/90 dark:bg-slate-950/90">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-accent to-accent-soft text-3xl font-semibold text-slate-50 shadow-lg shadow-accent/40">
                &lt;/&gt;
              </div>
              <div className="space-y-1 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
                  React · JavaScript · UI
                </p>
                <p className="text-sm text-slate-300">
                  Focused on performance, micro-interactions, and design systems.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-300">
                <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-2 py-1">
                  <p className="font-semibold text-slate-100">75+</p>
                  <p>UI components</p>
                </div>
                <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-2 py-1">
                  <p className="font-semibold text-slate-100">A11y</p>
                  <p>First mindset</p>
                </div>
                <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-2 py-1">
                  <p className="font-semibold text-slate-100">99</p>
                  <p>Lighthouse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

