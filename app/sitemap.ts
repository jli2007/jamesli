import type { MetadataRoute } from "next";
import { PUBLIC_SLUGS } from "./[slug]/meta";

const BASE = "https://jame.li";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: BASE, lastModified },
    ...PUBLIC_SLUGS.map((slug) => ({
      url: `${BASE}/${slug}`,
      lastModified,
    })),
  ];
}
