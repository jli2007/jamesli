import { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import jam from "../../assets/jam.png";

import { CiLinkedin } from "react-icons/ci";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 10;

    const interval = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += 12;
        setProgress(currentProgress);
      } else {
        clearInterval(interval);
        setIsLoaded(true);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={`intro-container max-w-screen max-h-screen z-10 ${
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
          <h1 className="text-white text-xl crg my-3">can't rush greatness.</h1>
        </div>
      </div>

      <div className="content absolute inset-0">
        <div className="max-w-screen md:max-h-screen md:h-screen w-screen bg-black text-darkBeige2 font-playfair overflow-hidden ">
          <h1 className="md:w-auto w-screen p-5 bg-lightBeige rounded-lg text-darkBeige3 m-1">
            james siyuan li
          </h1>
          <div className="grid grid-flow-row md:grid-flow-col grid-rows-2 gap-1 h-[90vh]">
            <div className="row-span-6 col-span-5 md:w-auto w-screen py-3 px-7 bg-midBeige1 m-1 rounded-lg">
              <span className="italic text-xl drop-shadow-[2px_2px_3px_rgba(0,0,0,0.5)]">can't rush greatness.</span>
              <div className="text-xl h-[95%] flex items-end">
                <div className="flex flex-col gap-5">
                <h1>hey i'm james.</h1>
                <h1>· founder @ <span className="underline">neodev</span></h1>
                <h1>· prev. intern @ <span className="underline">lakes software</span></h1>
                <h1>· prev. junior software dev @ <span className="underline">tauria</span></h1>
                </div>
              </div>
            </div>
            <img
              src={jam}
              className="absolute md:-left-5 md:w-135 h-auto opacity-98 rounded-xl"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
              }}
            />

            <div className="row-span-1 col-span-4 md:w-auto w-screen grid grid-cols-3 gap-2 m-1">
              <div className="col-span-2 py-3 px-7 rounded-lg bg-darkBeige2 text-lightBeige italic">
                linkedin
              </div>
              <div className="py-3 px-7 rounded-lg bg-midBeige1 italic">
                blog
              </div>
            </div>

            <div className="col-span-4 row-span-1 md:w-auto w-screen py-3 px-7 bg-midBeige1 m-1 rounded-lg">
              <span className="italic z-10">
                programmer | student | athlete
              </span>
            </div>

            <div className="col-span-3 row-span-4 md:w-auto w-screen py-3 px-7 m-1 rounded-lg bg-darkBeige1 text-midBeige1 underline"></div>
            <div className="col-span-6 row-span-3 md:w-auto w-screen py-3 px-7 m-1 rounded-lg bg-midBeige2">
              <div className="flex w-full items-center">
                <div className="flex justify-start w-full">
                  <span className="italic">hello world</span>
                </div>
                <div className="justify-end flex w-full">
                  <button className="cursor-pointer">
                    <a
                      href="https://www.linkedin.com/in/james-li-a81004275/"
                      target="_blank"
                    >
                      {" "}
                      <CiLinkedin className="w-[5vw] h-[5vh]" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-5 row-span-2 md:w-auto w-screen py-3 px-7 m-1 rounded-lg bg-midBeige1 italic">
              projects
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
