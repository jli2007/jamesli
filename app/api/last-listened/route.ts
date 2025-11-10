type Track = {
  name: string;
  album?: { images?: { url: string }[] };
  artists?: { name: string }[];
  external_urls?: { spotify: string };
};

async function getAccessToken() {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
  });
  const data = await res.json();
  return data.access_token;
}

export async function GET() {
  const access_token = await getAccessToken();

  const res = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=1",
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );
  const data = await res.json();
  const track: Track | undefined = data.items?.[0]?.track;

  return Response.json(track);
}
