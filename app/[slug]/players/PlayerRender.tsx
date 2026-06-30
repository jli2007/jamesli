"use client";

import { players } from "./players";

function flagEmojiToTwemoji(emoji: string): string {
  return [...emoji]
    .map((c) => (c.codePointAt(0) ?? 0).toString(16))
    .join("-");
}

export default function PlayerRender() {
  return (
    <ul className="not-prose flex flex-col gap-10 list-none p-0 m-0">
      {players.map((p) => (
        <li key={p.player} className="m-0">
          <h3 className="flex items-center gap-2 m-0 leading-none lg:text-xl md:text-2xl text-lg font-light tracking-tight">
            {p.player}
            <img
              src={`https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/${flagEmojiToTwemoji(
                p.flag
              )}.svg`}
              alt={p.player}
              loading="lazy"
              className="inline-block md:w-6 md:h-6 w-5 h-5"
              onError={(e) => {
                const img = e.currentTarget;
                const fallback = document.createElement("span");
                fallback.textContent = p.flag;
                fallback.className = img.className;
                img.replaceWith(fallback);
              }}
            />
          </h3>
          <h4 className="m-0 mt-5 font-light leading-relaxed">
            {p.description}
          </h4>
        </li>
      ))}
    </ul>
  );
}
