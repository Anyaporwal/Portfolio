import {
  SiGithub,
  SiLeetcode,
  SiHackerrank,
  SiCodechef,
  SiGeeksforgeeks
} from 'react-icons/si';

import { useScrollReveal } from '../hooks/useScrollReveal';

const profiles = [
  {
    name: 'GitHub',
    href: 'https://github.com/Anyaporwal',
    icon: SiGithub,
    color: 'from-slate-100 to-slate-300'
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/Anyanp',
    icon: SiLeetcode,
    color: 'from-amber-400 to-amber-500'
  },
  {
    name: 'HackerRank',
    href: 'https://www.hackerrank.com/porwalaa',
    icon: SiHackerrank,
    color: 'from-emerald-400 to-emerald-500'
  },
  {
    name: 'GeeksforGeeks',
    href: 'https://www.geeksforgeeks.org/profile/ap5vm',
    icon: SiGeeksforgeeks,
    color: 'from-green-400 to-green-500'
  },
  {
    name: 'CodeChef',
    href: 'https://www.codechef.com/users/anyaporwal18',
    icon: SiCodechef,
    color: 'from-orange-400 to-orange-500'
  }
];

export function CodingProfiles() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="profiles"
      ref={ref}
      className="scroll-mt-20 relative mx-auto max-w-6xl px-4 py-2 sm:px-6 lg:px-8"
    >
      <div className={`reveal ${isVisible ? 'reveal-visible' : ''}`}>
        
        {/* Heading */}
        <div className="mb-5 flex items-center gap-3">
          <div className="h-7 w-1 rounded-full bg-gradient-to-b from-accent to-accent-soft" />
          <div>
<p className="text-lg font-bold uppercase tracking-[0.2em] text-accent-soft">
              Coding Profiles
            </p>
<h2 className="text-base font-semibold text-slate-900 dark:text-slate-50 sm:text-base">   
              Where I solve problems
            </h2>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {profiles.map((profile) => {
            const Icon = profile.icon;

            return (
              <a
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                className="tilt-card group flex items-center gap-3 rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-md shadow-slate-200/80 transition-all duration-200 hover:scale-[1.04] hover:border-accent hover:shadow-glow-accent dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200 dark:shadow-slate-950/70"
              >
                
                {/* Icon */}
                <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900/80">
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${profile.color} opacity-70 transition group-hover:opacity-100`}
                  />
                  <Icon className="relative h-6 w-6 text-slate-950" />
                </div>

                {/* Text */}
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    {profile.name}
                  </p>
                  <p className="text-xs text-slate-500 group-hover:text-slate-300">
                    View profile
                  </p>
                </div>

              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}