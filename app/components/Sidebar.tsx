"use client";

import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import { showcaseProjects } from "../projects";
import { posts } from "../posts";
import LinkSlider from "./Link";
import Link from "next/link";
import Image from "next/image";

const NO_GLOW = "drop-shadow(0 0 0 transparent)";

const fading = new WeakSet<HTMLVideoElement>();

function setCardState(link: HTMLElement, hovered: boolean, glow: string) {
  const imageDiv = link.querySelector(".glow-target") as HTMLElement | null;
  if (imageDiv) imageDiv.style.filter = hovered ? glow : NO_GLOW;

  const video = link.querySelector("video");
  if (video) {
    const target = hovered ? "1" : "0";
    if (video.style.opacity !== target) {
      fading.add(video);
      video.style.opacity = target;
      if (hovered) video.play().catch(() => {});
    }
  }
}

export default function Sidebar() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobile) return;
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            v.style.opacity = "1";
            v.play().catch(() => {});
          } else {
            v.style.opacity = "0";
            v.pause();
            v.currentTime = 0;
          }
        });
      },
      { threshold: 0 }
    );
    root.querySelectorAll("video").forEach((v) => observer.observe(v));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="relative max-w-screen h-auto py-3 px-7 m-1 mb-1 rounded-lg text-lightBeige overflow-x-hidden">
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
                    const video = e.currentTarget.querySelector("video");
                    if (video && fading.has(video)) return;
                    setCardState(
                      e.currentTarget,
                      true,
                      project.glowColors
                    );
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget.querySelector("video");
                    if (video && fading.has(video)) return;
                    setCardState(
                      e.currentTarget,
                      false,
                      project.glowColors
                    );
                  }}
                >
                  <div
                    className="glow-target relative w-full lg:h-60 md:h-100 h-50 rounded-xl overflow-hidden transition-all duration-700"
                    style={{
                      filter: "drop-shadow(0 0 0 transparent)",
                    }}
                  >
                    {project.banner.endsWith(".mp4") ? (
                      <>
                        <img
                          src={project.banner
                            .replace("/banners/", "/banners/posters/")
                            .replace(/\.mp4$/, ".jpg")}
                          alt={project.name}
                          className="absolute inset-0 w-full h-full object-cover brightness-85 group-hover:brightness-90 transition-all duration-300"
                        />
                        <video
                          src={project.banner}
                          muted
                          playsInline
                          preload="metadata"
                          style={{ opacity: 0 }}
                          onTransitionEnd={(e) => {
                            if (e.propertyName !== "opacity") return;
                            const v = e.currentTarget;
                            fading.delete(v);
                            if (v.style.opacity === "0") {
                              v.pause();
                              v.currentTime = 0;
                            }
                            if (isMobile) return;
                            const link = v.closest("a");
                            if (link) {
                              setCardState(
                                link as HTMLElement,
                                link.matches(":hover"),
                                project.glowColors
                              );
                            }
                          }}
                          className="absolute inset-0 w-full h-full object-cover brightness-85 group-hover:brightness-90 transition-opacity duration-1000 ease-in-out"
                        />
                      </>
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
                    <h1 className="lg:text-lg md:text-xl text-base font-semibold px-1 shadow-black [text-shadow:0.5px_0.5px_10px_black]">
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

      <footer className="pt-4 md:pb-0 pb-2 border-t border-white/20 lg:text-xs md:text-sm text-xs text-white/70 flex flex-row items-center justify-end">
        <span className="shiny-green-dot inline-block mr-2 w-3 h-3" />
        last updated 06/2026
      </footer>
    </div>
  );
}
