export interface PlacesType {
  title: string;
  flag: string;
  description: string;
  tags: { color: string; text: string }[];
  iframeSrc: string;
}

export const places: PlacesType[] = [
  {
    title: "salar de uyuni - bolivia",
    flag: "🇧🇴",
    description:
      "biggest salt flat in the world — can be seen from space. always found it eye-catching, mesmerizing",
    tags: [
      { color: "mediumseagreen", text: "● world wonder" },
      { color: "orchid", text: "● south america" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742368165285!6m8!1m7!1sCAoSLEFGMVFpcE56MmFfQjltUnc5SFZ1R0hGeFVOdnFkeG0xQTRjYTdsaXFqbDR0!2m2!1d-20.23997223102578!2d-67.58111002249453!3f338.04650672981865!4f-19.583627866554025!5f0.43744515973550396",
  },
  {
    title: "kazamaura, aomori - japan",
    flag: "🇯🇵",
    description:
      "very northern tip of aomori japan — the coverage makes me feel reminiscent of something. unsure of what it is",
    tags: [
      { color: "dodgerblue", text: "● streetview" },
      { color: "red", text: "● asia" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742522944358!6m8!1m7!1sW75jxFiQTqRxGhaS4j29nA!2m2!1d41.47529215239408!2d141.077070760996!3f77.55!4f-2.230000000000004!5f0.7820865974627469",
  },
  {
    title: "rural villages - portugal",
    flag: "🇵🇹",
    description: "village deeply nestled in the mountainside — rural portugal",
    tags: [
      { color: "dodgerblue", text: "● streetview" },
      { color: "darksalmon", text: "● europe" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1762650615963!6m8!1m7!1sHJJ20QRfuTeYGRRTn_lukw!2m2!1d41.27517404103741!2d-7.859529744857597!3f189.07310866651062!4f1.5698353631427437!5f1.5057023596679304",
  },
  {
    title: "national park - chile",
    flag: "🇨🇱",
    description:
      "a sudden transition between desert & andes — 'parque natural san carlos de apoquindo'",
    tags: [
      { color: "mediumseagreen", text: "● world wonder" },
      { color: "orchid", text: "● south america" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742369672161!6m8!1m7!1sn9ZN2hJa771b4NBDz1PY5w!2m2!1d-33.39651916405647!2d-70.45709398232871!3f330.05!4f-7.609999999999999!5f0.7820865974627469",
  },
  {
    title: "isparta - turkey",
    flag: "🇹🇷",
    description: "narrow road on a lake — rural turkey",
    tags: [
      { color: "dodgerblue", text: "● streetview" },
      { color: "darkgoldenrod", text: "● middle east" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742855033062!6m8!1m7!1skg9CAEfVgaSmqyDMD2qWYQ!2m2!1d37.87869572943686!2d30.85741539789047!3f242.51!4f-1.5100000000000051!5f0.7820865974627469",
  },
  {
    title: "central java mountains - indonesia",
    flag: "🇮🇩",
    description:
      "authentic rural indonesia — 'mount merbabu national park'",
    tags: [
      { color: "dodgerblue", text: "● streetview" },
      { color: "red", text: "● asia" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742758685212!6m8!1m7!1sSFZ5N2424LCoxj8hXfBcuw!2m2!1d-7.444186447597207!2d110.4061534971233!3f257.4570876447927!4f-15.21999632734854!5f0.7820865974627469",
  },
  {
    title: "atlantic - canada",
    flag: "🇨🇦",
    description: "newfoundland — 'channel-port aux basques'",
    tags: [
      { color: "dodgerblue", text: "● streetview" },
      { color: "darkturquoise", text: "● north america" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742857422955!6m8!1m7!1sXFJSLiGs5WHmsHx8ES9zJg!2m2!1d47.56692372548685!2d-59.1285977123117!3f79.1228721831438!4f1.6240971263550108!5f0.7820865974627469",
  },
  {
    title: "lombardy region - italy",
    flag: "🇮🇹",
    description:
      "the vineyards, streams, mountains — italian countryside",
    tags: [
      { color: "dodgerblue", text: "● streetview" },
      { color: "darksalmon", text: "● europe" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742759633339!6m8!1m7!1sNZ1sUpeRrfNjlbeR7fY0Sg!2m2!1d46.14604014416388!2d9.628630177222927!3f274.0867859348681!4f-8.940109054264724!5f0.5213058698309339",
  },
  {
    title: "central tokyo - japan",
    flag: "🇯🇵",
    description: "eerie yet peaceful — 'hamamatsuchō station' at dusk",
    tags: [
      { color: "slategray", text: "● pathview" },
      { color: "red", text: "● asia" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742827627271!6m8!1m7!1sxHcoXrCkttf3ghEsiurhDQ!2m2!1d35.6541325889197!2d139.7568603692578!3f335.2871986116603!4f-8.794206093324746!5f0.4000000000000002",
  },
  {
    title: "mendoza province - argentina",
    flag: "🇦🇷",
    description:
      "under the andes — how long will these remote villages last?",
    tags: [
      { color: "dodgerblue", text: "● streetview" },
      { color: "orchid", text: "● south america" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742912933029!6m8!1m7!1sAphqmEpvTJBixIC6vsAReg!2m2!1d-32.81380302943974!2d-70.05054651138909!3f92.33565409181132!4f-4.431527880299043!5f1.266124068929634",
  },
  {
    title: "nile delta - egypt",
    flag: "🇪🇬",
    description:
      "the nile delta area — vibrant in greenery, unlike most of egypt. mohamed salah grew up in this region",
    tags: [
      { color: "mediumvioletred", text: "● photosphere" },
      { color: "coral", text: "● africa" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742948421781!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2U2b2ZqM0FF!2m2!1d30.76987721304302!2d31.68503029551924!3f339.6000588152038!4f6.425231924943461!5f0.7820865974627469",
  },
  {
    title: "countryside - oman",
    flag: "🇴🇲",
    description:
      "feels like we are on an island like madeira or las palmas — but no, this is oman",
    tags: [
      { color: "dodgerblue", text: "● streetview" },
      { color: "darkgoldenrod", text: "● middle east" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1743133476740!6m8!1m7!1srUx5hRB66cbiVr4ucKCj5g!2m2!1d16.68122884138414!2d53.11768308197132!3f274.881901918054!4f-3.2831940072610735!5f1.349233280793559",
  },
  {
    title: "buddha carvings - china",
    flag: "🇨🇳",
    description:
      "henan province — 'longmen grottoes' along the yi river date back to the 5th century",
    tags: [
      { color: "mediumseagreen", text: "● world wonder" },
      { color: "red", text: "● asia" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742858318848!6m8!1m7!1sCAoSLEFGMVFpcFA5eGNSejRYWHhVc1VILU5Na19zSmU0czJiTXNwMXo5Q3B5TkRK!2m2!1d34.55478001768151!2d112.4707319804518!3f104.45560957978083!4f11.540139509613823!5f0.5753934370152958",
  },
  {
    title: "countryside - northern ireland",
    flag: "🇯🇪",
    description:
      "northern tip of northern ireland — facing the north atlantic",
    tags: [
      { color: "dodgerblue", text: "● streetview" },
      { color: "darksalmon", text: "● europe" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1743475847277!6m8!1m7!1sTUy4KqkqKifRfPc2sm2OOg!2m2!1d55.14582671661194!2d-8.210794748937468!3f332.02567193437505!4f-3.9580072929426677!5f0.7820865974627469",
  },
  {
    title: "inner mongolia - china",
    flag: "🇨🇳",
    description:
      "rolling grasslands & hella horses beneath vast blue skies — inner mongolia (top of my bucket list)",
    tags: [
      { color: "mediumvioletred", text: "● photosphere" },
      { color: "red", text: "● asia" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1744658192221!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ3FuOGlsWlE.!2m2!1d49.66488812384653!2d120.0746440619686!3f95.52286779856084!4f-10.129033421545387!5f0.7820865974627469",
  },
  {
    title: "dunes & jungle - brazil",
    flag: "🇧🇷",
    description:
      "a clash between the grand atlantic, sand dunes, and the amazon rainforest — lençóis maranhenses national park",
    tags: [
      { color: "midnightblue", text: "● arial view" },
      { color: "orchid", text: "● south america" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1744814480892!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRFJscUc5UVE.!2m2!1d-2.578522678205233!2d-42.69688418605917!3f324.5536485468245!4f-14.512665193840817!5f0.6201268665768949",
  },
  {
    title: "chiang mai - thailand",
    flag: "🇹🇭",
    description:
      "historic thailand district — northern thailand",
    tags: [
      { color: "dodgerblue", text: "● streetview" },
      { color: "red", text: "● asia" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1745097782096!6m8!1m7!1scsZiydNLb1uJ4vMYjFv0lQ!2m2!1d18.79584133909257!2d98.98222465108611!3f103.99!4f0!5f0.7820865974627469",
  },
  {
    title: "zanzibar - tanzania",
    flag: "🇹🇿",
    description:
      "hotel in zanzibar — island off the coast of mainland tanzania",
    tags: [
      { color: "mediumvioletred", text: "● photosphere" },
      { color: "coral", text: "● africa" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1745098661006!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGM4OGJUTnc.!2m2!1d-6.16107032373727!2d39.19103746834339!3f7.343517582197867!4f-4.495950859082058!5f0.7820865974627469",
  },
  {
    title: "nordland - norway",
    flag: "🇳🇴",
    description:
      "a lonely house by the shore — lofoten archipelago in northern norway",
    tags: [
      { color: "dodgerblue", text: "● streetview" },
      { color: "darksalmon", text: "● europe" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1745600583146!6m8!1m7!1sb2mJc18CZleiDQfUv191kQ!2m2!1d68.09929960799552!2d13.32172761220568!3f165.4204374853023!4f-3.513416305264144!5f0.7820865974627469",
  },
  {
    title: "bora-bora - french polynesia",
    flag: "🇵🇫",
    description: "viewpoint — oceania",
    tags: [
      { color: "mediumvioletred", text: "● photosphere" },
      { color: "powderblue", text: "● oceania" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1745977273706!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzRtc21CNGdF!2m2!1d-16.50185001792146!2d-151.7325809894041!3f323.41637738164417!4f0.2859992518925196!5f0.4000000000000002",
  },
];
