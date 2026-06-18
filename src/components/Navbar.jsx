import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const sections = [
{ id: "hero", label: "Home" },
{ id: "about", label: "About" },
{ id: "education", label: "Education" },
{ id: "accomplishments", label: "Accomplishments" },
{ id: "skills", label: "Skills" },
{ id: "projects", label: "Projects" },
{ id: "contact", label: "Contact" },
];

export function Navbar({ theme, onToggleTheme }) {
const [activeSection, setActiveSection] = useState("hero");
const [menuOpen, setMenuOpen] = useState(false);

const handleNavClick = (targetId) => {
const el = document.getElementById(targetId);
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(targetId);
    setMenuOpen(false);
  }
};

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

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

return ( <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-colors dark:border-slate-800/80 dark:bg-slate-900/80"> <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

    {/* Logo */}
    <button
      type="button"
      onClick={() => handleNavClick("hero")}
      className="group"
    >
      <p
        className="text-2xl font-bold tracking-wide text-accent drop-shadow-md transition group-hover:scale-105 md:text-3xl"
        style={{ fontFamily: "'Allura', cursive" }}
      >
        Anya
      </p>
    </button>

    {/* Desktop Navigation */}
    <div className="hidden items-center gap-4 lg:flex">
      <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs text-slate-600 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => handleNavClick(section.id)}
            className={`rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition ${
              activeSection === section.id
                ? "bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50"
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        aria-label="Toggle theme"
        onClick={onToggleTheme}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-md transition hover:border-accent hover:text-accent dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-100"
      >
        {theme === "dark" ? (
          <BsSunFill className="h-4 w-4" />
        ) : (
          <BsMoonStarsFill className="h-4 w-4" />
        )}
      </button>

      <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 shadow-md dark:border-slate-800 dark:bg-slate-900/80">
        <a
          href="https://github.com/Anyaporwal"
          target="_blank"
          rel="noreferrer"
          className="rounded-full p-1.5 transition hover:bg-slate-100 hover:text-accent dark:hover:bg-slate-800"
        >
          <FiGithub className="h-4 w-4" />
        </a>

        <a
          href="https://linkedin.com/in/Anyaporwal"
          target="_blank"
          rel="noreferrer"
          className="rounded-full p-1.5 transition hover:bg-slate-100 hover:text-accent dark:hover:bg-slate-800"
        >
          <FiLinkedin className="h-4 w-4" />
        </a>
      </div>
    </div>

    {/* Mobile Controls */}
    <div className="flex items-center gap-2 lg:hidden">
      <button
        type="button"
        aria-label="Toggle theme"
        onClick={onToggleTheme}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-100"
      >
        {theme === "dark" ? (
          <BsSunFill className="h-4 w-4" />
        ) : (
          <BsMoonStarsFill className="h-4 w-4" />
        )}
      </button>

      <button
        type="button"
        aria-label="Menu"
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-100"
      >
        {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
      </button>
    </div>
  </nav>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="mx-4 mb-3 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 lg:hidden">
      <div className="flex flex-col gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => handleNavClick(section.id)}
            className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition ${
              activeSection === section.id
                ? "bg-accent text-white"
                : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            }`}
          >
            {section.label}
          </button>
        ))}

        <div className="mt-3 flex justify-center gap-4 border-t border-slate-200 pt-4 dark:border-slate-700">
          <a
            href="https://github.com/Anyaporwal"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition hover:text-accent"
          >
            <FiGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/Anyaporwal"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition hover:text-accent"
          >
            <FiLinkedin size={20} />
          </a>
        </div>
        </div>
      </div>
    )}
  </header>
);
}