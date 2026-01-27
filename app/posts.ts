interface Post {
  slug: string;
  title: string;
  date: string;
  pinned: boolean;
}

export const posts: Post[] = [
  {
    slug: "places",
    title: "places of the world",
    date: "ongoing",
    pinned: true,
  },
  {
    slug: "music",
    title: "music",
    date: "ongoing",
    pinned: true,
  },
    {
    slug: "forest",
    title: "a tribute to freedom",
    date: "dec 2025",
    pinned: false,
  },
  {
    slug: "sf",
    title: "visiting sf between 2 midterms",
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
    slug: "futbol",
    title: "players i enjoy watching",
    date: "mar 2025",
    pinned: false,
  },
];
