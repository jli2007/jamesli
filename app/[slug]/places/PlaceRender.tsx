import { useRef, useEffect, useState } from "react";
import type { CountryScript, PlacesType } from "./places";

const scriptFontFamily: Record<CountryScript, string> = {
  latin: "var(--font-playfair)",
  jp: "var(--font-noto-jp)",
  sc: "var(--font-noto-sc)",
  arabic: "var(--font-noto-ar)",
  thai: "var(--font-noto-th)",
  cyrillic: "var(--font-noto-cy)",
};

function flagEmojiToTwemoji(emoji: string): string {
  return [...emoji]
    .map((c) => (c.codePointAt(0) ?? 0).toString(16))
    .join("-");
}

// Parse [text](url)
function parseLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (match) {
      return (
        <a
          key={i}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-70 transition"
        >
          {match[1]}
        </a>
      );
    }
    return part;
  });
}

export default function RenderPlace({ place, isLast = false }: { place: PlacesType; isLast?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setVisible(isVisible);
        
        // When becoming visible, reload the iframe with new key
        if (isVisible) {
          setIsLoaded(false);
          setIframeKey(prev => prev + 1); // Force new iframe
        }
      },
      {
        rootMargin: "500px",
        threshold: 0.05,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={ref} className="flex flex-col mb-0 md:mb-0 not-prose">
      <div className="flex items-center justify-between gap-3 pb-3 mb-3">
        <h3 className="m-0 leading-none lg:text-3xl md:text-4xl text-2xl font-light tracking-tight">
          {place.title}
        </h3>
        <div className="flex items-center gap-2 opacity-90 leading-none">
          <img
            src={`https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/${flagEmojiToTwemoji(place.flag)}.svg`}
            alt={place.country}
            loading="lazy"
            className="md:w-8 md:h-8 w-6 h-6"
            onError={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const img = e.currentTarget;
              const fallback = document.createElement("span");
              fallback.textContent = place.flag;
              fallback.className = img.className;
              img.replaceWith(fallback);
            }}
          />
          <span
            dir={place.script === "arabic" ? "rtl" : "ltr"}
            className="md:text-lg text-xs leading-none font-thin"
            style={{ fontFamily: scriptFontFamily[place.script] ?? "var(--font-playfair)" }}
          >
            {place.nativeName}
          </span>
        </div>
      </div>

      <div className="relative md:h-[50vh] h-[30vh] bg-black/5 rounded-md mb-0">
        {visible && (
          <iframe
            key={iframeKey}
            src={place.iframeSrc}
            className="absolute inset-0 w-full h-full border-0"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
            onLoad={handleIframeLoad}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            allow="accelerometer;"
          ></iframe>
        )}
      </div>

      <h4 className="mt-5 mb-0 leading-relaxed whitespace-pre-line">{parseLinks(place.description)}</h4>
      {!isLast && <hr className="my-12 opacity-0"/>}
      {isLast && <span className="my-4"/>}
    </div>
  );
}