// adding a slug here without adding it to MDX_MAP in SlugClient.tsx is a type error.

export type PageMeta = {
  title: string;
  description: string;
  hidden?: true;
};

export const PAGE_META = {
  // work
  arcki: {
    title: "arcki",
    description: "3d architectural playground, 50+ github stars",
  },
  flowboard: {
    title: "flowboard",
    description: "cursor for animators, 150+ github stars, 1000+ users",
  },
  phuture: {
    title: "phuture",
    description: "pokémon-go for wildlife",
  },
  guideline: {
    title: "guideline",
    description: "augmented reality breadboarding guide",
  },
  neodev: {
    title: "neo developer league",
    description: "non-profit i co-founded, raised $12k",
  },
  trivialguessr: {
    title: "trivialguessr",
    description: "geoguessr for trivia",
  },

  // notes
  places: {
    title: "the art of noticing",
    description: "streetview locations that i find interesting",
  },
  works: {
    title: "great works",
    description: "books, art, places, and music that i think are great",
  },
  freedom: {
    title: "a tribute to freedom",
    description: "a boy in nature",
  },
  creative: {
    title: "prototyping",
    description: "design prototypes",
  },
  linear: {
    title: "linear's mcp patch mode",
    description: "linear mcp",
  },
  vercel: {
    title: "what counts as a failed tool call",
    description: "vercel ai sdk",
  },

  // hidden, reacheable but kept out of the sitemap
  aifs: {
    title: "uw aifs",
    description: "collection of successful uw aifs",
    hidden: true,
  },
  footy: {
    title: "footy",
    description: "football highlights",
    hidden: true,
  },
  players: {
    title: "players",
    description: "favourite footballers",
    hidden: true,
  },
  sf: {
    title: "sf",
    description: "going to sf > going to class",
    hidden: true,
  },
  uwreflection: {
    title: "uw reflection",
    description: "uw cs 1a reflection",
    hidden: true,
  },
  tools: {
    title: "tool selection reliability",
    description: "improving tool selection reliability for ai agents",
    hidden: true,
  },
} as const satisfies Record<string, PageMeta>;

export type Slug = keyof typeof PAGE_META;

export const SLUGS = Object.keys(PAGE_META) as Slug[];

export const PUBLIC_SLUGS = SLUGS.filter(
  (slug) => !("hidden" in PAGE_META[slug]),
);

export const isSlug = (value: string): value is Slug =>
  Object.prototype.hasOwnProperty.call(PAGE_META, value);
