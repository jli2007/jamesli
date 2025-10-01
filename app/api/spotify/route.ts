import { NextResponse } from 'next/server';

const TRACK_IDS = [
  '1Xapo8sq7KcQXdt0HrXX5B',
  '101iWa6yaODTI0RWewMK1B', 
  '1N4WFXhgmkrTRxK0X7R90u',
];

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

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
      `https://api.spotify.com/v1/tracks?ids=${TRACK_IDS.join(',')}`,
      { headers: { Authorization: `Bearer ${tokenData.access_token}` } }
    );

    const tracksJson = await tracksRes.json();
    return NextResponse.json({ tracks: tracksJson.tracks || [] }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Unexpected error', details: String(err) }, { status: 500 });
  }
}
