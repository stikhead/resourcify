// lib/clientYoutube.ts
export async function getPlaylistItemsClient(playlistId?: string) {
  if (!playlistId) return [];
  try {
    const res = await fetch(`/api?playlistId=${encodeURIComponent(playlistId)}`);
    if (!res.ok) {
      console.error("Server API returned", res.status);
      return [];
    }
    const data = await res.json();
    return data.items || [];
  } catch (err) {
    console.error("Failed to fetch playlist from server:", err);
    return [];
  }
}
