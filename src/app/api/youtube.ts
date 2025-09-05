// app/api/youtube.ts
import fetch from "node-fetch";

const API_KEY = process.env.YOUTUBE_API_KEY; // Add this in .env.local
const PLAYLIST_ID = "PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR";
interface YouTubePlaylistItem {
  snippet: {
    title: string;
    description: string;
    resourceId: { videoId: string };
  };
}

interface YouTubeAPIResponse {
  items: YouTubePlaylistItem[];
}

export async function getPlaylistItems() {
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=${API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch playlist data");
function isYouTubeAPIResponse(obj: any): obj is YouTubeAPIResponse {
  return obj && Array.isArray(obj.items);
}

const data = await res.json();

if (!isYouTubeAPIResponse(data)) {
  throw new Error("Invalid API response");
}
  return data.items.map((item) => ({
    title: item.snippet.title,
    videoId: item.snippet.resourceId.videoId,
  }));
}

