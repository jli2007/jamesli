"use client";
import { useEffect, useState, useRef, use } from "react";
import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import "../places/places.css";

export default function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [info, setInfo] = useState<{
    date: string | null;
    title: string | null;
  }>({
    date: null,
    title: null,
  });

  const [Post, setPost] = useState<React.ComponentType | null>(null);
  const router = useRouter();
  const { slug } = use(params);
  const bottomRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const date = sessionStorage.getItem("postDate");
    const title = sessionStorage.getItem("postTitle");
    console.log(date, title);
    setInfo({
      date: date,
      title: title,
    });

    const loadMDX = async () => {
      try {
        console.log(slug);
        // Dynamically import the MDX file using the slug
        const module = await import(`../mdx/${slug}.mdx`);
        setPost(() => module.default); // Set the loaded component
      } catch (error) {
        console.error("Error loading the MDX file", error);
        notFound();
      }
    };

    loadMDX();
  }, [slug]);

  const components = {
    a: ({ href, children }: { href: string; children: React.ReactNode }) => (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
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
        onClick={() =>
          topRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-white/20 cursor-pointer font-bold hover:bg-white/25 p-2 transition delay-200 duration-300 ease-in-out rounded-2xl my-5"
      >
        {children}
      </button>
    ),
  };

  if (!Post) return <div>Loading...</div>;

  return (
    <div className="bg-black text-white max-w-screen min-h-screen h-auto w-full font-playfair font-normal overflow-x-hidden pr-5 pb-5">
      <div className="flex flex-row">
        <button
          className="bg-white text-black cursor-pointer w-40 hover:bg-lightBeige hover:text-darkBeige3 m-5 p-5 transition delay-150 ease-in-out"
          onClick={() => {
            router.push("/notes");
          }}
        >
          <span className="text-sm md:text-base">back to all notes.</span>
        </button>
        <h1 className="p-5 m-5">
          {info.date} - {info.title}
        </h1>
      </div>

      <div className="w-full pl-5 prose prose-invert font-playfair">
        <div ref={topRef} />
        <MDXProvider components={components}>
          <Post/>
        </MDXProvider>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
