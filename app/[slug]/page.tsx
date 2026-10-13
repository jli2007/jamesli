import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PAGE_META, SLUGS, isSlug } from "./meta";
import SlugClient from "./SlugClient";

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isSlug(slug)) return {};

  const { title, description } = PAGE_META[slug];
  const url = `https://jame.li/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: `${title} · james li`,
      description,
      url,
      siteName: "jame.li",
      images: [{ url: "https://jame.li/banner.png", width: 1200, height: 630 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · james li`,
      description,
      images: ["https://jame.li/banner.png"],
    },
  };
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isSlug(slug)) notFound();

  return <SlugClient slug={slug} />;
}
