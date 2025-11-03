"use client"

import { showcaseProjects } from "../projects";
import { posts } from "../notes/posts";
import LinkSlider from "./Link";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="projects relative max-w-screen lg:h-auto h-120 py-3 px-7 m-1 mb-1 rounded-lg text-lightBeige">
      <div className="relative w-full h-full">
        <h1 className="italic">projects</h1>
        <div className="flex flex-col justify-center overflow-hidden h-[90%]">
          {showcaseProjects.map((project: any, index: any) => (
            <div key={index} className="mb-15">
              <h1 className="cursor-pointer">
                <LinkSlider
                  href={project.url}
                  mode="light"
                  className="relative"
                >
                  {project.name}
                </LinkSlider>
              </h1>
              <span className="my-3 whitespace-pre">{project.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full h-full">
        <h1 className="italic">notes</h1>
        <div className="flex flex-col justify-center overflow-hidden h-[90%]">
          {posts.map((post: any, index: any) => (
            <div
              key={post.slug}
              className="p-3 flex md:flex-row flex-col items-center md:items-start"
            >
              <h1 className="py-1 px-2 my-1">
                {post.date} <span className="hidden md:inline">-</span>
              </h1>
              <Link
                href={{
                  pathname: `/${post.slug}`,
                }}
                onClick={() => {
                  sessionStorage.setItem("postDate", post.date);
                  sessionStorage.setItem("postTitle", post.title);
                }}
                className="underline decoration-white/50 !underline-offset-3 hover:bg-lightBeige/10 transition delay-250 duration-200 ease-in-out rounded-sm py-1 px-2 my-1"
              >
                {post.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
