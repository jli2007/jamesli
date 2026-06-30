interface Post {
  slug: string;
  title: string;
  date: string;
  pinned: boolean;
}

export const posts: Post[] = [
  {
    slug: "places",
    title: "the art of noticing",
    date: "-",
    pinned: true,
  },
  {
    slug: "works",
    title: "great works",
    date: "-",
    pinned: true,
  },
    {
    slug: "freedom",
    title: "a tribute to freedom",
    date: "dec 2025",
    pinned: false,
  },
  {
    slug: "players",
    title: "players i enjoy watching",
    date: "mar 2025",
    pinned: false,
  },
];
