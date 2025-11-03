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
    date: "march 2025 -> present",
    pinned: true,
  },
  {
    slug: "quotes",
    title: "quotes",
    date: "march 2025 -> present",
    pinned: true,
  },
  {
    slug: "sf",
    title: "going to sf between 2 midterms",
    date: "oct 2025",
    pinned: false,
  },
  {
    slug: "uw-reflection",
    title: "thoughts on uw cs 1 month in",
    date: "sep 2025",
    pinned: false,
  },
  {
    slug: "aifs",
    title: "*collection of uw aifs*",
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
    date: "march 2025",
    pinned: false,
  },
  {
    slug: "ambition",
    title: "an inherited ambition",
    date: "march 2025",
    pinned: false,
  },
];
