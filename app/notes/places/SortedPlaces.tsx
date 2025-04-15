import { useState, useEffect } from "react";
import { places } from "./places";
import { MdSort } from "react-icons/md";
import RenderPlace from "./PlaceRender";

const SortButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortState, setSortState] = useState("Least Recent First");
  const [sortedPlaces, setSortedPlaces] = useState(places);

  useEffect(() => {
    sortPlaces(sortState);
  }, [sortState]);

  const sortPlaces = async (state: string) => {
    let data;
    switch (state) {
      case "Most Recent First":
        data = await (
          await fetch(`/api/sort?type=Most%20Recent%20First`)
        ).json();
        break;
      case "Least Recent First":
        data = await (
          await fetch(`/api/sort?type=Least%20Recent%20First`)
        ).json();
        break;
      case "Most Liked First":
        data = await (
          await fetch(`/api/sort?type=Most%20Liked%20First`)
        ).json();
        break;
      case "Least Liked First":
        data = await (
          await fetch(`/api/sort?type=Least%20Liked%20First`)
        ).json();
        break;
      default:
        break;
    }

    const mappedPlaces = data
      .map((dbPlace: any) => places.find((p) => p.title === dbPlace.place))
      .filter(Boolean);

    setSortedPlaces(mappedPlaces);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="flex flex-row cursor-pointer" onClick={handleToggle}>
        <MdSort />
        Sorted by: <span className="pl-1 underline">{sortState}</span>
      </button>

      {isOpen && (
        <div className="mt-2 flex flex-col space-y-2">
          <button
            className="p-2 border rounded cursor-pointer"
            onClick={() => {setSortState("Most Liked First"); handleToggle();}}
          >
            Most Liked First
          </button>
          <button
            className="p-2 border rounded cursor-pointer"
            onClick={() => {setSortState("Least Liked First"); handleToggle();}}
          >
            Least Liked First
          </button>
          <button
            className="p-2 border rounded cursor-pointer"
            onClick={() => {setSortState("Most Recent First"); handleToggle();}}
          >
            Most Recent First
          </button>
          <button
            className="p-2 border rounded cursor-pointer"
            onClick={() => {setSortState("Least Recent First"); handleToggle();}}
          >
            Least Recent First
          </button>
        </div>
      )}

      <br />

      <div>
        {sortedPlaces.map((place, index) => (
          <RenderPlace key={index} place={place} />
        ))}
      </div>
    </div>
  );
};

export default SortButton;
