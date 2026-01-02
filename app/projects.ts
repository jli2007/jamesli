export type ProjectType = {
  name: string;
  slug: string;
  url: string;
  banner: string;
  desc: string;
  glowColors: string;
};

export const showcaseProjects: ProjectType[] = [
  {
    name: "flowboard",
    slug: "flowboard",
    url: "https://flowboard.tech/",
    banner: "/projects/banners/flowboard.mp4",
    desc: "cursor for video animation — inbound vc interest, 100+ stars. ",
    glowColors:
      "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  },

  {
    name: "trivialguessr",
    slug: "trivialguessr",
    url: "https://www.trivialguessr.com/",
    banner: "/projects/banners/trivialguessr.mp4",
    desc: "geoguessr📍 for trivia💡",
    glowColors:
      "drop-shadow(0 0 16px rgba(74, 140, 154, 0.15)) drop-shadow(0 0 24px rgba(74, 140, 154, 0.13)) drop-shadow(0 0 32px rgba(74, 140, 154, 0.11))",
  },
  {
    name: "phuture",
    slug: "phuture",
    url: "https://phutureai.com/",
    banner: "/projects/banners/phuture.mp4",
    desc: "pokémon-go for wildlife 🌿",
    glowColors:
      "drop-shadow(0 0 16px rgba(16, 185, 129, 0.09)) drop-shadow(0 0 24px rgba(34, 197, 94, 0.09)) drop-shadow(0 0 32px rgba(132, 204, 22, 0.09))",
  },
  {
    name: "guideline",
    slug: "guideline",
    url: "https://github.com/JLi2007/guideline",
    banner: "/projects/banners/guideline.png",
    desc: "augmented reality breadboarding guide",
    glowColors:
      "drop-shadow(0 0 20px rgba(59, 130, 246, 0.11)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.11)) drop-shadow(0 0 60px rgba(236, 72, 153, 0.11))",
  },
  {
    name: "neo developer league",
    slug: "neodev",
    url: "https://neoleague.dev/",
    banner: "/projects/banners/neodev.mp4",
    desc: "raised $12k. backed by convictional (yc w19) and wrdsb (65k students)",
    glowColors:
      "drop-shadow(0 8px 16px rgba(146, 104, 47, 0.08)) drop-shadow(0 12px 24px rgba(146, 104, 47, 0.06)) drop-shadow(0 16px 32px rgba(146, 104, 47, 0.09))",
  },
];
