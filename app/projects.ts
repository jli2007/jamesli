export type ProjectType = {
  name: string;
  route: string;
  url: string;
  desc: string;
};

export const showcaseProjects: ProjectType[] = [
  {
    name: "phuture",
    route: "phuture",
    url: "https://phutureai.com/",
    desc: "pokémon-go for nature 🌿",
  },
  {
    name: "trivialguessr",
    route: "trivialguessr",
    url: "https://www.trivialguessr.com/",
    desc: "geoguessr📍 for trivia💡",
  },
  {
    name: "chroma",
    route: "chroma",
    url: "https://devpost.com/software/chroma-lf4x3a",
    desc: "css styling for photoshop.",
  },
  {
    name: "guideline",
    route: "guideline",
    url: "https://github.com/JLi2007/guideline",
    desc: "augmented reality — uses advanced algorithms and opencv to overlay electrical components on breadboard [2nd overall @ jamhacks 9]",
  },
  {
    name: "neodevleague",
    route: "neodev",
    url: "https://neoleague.dev/",
    desc: "home page & landing (coming soon) page for the neo developer league 2025",
  },
  {
    name: "euronodes",
    route: "euronodes",
    url: "https://github.com/JLi2007/EuroNodes",
    desc: "dijkstra's algorithm with nodes on european countries made in processing java",
  },
];
