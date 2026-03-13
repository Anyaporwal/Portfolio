import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'tech', label: 'Tech' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export function Navbar({ theme, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavClick = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(targetId); // update active section on click
    }
  };

  // Detect section in view when scrolling
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/80 transition-colors">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          className="group flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-accent to-accent-soft text-xs font-semibold tracking-wide text-slate-50 shadow-glow-accent group-hover:scale-105 group-hover:shadow-glow-accent transition-transform">
            AP
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-100">
              Anya Porwal
            </p>
          </div>
        </button>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs text-slate-600 shadow-lg shadow-slate-200/70 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:shadow-slate-950/60 lg:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => handleNavClick(section.id)}
                className={`rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition ${
                  activeSection === section.id
                    ? 'bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-slate-50'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={onToggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-md transition hover:border-accent hover:text-accent dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-100"
            >
              {theme === 'dark' ? (
                <BsSunFill className="h-4 w-4" />
              ) : (
                <BsMoonStarsFill className="h-4 w-4" />
              )}
            </button>

            <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-slate-600 shadow-md shadow-slate-200/70 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:shadow-slate-950/60 sm:flex">
              <a
                href="https://github.com/Anyaporwal"
                target="_blank"
                rel="noreferrer"
                className="icon-pop rounded-full p-1.5 transition hover:bg-slate-100 hover:text-accent dark:hover:bg-slate-800"
              >
                <FiGithub className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/Anyaporwal"
                target="_blank"
                rel="noreferrer"
                className="icon-pop rounded-full p-1.5 transition hover:bg-slate-100 hover:text-accent dark:hover:bg-slate-800"
              >
                <FiLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}