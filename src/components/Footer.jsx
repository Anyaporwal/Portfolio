export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/95 py-6 text-xs text-slate-500 dark:border-slate-800/80 dark:bg-slate-950/95">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} Anya Porwal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}