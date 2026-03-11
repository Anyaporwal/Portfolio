import { FiArrowRight } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function Hero() {
  const { ref, isVisible } = useScrollReveal();

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center px-6 pt-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row">

        {/* LEFT CONTENT */}

        <div className="flex-1 space-y-6">

          {/* TYPEWRITER HEADING */}

          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">

            <TypeAnimation
              sequence={[
                "Hi, I'm Anya Porwal",
                2200,
                "Hi, I'm a Data Science Student",
                2000,
                "Hi, I'm a Frontend Developer",
                2200,
                "Hi, I'm an Aspiring Software Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </h1>

          <p className="max-w-xl text-slate-600 dark:text-slate-400">
            I enjoy building clean, responsive web applications and solving
            real-world problems through technology. My focus is on creating
            efficient and user-friendly digital experiences.
          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-4">

            <button
              onClick={() => handleScrollTo("projects")}
              className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-lg transition hover:scale-105 hover:bg-indigo-700"
            >
              View Projects
              <FiArrowRight />
            </button>

            <button
              onClick={() => handleScrollTo("contact")}
              className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-lg transition hover:scale-105 hover:bg-indigo-700"
            >
              Contact Me
              <FiArrowRight />
            </button>

          </div>

        </div>

{/* RIGHT PHOTO */}

<div className="flex-1 flex justify-center">

  <div className="relative flex items-center justify-center">

    {/* Card */}

    <div className="relative h-64 w-72 rounded-3xl bg-white dark:bg-slate-900 shadow-2xl">

      {/* Photo popping out */}

      <img
        src="/profile.jpg"
        alt="Anya Porwal"
        className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-2xl object-cover shadow-xl transition hover:scale-105"
      />

    </div>

  </div>

</div>

      </div>
    </section>
  );
}