export interface TrackMetadata {
  id: string;
  description?: string;
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
  // yango
  {
    id: "1adaMoHauuI9B45YefZtsC",
    description: "freedom",
    quotes: [
      "Ain’t lettin’ no school system in our lives, we’re lettin’ the streets prepare us",
      "Arrogance blinds, but my humility’s bounded",
    ],
  },
  // survivor's guilt
  {
    id: "1Xapo8sq7KcQXdt0HrXX5B",
    description:
      "the cost of escaping the system",
    quotes: [
      "I've had ups and downs, but the highest of the highs\nNever last for as long as the lowest of lows",
      "Survivor's guilt\nI feel the worst at my happiest\n'Cause I miss all my n****s that couldn't be in this life I built",
      "I got nights where it's light, and I got days where it's dark",
      "What I've realised, what I realised 'bout who I am\nIs that you're kinda taught\nYou're taught to die for what you stand for, you feel me?\nBut I realise I'm here to live for what I stand for\n'Cause I wanna see it, bro, I wanna enjoy it, bro",
    ],
  },
  // 黑夜問白天
  {
    id: "5KNh5YQgfduzV4028Cfh3J",
    description: "unbroken through 53 dawns",
    quotes: [
      "等黑夜問白天\n能不能赦免\n灰色的人間 \n Waiting for night to ask day if it can forgive this gray world",
      "那跑過去的晝夜\n是孤獨的修煉 \n Those days and nights that have passed are the ascetic practice of solitude",
      "说再见不如忘掉能再见 \n Rather than say goodbye, it’s better to forget we could meet again",
    ],
  },
  // hunnids
  {
    id: "1N4WFXhgmkrTRxK0X7R90u",
    description: "chasing success with the crew",
    quotes: [],
  },
  // moments
  {
    id: "3DIv6XPrL0jSksxGeYbW4S",
    description: "the art of noticing",
    quotes: [],
  },
  // the wind of life
  {
    id: "47fjdEwVngKqmgda3UR3Rl",
    description: "fairytale",
    quotes: [],
  },
  // 那些你很冒險的夢
  {
    id: "2aMN1ky0SzSEcV1QdBYbW9",
    description: "destiny",
    quotes: ["摺紙飛機碰到雨天\n終究會墜落 \n A paper airplane meeting rainy days will eventually fall"],
  },
  // psycho
  {
    id: "0FWAIRd9Uz5uNek7cALYNC",
    description: "product of the environment",
    quotes: [
      "I was born to be wild, I don't wanna be tamed\nTalent's in my blood and I don't wanna be vain\nBut if I'm a psycho, then I don't wanna be sane \n",
      "Blame my environment, it made me a sicko"
    ],
  },
  // home
  {
    id: "6Ncr1lCYnE3JHwtVK4nLAx",
    description: "a cautionary tale",
    quotes: ["The victim, whose name currently cannot be disclosed\nIs now among over 51 young people who have\nBeen fatally stabbed in London this year alone\nLast month more than 250"],
  },
  // chapters
  {
    id: "5DT2fVrYGbXNhMYCnEFfg2",
    description: "a narrative on success",
    quotes: [
      "They think that I came up quick, they don't know 'bout the rest of the chapters"
    ],
  },
  // es
  {
    id: "1aO78Al3o07IrUdeBy9HXm",
    description: "tranquility",
    quotes: [],
  },
  // 我会等
  {
    id: "5Rzpn60KTM11EBETHaF9Kt",
    description: "patience is a virtue",
    quotes: [],
  },
  // my 19th birthday
  {
    id: "4KCfCctnZQd5mem6S3HhKi",
    description: "19 candles",
    quotes: [
      "The pain's compulsory, suffering's optional\nTakeshi's castle, my life's got obstacles",
      "You gotta separate the rats from the G's if you can't handle cheese, how the hell you gonna be a great (grate)? \n",
      "I'm hot headed and dangerous\nAnd still living in this matrix\nAll I wanna do is make my loved ones proud\nIn this year alone we made three hundred thousand\nBut my mum won't smile because her son's on trial",
    ],
  },
  // kiss the rain
  {
    id: "7vd1j4IDTU0koES9M8dvBQ",
    description: "melancholy",
    quotes: [],
  },
];