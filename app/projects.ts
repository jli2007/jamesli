export type ProjectType = {
  name: string;
  route: string;
  url: string;
  banner: string;
  desc: string;
  glowColors: string;
};

export const showcaseProjects: ProjectType[] = [
  {
    name: "trivialguessr",
    route: "trivialguessr",
    url: "https://www.trivialguessr.com/",
    banner: "/projects/banners/trivialguessr.mp4",
    desc: "geoguessr📍 for trivia💡",
    glowColors:
      "drop-shadow(0 0 16px rgba(255, 235, 59, 0.07)) drop-shadow(0 0 24px rgba(255, 241, 118, 0.07)) drop-shadow(0 0 32px rgba(255, 255, 141, 0.07))",
  },
  {
    name: "phuture",
    route: "phuture",
    url: "https://phutureai.com/",
    banner: "/projects/banners/phuture.mp4",
    desc: "pokémon-go for wildlife 🌿",
    glowColors:
      "drop-shadow(0 0 16px rgba(6, 182, 212, 0.08)) drop-shadow(0 0 24px rgba(59, 130, 246, 0.08)) drop-shadow(0 0 32px rgba(99, 102, 241, 0.08))",
  },
  {
    name: "chroma",
    route: "chroma",
    url: "https://devpost.com/software/chroma-lf4x3a",
    banner: "/projects/banners/chroma.mp4",
    desc: "css styling plugin for photoshop.",
    glowColors:
      "drop-shadow(0 8px 16px rgba(236, 72, 153, 0.08)) drop-shadow(0 12px 24px rgba(59, 130, 246, 0.08)) drop-shadow(0 16px 32px rgba(168, 85, 247, 0.08)) drop-shadow(0 20px 40px rgba(34, 197, 94, 0.08))",
  },
  {
    name: "guideline",
    route: "guideline",
    url: "https://github.com/JLi2007/guideline",
    banner: "/projects/banners/guideline.jpg",
    desc: "augmented reality breadboarding guide",
    glowColors:
      "drop-shadow(0 0 20px rgba(59, 130, 246, 0.12)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.12)) drop-shadow(0 0 60px rgba(236, 72, 153, 0.12))",
  },
  {
    name: "neo developer league",
    route: "neodev",
    url: "https://neoleague.dev/",
    banner: "/projects/banners/neodev.mp4",
    desc: "nonprofit — raised $12k. backed by convictional (yc w19) and wrdsb (65k students)",
    glowColors:
      "drop-shadow(0 8px 16px rgba(34, 197, 94, 0.1)) drop-shadow(0 12px 24px rgba(21, 128, 61, 0.05)) drop-shadow(0 16px 32px rgba(22, 163, 74, 0.1))",
  },
  {
    name: "euronodes",
    route: "euronodes",
    url: "https://github.com/JLi2007/EuroNodes",
    banner: "/projects/banners/euronodes.mp4",
    desc: "dijkstra's algorithm in processing",
    glowColors:
      "drop-shadow(0 8px 16px rgba(134, 239, 172, 0.08)) drop-shadow(0 12px 24px rgba(56, 189, 248, 0.08)) drop-shadow(0 16px 32px rgba(6, 182, 212, 0.08))",
  },
];
