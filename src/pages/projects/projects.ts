export type ProjectType = {
  name: string;
  url: string;
  desc: string;
};

export const showcaseProjects: ProjectType[] = [
  {
    name: "neo developer league",
    url: "https://neoleague.dev/",
    desc: "home & landing",
  },
  {
    name: "identibear",
    url: "https://devpost.com/software/identibear-your-memory-companion",
    desc: "dl model for dementia"
  },
  {
    name: "weathermap",
    url: "https://weathermap.jame.li",
    desc: "location on map & weather",
  },
]

export const projects: ProjectType[] = [
  {
    name: "neo v2",
    url: "https://neoleague.dev/",
    desc: "home & landing (coming soon) page for the neo developer league 2025",
  },
  {
    name: "jame.li",
    url: "https://jame.li/",
    desc: "this website",
  },
  {
    name: "euronodes",
    url: "https://github.com/JLi2007/EuroNodes",
    desc: "dijkstra's algorithm with nodes on european countries made in processing",
  },
  {
    name: "neo v1",
    url: "https://neoleague.dev/",
    desc: "home & landing page for the neo developer league 2024",
  },
  {
    name: "mssql data grapher",
    url: "https://www.weblakes.com/",
    desc: "queries mssql and visualizes millions of lines of data with streamlit and charting libraries (internal project at lakes software)",
  },
  {
    name: "weblog2sql",
    url: "https://www.weblakes.com/",
    desc: "inserts millions of lines of .log file data into mssql with a parallel batch insert method made in c# (internal project at lakes software)",
  },
  {
    name: "identibear",
    url: "https://devpost.com/software/identibear-your-memory-companion",
    desc: "deep learning model to recognize faces and voices for dementia patients",
  },
  {
    name: "moodify",
    url: "https://github.com/Mausmato/Moodify",
    desc: "facial expression to spotify playlist using machine learning model",
  },
  {
    name: "weathermap",
    url: "https://weathermap.jame.li",
    desc: "visualizing weather and location on world map with mapping library and weather api",
  },
  {
    name: "yt2mp3",
    url: "https://github.com/JLi2007/Youtube2MP3Project",
    desc: "converts youtube urls to mp3 files made with nodejs and api calls",
  },
  {
    name: "footprint",
    url: "https://github.com/Mausmato/Footprint",
    desc: "helping to reduce carbon footprint with forms and recommendations built with streamlit",
  },
];
