export interface TrackMetadata {
  id: string;
  quotes?: string[];
}

// [text](url)
export interface Entry {
  title: string;
  description?: string;
  image?: string;
}

export const ENTRIES: Entry[] = [
  { title: "collapse, jared diamond", description: "the rise/fall of great societies" },
  { title: '"perceive that which cannot be seen with the eye", musashi' },
  { title: "[china's last little train](https://www.youtube.com/watch?v=dTwcnY0GJlY)" },
  { title: "terrasse du café le soir, 1888, vincent van gogh", image: "/notes/works/terrasse.png" },
  { title: "plain of jars, laos", image: "/notes/works/jars.png" },
  { title: "mont-saint-michel, france", image: "/notes/works/mont.png" },
  { title: "sword of goujian, ~470 bce, china", image: "/notes/works/goujian.png" },
  { title: "the door to hell, darvaza crater, turkmenistan", image: "/notes/works/darvaza.png" },
];

export const TRACK_DATA: TrackMetadata[] = [
  // my 24th birthday
  {
    id: "2gCiBmdTLk7SEmdn9nGy7c",
    quotes: [],
  },
  // yango
  {
    id: "1adaMoHauuI9B45YefZtsC",
    quotes: [
      "Ain’t lettin’ no school system in our lives, we’re lettin’ the streets prepare us"
    ],
  },
  // survivor's guilt
  {
    id: "1Xapo8sq7KcQXdt0HrXX5B",
    quotes: [
      "I've had ups and downs, but the highest of the highs\nNever last for as long as the lowest of lows",
      "What I've realised, what I realised 'bout who I am\nIs that you're kinda taught\nYou're taught to die for what you stand for, you feel me?\nBut I realise I'm here to live for what I stand for\n'Cause I wanna see it, bro, I wanna enjoy it, bro",
    ],
  },
  // 黑夜問白天
  {
    id: "5KNh5YQgfduzV4028Cfh3J",
    quotes: [],
  },
  // hunnids
  {
    id: "1N4WFXhgmkrTRxK0X7R90u",
    quotes: [],
  },
  // moments
  {
    id: "3DIv6XPrL0jSksxGeYbW4S",
    quotes: [],
  },
  // the wind of life
  {
    id: "47fjdEwVngKqmgda3UR3Rl",
    quotes: [],
  },
  // 那些你很冒險的夢
  {
    id: "2aMN1ky0SzSEcV1QdBYbW9",
    quotes: ["摺紙飛機碰到雨天\n終究會墜落 \n A paper airplane meeting rainy days will eventually fall"],
  },
  // home
  {
    id: "6Ncr1lCYnE3JHwtVK4nLAx",
    quotes: ["The victim, whose name currently cannot be disclosed\nIs now among over 51 young people who have\nBeen fatally stabbed in London this year alone\nLast month more than 250"],
  },
  // chapters
  {
    id: "5DT2fVrYGbXNhMYCnEFfg2",
    quotes: [
      "They think that I came up quick, they don't know 'bout the rest of the chapters"
    ],
  },
  // my 19th birthday
  {
    id: "4KCfCctnZQd5mem6S3HhKi",
    quotes: [
      "The pain's compulsory, suffering's optional",
      "You gotta separate the rats from the G's if you can't handle cheese, how the hell you gonna be a great?",
    ],
  },
];