import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import LoadingBar from "react-top-loading-bar";
import { showcaseProjects } from "../projects/projects";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import jam from "../../assets/jam.png";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const isReturningFromPage = sessionStorage.getItem("fromPage");

    // If returning from Notes, skip loading animation
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

      <div className="relative content inset-0 overflow-x-hidden">
        <div className="min-w-screen md:max-h-screen md:h-screen w-auto bg-black text-darkBeige2 font-playfair overflow-x-hidden md:overflow-y-hidden ">
          <h1 className="md:w-auto w-screen p-5 bg-midBeige1 rounded-lg text-darkBeige3 m-1">
            james siyuan li
          </h1>

          {/* side section */}
          <div className="grid grid-flow-row md:grid-flow-col grid-rows-2 gap-1 h-[90vh]">
            <div className="row-span-6 col-span-5 md:w-auto w-screen md:h-auto py-3 px-7 bg-midBeige1 m-1 rounded-lg">
              <span className="italic text-xl drop-shadow-[2px_2px_3px_rgba(0,0,0,0.5)]">
                can't rush greatness.
              </span>
              <div className="text-xl h-[95%] flex items-end">
                <div className="flex flex-col gap-5 text-darkBeige1">
                  <h1>
                    hey i'm <span className="text-darkBeige3">james.</span>
                  </h1>
                  <h1>
                    · founder @{" "}
                    <span className="underline cursor-pointer text-darkBeige1">
                      <a href="https://neoleague.dev/" target="_blank">
                        neodev
                      </a>
                    </span>
                  </h1>
                  <h1>
                    · prev. intern @{" "}
                    <span className="underline cursor-pointer text-darkBeige1">
                      <a href="https://www.weblakes.com/" target="_blank">
                        lakes software
                      </a>
                    </span>
                  </h1>
                  <h1>
                    · prev. junior software dev @{" "}
                    <span className="underline cursor-pointer text-darkBeige1">
                      <a href="https://www.tauria.com/" target="_blank">
                        tauria
                      </a>
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <img
              src={jam}
              className="absolute md:h-auto opacity-98 rounded-xl z-5 md:-left-5 md:w-135 w-80 left-90"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
              }}
            />

            {/* linkedin and notes section */}
            <div className="row-span-1 col-span-6 md:w-auto w-screen md:h-auto grid grid-cols-3 gap-2 m-1">
              {/* linkedin section */}
              <div className="relative col-span-2 py-3 px-7 rounded-lg bg-darkBeige2 text-lightBeige">
                <h1 className="italic">linkedin</h1>
                <button className="cursor-pointer absolute bottom-4 left-2">
                  <a
                    href="https://www.linkedin.com/in/james-li-a81004275/"
                    target="_blank"
                  >
                    {" "}
                    <GrLinkedin className="w-[4vw] h-[4vh]" />
                  </a>
                </button>
                <h1 className="absolute bottom-5 italic right-5">
                  we can go connect4connect
                </h1>
              </div>

              {/* notes section */}
              <div className="py-3 px-7 rounded-lg bg-midBeige1 italic">
                <button
                  className="underline cursor-pointer text-lg"
                  onClick={() => {
                    navigate("/notes");
                  }}
                >
                  notes
                </button>
              </div>
            </div>

            {/* description section */}
            <div className="col-span-6 row-span-1 md:w-auto md:h-auto w-screen py-3 px-7 bg-midBeige1 m-1 rounded-lg">
              <div className="md:h-auto w-[25vw]">
                <span className="italic z-10">
                  programmer | student | athlete
                </span>
                <h1 className="break-normal overflow-hidden w-[150] border-r">
                  i picked up coding in grade 11 and locked in. allan joe george is a hfuiewhwfeu 
                </h1>
              </div>
            </div>

            {/* github logo section */}
            <div className="col-span-3 row-span-4 md:w-auto w-screen md:h-auto py-3 px-7 m-1 rounded-lg bg-darkBeige1 text-midBeige1 underline">
              <div className="w-full h-full flex justify-center">
                <a href="https://github.com/JLi2007" target="_blank">
                  <FaGithub className="w-auto h-[95%]" />
                </a>
              </div>
            </div>

            {/* profiles section */}
            <div className="col-span-6 row-span-4 md:w-auto w-screen md:h-auto py-3 px-7 m-1 rounded-lg bg-midBeige2">
              <div className="flex w-full items-center">
                <div className="flex justify-start w-full">
                  <span className="italic">
                    f*** that, we can go follow4follow
                  </span>
                </div>
                <div className="justify-end flex w-full"></div>
              </div>
            </div>

            {/* projects section */}
            <div className="col-span-3 row-span-2 max-w-screen md:h-auto py-3 px-7 m-1 rounded-lg bg-darkBeige1 text-lightBeige">
              <div className="relative w-full h-full">
                <h1 className="italic">projects</h1>
                <div className="flex flex-col justify-center overflow-hidden h-[90%]">
                  {showcaseProjects.map((project, index) => (
                    <div key={index} className="mb-20">
                      <h1 className="underline cursor-pointer">
                        <a
                          href={project.url || "https://jame.li/"}
                          target="_blank"
                        >
                          {project.name}
                        </a>
                      </h1>
                      <span>{project.desc}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="absolute bottom-5 cursor-pointer text-lg italic underline"
                  onClick={() => navigate("/projects")}
                >
                  {" "}
                  all projects{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
