import React from "react";
import YouTubeSubscribe from "./component/YouTubeSubscribe";
export const metadata = {
  title: "Third Man Gaming",
  description:
    "Third Man Gaming — Horror, Action, Indie, Puzzle and Open World gameplay.",
};

const links = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@thirdmangaming",
    icon: "/youtube.png",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/thirdmangaming/",
    icon: "/instagram.png",
  },
];

const genres = [
  "🎮 Indie",
  "😱 Horror",
  "🔫 Action",
  "🧩 Puzzle",
  "🌍 Open World",
  "📱 Mobile",
  "🏎️ Racing",
  "🕵️ Mystery",
];

  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

async function getChannelVideos() {

  if (!API_KEY || !CHANNEL_ID) {
    return [];
  }

  try {
    const params = new URLSearchParams({
      part: "snippet",
      channelId: CHANNEL_ID,
      maxResults: "13",
      order: "date",
      type: "video",
      key: API_KEY,
    });

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?${params.toString()}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!res.ok) {
      return [];
    }

    const data = await res.json();

    return (
      data.items
        ?.map((item) => {
          const videoId = item.id?.videoId;

          if (!videoId) {
            return null;
          }

          return {
            id: videoId,
            title: item.snippet?.title || "",
            description: item.snippet?.description || "",
            thumbnail:
              item.snippet?.thumbnails?.maxres?.url ||
              item.snippet?.thumbnails?.high?.url ||
              item.snippet?.thumbnails?.medium?.url ||
              item.snippet?.thumbnails?.default?.url ||
              "",
            publishedAt: item.snippet?.publishedAt || "",
          };
        })
        .filter(Boolean) || []
    );
  } catch {
    return [];
  }
}

async function getChannelInfo() {


  if (!API_KEY || !CHANNEL_ID) {
    return null;
  }

  try {
    const params = new URLSearchParams({
      part: "statistics",
      id: CHANNEL_ID,
      key: API_KEY,
    });

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?${params.toString()}`,
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    return data.items?.[0]?.statistics || null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const [videos, channelInfo] = await Promise.all([
    getChannelVideos(),
    getChannelInfo(),
  ]);

  const featuredVideo = videos[0];
  const latestVideos = videos.slice(1);

return (
    <section className="relative min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-500 dark:bg-[#08090d] dark:text-zinc-100">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-red-500/10 via-rose-500/5 to-transparent blur-[140px] dark:from-red-600/15 dark:via-red-900/10" />

      {/* =========================================
          TOP NAVIGATION
      ========================================= */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-zinc-50/70 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#08090d]/70">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Third Man Gaming Logo"
              className="h-10 w-10 rounded-full border border-zinc-200/80 bg-zinc-50 object-cover shadow-sm transition group-hover:scale-105 dark:border-white/[0.08] dark:bg-white/[0.02]"
            />  

            <div>
              <p className="font-sans text-sm font-extrabold tracking-tight group-hover:text-red-500 transition-colors">
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

          {/* Actions */}
          <div className="flex items-center gap-3">
           <YouTubeSubscribe CHANNEL_ID={CHANNEL_ID} />
          </div>
        </div>
      </header>

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
                  Welcome to <span className="font-semibold text-zinc-900 dark:text-white">Third Man Gaming</span>. Dedicated to bringing you immersive horror, action, indie, and open-world gameplay walkthroughs.
                </p>
              </div>
{/* Categories */}
              <div className="border-t border-zinc-200/80 py-6 dark:border-white/[0.08]">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                  Categories
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {genres.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-lg border border-zinc-200/80 bg-zinc-100/50 px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-400"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              {/* Business Contact */}
              <div className="border-t border-zinc-200/80 py-6 dark:border-white/[0.08]">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                  Business Contact
                </p>
                <a
                  href="mailto:thirdman.contact@gmail.com"
                  className="mt-3 block truncate rounded-xl border border-zinc-200/80 bg-zinc-50 px-3 py-2.5 text-xs font-semibold text-zinc-600 transition hover:border-red-500/50 hover:text-red-500 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:border-red-500/50 dark:hover:text-red-400"
                >
                  thirdman.contact@gmail.com
                </a>
              </div>
            </div>
          </aside>

          {/* =========================================
              MAIN CONTENT
          ========================================= */}
          <main className="min-w-0 space-y-8">

            {/* Hero Banner */}
            <section className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-white via-zinc-50 to-zinc-100/80 p-8 shadow-xl dark:border-white/[0.08] dark:from-white/[0.03] dark:via-white/[0.01] dark:to-transparent sm:p-10">
              <div className="absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-gradient-to-bl from-red-500/10 to-transparent blur-3xl dark:from-red-500/20" />

              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-red-600 dark:border-red-500/30 dark:bg-red-500/15 dark:text-red-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    Official Gaming Hub
                  </span>
                </div>

                <h2 className="mt-4 font-sans text-3xl font-black tracking-tight sm:text-5xl">
                  Explore The <span className="text-red-600 dark:text-red-500">Gaming World.</span>
                </h2>

                <p className="mt-4 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm">
                  Discover thrilling horror gameplay, high-octane action, indie gems, and open-world walkthroughs carefully curated for enthusiasts.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#videos"
                    className="rounded-xl bg-zinc-950 px-5 py-3 text-xs font-bold text-white shadow-lg transition hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                  >
                    Explore Videos
                  </a>
                  <a
                    href="https://www.youtube.com/@thirdmangaming"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-zinc-200/80 bg-white/80 px-5 py-3 text-xs font-bold text-zinc-700 shadow-sm backdrop-blur-sm transition hover:bg-zinc-100 active:scale-95 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:bg-white/[0.08]"
                  >
                    Visit YouTube Channel
                  </a>
                </div>
              </div>
            </section>

            {/* Featured Video Section */}
            {featuredVideo && (
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">
                      Featured
                    </p>
                    <h3 className="text-lg font-extrabold tracking-tight sm:text-xl">
                      Latest Gameplay
                    </h3>
                  </div>
                  <span className="hidden text-xs text-zinc-400 dark:text-zinc-500 sm:block">
                    New Release
                  </span>
                </div>

                <div className="overflow-hidden rounded-3xl border border-zinc-200/80 bg-black shadow-2xl dark:border-white/[0.08]">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                      title={featuredVideo.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <h4 className="truncate text-sm font-bold sm:text-base">
                      {featuredVideo.title}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Featured Premiere
                    </p>
                  </div>
                  <a
                    href={`https://www.youtube.com/watch?v=${featuredVideo.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-red-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-red-500 active:scale-95"
                  >
                    Watch on YouTube →
                  </a>
                </div>
              </section>
            )}
            {/* Metrics Grid */}
     {/* Metrics Grid */}
