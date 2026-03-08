import { useRef, useEffect, useState } from "react";

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

export default function RenderPlace({ place, isLast = false }: { place: any; isLast?: boolean }) {
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
      <div className="flex items-baseline justify-between md:justify-start gap-3 pb-3 mb-3 md:mb-0">
        <h3 className="m-0 pb-2 leading-none lg:text-3xl md:text-4xl text-2xl font-light tracking-tight">
          {place.title}
        </h3>
        <div className="flex md:hidden items-center gap-1.5 opacity-80 leading-none">
          <span className="text-xl leading-none">{place.flag}</span>
          <span className="text-xs leading-none font-thin">{place.country}</span>
        </div>
      </div>

      {/* Tags + flag on desktop - above iframe */}
      <div className="hidden md:flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          {place.tags.map((tag: any, i: number) => {
            const shadowMap: Record<string, string> = {
              mediumseagreen: "rgba(60,179,113,0.7)",
              orchid: "rgba(218,112,214,0.7)",
              dodgerblue: "rgba(30,144,255,0.7)",
              red: "rgba(255,0,0,0.7)",
              darksalmon: "rgba(233,150,122,0.7)",
              slategray: "rgba(112,128,144,0.7)",
              darkgoldenrod: "rgba(184,134,11,0.7)",
              darkturquoise: "rgba(0,206,209,0.7)",
              midnightblue: "rgba(25,25,112,0.7)",
              mediumvioletred: "rgba(199,21,133,0.7)",
              coral: "rgba(255,127,80,0.7)",
              powderblue: "rgba(70,160,160,0.8)"
            };
            const shadowColor = shadowMap[tag.color] || "rgba(0,0,0,0.3)";
            return (
              <div
                key={i}
                className="text-white px-4 py-0.5 rounded-[15px] text-[12px]"
                style={{
                  backgroundColor: tag.color,
                  boxShadow: `0px 4px 8px ${shadowColor}`,
                }}
              >
                <span>{tag.text}</span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-1.5 opacity-80 leading-none">
          <span className="text-2xl leading-none">{place.flag}</span>
          <span className="text-sm leading-none font-thin">{place.country}</span>
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

      {/* Tags on mobile - below iframe */}
      <div className="flex md:hidden items-center justify-center gap-2.5 my-5">
        {place.tags.map((tag: any, i: number) => {
          const shadowMap: Record<string, string> = {
            mediumseagreen: "rgba(60,179,113,0.7)",
            orchid: "rgba(218,112,214,0.7)",
            dodgerblue: "rgba(30,144,255,0.7)",
            red: "rgba(255,0,0,0.7)",
            darksalmon: "rgba(233,150,122,0.7)",
            slategray: "rgba(112,128,144,0.7)",
            darkgoldenrod: "rgba(184,134,11,0.7)",
            darkturquoise: "rgba(0,206,209,0.7)",
            midnightblue: "rgba(25,25,112,0.7)",
            mediumvioletred: "rgba(199,21,133,0.7)",
            coral: "rgba(255,127,80,0.7)",
            powderblue: "rgba(70,160,160,0.8)"
          };
          const shadowColor = shadowMap[tag.color] || "rgba(0,0,0,0.3)";
          return (
            <div
              key={i}
              className="text-white px-4 py-0.5 rounded-[15px] text-[12px]"
              style={{
                backgroundColor: tag.color,
                boxShadow: `0px 4px 8px ${shadowColor}`,
              }}
            >
              <span>{tag.text}</span>
            </div>
          );
        })}
      </div>

      <h4 className="mt-5 mb-0 leading-relaxed whitespace-pre-line">{parseLinks(place.description)}</h4>
      {!isLast && <hr className="my-12 opacity-0"/>}
      {isLast && <span className="my-4"/>}
    </div>
  );
}