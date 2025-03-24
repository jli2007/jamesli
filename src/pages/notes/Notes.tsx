import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "Quotes",
    title: "quotes with aura 🗣️",
    date: "march 8, 2025 -> present",
    pinned: true,
  },
  {
    slug: "Places",
    title: "places of the world 📍",
    date: "march 8, 2025 -> present",
    pinned: true,
  },
  {
    slug: "Neodev",
    title: "founding neodev",
    date: "march 20, 2025",
    pinned: false,
  },
  {
    slug: "Futbol",
    title: "favourite jugadors ⚽️",
    date: "march 17, 2025",
    pinned: false,
  },
  {
    slug: "UW",
    title: "uw accept me 🙏",
    date: "march 8, 2025",
    pinned: false,
  },
  {
    slug: "Ambition",
    title: "an inherited ambition",
    date: "march 8, 2025",
    pinned: false,
  },
];

export default function Notes() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 750);
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
            <span className="text-sm md:text-base">back.</span>
          </button>
          <h1 className="p-5 m-5">notes</h1>
        </div>
        <h1 className="px-5 py-1">pinned 📌</h1>
        {posts.map((post) =>
          post.pinned === true ? (
            <div key={post.slug} className="p-3 flex flex-row">
              <h1 className="py-1 px-2 my-1">{post.date} - </h1>
              <Link
                to={`/notes/${post.slug}`}
                state={{ date: post.date, title: post.title }}
                className="underline hover:bg-lightBeige/10 transition delay-250 duration-200 ease-in-out rounded-sm py-1 px-2 my-1"
              >
                {post.title}
              </Link>
            </div>
          ) : null
        )}

        <div className="p-2 w-[40%]">
          <hr />
        </div>
        {posts.map((post) =>
          post.pinned === false ? (
            <div key={post.slug} className="p-3 flex flex-row">
              <h1 className="py-1 px-2 my-1">{post.date} - </h1>
              <Link
                to={`/notes/${post.slug}`}
                state={{ date: post.date, title: post.title }}
                className="underline hover:bg-lightBeige/10 transition delay-250 duration-200 ease-in-out rounded-sm py-1 px-2 my-1"
              >
                {post.title}
              </Link>
            </div>
          ) : null
        )}
      </div>
    </>
  );
}
