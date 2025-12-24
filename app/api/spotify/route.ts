import { NextRequest, NextResponse } from 'next/server';

// use cache
export const dynamic = process.env.NODE_ENV === "production" ? "force-static" : "force-dynamic";

export async function GET(req: NextRequest) {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const { searchParams } = new URL(req.url);
  const trackIds = searchParams.get("track-ids");

  if (!clientId || !clientSecret) {
    return NextResponse.json({ error: 'Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET' }, { status: 500 });
  }

  try {
    const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
      },
      body: 'grant_type=client_credentials',
    });

    const tokenData = await tokenRes.json();
    if (!tokenData?.access_token) {
      return NextResponse.json({ error: 'Failed to retrieve access token', details: tokenData }, { status: 500 });
    }

    const tracksRes = await fetch(
      `https://api.spotify.com/v1/tracks?ids=${trackIds}`,
      { headers: { Authorization: `Bearer ${tokenData.access_token}` } }
    );

    const tracksJson = await tracksRes.json();
    return NextResponse.json({ tracks: tracksJson.tracks || [] }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Unexpected error', details: String(err) }, { status: 500 });
  }
}