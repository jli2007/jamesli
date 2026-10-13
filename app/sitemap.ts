import type { MetadataRoute } from "next";

const BASE = "https://jame.li";

const SLUGS = [
  // work
  "arcki",
  "flowboard",
  "phuture",
  "guideline",
  "neodev",
  "trivialguessr",
  // notes
  "places",
  "works",
  "freedom",
  "creative",
  "linear",
  "vercel",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: BASE, lastModified, changeFrequency: "weekly", priority: 1 },
    ...SLUGS.map((slug) => ({
      url: `${BASE}/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
