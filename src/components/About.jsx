import { useScrollReveal } from '../hooks/useScrollReveal';

export function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-20 relative mx-auto max-w-6xl px-4 py-2 sm:px-6 lg:px-8"
    >
      <div className={`reveal ${isVisible ? 'reveal-visible' : ''}`}>
        
        {/* Heading */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-accent-soft" />
          <div>
            <p className="text-lg font-bold uppercase tracking-[0.2em] text-accent-soft">
              About
            </p>
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50 sm:text-base">
              A bit about who I am
            </h2>
          </div>
        </div>

        {/* About Content Cards */}
        <div className="mt-6 grid gap-4">
          
          {/* Card 1 */}
          <div
            className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg shadow-slate-200/80 
            dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70
            transition-all duration-500 ease-out
            hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20
            animate-fadeUp"
            style={{ animationDelay: '0.1s' }}
          >
            <p className="text-sm text-slate-600 dark:text-slate-300">
              I’m an aspiring Software Engineer with a strong foundation in Data
              Structures and Algorithms and hands-on experience building scalable
              full-stack applications using the MERN stack.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg shadow-slate-200/80 
            dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70
            transition-all duration-500 ease-out
            hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20
            animate-fadeUp"
            style={{ animationDelay: '0.2s' }}
          >
            <p className="text-sm text-slate-600 dark:text-slate-300">
              I enjoy developing responsive and user-focused web applications while
              integrating modern technologies such as AI APIs to create intelligent,
              real-world solutions.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg shadow-slate-200/80 
            dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/70
            transition-all duration-500 ease-out
            hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20
            animate-fadeUp"
            style={{ animationDelay: '0.3s' }}
          >
            <p className="text-sm text-slate-600 dark:text-slate-300">
              With consistent practice in problem solving and competitive programming,
              I focus on writing clean, efficient code and continuously improving my
              engineering skills.
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-6 grid gap-3 text-xs sm:grid-cols-3 sm:text-[12px]">
          
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm shadow-slate-200/80 
          dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-slate-950/70
          transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-accent/20">
            <p className="text-[12px] font-medium text-slate-500 dark:text-slate-400">
              Focus
            </p>
            <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
              <p>• Software Engineering</p>
                <p>• Scalable AI-Powered Full-Stack Systems</p>
                <p>• Clean, Efficient & Maintainable Code</p>
                <p>• Data Structures & Algorithms (DSA)</p>
           </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm shadow-slate-200/80 
          dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-slate-950/70
          transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-accent/20">
            <p className="text-[12px] font-medium text-slate-500 dark:text-slate-400">
              Location
            </p>
            <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
              Nagpur, Maharashtra, India
            </p>
            <br />
            <p className="text-[12px] font-medium text-slate-500 dark:text-slate-400">
              Work Preference
            </p>
            <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
              Remote • Hybrid • Open to Relocation 🌍            
              </p>
          </div>
          
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-sm shadow-slate-200/80 
          dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-slate-950/70
          transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-accent/20">
            <p className="text-[12px] font-medium text-slate-500 dark:text-slate-400">
              Open to
            </p>
            <p className="mt-1 font-semibold text-emerald-400 dark:text-emerald-400">
              <p>• Software Developer</p>
              <p>• Full-Stack Developer</p>
              <p>• Frontend Developer</p>
              <p>• Data Analyst</p>

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}