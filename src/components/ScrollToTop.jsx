import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-6 right-5 z-40 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 text-slate-100 shadow-lg shadow-slate-950/80 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
      aria-label="Scroll to top"
    >
      <FiArrowUp className="h-4 w-4" />
    </button>
  );
}

