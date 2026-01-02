import { useRef, useEffect, useState } from "react";

export default function RenderPlace({ place }: { place: any }) {
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
    <div ref={ref} className="flex flex-col mb-8 md:mb-0">
      <div className="flex justify-between md:items-baseline items-center pb-2.5 md:flex-row flex-col">
        <div className="flex items-center m-0 gap-2.5 lg:mb-0 mb-2">
          <h3 className="md:mb-0 mb-10 m-0! leading-none">{place.title}</h3>
          <span className="lg:text-[35px] text-[30px] m-0! leading-none">
            {place.flag}
          </span>
        </div>
        <div className="flex items-center gap-2.5 tagContainer m-0 lg:mb-0 mb-1">
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
                className="text-white md:px-3.75 py-0.5 px-2.5 rounded-[15px] text-[12px]"
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
      </div>

      <div className="relative md:h-[50vh] h-[30vh] bg-black/5 rounded-md">
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

      <h4 className="mt-2.5 mb-6.25">{place.description}</h4>
      <hr className="m-0 p-0 mb-1.25 opacity-50" />
    </div>
  );
}