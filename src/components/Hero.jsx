import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import { useScrollReveal } from "../hooks/useScrollReveal";
import profilePic from "./profile.png";

export function Hero() {
  const { ref } = useScrollReveal();
  const [photoLoaded, setPhotoLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setPhotoLoaded(true), 100);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[85vh] items-center justify-center px-6 pt-16"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            <TypeAnimation
              sequence={[
                "Hi, I'm Anya Porwal",
                2500,
                "Hi, I'm a Data Science Student",
                2500,
                "Hi, I'm a Frontend Developer",
                2500,
                "Hi, I'm an Aspiring Software Developer",
                2500,
              ]}
              speed={50}
              repeat={Infinity}
            />
        </h1>

         <p className="max-w-xl text-slate-600 dark:text-slate-400 mx-auto lg:mx-0">
          Crafting responsive web applications with a focus on clean, efficient frontend development.  
          Experienced in the MERN stack and bringing AI into projects to tackle real-world challenges.  
          Always exploring new technologies, solving problems, and pushing code that makes a difference.
        </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
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
        <div className="flex-1 flex justify-center p-8">
          <div className="relative flex items-center justify-center overflow-visible">

            {/* Smaller Card with rich gradient background */}
            <div className="relative h-72 w-64 rounded-3xl bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 shadow-2xl overflow-visible">

              {/* Animated Photo with 3D hover effect */}
              <img
                src={profilePic}
                alt="Anya Porwal"
                className={`absolute -top-12 left-1/2 h-72 w-56 -translate-x-1/2 rounded-2xl object-contain shadow-2xl border-4 border-white dark:border-indigo-500 transition-transform duration-1000
                  ${photoLoaded
                    ? "translate-y-0 scale-100 opacity-100 rotate-0"
                    : "translate-y-20 scale-75 opacity-0 rotate-6"
                  } 
                  `}
              />

              {/* Decorative base/glow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-5 w-32 bg-indigo-300 rounded-full blur-3xl opacity-40 dark:bg-indigo-500"></div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}