import { useEffect, useState } from "react";

interface PlaceLikesProps {
  slug: string;
}

export const PlaceLikes = ({ slug }: PlaceLikesProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    fetch(`/api/routes?place=${slug}`)
      .then((res) => res.json())
      .then((data) => setLikes(data.likes));
  }, [slug]);

  useEffect(()=>{
    if(localStorage.getItem("liked") == "true"){
      setIsLiked(true);
    }else{
      setIsLiked(false);
    }
  })

  const handleLike = async () => {
    await fetch(`/api/routes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        place: slug,
        action: "like",
      }),
    })
      .then((res) => res.json())
      .then((data) => setLikes(data.likes))
      .then(()=> localStorage.setItem("liked", "true"));
  };

  const handleUnlike = () => {
    fetch(`/api/routes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        place: slug,
        action: "unlike",
      }),
    })
      .then((res) => res.json())
      .then((data) => setLikes(data.likes))
      .then(()=> localStorage.setItem("liked", "false"));
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
