import { useEffect, useState } from "react";

interface PlaceLikesProps {
  slug: string;
}

export default function PlaceLikes({ slug }: PlaceLikesProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    fetch(`/api/like/${slug}`)
      .then((res) => res.json())
      .then((data) => setLikes(data.likes));
  }, [slug]);

  const handleLike = () => {
    fetch(`/api/like/${slug}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => setLikes(data.likes));
  };

  const handleUnlike = () => {
    fetch(`/api/unlike/${slug}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => setLikes(data.likes));
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
          setIsLiked(!isLiked);
        }}
      >
        ❤️
      </button>

      <span>{likes}</span>
    </div>
  );
}
