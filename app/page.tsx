"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import LinkSlider from "./components/Link";
import Link from "next/link";
import LoadingBar from "react-top-loading-bar";
import useModifierKey from "./components/ModifierKey";
import { showcaseProjects } from "./projects/projects";
import { isMobile } from "react-device-detect";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub, FaRegNoteSticky } from "react-icons/fa6"; //FaNoteSticky
import jam from "./assets/jame.png";
import jam1 from "./assets/jame1.png";
import write from "./assets/write.png";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMac, setIsMac] = useState(false);
  const isModifierPressed = useModifierKey(); //for opacity of button

  // loading bar
  useEffect(() => {
    const isReturningFromPage = sessionStorage.getItem("fromPage");

    // If returning from notes/projects, skip loading animation
    if (isReturningFromPage) {
      setIsLoaded(true);
      sessionStorage.removeItem("fromPage");
      return;
    }

    let currentProgress = 10;

    const interval = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += 15;
        setProgress(currentProgress);
      } else {
        clearInterval(interval);
        setIsLoaded(true);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

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
        className={`intro-container max-w-screen max-h-screen z-40 ${
          isLoaded ? "fade-out" : ""
        }`}
      >
        <div className="wave-effect" />
        <LoadingBar
          color="#ede8d7"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <div className="relative flex justify-center items-center">
          <h1 className="text-white text-md crg my-3">can't rush greatness.</h1>
        </div>
      </div>

      <div className="relative content inset-0 overflow-x-hidden home">
        <div className="min-w-screen md:max-h-screen md:h-screen w-auto bg-black text-darkBeige2 font-playfair overflow-x-hidden md:overflow-y-hidden">
          {/* top section */}
          <div className="relative w-auto p-5 bg-midBeige1 rounded-lg text-darkBeige3 m-1 mt-2 flex flex-row">
            <div className="relative w-full h-full flex justify-between">
              <h1>
                james siyuan li <span className="pl-1">李思远</span>
              </h1>
              <div className="h-full absolute md:top-0 right-0 flex items-center gap-1">
                <button
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  className="px-4 p-2 flex items-center cursor-pointer bg-darkBeige2 text-midBeige1 rounded-md hover:bg-darkBeige1 hover:text-lightBeige transition delay-200 duration-200 ease-in-out"
                >
                 resume.
                </button>
                {!isMobile && (
                  <button
                    onClick={openCommandPalette}
                    className="px-4 p-2 hidden sm:flex cursor-pointer items-center gap-1 text-xs bg-darkBeige2 text-midBeige1 rounded-md hover:bg-darkBeige1 hover:text-lightBeige transition delay-200 duration-200 ease-in-out"
                  >
                    <kbd
                      className={`px-1.5 py-1 rounded bg-darkBeige2/25 text-midBeige flex ${
                        isModifierPressed ? "opacity-40" : "opacity-100"
                      }`}
                    >
                      {isMac ? "⌘" : "ctrl"}
                    </kbd>

                    <span>+</span>
                    <kbd className="px-1.5 py-1 rounded bg-darkBeige2/25 text-midBeige">
                      K
                    </kbd>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-flow-row md:grid-flow-col grid-rows-2 h-auto md:h-[91vh] content-section">
            {/* side section */}
            <div className="row-span-6 md:col-span-5 col-span-6 w-auto md:h-auto h-175 py-3 md:px-7 px-3 bg-midBeige1 m-1 rounded-lg">
              <span className="italic z-10 text-xl text-darkBeige3 drop-shadow-[2px_2px_3px_rgba(0,0,0,0.5)] bg-midBeige1/10">
                can&apos;t rush greatness.
              </span>
              <div className="sidediv relative text-xl h-[95%] flex items-end w-full">
                <div className="flex flex-col gap-5 text-darkBeige1 bg-midBeige1/50 z-10 p-2 w-full">
                  <h1 className="rounded-md">
                    hey i&apos;m <span className="text-darkBeige3">james.</span>
                  </h1>
                  <h1 className="md:bg-transparent rounded-md">
                    · founder @{" "}
                    <span className="sidespan cursor-pointer text-darkBeige2 relative">
                      <LinkSlider href="https://neoleague.dev/" mode="dark">
                        neodev
                      </LinkSlider>
                    </span>
                  </h1>
                  <h1 className="md:bg-transparent rounded-md">
                    · prev. intern @{" "}
                    <span className="sidespan cursor-pointer text-darkBeige2 relative">
                      <LinkSlider href="https://www.weblakes.com/" mode="dark">
                        lakes software
                      </LinkSlider>
                    </span>
                  </h1>
                  <h1 className="tauria md:mb-0 mb-10 md:bg-transparent rounded-md">
                    · prev. junior software dev @{" "}
                    <span className="sidespan cursor-pointer text-darkBeige2 relative">
                      <LinkSlider href="https://www.tauria.com/" mode="dark">
                        tauria
                      </LinkSlider>
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <Image
              src={jam}
              className="jam absolute md:h-auto opacity-98 rounded-xl md:-left-5 md:right-auto md:top-30 w-[90vw] md:w-[35vw] right-0 top-22.5 md:z-[5] z-0"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)",
              }}
              loading="lazy"
              alt="jame"
            />

            {/* linkedin and notes section */}
            <div className="row-span-1 col-span-6 w-auto md:h-auto h-80 grid grid-cols-3 gap-2 m-1">
              {/* linkedin section */}
              <div className="relative col-span-2 py-3 px-7 rounded-lg bg-darkBeige2 text-lightBeige hover:border-darkBeige1 border-2 border-transparent transition delay-200 duration-150 ease-in">
                <a
                  href="https://www.linkedin.com/in/james-li-a81004275/"
                  target="_blank"
                  className="absolute inset-0 w-full h-full"
                >
                  <h1 className="absolute italic left-5 top-2">linkedin</h1>
                  <div className="linkedin absolute md:bottom-4 md:left-2 md:right-0 md:top-auto right-1 top-1 bottom-auto left-auto z-20">
                    <GrLinkedin className="md:w-[4vw] md:h-[4vh] w-[6vw] h-[6vh]" />
                  </div>
                  <h1 className="connect4 absolute bottom-5 italic right-5 md:text-lg text-base">
                    we can go connect4connect
                  </h1>
                </a>
              </div>

              {/* notes section */}
              <div className="relative py-3 px-7 rounded-lg bg-midBeige1 hover:border-midBeige3 border-2 border-transparent transition delay-200 duration-150 ease-in">
                <Link
                  href="/notes"
                  className="absolute inset-0 w-full h-full cursor-pointer"
                >
                  <h1 className="absolute italic text-lg left-5 top-2">
                    notes
                  </h1>
                  <div className="absolute md:bottom-4 md:left-2 md:right-auto right-2 bottom-0">
                    <FaRegNoteSticky className="md:w-[4vw] md:h-[4vh] w-[6vw] h-[6vh]" />
                  </div>

                  <Image
                    src={write}
                    className="absolute md:h-auto opacity-30 z-5 right-0 md:top-10 md:w-70 w-90 top-5 rounded-xl"
                    style={{
                      WebkitMaskImage:
                        "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)",
                    }}
                    loading="lazy"
                    alt="jame"
                  />
                </Link>
              </div>
            </div>

            {/* description section */}
            <div className="relative col-span-6 row-span-1 w-auto md:h-auto py-3 px-7 bg-midBeige1 m-1 rounded-lg md:text-darkBeige2 text-darkBeige3">
              <div className="description relative md:h-auto md:w-[20vw] sm:w-[75%] flex flex-col h-full z-6 md:text-[0.9rem] text-[1.05rem]">
                <span className="italic">programmer | student | athlete</span>
                <h1 className="h1descr break-normal md:mt-3 mt-8 pb-2">
                  coming from waterloo, james is a full time{" "}
                  <span className="text-darkBeige3">
                    student & problem solver.
                  </span>{" "}
                  in his free time, you will find him programming, playing
                  soccer, or wandering the forest.
                </h1>
                <h1 className="h1descr break-normal md:mt-2 mt-8 pb-2">
                  having completed{" "}
                  <span className="font-bold">two software internships </span>{" "}
                  and founded the{" "}
                  <span className="font-bold italic text-darkBeige3">
                    neo developer league
                  </span>
                  , james immerses himself in all aspects of tech, with a
                  primary focus on{" "}
                  <span className="font-bold text-darkBeige3">
                    js/ts full-stack development.
                  </span>
                </h1>
                <h1 className="h1descr break-normal md:mt-2 mt-8 md:pb-0 mb-8 pb-2">
                  if you meet him, he&apos;ll be happy to start a liveshare and
                  talk about the latest{" "}
                  <span className="italic text-darkBeige3">central cee</span> or{" "}
                  <span className="italic text-darkBeige3">jj lin</span> album
                  drop.
                </h1>
              </div>

              <Image
                src={jam1}
                className="jam1 absolute md:h-auto md:opacity-98 opacity-60 md:right-0 md:top-10 md:w-70 -right-10 bottom-0 w-95 rounded-2xl"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 70%)",
                }}
                loading="lazy"
                alt="jame"
              />
            </div>

            {/* projects section */}
            <div className="relative md:col-span-3 row-span-2 col-span-6 max-w-screen md:h-auto h-120 py-3 px-7 m-1 rounded-lg bg-darkBeige1 text-lightBeige md:order-2">
              <div className="relative w-full h-full">
                <h1 className="italic">projects</h1>
                <div className="flex flex-col justify-center overflow-hidden h-[90%]">
                  {showcaseProjects.map((project: any, index: any) => (
                    <div key={index} className="mb-15">
                      <h1 className="cursor-pointer">
                        <LinkSlider
                          href={project.url || "https://jame.li/"}
                          mode="light"
                          className={`relative`}
                        >
                          {project.name}
                        </LinkSlider>
                      </h1>
                      <span className="my-3">{project.desc}</span>
                    </div>
                  ))}
                </div>
                <LinkSlider
                  href="/projects"
                  isNextLink={true}
                  mode="light"
                  className={`relative text-lg`}
                >
                  view all projects
                </LinkSlider>
              </div>
            </div>

            {/* github logo section */}
            <div className="relative md:col-span-3 col-span-6 row-span-4 w-auto md:h-auto h-15 py-3 px-7 m-1 rounded-lg bg-darkBeige1 text-midBeige1 hover:border-midBeige3 border-2 border-transparent transition delay-200 duration-150 ease-in">
              <a
                href="https://github.com/JLi2007"
                className="w-full h-full absolute inset-0"
                target="_blank"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaGithub className="w-auto h-[50%]" />
                </div>
              </a>
            </div>

            {/* profiles section */}
            <div className="col-span-6 row-span-4 w-auto md:h-auto py-3 px-7 m-1 rounded-lg bg-midBeige2 bottom-section">
              <div className="flex w-full items-center md:flex-row flex-col">
                <div className="follow4 flex w-full md:justify-start justify-center">
                  <span className="italic">
                    f*** that, we can go follow4follow
                  </span>
                </div>
                <div className="justify-end flex md:flex-row flex-col w-full underline !underline-offset-4">
                  <h1 className="mx-3 md:my-0 my-2 flex md:justify-start justify-center relative">
                    <LinkSlider href="mailto:hello@jame.li" mode="dark">
                      hello@jame.li
                    </LinkSlider>
                  </h1>
                  <h1 className="mx-3 md:my-0 my-2 flex md:justify-start justify-center relative">
                    <LinkSlider
                      href="https://www.linkedin.com/in/james-li-a81004275/"
                      mode="dark"
                    >
                      linkedin
                    </LinkSlider>
                  </h1>
                  <h1 className="mx-3 md:my-0 my-2 flex md:justify-start justify-center relative">
                    <LinkSlider href="https://github.com/JLi2007" mode="dark">
                      github
                    </LinkSlider>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
