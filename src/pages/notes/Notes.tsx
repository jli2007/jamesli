import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const posts = [
  { slug: "UW", title: "Uw accept me pls", date: "March 8, 2025" },
];

export default function Notes() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  const goBackToHome = () => {
    sessionStorage.setItem("fromPage", "true");
    navigate("/home");
  };

  return (
    <>
      <div
        className={`intro-container max-w-screen max-h-screen z-10 ${
          isLoaded ? "fade-out" : ""
        }`}
      >
        <h1 className="text-white drop-shadow-[2px_2px_3px_rgba(0,0,0,0.9)]">
          notes.
        </h1>
        <div className="wave-effect2" />
      </div>

      <div className="bg-black text-white font-playfair h-screen w-screen md:max-h-screen max-w-screen overflow-x-hidden">
        <div className="flex flex-row">
          <button
            className="bg-white text-black p-5 cursor-pointer m-5 w-30 hover:bg-lightBeige hover:text-darkBeige3"
            onClick={goBackToHome}
          >
            {" "}
            back
          </button>
          <h1 className="p-5 m-5">notes</h1>
        </div>
        {posts.map((post) => (
          <div key={post.slug} className="p-5 flex flex-row">
            <h1 className="pr-2">{post.date} - </h1>
            <Link to={`/notes/${post.slug}`} className="underline">
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
