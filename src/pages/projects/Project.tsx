import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { projects } from "./projects";

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
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
        <h1 className="text-white drop-shadow-[2px_2px_3px_rgba(0,0,0,0.9)]">projects.</h1>
        <div className="wave-effect2" />
      </div>

      <div className="relative bg-black text-white font-playfair h-auto min-h-screen max-w-screen overflow-x-hidden">
        <div className="flex flex-row">
          <button
            className="bg-white text-black p-5 cursor-pointer m-5 w-30 hover:bg-lightBeige hover:text-darkBeige3"
            onClick={goBackToHome}
          >
            {" "}
            back
          </button>
          <h1 className="p-5 m-5 font-bold">projects</h1>
        </div>

        <div className="p-5 pb-10">
          {projects.map((project, index) => (
            <div key={index} className="mb-10">
              <h1 className="underline italic font-bold">
                <a href={project.url} target="_blank">
                  {project.name}
                </a>
              </h1>
              <h1>{project.desc}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
