import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}

