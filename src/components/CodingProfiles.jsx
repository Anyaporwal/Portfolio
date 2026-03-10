import {
  SiGithub,
  SiLeetcode,
  SiHackerrank,
  SiCodeforces,
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
    name: 'Codeforces',
    href: 'https://codeforces.com/profile/Anyaporwal',
    icon: SiCodeforces,
    color: 'from-sky-400 to-sky-500'
  },
  {
    name: 'HackerRank',
    href: 'https://www.hackerrank.com/porwalaa',
    icon: SiHackerrank,
    color: 'from-emerald-400 to-emerald-500'
  },
  {
    name: 'CodeChef',
    href: 'https://www.codechef.com/users/anyaporwal18',
    icon: SiCodechef,
    color: 'from-orange-400 to-orange-500'
  },
  {
    name: 'GeeksforGeeks',
    href: 'https://www.geeksforgeeks.org/profile/ap5vm',
    icon: SiGeeksforgeeks,
    color: 'from-green-400 to-green-500'
  }
];

export function CodingProfiles() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="profiles"
      ref={ref}
      className="relative mx-auto max-w-6xl px-4 pt-4 pb-20 sm:px-6 lg:px-8"
    >
      <div className={`reveal ${isVisible ? 'reveal-visible' : ''}`}>
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-accent-soft" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-soft">
                Coding profiles
              </p>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
                Where I solve problems
              </h2>
            </div>
          </div>

          <p className="max-w-sm text-xs text-slate-500 dark:text-slate-400">
            Explore my activity across coding platforms — from open source
            contributions to algorithm practice.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">          
          {profiles.map((profile) => {
            const Icon = profile.icon;

            return (
              <a
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                className="tilt-card group flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-xs text-slate-700 shadow-md shadow-slate-200/80 transition hover:border-accent hover:shadow-glow-accent dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200 dark:shadow-slate-950/70"
              >
                <div className="icon-pop relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900/80">
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${profile.color} opacity-70 transition group-hover:opacity-100`}
                  />
                  <Icon className="relative h-5 w-5 text-slate-950" />
                </div>

                <div>
                  <p className="text-[13px] font-semibold text-slate-50">
                    {profile.name}
                  </p>
                  <p className="text-[11px] text-slate-400 group-hover:text-slate-300">
                    Click to view profile
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