"use client";
import { use, useRef, useEffect, useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import { redirect, notFound } from "next/navigation";
import { isMobile } from "react-device-detect";
import useModifierKey from "../components/ModifierKey";
import './codeblocks.css'
// projects
import Arcki from "./mdx/arcki.mdx";
import Flowboard from "./mdx/flowboard.mdx";
import Guideline from "./mdx/guideline.mdx";
import Neodev from "./mdx/neodev.mdx";
import Phuture from "./mdx/phuture.mdx";
import Trivialguessr from "./mdx/trivialguessr.mdx";
// notes
import Creative from "./mdx/creative.mdx";
import Aifs from "./mdx/aifs.mdx";
import Footy from "./mdx/footy.mdx";
import Freedom from "./mdx/freedom.mdx";
import Futbol from "./mdx/futbol.mdx";
import Works from "./mdx/works.mdx";
import Places from "./mdx/places.mdx";
import Sf from "./mdx/sf.mdx";
import UWReflection from "./mdx/uw-reflection.mdx";

const MDX_MAP: Record<string, React.ComponentType> = {
  creative: Creative,
  aifs: Aifs,
  footy: Footy,
  freedom: Freedom,
  futbol: Futbol,
  works: Works,
  places: Places,
  sf: Sf,
  uwreflection: UWReflection,
  arcki: Arcki,
  flowboard: Flowboard,
  guideline: Guideline,
  neodev: Neodev,
  phuture: Phuture,
  trivialguessr: Trivialguessr
};

export default function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const onScroll = () => {
      const y = container && container.scrollTop > 0 ? container.scrollTop : window.scrollY;
      setShowBackToTop(y > 500);
    };
    container?.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container?.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Post = MDX_MAP[slug];
  if (!Post) notFound();

  useEffect(() => {
    (async () => {
      const prism = await import("prismjs");
      await import("prismjs/plugins/line-numbers/prism-line-numbers");
      await import("prismjs/components/prism-kotlin");
      await import("prismjs/components/prism-typescript");
      await import("prismjs/components/prism-python");
      await import("prismjs/components/prism-json");
      await import ("prismjs/components/prism-yaml");
      await import ("prismjs/components/prism-bash");
      prism.highlightAll();
    })();
  }, []);

  const components = {
    a: ({ href, children }: { href: string; children: React.ReactNode }) => (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  };

  const [isMac, setIsMac] = useState(true);
  const isModifierPressed = useModifierKey();

  useEffect(() => {
    const isMac =
      navigator.platform.toLowerCase().includes("mac") ||
      navigator.userAgent.toLowerCase().includes("mac");
    setIsMac(isMac);
  }, []);

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <div ref={scrollContainerRef} className="lg:max-h-screen min-h-screen lg:overflow-y-scroll overflow-auto overflow-x-hidden">
      <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-2.5">
        <button
          onClick={() => redirect("/")}
          className="text-sm text-white hover:text-neutral-400 cursor-pointer transition"
        >
          ← back
        </button>
        {!isMobile && (
          <button
            onClick={openCommandPalette}
            className="px-4 py-2 flex cursor-pointer items-center gap-1 text-xs bg-neutral-800/60 text-neutral-300 rounded-lg hover:bg-neutral-800/80 hover:text-neutral-200 transition duration-300 ease-in-out"
          >
            <kbd
              className={`px-1.5 py-1 rounded bg-neutral-600/50 text-neutral-300 ${
                isModifierPressed ? "opacity-40" : "opacity-100"
              }`}
            >
              {isMac ? "⌘" : "ctrl"}
            </kbd>
            <span>+</span>
            <kbd className="px-1.5 py-1 rounded bg-neutral-600/50 text-neutral-300">
              k
            </kbd>
          </button>
        )}
      </div>
      <div className="w-full flex items-center justify-center px-6 pb-6">
        <article
          className="prose mt-6 text-lighterBeige lg:w-[75%] md:text-sm text-xs"
          style={{
            ["--tw-prose-body" as any]: "rgb(var(--color-lighterBeige))",
            ["--tw-prose-headings" as any]: "rgb(var(--color-lighterBeige))",
            ["--tw-prose-links" as any]: "rgb(var(--color-lighterBeige))",
          }}
        >
          <MDXProvider components={components}>
            <Post />
          </MDXProvider>
        </article>
      </div>

      <hr className="mx-8 my-10 border-t border-white/20 lg:border-none" />

      <button
        onClick={scrollToTop}
        aria-label="back to top"
        className={`fixed bottom-6 right-6 lg:right-[calc(33.333vw+1.5rem)] z-40 w-10 h-10 rounded-full bg-neutral-800/70 hover:bg-neutral-800/90 backdrop-blur-sm text-neutral-200 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${
          showBackToTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        ↑
      </button>
    </div>
  );
}
