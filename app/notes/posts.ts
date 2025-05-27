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
    slug: "footy",
    title: "highlights ⚽️",
    date: "may 8, 2025 -> present",
    pinned: true,
  },
  {
    slug: "jamhacks",
    title: "jamhacks 🥈",
    date: "may 22, 2025",
    pinned: false,
  },
  {
    slug: "uw2",
    title: "uw accepted me 🙏",
    date: "may 8, 2025",
    pinned: false,
  },
  {
    slug: "neodev",
    title: "founding neodev",
    date: "march 20, 2025",
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
