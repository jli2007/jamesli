"use client";
import { use } from "react";
import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import { notFound } from "next/navigation";


import Aif from "./mdx/aif.mdx";
import Ambition from "./mdx/ambition.mdx";

const MDX_MAP: Record<string, React.ComponentType> = {
  aif: Aif,
  ambition: Ambition,
  // post3: Post3,
  // post4: Post4,
  // …continue for all 20 files
};

export default function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  // Lookup MDX component by slug
  const Post = MDX_MAP[slug];
  if (!Post) notFound(); // 404 if slug not found

  // Optional: custom MDX components
  const components = {
    a: ({ href, children }: { href: string; children: React.ReactNode }) => (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  };

  return (
    <div className="p-6">
      <Link href="/" className="text-sm text-darkBeige2 hover:underline">
        ← back
      </Link>
      <article className="prose mt-6">
        <MDXProvider components={components}>
          <Post />
        </MDXProvider>
      </article>
    </div>
  );
}
