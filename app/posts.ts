interface Post {
  slug: string;
  title: string;
  date: string;
  pinned: boolean;
}

export const posts: Post[] = [
  {
    slug: "places",
    title: "places of the world 📍",
    date: "ongoing",
    pinned: true,
  },
  {
    slug: "quotes",
    title: "quotes",
    date: "ongoing",
    pinned: true,
  },
  {
    slug: "music",
    title: "tuff music",
    date: "ongoing",
    pinned: true,
  },
    {
    slug: "forest",
    title: "the forest ⽊",
    date: "dec 2025",
    pinned: false,
  },
  {
    slug: "sf",
    title: "✈️ visiting sf between 2 midterms",
    date: "oct 2025",
    pinned: false,
  },
  {
    slug: "uwreflection",
    title: "thoughts on uw cs 1 month in",
    date: "sep 2025",
    pinned: false,
  },
  {
    slug: "aifs",
    title: "uw aifs",
    date: "aug 2025",
    pinned: false,
  },
  {
    slug: "footy",
    title: "highlights ⚽️",
    date: "may 2025",
    pinned: false,
  },
  {
    slug: "futbol",
    title: "favourite jugadors ⚽️",
    date: "mar 2025",
    pinned: false,
  },
];
