"use client";
import { use, useRef } from "react";
import { MDXProvider } from "@mdx-js/react";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";

import Aifs from "./mdx/aifs.mdx";
import Ambition from "./mdx/ambition.mdx";
import Footy from "./mdx/footy.mdx";
import Futbol from "./mdx/futbol.mdx";
import Places from "./mdx/places.mdx";
import Quotes from "./mdx/quotes.mdx";
import Sf from "./mdx/sf.mdx";
import UWReflection from "./mdx/uw-reflection.mdx";

const MDX_MAP: Record<string, React.ComponentType> = {
  aifs: Aifs,
  ambition: Ambition,
  footy: Footy,
  futbol: Futbol,
  places: Places,
  quotes: Quotes,
  sf: Sf,
  uwreflection: UWReflection,
};

export default function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const bottomRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const Post = MDX_MAP[slug];
  // if (!Post) notFound(); // 404 if slug not found

  const components = {
    a: ({ href, children }: { href: string; children: React.ReactNode }) => (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    // button: ({ children }: { children: React.ReactNode }) => (
    //   <button className="cursor-pointer" rel="noopener noreferrer">
    //     {children}
    //   </button>
    // ),
    ScrollButtonTop: ({ children }: { children: React.ReactNode }) => (
      <button
        onClick={() =>
          bottomRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-white/20 cursor-pointer font-bold hover:bg-white/25 p-2 transition delay-200 duration-300 ease-in-out rounded-2xl my-5"
      >
        {children}
      </button>
    ),
    ScrollButtonBottom: ({ children }: { children: React.ReactNode }) => (
      <button
        onClick={() => topRef.current?.scrollIntoView({ behavior: "smooth" })}
        className="bg-white/20 cursor-pointer font-bold hover:bg-white/25 p-2 transition delay-200 duration-300 ease-in-out rounded-2xl my-5"
      >
        {children}
      </button>
    ),
  };

  return (
    <div className="p-6 lg:max-h-screen min-h-screen lg:overflow-y-scroll overflow-auto overflow-x-hidden">
      <button
        onClick={()=>redirect("/")}
        className="text-sm text-lightBeige hover:underline cursor-pointer"
      >
        ← back
      </button>
      <div className="w-full flex items-center justify-center">
        <article
          className="prose mt-6 text-lighterBeige w-[75%] text-sm"
          style={{
            ["--tw-prose-body" as any]: "rgb(var(--color-lighterBeige))",
            ["--tw-prose-headings" as any]: "rgb(var(--color-lighterBeige))",
            ["--tw-prose-links" as any]: "rgb(var(--color-lighterBeige))",
          }}
        >
          <div ref={topRef} />
          <MDXProvider components={components}>
            <Post />
          </MDXProvider>
          <div ref={bottomRef} />
        </article>
      </div>
    </div>
  );
}
