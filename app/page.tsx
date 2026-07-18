import Home from "./home";
import { Track } from "./types/types";

async function getAccessToken(): Promise<string | undefined> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) {
    console.error("spotify env vars missing");
    return undefined;
  }

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    signal: AbortSignal.timeout(5000),
  });
  if (!res.ok) {
    console.error("spotify token request failed:", res.status, await res.text());
    return undefined;
  }
  const data = await res.json();
  return data.access_token;
}

async function getRecentlyPlayed(): Promise<Track | undefined> {
  try {
    const access_token = await getAccessToken();
    if (!access_token) return undefined;

    const res = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        headers: { Authorization: `Bearer ${access_token}` },
        next: { revalidate: 60 },
        signal: AbortSignal.timeout(5000),
      }
    );
    if (!res.ok) {
      console.error("spotify recently-played failed:", res.status, await res.text());
      return undefined;
    }
    const data = await res.json();
    return data.items?.[0]?.track;
  } catch (err) {
    console.error("getRecentlyPlayed threw:", err);
    return undefined;
  }
}


export default async function Page() {
  const recent = await getRecentlyPlayed();

  return (
    <>
      <Home recent={recent}/>
    </>
  );
}
