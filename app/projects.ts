export type ProjectType = {
  name: string;
  slug: string;
  banner: string;
  desc: string;
  glowColors: string;
};

export const showcaseProjects: ProjectType[] = [
  {
    name: "arcki",
    slug: "arcki",
    banner: "/projects/banners/arcki.mp4",
    desc: "3d architectural playground for the world",
    glowColors:
      "drop-shadow(0 0 16px rgba(59, 130, 246, 0.08)) drop-shadow(0 0 24px rgba(99, 102, 241, 0.07)) drop-shadow(0 0 32px rgba(139, 92, 246, 0.06))",
  },
  {
    name: "flowboard",
    slug: "flowboard",
    banner: "/projects/banners/flowboard.mp4",
    desc: "cursor for video animation — inbound vc interest, 150+ stars",
    glowColors:
      "drop-shadow(0 0 14px rgba(96, 165, 250, 0.15)) drop-shadow(0 0 28px rgba(59, 130, 246, 0.10))",
  },
  {
    name: "phuture",
    slug: "phuture",
    banner: "/projects/banners/phuture.mp4",
    desc: "pokémon-go for wildlife 🌿",
    glowColors:
      "drop-shadow(0 0 16px rgba(132, 204, 22, 0.09)) drop-shadow(0 0 24px rgba(101, 163, 13, 0.09)) drop-shadow(0 0 32px rgba(163, 230, 53, 0.09))",
  },
  {
    name: "guideline",
    slug: "guideline",
    banner: "/projects/banners/guideline.png",
    desc: "augmented reality breadboarding guide",
    glowColors:
      "drop-shadow(0 0 20px rgba(59, 130, 246, 0.11)) drop-shadow(0 0 40px rgba(168, 85, 247, 0.11)) drop-shadow(0 0 60px rgba(236, 72, 153, 0.11))",
  },
  {
    name: "neo developer league",
    slug: "neodev",
    banner: "/projects/banners/neodev.mp4",
    desc: "raised $12k, backed by convictional (yc w19)",
    glowColors:
      "drop-shadow(0 8px 16px rgba(146, 104, 47, 0.08)) drop-shadow(0 12px 24px rgba(146, 104, 47, 0.06)) drop-shadow(0 16px 32px rgba(146, 104, 47, 0.09))",
  },
];