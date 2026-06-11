import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Track } from "@/app/types/types";
import { TRACK_DATA, ENTRIES, Entry } from "./works";
import { FaSpotify } from "react-icons/fa6";

// parse [text](url) into inline anchor tags
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

function EntryRow({ entry }: { entry: Entry }) {
  const commaIdx = entry.title.indexOf(",");
  const name = commaIdx === -1 ? entry.title : entry.title.slice(0, commaIdx);
  const author = commaIdx === -1 ? "" : entry.title.slice(commaIdx);

  const line = (
    <span className="text-base">
      <span className="text-white">{parseLinks(name)}</span>
      {author && <span className="text-white/60">{parseLinks(author)}</span>}
      {entry.description && (
        <span className="text-white/60"> — {entry.description}</span>
      )}
    </span>
  );

  if (entry.image) {
    return (
      <li className="flex items-center gap-4">
        <Image
          src={entry.image}
          alt=""
          width={72}
          height={72}
          className="w-18 h-18 rounded-md object-cover shrink-0"
        />
        {line}
      </li>
    );
  }
  return <li>{line}</li>;
}

export default function RenderWorks() {
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
    <div className="space-y-16 md:space-y-24 mb-20">
      {ENTRIES.length > 0 && (
        <ul className="not-prose list-none space-y-10 md:space-y-6 pl-0 m-0">
          {ENTRIES.map((entry, i) => (
            <EntryRow key={i} entry={entry} />
          ))}
        </ul>
      )}

      <br/>

      <div className="space-y-10 md:space-y-20">
      {tracks.map((t, i) => {
        const metadata = getTrackMetadata(t.id);
        
        return (
          <div key={t.id}>
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 lg:gap-10">
              <Link
                href={t.external_urls?.spotify || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative shrink-0 w-full sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 aspect-square sm:aspect-auto group cursor-pointer"
              >
                {t.album?.images && t.album.images[0] ? (
                  <Image
                    src={t.album.images[0].url}
                    alt={t.name}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 768px) 160px, (max-width: 1024px) 208px, 256px"
                    className="rounded-lg object-cover group-hover:opacity-85 transition-opacity delay-100"
                  />
                ) : (
                  <div className="w-full h-full bg-lightBeige rounded-lg flex items-center justify-center">
                    <FaSpotify className="text-midBeige2 text-4xl" />
                  </div>
                )}
              </Link>

              <div className="flex-1 min-w-0 flex flex-col md:gap-5">
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-semibold text-lightBeige">
                      {t.name}
                    </h3>
                    <p className="text-base md:text-lg text-lighterBeige mt-1">
                      {t.artists?.map(a => a.name).join(", ")}
                    </p>
                    {metadata?.description && (
                      <p className="text-sm md:text-base text-lighterBeige/75 mt-3">
                        {metadata.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {metadata?.quotes && metadata.quotes.length > 0 && (
              <div className="mt-5 md:mt-10 space-y-2">
                {metadata.quotes.map((quote, idx) => (
                  <blockquote
                    key={idx}
                    className="text-sm md:text-base italic text-lighterBeige/75 border-l-4 border-gray-300 pl-4 wrap-break-word whitespace-pre-line"
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
    </div>
  );
}