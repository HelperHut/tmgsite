"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import YouTubeSubscribe from "./YouTubeSubscribe"



const page = [
  { name: "Home", href: "/" },
  { name: "PlayList", href: "/playlist" },
  { name: "FQA", href: "/fqa" },
  { name: "Contact", href: "/Contact" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

const [channel, setChannel] = useState({
  id: "",
  name: "",
});


useEffect(() => {
  fetch("/api/component/youtube/channel")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch channel");
      }

      return res.json();
    })
    .then((data) => {

      setChannel({
        id: data.id ?? "",
        name: data.name ?? "",
      });
    })
    .catch(console.error);
}, []);

  return (
    <section className="h-16 w-full">

      <header className="fixed left-1/2 top-0 z-50 w-full max-w-[1600px] -translate-x-1/2 border-b border-zinc-200/80 bg-zinc-50/70 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#08090d]/70">

        <div className="mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="Third Man Gaming Logo"
              className="h-10 w-10 rounded-full border border-zinc-200/80 bg-zinc-50 object-cover shadow-sm transition group-hover:scale-105 dark:border-white/[0.08] dark:bg-white/[0.02]"
            />

            <div>
              <p className="font-sans text-sm font-extrabold tracking-tight transition-colors group-hover:text-red-500">
                {channel.name}
              </p>

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                Official Channel
              </p>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {page.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-xl px-4 py-2 text-xs font-semibold text-zinc-600 transition-all hover:bg-zinc-200/50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>


          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Subscribe */}
            <div className="hidden sm:flex">
              <YouTubeSubscribe id={channel.id}/>
            </div>


            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="
                flex h-10 w-10 items-center justify-center rounded-xl
                border border-zinc-200/80
                bg-white/60
                text-zinc-700
                transition
                hover:bg-zinc-200/60
                dark:border-white/[0.08]
                dark:bg-white/[0.03]
                dark:text-zinc-300
                dark:hover:bg-white/[0.08]
                md:hidden
              "
            >
              {menuOpen ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    d="M6 6l12 12M18 6L6 18"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

          </div>

        </div>


        {/* Mobile Menu */}
        <div
          className={`
            overflow-hidden
            border-t border-zinc-200/80
            bg-zinc-50/95
            backdrop-blur-xl
            transition-all duration-300
            dark:border-white/[0.06]
            dark:bg-[#08090d]/95
            md:hidden
            ${
              menuOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 border-t-0 opacity-0"
            }
          `}
        >
          <nav className="space-y-1 px-4 py-4 sm:px-6">

            {page.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  flex items-center justify-between rounded-xl
                  px-4 py-3
                  text-sm font-semibold
                  text-zinc-700
                  transition
                  hover:bg-zinc-200/60
                  hover:text-red-500
                  dark:text-zinc-300
                  dark:hover:bg-white/[0.06]
                  dark:hover:text-red-500
                "
              >
                <span>{link.name}</span>
                <span className="text-zinc-400">→</span>
              </Link>
            ))}

     
          </nav>
        </div>

      </header>
    </section>
  );
};

export default Nav;