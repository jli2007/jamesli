import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Track } from "@/app/types/types";
import { TRACK_DATA } from "./music";
import { FaSpotify } from "react-icons/fa6";

export default function RenderMusic() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const TRACK_IDS = TRACK_DATA.map(track => track.id);

  useEffect(() => {
    (async () => {
      const url = `/api/spotify?track-ids=${TRACK_IDS.join(",")}`;
      const res = await fetch(url);
      const json = await res.json();
      setTracks(json.tracks || []);
    })();
  }, []);

  const getTrackMetadata = (trackId: string) => {
    return TRACK_DATA.find(t => t.id === trackId);
  };

  return (
    <div className="space-y-10 md:space-y-20 mb-20">
      {tracks.map((t) => {
        const metadata = getTrackMetadata(t.id);
        
        return (
          <div key={t.id}>
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 lg:gap-10">
              <Link
                href={t.external_urls?.spotify || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-shrink-0 w-full sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 aspect-square sm:aspect-auto group cursor-pointer"
              >
                {t.album?.images && t.album.images[0] ? (
                  <Image
                    src={t.album.images[0].url}
                    alt={t.name}
                    fill
                    sizes="(max-width: 768px) 160px, (max-width: 1024px) 208px, 256px"
                    className="rounded-lg object-cover group-hover:opacity-85 transition-opacity delay-100"
                  />
                ) : (
                  <div className="w-full h-full bg-lightBeige rounded-lg flex items-center justify-center">
                    <FaSpotify className="text-midBeige2 text-4xl" />
                  </div>
                )}
              </Link>

              <div className="flex-1 min-w-0 flex flex-col gap-0">
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-semibold text-lightBeige">
                      {t.name}
                    </h3>
                    <p className="text-base md:text-lg text-lighterBeige mt-1">
                      {t.artists?.map(a => a.name).join(", ")}
                    </p>
                    {t.album?.name && (
                      <p className="text-sm text-lighterBeige/75 mt-1">
                        Album: {t.album.name}
                      </p>
                    )}
                    {metadata?.genre && (
                      <p className="text-sm text-lighterBeige/75 italic mt-1">
                        {metadata.genre}
                      </p>
                    )}
                  </div>
                </div>

                {metadata?.description && (
                  <p className="text-sm md:text-base text-lighterBeige/75 mt-0 lg:mt-3">
                    {metadata.description}
                  </p>
                )}
              </div>
            </div>

            {metadata?.quotes && metadata.quotes.length > 0 && (
              <div className="mt-5 md:mt-10 space-y-2">
                {metadata.quotes.map((quote, idx) => (
                  <blockquote
                    key={idx}
                    className="text-sm md:text-base italic text-lighterBeige/75 border-l-4 border-gray-300 pl-4 break-words whitespace-pre-line"
                  >
                    {quote}
                  </blockquote>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}