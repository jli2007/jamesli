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
import {
  FaGithub,
  FaRegNoteSticky,
  FaInstagram,
  FaXTwitter,
  FaSpotify,
} from "react-icons/fa6";
import { MdShuffle } from "react-icons/md";
import jam1 from "./assets/jame1.png";
import jam2 from "./assets/jame2.jpg";
import jam4 from "./assets/jame4.jpg";
import jam3 from "./assets/jame3.jpg";
import write from "./assets/write.png";
import uw from "./assets/uw.png";

// for spotify
type Track = {
  id: string;
  name: string;
  album?: { images?: { url: string }[] };
  artists?: { name: string }[];
  external_urls?: { spotify: string };
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMac, setIsMac] = useState(false);
  const isModifierPressed = useModifierKey(); // for opacity of button
  const [tracks, setTracks] = useState<Track[]>([]); // spotify tracks
  const [lastClick, setLastClick] = useState(0);

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

  const fetchTracks = () => {
  const now = Date.now();
  if (now - lastClick < 1000) return;
  setLastClick(now);

  fetch("/api/spotify")
    .then((res) => res.json())
    .then((json) => setTracks(json.tracks || []))
    .catch((err) => console.error(err));
};

  useEffect(() => {
    fetchTracks();
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
          <h1 className="text-white lg:text-lg md:text-md text-sm crg my-3">
            product of the environment.
          </h1>
        </div>
      </div>

      <div className="relative content inset-0 overflow-x-hidden home">
        <div className="min-w-screen lg:max-h-screen lg:h-screen w-auto bg-black text-darkBeige2 font-playfair overflow-x-hidden lg:overflow-y-hidden pb-2 lg:pb-0">
          {/* top section */}
          <div className="relative w-auto p-5 bg-midBeige1 rounded-lg text-darkBeige3 m-1 mt-2 flex flex-row">
            <div className="relative w-full h-full flex justify-between">
              <h1 className="top-text">
                <span className="font-thin">james siyuan li </span>{" "}
                <span className="pl-1 font-light">李思远</span> —{" "}
                <span className="font-bold">ai & full-stack engineer</span>
              </h1>
              <div className="h-full absolute lg:top-0 right-0 flex items-center gap-1">
                {!isMobile && (
                  <button
                    onClick={openCommandPalette}
                    className="px-4 p-2 hidden sm:flex cursor-pointer items-center gap-1 text-xs bg-darkBeige2 text-midBeige1 rounded-lg hover:bg-darkBeige1 hover:text-lightBeige transition delay-200 duration-200 ease-in-out"
                  >
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
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-flow-row lg:grid-flow-col grid-rows-2 h-auto lg:h-[91vh] content-section space-y-1 lg:space-y-0">
            {/* side section */}
            <div className="relative row-span-6 lg:col-span-5 col-span-6 w-auto lg:h-auto h-175 py-3 lg:px-7 px-3 bg-midBeige1 m-1 mb-2 lg:mb-1 rounded-lg">
              <div className="flex items-center justify-between w-full">
                <span className="flex items-center gap-2 italic z-10 text-xl text-darkBeige3 drop-shadow-[2px_2px_3px_rgba(0,0,0,0.5)] bg-midBeige1/10">
                  <Image src={uw} width={35} height={35} alt="uw-logo"></Image>{" "}
                  uwaterloo cs'30.
                </span>
              </div>
              <div className="sidediv relative text-xl h-[95%] flex items-end w-full">
                <div className="flex flex-col gap-5 text-darkBeige1 bg-midBeige1/50 z-10 p-2 w-full">
                  <h1 className="rounded-lg sideh1">
                    hey i&apos;m
                    <span className="text-darkBeige3 ml-1">james.</span>
                  </h1>
                  <h1 className="lg:bg-transparent rounded-lg sideh1">
                    · cooking @{" "}
                    <span className="cursor-pointer text-darkBeige2">
                      <LinkSlider
                        href="https://phutureai.com"
                        mode="dark"
                        className="ml-1 relative"
                      >
                        phuture
                      </LinkSlider>
                    </span>
                  </h1>
                  <h1 className="lg:bg-transparent rounded-lg sideh1">
                    · prev. intern @{" "}
                    <span className="cursor-pointer text-darkBeige2">
                      <LinkSlider
                        href="https://www.weblakes.com/"
                        mode="dark"
                        className="ml-1 relative"
                      >
                        lakes software
                      </LinkSlider>
                    </span>
                  </h1>
                  <h1 className="tauria lg:mb-0 mb-10 lg:bg-transparent rounded-lg sideh1">
                    · prev. software dev @{" "}
                    <span className="cursor-pointer text-darkBeige2">
                      <LinkSlider
                        href="https://www.tauria.com/"
                        mode="dark"
                        className="ml-1 relative"
                      >
                        tauria
                      </LinkSlider>
                    </span>
                  </h1>
                </div>
              </div>
              <Image
                src={jam3}
                className="jam2 absolute w-full lg:h-auto opacity-99 rounded-xl top-10 lg:top-15 lg:w-[34vw] right-0 lg:z-[5] z-0"
                priority={true}
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle, rgba(0,0,0.99) 30%, rgba(0,0,0,0.01) 75%)",
                }}
                alt="jame"
              />
            </div>

            {/* linkedin and notes section */}
            <div className="row-span-1 col-span-6 w-auto lg:h-auto h-80 grid grid-cols-3 gap-2 m-1 mb-2 lg:mb-1">
              {/* linkedin section */}
              <div className="relative col-span-2 py-3 px-7 rounded-lg bg-darkBeige2 text-lightBeige hover:border-darkBeige1 border-2 border-transparent transition delay-200 duration-150 ease-in">
                <a
                  href="https://www.linkedin.com/in/james-siyuan-li/"
                  target="_blank"
                  className="absolute inset-0 w-full h-full"
                >
                  <h1 className="absolute italic left-5 top-2">linkedin</h1>
                  <div className="linkedin absolute lg:bottom-4 lg:left-2 lg:right-0 lg:top-auto right-1 top-0 bottom-auto left-auto z-20">
                    <GrLinkedin className="lg:w-[4vw] lg:h-[4vh] w-[6vw] h-[6vh]" />
                  </div>
                  <h1 className="connect4 absolute bottom-5 italic right-5 lg:text-lg text-base">
                    can't rush greatness
                  </h1>
                </a>
              </div>

              {/* notes section */}
              <div className="relative py-3 px-7 rounded-lg bg-midBeige1 hover:border-lightBeige border-2 border-transparent transition delay-200 duration-150 ease-in">
                <Link
                  href="/notes"
                  className="absolute inset-0 w-full h-full cursor-pointer"
                >
                  <h1 className="absolute italic text-lg left-5 top-2">
                    notes
                  </h1>
                  <div className="absolute lg:bottom-4 lg:left-2 lg:right-auto right-2 bottom-0">
                    <FaRegNoteSticky className="lg:w-[4vw] lg:h-[4vh] w-[6vw] h-[6vh]" />
                  </div>

                  <Image
                    src={write}
                    className="absolute md:h-[90%] lg:h-auto opacity-30 z-5 right-0 top-10 w-auto rounded-xl"
                    style={{
                      WebkitMaskImage:
                        "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)",
                    }}
                    loading="lazy"
                    alt="man writing facts"
                  />
                </Link>
              </div>
            </div>

            {/* description section */}
            <div className="relative col-span-6 row-span-1 w-auto lg:h-auto py-3 px-6 bg-midBeige1 m-1 mb-2 lg:mb-1 rounded-lg lg:text-darkBeige2 text-darkBeige3">
              <div className="description relative h-auto lg:w-[25vw] w-[75%] flex flex-col z-10 text-[0.9rem]">
                <span className="italic font-bold">
                  product of the environment.
                </span>
                <h1 className="h1descr break-normal lg:mt-5 mt-8 lg:pb-0 pb-2 p-1">
                  i'm currently building{" "}
                  <span className="text-darkBeige3 font-bold">phuture</span>,
                  pokémon-go for wildlife. in my free time i code, play fútbol
                  ⚽︎, and wander the forest.
                </h1>

                <h1 className="h1descr break-normal lg:mt-5 mt-8 pb-2 p-1">
                  i build cool software and post on social media:
                </h1>
                <div className="flex gap-3 lg:mb-0">
                  <a
                    href={"https://www.instagram.com/jamesdialedin/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="logos flex items-center gap-3 px-10 py-2 rounded-full shadow-sm ring-1 ring-midBeige3 hover:shadow-md transition lg:opacity-75 opacity-90"
                  >
                    <FaInstagram size={18} aria-hidden />
                  </a>
                  <a
                    href={"https://x.com/james_siyuan_li"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="logos flex items-center gap-3 px-10 py-2 rounded-full shadow-sm ring-1 ring-midBeige3 hover:shadow-md transition lg:opacity-75 opacity-90"
                  >
                    <FaXTwitter size={18} aria-hidden />
                  </a>
                </div>

                <h1 className="h1descr break-normal lg:mt-5 mt-8 pb-2 p-1">
                  <div className="flex items-center">
                    tuff music:
                    <button
                      onClick={fetchTracks}
                      className="cursor-pointer px-1 rounded-full transition"
                    >
                      <MdShuffle size={20} style={{ marginRight: 8 }} />
                    </button>
                  </div>
                </h1>
              </div>

              <div className="description relative h-auto w-[80vw] lg:w-[30vw] max-w-[100%] text-[0.9rem] lg:mb-0 mb-8 flex lg:flex-row flex-col gap-3">
                {tracks.map((t) => (
                  <a
                    key={t.id}
                    href={t.external_urls?.spotify || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:w-1/3 w-2/3 flex items-center gap-2 z-10 h-10 px-1 md:px-2 lg:px-3 rounded-lg shadow-sm ring-1 ring-midBeige3 hover:shadow-md transition lg:opacity-75 opacity-90 backdrop-blur-lg"
                  >
                    <div className="w-7 h-7 relative flex-shrink-0">
                      {t.album?.images && t.album.images[0] ? (
                        <Image
                          src={t.album.images[0].url}
                          alt={t.name}
                          fill
                          className="rounded object-cover"
                        />
                      ) : (
                        <div className="w-7 h-7 bg-lightBeige rounded flex items-center justify-center">
                          <FaSpotify className="text-midBeige2" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0 flex items-center justify-center overflow-hidden">
                      <span className="text-xs font-medium truncate block">
                        {t.name.toLowerCase()}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              <Image
                src={jam4}
                className="jam1 absolute lg:h-auto lg:w-70 w-95 lg:right-0 lg:top-10 -right-10 bottom-0 rounded-2xl lg:opacity-95 opacity-55"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 70%)",
                }}
                loading="lazy"
                alt="jame"
              />
            </div>

            {/* projects section */}
            <div className="projects relative lg:col-span-3 row-span-2 col-span-6 max-w-screen lg:h-auto h-120 py-3 px-7 m-1 mb-2 lg:mb-1 rounded-lg bg-darkBeige1 text-lightBeige lg:order-2">
              <div className="relative w-full h-full">
                <h1 className="italic">projects</h1>
                <div className="flex flex-col justify-center overflow-hidden h-[90%]">
                  {showcaseProjects.map((project: any, index: any) => (
                    <div key={index} className="mb-15">
                      <h1 className="cursor-pointer">
                        <LinkSlider
                          href={project.url}
                          mode="light"
                          className={`relative`}
                        >
                          {project.name}
                        </LinkSlider>
                      </h1>
                      <span className="my-3 whitespace-pre">
                        {project.desc}
                      </span>
                    </div>
                  ))}
                </div>
                <LinkSlider
                  href="/projects"
                  isNextLink={true}
                  mode="light"
                  className={`relative text-lg`}
                >
                  view more
                </LinkSlider>
              </div>
            </div>

            {/* github logo section */}
            <div className="relative lg:col-span-3 col-span-6 row-span-4 w-auto lg:h-auto h-15 py-3 px-7 m-1 mb-2 lg:mb-1 rounded-lg bg-darkBeige1 text-midBeige1 hover:border-midBeige3 border-2 border-transparent transition delay-200 duration-150 ease-in">
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
            <div className="col-span-6 row-span-4 w-auto lg:h-auto py-3 px-7 m-1 rounded-lg bg-midBeige2 bottom-section">
              <div className="flex w-full items-center lg:flex-row flex-col">
                <div className="follow4 flex w-full lg:justify-start justify-center">
                  <span className="italic">
                    based in waterloo; lets connect
                  </span>
                </div>
                <div className="justify-end flex lg:flex-row flex-col w-full">
                  <h1 className="mx-3 lg:my-0 my-2 flex lg:justify-start justify-center">
                    hello@jame.li
                  </h1>
                  <h1 className="mx-3 lg:my-0 my-2 flex lg:justify-start justify-center">
                    <LinkSlider
                      href="https://www.linkedin.com/in/james-siyuan-li/"
                      mode="dark"
                      className="relative"
                    >
                      linkedin
                    </LinkSlider>
                  </h1>
                  <h1 className="mx-3 lg:my-0 my-2 flex lg:justify-start justify-center">
                    <LinkSlider
                      href="https://github.com/JLi2007"
                      mode="dark"
                      className="relative"
                    >
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
