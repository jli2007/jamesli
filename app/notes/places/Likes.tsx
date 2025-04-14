import { useEffect, useState } from "react";

interface PlaceLikesProps {
  slug: string;
}

const PlaceLikes = ({ slug }: PlaceLikesProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`/api/routes?place=${slug}`)
      .then((res) => res.json())
      .then((data) => setLikes(data.likes));
  }, [slug]);

  useEffect(() => {
    if (localStorage.getItem(`liked-${slug}`) === "true") {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, []);

  const handleLike = async () => {
    if (loading) return;
    setLoading(true);
    await fetch(`/api/routes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        place: slug,
        action: "like",
      }),
    })
      .then((res) => res.json())
      .then((data) => setLikes(data.likes));

    setIsLiked(true);
    localStorage.setItem(`liked-${slug}`, "true");
    setLoading(false);
  };

  const handleUnlike = async () => {
    if (loading) return;
    setLoading(true);
    await fetch(`/api/routes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        place: slug,
        action: "unlike",
      }),
    })
      .then((res) => res.json())
      .then((data) => setLikes(data.likes));

    setIsLiked(false);
    localStorage.setItem(`liked-${slug}`, "false");
    setLoading(false);
  };

  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <button
        onClick={() => {
          if (!isLiked) {
            handleLike();
          } else {
            handleUnlike();
          }
        }}
        className="cursor-pointer"
        disabled={loading} 
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={isLiked ? "#e11d48" : "none"}
          stroke="#e11d48"
          className={`w-6 h-6 transition-transform duration-300 ${
            isLiked ? "scale-125" : "scale-100"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 21C12 21 3 13.61 3 8.5C3 5.5 5.5 3 8.5 3C10.5 3 12 4.5 12 4.5C12 4.5 13.5 3 15.5 3C18.5 3 21 5.5 21 8.5C21 13.61 12 21 12 21Z"
          />
        </svg>
      </button>

      <span>{likes}</span>
    </div>
  );
};

export default PlaceLikes;
