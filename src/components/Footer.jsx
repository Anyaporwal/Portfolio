export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/95 py-6 text-[11px] text-slate-500 dark:border-slate-800/80 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-slate-500 sm:flex-row sm:px-6 lg:px-8 dark:text-slate-500">
        <p>
          © {new Date().getFullYear()} Anya Porwal. Crafted with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

