import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import Nav from "./component/Nav" 
import {Genres , Links , Email , About} from "./component/restAPI/media.js"
const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
});

export const metadata: Metadata = {
  title: process.env.MATA_DATA_TITTLE,
  description: process.env.MATA_DATA_DESCRIPTION
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${arimo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-arimo">
        <Nav/>
            <section className="relative min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-500 dark:bg-[#08090d] dark:text-zinc-100">
              
              {/* Background Ambient Glows */}
              <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-red-500/10 via-rose-500/5 to-transparent blur-[140px] dark:from-red-600/15 dark:via-red-900/10" />
        
        
              {/* =========================================
                  MAIN LAYOUT CONTAINER
              ========================================= */}
              <div id="home" className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
        
                  {/* =========================================
                      SIDEBAR
                  ========================================= */}
                  <aside className="hidden lg:block lg:sticky lg:top-[88px] h-fit">
                    <div className="overflow-hidden rounded-3xl">
                      
                    
        
                      <div className="" />
        
                      {/* Bio */}
                      <div className="py-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                          About
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                         {About} 
                        </p>
                      </div>
        {/* Categories */}
                      <div className="border-t border-zinc-200/80 py-6 dark:border-white/[0.08]">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                          Categories
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {Genres.map((genre) => (
                            <span
                              key={genre}
                              className="rounded-lg border border-zinc-200/80 bg-zinc-100/50 px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-400"
                            >
                              {genre}
                            </span>
                          ))}
                        </div>
                      </div>
                          <div className="border-t border-zinc-200/80 py-6 dark:border-white/[0.08]">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                          Social Media
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {Links.map((link) => (
                            <a
                              key={link.name}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 rounded-lg border border-zinc-200/80 bg-zinc-100/50 px-3 py-2 text-[11px] font-medium text-zinc-600 transition hover:bg-zinc-200/50 hover:text-zinc-950 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
                            >
                              <img
                                src={link.icon}
                                alt={`${link.name} icon`}
                                className="h-4 w-4 object-contain"
                              />
                            </a>
                          ))}
                        </div>
                        <p className="mt-2 text-[10px] text-zinc-400 dark:text-zinc-500">
                          Follow us on social media for updates and exclusive content.
                        </p>
                        
                      </div>
                      {/* Business Contact */}
                      <div className="border-t border-zinc-200/80 py-6 dark:border-white/[0.08]">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                          Business Contact
                        </p>
                        <a
                          href={`mailto:${Email}`}
                          className="mt-3 block truncate rounded-xl border border-zinc-200/80 bg-zinc-50 px-3 py-2.5 text-xs font-semibold text-zinc-600 transition hover:border-red-500/50 hover:text-red-500 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:border-red-500/50 dark:hover:text-red-400"
                        >
                          {Email}
                        </a>
                      </div>
                    </div>
                  </aside>
        
        {children}
                
                </div>
                           {/* Mobile About */}
                    <section className="lg:hidden mt-6">
                      <div className="rounded-2xl border border-zinc-200/80 bg-white/50 p-6 backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.02]">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                          About Third Man Gaming
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                          Gaming content covering horror, action, indie, puzzle, mobile, racing, and open-world walkthroughs.
                        </p>
                      <div className="mt-3 flex flex-wrap gap-1.5 justify-end">
                          {Links.map((link) => (
                            <a
                              key={link.name}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 rounded-lg border border-zinc-200/80 bg-zinc-100/50 px-3 py-2 text-[11px] font-medium text-zinc-600 transition hover:bg-zinc-200/50 hover:text-zinc-950 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
                            >
                              <img
                                src={link.icon}
                                alt={`${link.name} icon`}
                                className="h-4 w-4 object-contain"
                              />
                            </a>
                          ))}
                        </div>
                        <a
                          href={`mailto:${Email}`}
                          className="mt-3 block truncate rounded-xl border border-zinc-200/80 bg-zinc-50 px-3 py-2.5 text-xs font-semibold text-zinc-600 transition hover:border-red-500/50 hover:text-red-500 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:border-red-500/50 dark:hover:text-red-400"
                        >
                          {Email}
                        </a>
                        
                      </div>
                      
                    </section>
        
                    {/* Footer */}
                    <footer className="border-t mt-6 border-zinc-200/80 pt-8 pb-12 dark:border-white/[0.08]">
                      <div className="flex flex-col items-center justify-center gap-3 text-xs text-zinc-500 dark:text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
                        <p>© 2026 Third Man Gaming. All rights reserved.</p>
                        <p>Gaming • Entertainment • Adventure</p>
                      </div>
                    </footer>
              </div>
              
            </section>
      </body>
    </html>
  );
}