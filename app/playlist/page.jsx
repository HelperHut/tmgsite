import {getChannelPlayList} from "../component/program/youtube-api"



const page = async () => {
  const playlists = await getChannelPlayList();

  return (
<main className="min-w-0 space-y-8">

  {/* Hero */}
  <section className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-white via-zinc-50 to-zinc-100/80 p-8 shadow-xl dark:border-white/[0.08] dark:from-white/[0.03] dark:via-white/[0.01] dark:to-transparent sm:p-10">

    <div className="absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-gradient-to-bl from-red-500/10 to-transparent blur-3xl dark:from-red-500/20" />

    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">
      Gaming Collections
    </p>

    <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
      All{" "}
      <span className="text-red-600 dark:text-red-500">
        Playlists.
      </span>
    </h1>

    <p className="mt-4 max-w-2xl text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-sm">
      Explore all gaming playlists from the channel.
    </p>

  </section>


  {/* Playlists */}
  <section className="space-y-5">

    <div className="flex items-end justify-between">

      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">
          Collections
        </p>

        <h2 className="mt-1 text-lg font-extrabold tracking-tight sm:text-xl">
          All Playlists
        </h2>
      </div>

      <span className="text-xs text-zinc-400 dark:text-zinc-500">
        {playlists.length} Playlists
      </span>

    </div>


    {/* Grid */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

      {playlists.map((playlist) => (

        <article
          key={playlist.id}
          className="
            group
            overflow-hidden
            rounded-2xl
            border
            border-zinc-200/80
            bg-white
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            dark:border-white/[0.08]
            dark:bg-white/[0.02]
          "
        >

          {/* Thumbnail */}
          <a
            href={`https://www.youtube.com/playlist?list=${playlist.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative
              block
              aspect-video
              overflow-hidden
              bg-zinc-900
            "
          >

            <img
              src={
                playlist.snippet?.thumbnails?.high?.url ??
                playlist.snippet?.thumbnails?.medium?.url
              }
              alt={playlist.snippet?.title ?? "Playlist"}
              className="
                h-full
                w-full
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "
            />

            {/* Gradient */}
            <div className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-transparent
              to-transparent
            " />


            {/* Video count */}
            <div className="
              absolute
              bottom-3
              right-3
              rounded-lg
              bg-black/75
              px-2.5
              py-1.5
              text-[10px]
              font-bold
              text-white
              backdrop-blur-md
            ">
              {playlist.contentDetails?.itemCount ?? 0} VIDEOS
            </div>


            {/* Play button */}
            <div className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              opacity-0
              transition
              duration-300
              group-hover:opacity-100
            ">
              <div className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-red-600
                text-white
                shadow-xl
              ">
                ▶
              </div>
            </div>

          </a>


          {/* Content */}
          <div className="p-4">

            <h3 className="
              line-clamp-1
              text-sm
              font-bold
              transition
              group-hover:text-red-500
            ">
              {playlist.snippet?.title ?? "Untitled Playlist"}
            </h3>


            <p className="
              mt-1
              line-clamp-2
              text-xs
              leading-relaxed
              text-zinc-500
              dark:text-zinc-400
            ">
              {playlist.snippet?.description ||
                "Gaming videos from this playlist."}
            </p>


            {/* Footer */}
            <div className="mt-4 flex items-center justify-between">

              <span className="
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                text-zinc-400
              ">
                {playlist.contentDetails?.itemCount ?? 0} Videos
              </span>


              <a
                href={`https://www.youtube.com/playlist?list=${playlist.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[11px]
                  font-bold
                  text-red-500
                  transition
                  hover:text-red-400
                "
              >
                View Playlist →
              </a>

            </div>

          </div>

        </article>

      ))}

    </div>

  </section>

</main>
  );
};

export default page;
