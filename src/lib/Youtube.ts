const API_KEY = process.env.YOUTUBE_API_KEY;
const PLAYLIST_ID = "PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR"; // Code with Harry C playlist

interface YouTubePlaylistItem {
  snippet: {
    title: string;
    description: string;
    resourceId: { 
      videoId: string; 
    };
    thumbnails: {
      default: { url: string; };
      medium?: { url: string; };
      high?: { url: string; };
    };
  };
}

interface YouTubeAPIResponse {
  items: YouTubePlaylistItem[];
  nextPageToken?: string;
}

interface VideoData {
  title: string;
  videoId: string;
  description?: string;
  thumbnail?: string;
}

export async function getPlaylistItems(playlistId: string): Promise<VideoData[]> {
  let results: VideoData[] = [];
  let nextPageToken: string | undefined = undefined;

  if (!API_KEY) {
    console.warn("YouTube API key not found. Using fallback data.");
    return getFallbackVideos();
  }

  try {
    do {
      const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
      url.searchParams.set("part", "snippet");
      url.searchParams.set("playlistId", playlistId);
      url.searchParams.set("maxResults", "50"); // always max out
      url.searchParams.set("key", API_KEY);
      if (nextPageToken) {
        url.searchParams.set("pageToken", nextPageToken);
      }

      const res = await fetch(url.toString(), {
        next: { revalidate: 3600 }, // cache for 1 hour
      });

      if (!res.ok) {
        throw new Error(`YouTube API responded with status: ${res.status}`);
      }

      const data = await res.json();

      // Push current page’s items
      results = results.concat(
        data.items.map((item: any) => ({
          title: item.snippet.title,
          videoId: item.snippet.resourceId.videoId,
          thumbnail:
            item.snippet.thumbnails.medium?.url ||
            item.snippet.thumbnails.default.url,
        }))
      );

      nextPageToken = data.nextPageToken;
    } while (nextPageToken);

    return results;
  } catch (error) {
    console.error("Failed to fetch YouTube playlist:", error);
    return getFallbackVideos();
  }
}


function getFallbackVideos(): VideoData[] {
  return [
    {
      title: "Failed To Load Video",
      videoId: "Try refreshing the page",
      description: "Try refreshing the page"
    },
  ];
}