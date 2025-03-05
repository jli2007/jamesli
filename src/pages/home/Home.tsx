import { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

// import { CiLinkedin } from "react-icons/ci";

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
        <div className="relative flex items-center justify-center">
          <h1 className="text-white text-xl crg">can't rush greatness.</h1>
        </div>
      </div>

      <div className="content absolute inset-0">
        <div className="max-w-screen md:max-h-screen md:h-screen w-screen bg-black text-darkBeige2 font-playfair overflow-hidden ">
          <h1 className="md:w-auto w-screen p-5 bg-lightBeige rounded-lg text-darkBeige3 m-1">
            james siyuan li
          </h1>
          <div className="grid grid-flow-row md:grid-flow-col grid-rows-2 gap-1 h-[90vh]">
            <div className="row-span-6 col-span-5 md:w-auto w-screen py-3 px-7 bg-midBeige1 m-1 rounded-lg underline">
              img
              {/* <CiLinkedin style={{border: "1px solid red", width:"10vw", height:"10vh"}}/> */}
            </div>

            <div className="row-span-1 col-span-3 md:w-auto w-screen grid grid-cols-3 gap-2 m-1">
              <div className="col-span-2 py-3 px-7 rounded-lg bg-darkBeige2 text-lightBeige underline">
                linkedin
              </div>
              <div className="py-3 px-7 rounded-lg bg-midBeige1 underline">blog</div>
            </div>

            <div className="col-span-3 row-span-1 md:w-auto w-screen py-3 px-7 bg-midBeige1 m-1 rounded-lg underline">
              desc
            </div>
            <div className="col-span-3 row-span-4 md:w-auto w-screen py-3 px-7 m-1 rounded-lg bg-darkBeige1 text-midBeige1 underline">
              smth design
            </div>
            <div className="col-span-3 row-span-5 md:w-auto w-screen py-3 px-7 m-1 rounded-lg bg-midBeige2 underline">
              projects
            </div>
            <div className="col-span-3 row-span-1 md:w-auto w-screen py-3 px-7 m-1 rounded-lg bg-midBeige1 underline">
              profiles
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
