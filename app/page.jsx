import {getChannelInfo , getChannelVideos} from "./component/program/youtube-api"

export const metadata = {
  title: "Third Man Gaming",
  description:
    "Third Man Gaming — Horror, Action, Indie, Puzzle and Open World gameplay.",
};





export default async function Home() {
  const [videos, channelInfo] = await Promise.all([
    getChannelVideos(),
    getChannelInfo(),
  ]);

  const featuredVideo = videos[0];
  const latestVideos = videos.slice(1);

return (

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
        
         
        
                  </main>
  );
}