"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

const posts = [
  {
    slug: "places",
    title: "places of the world 📍",
    date: "march 8, 2025 -> present",
    pinned: true,
  },
  {
    slug: "quotes",
    title: "inspirational people 👥 & quotes 🗣️",
    date: "march 8, 2025 -> present",
    pinned: true,
  },
  {
    slug: "neodev",
    title: "founding neodev",
    date: "march 20, 2025",
    pinned: false,
  },
  {
    slug: "futbol",
    title: "favourite jugadors ⚽️",
    date: "march 17, 2025",
    pinned: false,
  },
  {
    slug: "uw",
    title: "uw accept me 🙏",
    date: "march 8, 2025",
    pinned: false,
  },
  {
    slug: "ambition",
    title: "an inherited ambition",
    date: "march 8, 2025",
    pinned: false,
  },
];

export default function Notes() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 750);
  }, []);

  const goBackToHome = () => {
    sessionStorage.setItem("fromPage", "true");
    redirect("/");
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
            className="bg-white text-black p-5 cursor-pointer m-5 w-30 hover:bg-lightBeige hover:text-darkBeige3 transition delay-150 ease-in-out"
            onClick={goBackToHome}
          >
            {" "}
            <span className="text-sm md:text-base">back.</span>
          </button>
          <h1 className="p-5 m-5">notes</h1>
        </div>
          <h1 className="px-5 py-1 flex justify-center md:justify-start md:text-lg text-2xl md:no-underline underline">pinned 📌</h1>
          {posts.map((post) =>
            post.pinned === true ? (
              <div key={post.slug} className="p-3 flex md:flex-row flex-col items-center md:items-start">
                <h1 className="py-1 px-2 my-1">
                  {post.date} <span className="hidden md:inline">-</span>
                </h1>
                <Link
                  href={{
                    pathname: `/notes/${post.slug}`,
                  }}
                  onClick={() => {
                    sessionStorage.setItem("postDate", post.date);
                    sessionStorage.setItem("postTitle", post.title);
                  }}
                  className="underline !underline-offset-3 hover:bg-lightBeige/10 transition delay-250 duration-200 ease-in-out rounded-sm py-1 px-2 my-1"
                >
                  {post.title}
                </Link>
              </div>
            ) : null
          )}

          <div className="p-2 md:w-[40%] w-[75%] mx-auto md:mx-0">
            <hr />
          </div>
          {posts.map((post) =>
            post.pinned === false ? (
              <div key={post.slug} className="p-3 flex md:flex-row flex-col items-center md:items-start">
                <h1 className="py-1 px-2 my-1">
                  {post.date} <span className="hidden md:inline">-</span>
                </h1>
                <Link
                  href={{
                    pathname: `/notes/${post.slug}`,
                  }}
                  onClick={() => {
                    sessionStorage.setItem("postDate", post.date);
                    sessionStorage.setItem("postTitle", post.title);
                  }}
                  className="underline !underline-offset-3 hover:bg-lightBeige/10 transition delay-250 duration-200 ease-in-out rounded-sm py-1 px-2 my-1"
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
