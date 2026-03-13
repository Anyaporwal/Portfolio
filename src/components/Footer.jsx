export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/95 py-6 text-xs text-slate-500 dark:border-slate-800/80 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
        
        <p>
          © {new Date().getFullYear()} Anya Porwal. All rights reserved.
        </p>

      </div>
    </footer>
  );
}