<section className="grid grid-cols-1 gap-4 sm:grid-cols-3">

  {[
    {
      label: "Videos",
      value: channelInfo?.videoCount
        ? Number(channelInfo.videoCount).toLocaleString()
        : "—",
      subtitle: "Published videos",
    },
    {
      label: "Views",
      value: channelInfo?.viewCount
        ? Number(channelInfo.viewCount).toLocaleString()
        : "—",
      subtitle: "Total channel views",
    },
    {
      label: "Subscribers",
      value: channelInfo?.subscriberCount
        ? Number(channelInfo.subscriberCount).toLocaleString()
        : "—",
      subtitle: "Channel subscribers",
    },
  ].map((stat) => (
    <div
      key={stat.label}
      className="
        rounded-2xl
        border
        border-zinc-200/80
        bg-white/60
        p-5
        shadow-sm
        backdrop-blur-sm
        transition
        hover:-translate-y-0.5
        hover:shadow-md
        dark:border-white/[0.08]
        dark:bg-white/[0.02]
      "
    >

      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500">
        {stat.label}
      </p>

      <p className="mt-2 text-2xl font-black tracking-tight">
        {stat.value}
      </p>

      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
        {stat.subtitle}
      </p>

    </div>
  ))}

</section>

            {/* Recent Uploads Grid */}
            <section id="videos" className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">
                    Recent Uploads
                  </p>
                  <h3 className="text-lg font-extrabold tracking-tight sm:text-xl">
                    More Gameplay Videos
                  </h3>
                </div>
                <a
                  href="https://www.youtube.com/@thirdmangaming/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  View All →
                </a>
              </div>

              {latestVideos.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {latestVideos.map((video) => (
                    <article
                      key={video.id}
                      className="group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/[0.08] dark:bg-white/[0.02]"
                    >
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block aspect-video overflow-hidden bg-zinc-900"
                      >
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                            ▶
                          </div>
                        </div>
                      </a>

                      <div className="p-4">
                        <h4 className="line-clamp-2 text-xs font-bold leading-snug group-hover:text-red-500 transition-colors">
                          {video.title}
                        </h4>
                        <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-400 dark:text-zinc-500">
                          <span>
                            {new Date(video.publishedAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                          <span className="font-semibold text-red-500 opacity-0 transition group-hover:opacity-100">
                            Watch →
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-zinc-200/80 bg-white/50 p-12 text-center backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.02]">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    No videos available at the moment.
                  </p>
                </div>
              )}
            </section>

            {/* Mobile About */}
            <section className="lg:hidden">
              <div className="rounded-2xl border border-zinc-200/80 bg-white/50 p-6 backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.02]">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                  About Third Man Gaming
                </p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Gaming content covering horror, action, indie, puzzle, mobile, racing, and open-world walkthroughs.
                </p>
        
                <a
                  href="mailto:thirdman.contact@gmail.com"
                  className="mt-3 block truncate rounded-xl border border-zinc-200/80 bg-zinc-50 px-3 py-2.5 text-xs font-semibold text-zinc-600 transition hover:border-red-500/50 hover:text-red-500 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:border-red-500/50 dark:hover:text-red-400"
                >
                  thirdman.contact@gmail.com
                </a>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-zinc-200/80 pt-8 pb-12 dark:border-white/[0.08]">
              <div className="flex flex-col items-center justify-center gap-3 text-xs text-zinc-500 dark:text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
                <p>© 2026 Third Man Gaming. All rights reserved.</p>
                <p>Gaming • Entertainment • Adventure</p>
              </div>
            </footer>

          </main>
        </div>
      </div>
    </section>
  );
}