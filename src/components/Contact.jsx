import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';
import resume from "./Anyaporwal_resume.pdf";
export function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 lg:px-8"
    >
      <div className={`reveal ${isVisible ? 'reveal-visible' : ''}`}>
        <div className="mb-8 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-accent-soft" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-soft">
              Contact
            </p>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
              Let's build something together
            </h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[3fr,2fr]">
          <form
            action="https://formspree.io/f/myknpekk"
            method="POST"
            className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-lg shadow-slate-200/80 sm:p-6 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-slate-950/70"
          >
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Fill out the form and I'll get back to you as soon as possible.
              You can also reach me directly via email or LinkedIn.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5 text-xs">
                <label htmlFor="name" className="block text-slate-700 dark:text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-900 outline-none ring-accent/40 transition focus:border-accent focus:ring-1 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
                />
              </div>
              <div className="space-y-1.5 text-xs">
                <label htmlFor="email" className="block text-slate-700 dark:text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-900 outline-none ring-accent/40 transition focus:border-accent focus:ring-1 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
                />
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <label htmlFor="subject" className="block text-slate-700 dark:text-slate-200">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-900 outline-none ring-accent/40 transition focus:border-accent focus:ring-1 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
              />
            </div>

            <div className="space-y-1.5 text-xs">
              <label htmlFor="message" className="block text-slate-700 dark:text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full resize-none rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-900 outline-none ring-accent/40 transition focus:border-accent focus:ring-1 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent via-accent-soft to-sky-500 px-5 py-2.5 text-xs font-semibold text-slate-50 shadow-glow-accent transition hover:-translate-y-0.5 hover:shadow-glow-accent"
            >
              Send message
            </button>
          </form>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-md shadow-slate-200/80 sm:p-5 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Direct links
              </p>
              <div className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <a
                  href="mailto:anyaporwal18@gmail.com"
                  className="icon-pop flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-accent hover:text-accent dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <FiMail className="h-3.5 w-3.5" />
                  <span>anyaporwal18@gmail.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/Anyaporwal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-pop flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-accent hover:text-accent dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <FiLinkedin className="h-3.5 w-3.5" />
                  <span>linkedin.com/in/Anyaporwal</span>
                </a>
                <a
                  href="https://github.com/Anyaporwal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-pop flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition hover:border-accent hover:text-accent dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <FiGithub className="h-3.5 w-3.5" />
                  <span>github.com/Anyaporwal</span>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-md shadow-slate-200/80 sm:p-5 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Resume
              </p>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                Download a concise PDF version of my experience, skills, and
                projects.
              </p>
              <a
              href={resume}
              download="Anyaporwal_Resume.pdf"
              className="icon-pop mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] font-medium text-slate-800 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100"
            >
                <FiFileText className="h-3.5 w-3.5" />
                Download resume
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}