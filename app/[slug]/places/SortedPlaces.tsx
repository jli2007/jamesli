import { useState, useEffect } from "react";
import { places, PlacesType } from "./places";
import { MdSort } from "react-icons/md";
import RenderPlace from "./PlaceRender";

const SortButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortState, setSortState] = useState("least recent first");
  const [sortedPlaces, setSortedPlaces] = useState(places);

  useEffect(() => {
    sortPlaces(sortState);
  }, [sortState]);

  const sortPlaces = async (state: string) => {
    let data;
    switch (state) {
      case "most recent first":
        data = await (
          await fetch(`/api/sort?type=Most%20Recent%20First`)
        ).json();
        break;
      case "least recent first":
        data = await (
          await fetch(`/api/sort?type=Least%20Recent%20First`)
        ).json();
        break;
      case "most liked first":
        data = await (
          await fetch(`/api/sort?type=Most%20Liked%20First`)
        ).json();
        break;
      case "least liked first":
        data = await (
          await fetch(`/api/sort?type=Least%20Liked%20First`)
        ).json();
        break;
      default:
        break;
    }

    // map the Schema Place back into the mappable ts place
    const mappedPlaces = Array.isArray(data)
      ? data
          .map((dbPlace: any) => places.find((p) => p.title === dbPlace.place))
          .filter((p): p is PlacesType => Boolean(p)) // <-- narrows type
      : [];

    setSortedPlaces(mappedPlaces);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="flex flex-row cursor-pointer" onClick={handleToggle}>
        <MdSort />
        sorted by: <span className="pl-1 underline">{sortState}</span>
      </button>

      {isOpen && (
        <div className="mt-2 flex flex-col space-y-2">
          <button
            className="p-2 border rounded cursor-pointer"
            onClick={() => {
              setSortState("most liked first");
              handleToggle();
            }}
          >
            most liked first
          </button>
          <button
            className="p-2 border rounded cursor-pointer"
            onClick={() => {
              setSortState("least liked first");
              handleToggle();
            }}
          >
            least liked first
          </button>
          <button
            className="p-2 border rounded cursor-pointer"
            onClick={() => {
              setSortState("most recent first");
              handleToggle();
            }}
          >
            newest first
          </button>
          <button
            className="p-2 border rounded cursor-pointer"
            onClick={() => {
              setSortState("least recent first");
              handleToggle();
            }}
          >
            oldest first
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
