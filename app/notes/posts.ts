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
    date: "march 8, 2025 -> present",
    pinned: true,
  },
  {
    slug: "quotes",
    title: "inspirational people 👥 & quotes 🗣️",
    date: "march 8, 2025 -> present",
    pinned: true,
  },
    {
    slug: "uw-reflection",
    title: "thoughts on uw cs 1 month in",
    date: "sep 24 2025",
    pinned: false,
  },
  {
    slug: "aifs",
    title: "*collection of uw aifs*",
    date: "aug 1, 2025",
    pinned: false,
  },
  {
    slug: "footy",
    title: "highlights ⚽️",
    date: "may 27, 2025",
    pinned: false,
  },
  {
    slug: "jamhacks",
    title: "jamhacks 🥈",
    date: "may 22, 2025",
    pinned: false,
  },
  {
    slug: "futbol",
    title: "favourite jugadors ⚽️",
    date: "march 17, 2025",
    pinned: false,
  },
  {
    slug: "uw",
    title: "uw accept me 🙏",
    date: "march 8, 2025",
    pinned: false,
  },
  {
    slug: "ambition",
    title: "an inherited ambition",
    date: "march 8, 2025",
    pinned: false,
  },
];
