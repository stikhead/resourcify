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

export async function getPlaylistItems(): Promise<VideoData[]> {
  if (!API_KEY) {
    console.warn("YouTube API key not found. Using fallback data.");
    return getFallbackVideos();
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=${API_KEY}`;
    
    const response = await fetch(url, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`YouTube API responded with status: ${response.status}`);
    }
    
    const data: YouTubeAPIResponse = await response.json();
    
    return data.items.map((item) => ({
      title: item.snippet.title,
      videoId: item.snippet.resourceId.videoId,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url
    }));
  } catch (error) {
    console.error("Failed to fetch YouTube playlist:", error);
    return getFallbackVideos();
  }
}

function getFallbackVideos(): VideoData[] {
  return [
    {
      title: "Introduction to C Programming",
      videoId: "KJgsSFOSQv0",
      description: "Learn the basics of C programming language"
    },
    {
      title: "Variables and Data Types in C",
      videoId: "MPfo02hth7s",
      description: "Understanding variables, data types, and constants"
    },
    {
      title: "Control Structures in C",
      videoId: "gBLMoJJe2WQ",
      description: "If-else statements, switch cases, and loops"
    },
    {
      title: "Functions in C Programming",
      videoId: "SuWsJkgGpQc",
      description: "Creating and using functions in C"
    },
    {
      title: "Arrays and Pointers in C",
      videoId: "zn6wOLOKSbM",
      description: "Working with arrays and understanding pointers"
    },
    {
      title: "Structures and Unions",
      videoId: "0Bf3nIwTlOQ",
      description: "User-defined data types in C"
    },
    {
      title: "Dynamic Memory Allocation",
      videoId: "xDVC3wKjS64",
      description: "malloc, calloc, realloc, and free functions"
    },
    {
      title: "File Handling in C",
      videoId: "cEfgQOCgOks",
      description: "Reading and writing files in C programming"
    }
  ];
}