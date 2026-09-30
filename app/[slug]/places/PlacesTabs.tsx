import { useState } from "react";
import { places, type PlacesType } from "./places";
import InteractivePlace from "./PlaceRender";

const TABS: { kind: PlacesType["kind"]; label: string }[] = [
  { kind: "streetview", label: "streetview" },
  { kind: "photosphere", label: "photospheres" },
  { kind: "misc", label: "misc" },
];

export default function PlacesTabs() {
  const [active, setActive] = useState<PlacesType["kind"]>("streetview");
  const shown = places.filter((place) => place.kind === active);

  return (
    <div className="flex flex-col not-prose">
      <div role="tablist" className="flex items-center gap-5 mb-10">
        {TABS.map((tab) => {
          const isActive = tab.kind === active;
          return (
            <button
              key={tab.kind}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.kind)}
              className={`pb-1 border-b cursor-pointer transition-colors duration-300 md:text-base text-sm ${
                isActive
                  ? "text-lightBeige border-lightBeige/60"
                  : "text-lighterBeige/50 border-transparent hover:text-lighterBeige"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div>
        {shown.map((place, index) => (
          <InteractivePlace
            key={place.iframeSrc}
            place={place}
            isLast={index === shown.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
