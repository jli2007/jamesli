import { useRef, useEffect, useState } from "react";
import PlaceLikes from "./Likes";

export default function RenderPlace({ place }: { place: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setVisible(isVisible);
      },
      {
        rootMargin: "1000px", //controls how close the screen scroll is for the iframe to start loading
        threshold: 0.05,  //controls how much the iframe has to be visible for the callback to trigger
      }
    );
  
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col w-[90vw] allContainer">
      <div className="flex justify-between items-baseline pb-[10px] topContainer">
        <div className="flex items-center m-0 gap-[10px]">
          <h3 className="title !m-0 leading-none">{place.title}</h3>
          <span className="text-[40px] !m-0 leading-none">{place.flag}</span>
        </div>
        <div className="flex items-center gap-[10px] tagContainer m-0">
          {place.tags.map((tag: any, i: number) => {
            const shadowMap: Record<string, string> = {
              mediumseagreen: "rgba(60,179,113,0.7)",
              orchid: "rgba(218,112,214,0.7)",
              dodgerblue: "rgba(30,144,255,0.7)",
              red: "rgba(255,0,0,0.7)",
              darkSalmon: "rgba(233,150,122,0.7)",
              slategray: "rgba(112,128,144,0.7)",
              darkgoldenrod: "rgba(184,134,11,0.7)",
              darkturquoise: "rgba(0,206,209,0.7)",
              midnightblue: "rgba(25,25,112,0.7)",
              mediumvioletred: "rgba(199,21,133,0.7)",
              coral: "rgba(255,127,80,0.7)",
            };
            const shadowColor = shadowMap[tag.color] || "rgba(0,0,0,0.3)";
            return (
              <div
                key={i}
                className="text-white px-[15px] py-[2px] rounded-[15px] text-[12px]"
                style={{
                  backgroundColor: tag.color,
                  boxShadow: `0px 4px 8px ${shadowColor}`,
                }}
              >
                <span>{tag.text}</span>
              </div>
            );
          })}
          <PlaceLikes slug={place.title} />
        </div>
      </div>
      {visible ? (
        <iframe
          src={place.iframeSrc}
          className="w-[90vw] h-[75vh] border-0 iframe"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="accelerometer; gyroscope;"
        ></iframe>
      ) : (
        <div className="w-[90vw] h-[75vh] bg-black/5 rounded-md" />
      )}

      <h4 className="mt-[10px] mb-[25px] w-[90vw]">{place.description}</h4>
      <hr className="m-0 p-0 mb-[12px]" />
    </div>
  );
}
