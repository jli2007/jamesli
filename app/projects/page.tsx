"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { projects } from "./projects";
import { isMobile } from "react-device-detect";
import useModifierKey from "../components/ModifierKey";

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const isModifierPressed = useModifierKey();

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 750);
  }, []);

  const goBackToHome = () => {
    sessionStorage.setItem("fromPage", "true");
    redirect("/");
  };

  // set up cmd palette
  useEffect(() => {
    const isMac =
      navigator.platform.toLowerCase().includes("mac") ||
      navigator.userAgent.toLowerCase().includes("mac");
    setIsMac(isMac);

    const handlePaletteOpened = () => {
      console.log("Palette opened!");
    };

    window.addEventListener("command-palette-opened", handlePaletteOpened);
    return () =>
      window.removeEventListener("command-palette-opened", handlePaletteOpened);
  }, []);

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <>
      <div
        className={`intro-container max-w-screen max-h-screen z-10 font-playfair ${
          isLoaded ? "fade-out" : ""
        }`}
      >
        <h1 className="text-white drop-shadow-[2px_2px_3px_rgba(0,0,0,0.9)]">
          projects.
        </h1>
        <div className="wave-effect2" />
      </div>

      <div className="relative bg-black text-white font-playfair h-auto min-h-screen max-w-screen overflow-x-hidden">
        <div className="flex flex-row">
          <button
            className="bg-white text-black p-5 cursor-pointer m-5 w-30 hover:bg-lightBeige hover:text-darkBeige3 transition delay-150 ease-in-out"
            onClick={goBackToHome}
          >
            {" "}
            back.
          </button>
          <h1 className="p-5 m-5 font-bold">projects</h1>
          {!isMobile && (
            <button
              onClick={openCommandPalette}
              className="px-4 p-2 absolute cursor-pointer right-5 top-5 gap-1 text-xs bg-darkBeige2 text-midBeige1 rounded-md hover:bg-darkBeige2/75 hover:text-lightBeige transition delay-200 duration-200 ease-in-out"
            >
              <div className="flex w-full h-full items-center justify-center">
                <kbd
                  className={`px-1.5 py-1 rounded bg-darkBeige2/10 text-midBeige flex ${
                    isModifierPressed ? "opacity-40" : "opacity-100"
                  }`}
                >
                  {isMac ? "⌘" : "ctrl"}
                </kbd>

                <span>+</span>
                <kbd className="px-1.5 py-1 rounded bg-darkBeige2/10 text-midBeige">
                  k
                </kbd>
              </div>
            </button>
          )}
        </div>

        <div className="p-5 pb-5">
          {projects.map((project, index) => (
            <div key={index} className="mb-5">
              <h1 className="underline decoration-white/50 italic font-bold">
                <a
                  href={project.url}
                  target="_blank"
                  className="hover:bg-lightBeige/13 transition delay-250 duration-200 ease-in-out px-2 py-1 rounded-sm"
                >
                  {project.name}
                </a>
              </h1>
              <h1 className="px-2 py-1">{project.desc}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
