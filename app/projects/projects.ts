export type ProjectType = {
  name: string;
  url: string;
  desc: string;
};

export const showcaseProjects: ProjectType[] = [
  {
    name: "neo developer league",
    url: "https://neoleague.dev/",
    desc: "home & landing page",
  },
  {
    name: "identibear",
    url: "https://devpost.com/software/identibear-your-memory-companion",
    desc: "dl model for dementia patients"
  },
  {
    name: "weathermap",
    url: "https://weathermap.jame.li",
    desc: "weather & location on world map",
  },
]

export const projects: ProjectType[] = [
  {
    name: "ML movie recommender",
    url: "https://movie.jame/li",
    desc: 'machine learning "project" - uses vector distance to find similar movies by keyword & cast & genre',
  },
  {
    name: "querify",
    url: "https://querify.jame.li",
    desc: "uses resizable boxes to make writing media queries easier and stores state in mongoose",
  },
  {
    name: "neo v2",
    url: "https://neoleague.dev/",
    desc: "home page & landing (coming soon) page for the neo developer league 2025",
  },
  {
    name: "jame.li v2",
    url: "https://jame.li/",
    desc: "this website",
  },
  {
    name: "euronodes",
    url: "https://github.com/JLi2007/EuroNodes",
    desc: "dijkstra's algorithm with nodes on european countries made in processing java",
  },
  {
    name: "piximatic",
    url: "https://github.com/JLi2007/Piximatic",
    desc: "simple photoshop with camera feature and imgur api built in processing java",
  },
  {
    name: "neo v1",
    url: "https://neodev2024.jame.li/",
    desc: "home & landing page for the neo developer league 2024",
  },
  {
    name: "mssql data grapher",
    url: "https://www.weblakes.com/",
    desc: "queries mssql to visualize millions of lines of data with streamlit and charting libraries [internal project at lakes software]",
  },
  {
    name: "weblog2sql",
    url: "https://www.weblakes.com/",
    desc: "inserts millions of lines of .log file data into mssql with a parallel batch insert method made in c# [internal project at lakes software]",
  },
  {
    name: "identibear",
    url: "https://devpost.com/software/identibear-your-memory-companion",
    desc: "deep learning model to recognize faces and voices for dementia patients visualized with streamlit",
  },
  {
    name: "moodify",
    url: "https://github.com/Mausmato/Moodify",
    desc: "facial expression to spotify playlist using open source machine learning model (spotify api feature coming soon...?)",
  },
  {
    name: "weathermap",
    url: "https://weathermap.jame.li",
    desc: "visualizing weather and location on world map with leaflet.js mapping library and weather api",
  },
  {
    name: "jame.li v1",
    url: "https://jamesli.jame.li/",
    desc: "previous portfolio website",
  },
  {
    name: "yt2mp3",
    url: "https://github.com/JLi2007/Youtube2MP3Project",
    desc: "converts youtube urls to mp3 files made with nodejs backend",
  },
  {
    name: "footprint",
    url: "https://github.com/Mausmato/Footprint",
    desc: "helping to reduce carbon footprint with forms and recommendations built with streamlit",
  },
];
