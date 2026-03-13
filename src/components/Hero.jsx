import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import { useScrollReveal } from "../hooks/useScrollReveal";
import profilePic from "./profile.png"; // relative path from Hero.jsx

export function Hero() {
  const { ref, isVisible } = useScrollReveal();
  const [photoLoaded, setPhotoLoaded] = useState(false);

  // Trigger photo animation after component mounts
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
      className="relative flex min-h-screen items-center justify-center px-6 pt-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6 text-center lg:text-left">

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

          <p className="max-w-xl text-slate-600 dark:text-slate-400 mx-auto lg:mx-0">
            I enjoy building clean, responsive web applications and solving
            real-world problems through technology. My focus is on creating
            efficient and user-friendly digital experiences.
          </p>

          {/* BUTTONS */}
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
        <div className="flex-1 flex justify-center">
          <div className="relative flex items-center justify-center overflow-visible">

            {/* Card with rich gradient background */}
            <div className="relative h-80 w-72 rounded-3xl bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 shadow-2xl overflow-visible">

              {/* Animated Photo with 3D hover effect */}
              <img
                src={profilePic}
                alt="Anya Porwal"
                className={`absolute -top-12 left-1/2 h-80 w-60 -translate-x-1/2 rounded-2xl object-contain shadow-2xl border-4 border-white dark:border-indigo-500 transition-transform duration-1000
                  ${photoLoaded
                    ? "translate-y-0 scale-100 opacity-100 rotate-0"
                    : "translate-y-20 scale-75 opacity-0 rotate-6"
                  } 
                  hover:-translate-y-2 hover:scale-105 hover:rotate-3`}
              />

              {/* Decorative base/glow for depth */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-6 w-36 bg-indigo-300 rounded-full blur-3xl opacity-40 dark:bg-indigo-500"></div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}