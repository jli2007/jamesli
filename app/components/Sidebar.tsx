"use client";

import { showcaseProjects } from "../projects";
import { posts } from "../posts";
import LinkSlider from "./Link";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="relative max-w-screen h-auto py-3 px-7 m-1 mb-1 rounded-lg text-lightBeige overflow-x-hidden">
      {[
        { title: "projects", items: showcaseProjects, type: "project" },
        { title: "notes", items: posts, type: "note" },
      ].map((section) => (
        <div key={section.title} className="relative w-full h-full mb-8">
          <h1 className="italic mb-5 lg:text-base md:text-xl text-sm ">
            {section.title}
          </h1>
          {section.type === "project" && (
            <div className="flex flex-col gap-10">
              {section.items.map((project: any, index: number) => (
                <Link
                  key={index}
                  href={`/${project.slug}`}
                  className="group relative rounded-xl overflow-visible transition-all duration-500 block"
                  onMouseEnter={(e) => {
                    const imageDiv = e.currentTarget.querySelector(
                      ".glow-target"
                    ) as HTMLElement;
                    if (imageDiv) {
                      imageDiv.style.filter =
                        project.glowColors ||
                        "drop-shadow(0 0 16px rgba(59, 130, 246, 0.4)) drop-shadow(0 0 32px rgba(168, 85, 247, 0.3)) drop-shadow(0 0 48px rgba(236, 72, 153, 0.2))";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const imageDiv = e.currentTarget.querySelector(
                      ".glow-target"
                    ) as HTMLElement;
                    if (imageDiv) {
                      imageDiv.style.filter = "drop-shadow(0 0 0 transparent)";
                    }
                  }}
                >
                  <div
                    className="glow-target relative w-full lg:h-60 md:h-100 h-50 rounded-xl overflow-hidden transition-all duration-700"
                    style={{
                      filter: "drop-shadow(0 0 0 transparent)",
                    }}
                  >
                    {project.banner.endsWith(".mp4") ? (
                      <video
                        src={project.banner}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover brightness-85 group-hover:brightness-90 transition-all duration-300"
                      />
                    ) : (
                      <Image
                        src={project.banner}
                        alt={project.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw"
                        className="object-cover brightness-85 group-hover:brightness-90 transition-all duration-300"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-5 bg-linear-to-t from-black/80 via-black/40 to-transparent">
                    <h1 className="lg:text-lg md:text-xl text-md font-semibold px-1 shadow-black [text-shadow:0.5px_0.5px_10px_black]">
                      {project.name}
                    </h1>
                    <p className="lg:text-sm md:text-lg text-sm text-lighterBeige px-1 [text-shadow:0.5px_0.5px_5px_black]">
                      {project.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {section.type === "note" && (
            <div className="flex flex-col space-y-4 mt-5">
              {section.items.map((post: any) => (
                <div
                  key={post.slug}
                  className="grid grid-cols-[100px_1fr] gap-1 lg:text-base md:text-lg text-sm"
                >
                  <span>{post.date}</span>
                  <LinkSlider
                    href={`/${post.slug}`}
                    className="relative transition delay-150 duration-200 ease-in-out rounded-sm inline-block w-fit pr-1 whitespace-nowrap"
                    mode="light"
                    isNextLink
                  >
                    {post.title}
                  </LinkSlider>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
