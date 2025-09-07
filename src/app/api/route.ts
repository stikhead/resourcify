// app/api/youtube/playlist/route.ts
import { NextResponse } from "next/server";
import { getPlaylistItems} from "@/lib/Youtube";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const playlistId = searchParams.get("playlistId");
  if (!playlistId) return NextResponse.json({ error: "playlistId required" }, { status: 400 });

  try {
    const items = await getPlaylistItems(playlistId);
    return NextResponse.json({ items }, {
      status: 200,
      headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=59" },
    });
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json({ error: "internal" }, { status: 500 });
  }
}
