import React from "react";
import YouTubeSubscribe from "./YouTubeSubscribe";

const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

const Nav = () => {
  return (
    <section className="w-full h-16">
      {/* =========================================
          TOP NAVIGATION
      ========================================= */}
      <header className="fixed max-w-[1600px] left-1/2 -translate-x-1/2 top-0 z-50 w-full border-b border-zinc-200/80 bg-zinc-50/70 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#08090d]/70">
        <div className="mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Third Man Gaming Logo"
              className="h-10 w-10 rounded-full border border-zinc-200/80 bg-zinc-50 object-cover shadow-sm transition group-hover:scale-105 dark:border-white/[0.08] dark:bg-white/[0.02]"
            />

            <div>
              <p className="font-sans text-sm font-extrabold tracking-tight transition-colors group-hover:text-red-500">
                Third Man Gaming
              </p>

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                Official Channel
              </p>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {[
              { name: "Home", href: "#home" },
              { name: "Videos", href: "#videos" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-xl px-4 py-2 text-xs font-semibold text-zinc-600 transition-all hover:bg-zinc-200/50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* YouTube Subscribe */}
          <div className="flex items-center gap-3">
            <YouTubeSubscribe CHANNEL_ID={CHANNEL_ID} />
          </div>

        </div>
      </header>
    </section>
  );
};

export default Nav;