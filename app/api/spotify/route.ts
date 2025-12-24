import { NextRequest, NextResponse } from "next/server";

// use cache
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const { searchParams } = new URL(req.url);
  const trackIds = searchParams.get("track-ids");

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: "Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET" },
      { status: 500 }
    );
  }

  if (!trackIds) {
    return NextResponse.json({ error: "Missing query param track-ids" }, { status: 400 });
  }

  try {
    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
      },
      body: "grant_type=client_credentials",
    });

    if (!tokenRes.ok) {
      const details = await tokenRes.text();
      return NextResponse.json({ error: "Failed to retrieve access token", details }, { status: 500 });
    }

    const tokenData = await tokenRes.json();
    if (!tokenData?.access_token) {
      return NextResponse.json(
        { error: "Failed to retrieve access token", details: tokenData },
        { status: 500 }
      );
    }

    const encodedIds = encodeURIComponent(trackIds);
    const tracksRes = await fetch(
      `https://api.spotify.com/v1/tracks?ids=${encodedIds}`,
      { headers: { Authorization: `Bearer ${tokenData.access_token}` } }
    );

    if (!tracksRes.ok) {
      const details = await tracksRes.text();
      return NextResponse.json({ error: "Failed to fetch tracks", details }, { status: 500 });
    }

    const tracksJson = await tracksRes.json();
    return NextResponse.json(
      { tracks: tracksJson.tracks || [] },
      {
        status: 200,
        headers: {
          "Cache-Control":
            "public, immutable, max-age=31536000, s-maxage=31536000",
        },
      }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Unexpected error", details: String(err) },
      { status: 500 }
    );
  }
}
