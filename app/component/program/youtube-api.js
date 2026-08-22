const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;


async function getChannel() {
  if (!API_KEY || !CHANNEL_ID) {
    throw new Error(
      "Missing YOUTUBE_API_KEY or YOUTUBE_CHANNEL_ID"
    );
  }

  const url = new URL(
    "https://www.googleapis.com/youtube/v3/channels"
  );

  url.searchParams.set("part", "snippet");
  url.searchParams.set("id", CHANNEL_ID);
  url.searchParams.set("key", API_KEY);

  const response = await fetch(url, {
    next: {
      revalidate: 3600,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.error?.message ||
      `YouTube API error: ${response.status}`
    );
  }

  const channel = data.items?.[0];

  if (!channel) {
    throw new Error("YouTube channel not found");
  }

  return {
    id: channel.id,
    name: channel.snippet?.title ?? "",
    description: channel.snippet?.description ?? "",
    thumbnail:
      channel.snippet?.thumbnails?.high?.url ??
      channel.snippet?.thumbnails?.medium?.url ??
      channel.snippet?.thumbnails?.default?.url ??
      "",
  };
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

async function getChannelVideos() {
    if (!API_KEY || !CHANNEL_ID) {
        return [];
    }

    const allVideos = [];
    let nextPageToken = "";

    do {
        try {
            const params = new URLSearchParams({
                part: "snippet",
                channelId: CHANNEL_ID,
                maxResults: "50",
                order: "date",
                type: "video",
                key: API_KEY,
            });

            if (nextPageToken) {
                params.set("pageToken", nextPageToken);
            }

            const res = await fetch(
                `https://www.googleapis.com/youtube/v3/search?${params.toString()}`,
                {
                    next: {
                        revalidate: 3600,
                    },
                }
            );

            if (!res.ok) {
                console.error("YouTube API Error:", res.status, res.statusText);
                break;
            }

            const data = await res.json();

            const videos =
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
                    .filter(Boolean) || [];

            allVideos.push(...(videos ?? []));

            // Get next page
            nextPageToken = data.nextPageToken ?? "";

        } catch (error) {
            console.error("Failed to fetch YouTube videos:", error);
            break;
        }
    } while (nextPageToken);

    return allVideos;
}

async function getChannelPlayList() {
    const allPlaylists = [];
    let nextPageToken = "";

    do {
        const url = new URL(
            "https://www.googleapis.com/youtube/v3/playlists"
        );

        url.searchParams.set("part", "snippet,contentDetails");
        url.searchParams.set("channelId", CHANNEL_ID ?? "");
        url.searchParams.set("maxResults", "50");
        url.searchParams.set("key", API_KEY ?? "");

        if (nextPageToken) {
            url.searchParams.set("pageToken", nextPageToken);
        }

        try {
            const response = await fetch(url, {
                next: {
                    revalidate: 3600,
                },
            });

            if (!response.ok) {
                console.error(
                    "YouTube API Error:",
                    response.status,
                    response.statusText
                );
                break;
            }

            const data = await response.json();

            allPlaylists.push(...(data.items ?? []));

            nextPageToken = data.nextPageToken ?? "";
        } catch (error) {
            console.error("Failed to fetch playlists:", error);
            break;
        }
    } while (nextPageToken);

    return allPlaylists;
}

export { getChannel, getChannelInfo, getChannelVideos, getChannelPlayList }