import { NextResponse } from 'next/server';

const TRACK_IDS = [
  '1Xapo8sq7KcQXdt0HrXX5B',
  '101iWa6yaODTI0RWewMK1B', 
  '1N4WFXhgmkrTRxK0X7R90u',
  '55d0jw269HE9pbOt5ntCo8',
  '1TzPQUNbfBCSyRQ7PCappw',
  '47fjdEwVngKqmgda3UR3Rl',
  '2aMN1ky0SzSEcV1QdBYbW9',
  '7H5CsjEafNygkvcm69RevN',
  '2maR0wuP92sNy48SMVowzZ',
  '7MJ8g0egEkhvGu44IamrDE',
  '0FWAIRd9Uz5uNek7cALYNC',
  '22agj1ppHejR41cUyf7k6v',
  '3V2v19gDm4rmRkMwcgS4X2',
  '2SxXpn73WqM4zWhmWxeQ4s',
  '2FDTHlrBguDzQkp7PVj16Q',
  '6Ncr1lCYnE3JHwtVK4nLAx',
  '5DT2fVrYGbXNhMYCnEFfg2',
  '3TN2HZSll8ueBFtt88VbfX',
  '1aO78Al3o07IrUdeBy9HXm',
  '5Rzpn60KTM11EBETHaF9Kt',
  '7vn9sDws2zq3EXE8DItTkh',
  '5yL6jJiq8TIpJMt6YNi4Lt',
  '0zgcef8wT0O27OI2vPGnB9',
  '4YnC3EgoRzP14QXVDBuTfF',
  '4KCfCctnZQd5mem6S3HhKi',
  '7vd1j4IDTU0koES9M8dvBQ',
  '1Q8L5GiqKchiwSkdMDXyP6'
];

function getRandomSubset(arr: any[], size: number) {
  const result = new Set<number>();
  while (result.size < size) {
    result.add(Math.floor(Math.random() * arr.length));
  }
  return [...result].map(i => arr[i]);
}

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

    // pick 3 random ids
    const randomIds = getRandomSubset(TRACK_IDS, 3);
    const tracksRes = await fetch(
      `https://api.spotify.com/v1/tracks?ids=${randomIds.join(',')}`,
      { headers: { Authorization: `Bearer ${tokenData.access_token}` } }
    );

    const tracksJson = await tracksRes.json();
    return NextResponse.json({ tracks: tracksJson.tracks || [] }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Unexpected error', details: String(err) }, { status: 500 });
  }
}