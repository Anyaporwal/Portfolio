import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { CodingProfiles } from './components/CodingProfiles';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { useTheme } from './hooks/useTheme';
import { Education } from './components/Education';   // Separate Education component
import {Accomplishments} from './components/Accomplishments';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);
  const [cursorHidden, setCursorHidden] = useState(false);

  useEffect(() => {
    const handleMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
      setCursorHidden(false);
    };

    const handleDown = () => setCursorActive(true);
    const handleUp = () => setCursorActive(false);
    const handleLeave = () => setCursorHidden(true);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(244,114,182,0.14),transparent_55%)]" />

    {/* AI-inspired cursor */}
    <div
      className={`cursor-dot fixed z-50 hidden md:block rounded-full 
      bg-slate-900 dark:bg-white 
      ${cursorHidden ? 'cursor-dot--hidden' : ''} 
      ${cursorActive ? 'cursor-dot--active' : ''}`}
      style={{
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
        width: "10px",
        height: "10px",
        transform: "translate(-50%, -50%)",
        transition:
          "transform 120ms ease-out, box-shadow 200ms ease-out, opacity 200ms ease-out"
      }}
    />

      <div className="md:cursor-none">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />

        <main className="space-y-2 pt-2">
          <Hero />
          <About />
          <Education />
          <Accomplishments />
          <TechStack />
          <CodingProfiles />
          <Projects />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;

