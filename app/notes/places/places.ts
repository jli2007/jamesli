interface PlacesType {
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
      "biggest salt flat in the world that can be seen from space. always found it eye-catching, mesmerizing.",
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
      "very northern tip of aomori japan, the coverage here with this picture quality and surroundings feels reminiscent/nostalgic, of something...",
    tags: [
      { color: "dodgerblue", text: "● streetview" },
      { color: "red", text: "● asia" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742522944358!6m8!1m7!1sW75jxFiQTqRxGhaS4j29nA!2m2!1d41.47529215239408!2d141.077070760996!3f77.55!4f-2.230000000000004!5f0.7820865974627469",
  },
  {
    title: "mountainous district - portugal",
    flag: "🇵🇹",
    description:
      "houses deeply nestled in the mountainside in rural portugal. zoom in and pan around, these rural european regions are so authentic. imagine stumbling across these villages on a hike or something and having a feast with the locals... idk.",
    tags: [
      { color: "dodgerblue", text: "● streetview" },
      { color: "darkSalmon", text: "● europe" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742416120061!6m8!1m7!1sHJJ20QRfuTeYGRRTn_lukw!2m2!1d41.27517404103741!2d-7.859529744857597!3f183.22189633540813!4f5.8944974875990965!5f0.8154479948595579",
  },
  {
    title: "national park - chile",
    flag: "🇨🇱",
    description:
      "'parque natural san carlos de apoquindo': mountain range right next to the borders of santiago, chile's capital. that sudden change from dry desert and snowy mountains is wild.",
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
    description:
      "located on a peninsula, this place looks magical. this road on a the lake with towering mountains in the background gives a unique feel.",
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
      "'mount merbabu national park' surrounding area look incredibly authentic (although most of rural indonesia probably looks like this). wandering around makes you realize how different life is on the other side of the world.",
    tags: [
      { color: "dodgerblue", text: "● streetview" },
      { color: "red", text: "● asia" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742758685212!6m8!1m7!1sSFZ5N2424LCoxj8hXfBcuw!2m2!1d-7.444186447597207!2d110.4061534971233!3f257.4570876447927!4f-15.21999632734854!5f0.7820865974627469",
  },
  {
    title: "atlantic region - canada",
    flag: "🇨🇦",
    description:
      "'channel-port aux basques' on newfoundland. i always loved the look and feel of atlantic canada and to me, this location really encapsulates the authentic essence of the life here. i once went on a road trip to every province in the east except newfoundland... maybe one day.",
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
      "northern rural italy looks surreal. the vineyards, streams, mountains... would love to visit someday.",
    tags: [
      { color: "dodgerblue", text: "● streetview" },
      { color: "darkSalmon", text: "● europe" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742759633339!6m8!1m7!1sNZ1sUpeRrfNjlbeR7fY0Sg!2m2!1d46.14604014416388!2d9.628630177222927!3f274.0867859348681!4f-8.940109054264724!5f0.5213058698309339",
  },
  {
    title: "central tokyo - japan",
    flag: "🇯🇵",
    description:
      "'hamamatsuchō station' at dusk feels eerie yet peaceful.",
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
      "under the andes, the architecture and surroundings feels evocative of rural russia. looking around, there are many crumbled buildings, how long will these remote villages last?",
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
      "the nile delta area is very vibrant in greenery, unlike most of egypt. found this photosphere appealing (mohamed salah grew up in this region)",
    tags: [
      { color: "mediumvioletred", text: "● photosphere" },
      { color: "coral", text: "● africa" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742948421781!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2U2b2ZqM0FF!2m2!1d30.76987721304302!2d31.68503029551924!3f339.6000588152038!4f6.425231924943461!5f0.7820865974627469",
  },
  {
    title: "landscape - oman",
    flag: "🇴🇲",
    description:
      "feels like we are on an island like madeira or las palmas but no, this is oman, close to its border with yemen. if you go east down the street, there are random wild mules next to a gas station, only in oman i guess?. oman was only recently added to streetview and hopefully more countries will get added in the coming years... china is a big one but thats because of restrictions, but much of africa and western asia are still missing from the database.",
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
      "located in henan province, china, are a collection of over 2,300 caves and niches carved into limestone cliffs along the yi river. the 'longmen grottoes' date back to the northern wei dynasty (5th century)",
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
      "facing the grand north atlantic ocean, the rugged land meets sea at the northern tip of northern ireland. i wonder what daily life looks like here.",
    tags: [
      { color: "dodgerblue", text: "● streetview" },
      { color: "darkSalmon", text: "● europe" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1743475847277!6m8!1m7!1sTUy4KqkqKifRfPc2sm2OOg!2m2!1d55.14582671661194!2d-8.210794748937468!3f332.02567193437505!4f-3.9580072929426677!5f0.7820865974627469",
  },
  {
    title: "inner mongolia - china",
    flag: "🇨🇳",
    description:
      "endless waves of green stretch beneath vast blue skies line inner mongolia’s rolling grasslands (region named 'inner mongolia' but still located in china). my homie andy duong's dream destination. ",
    tags: [
      { color: "mediumvioletred", text: "● photosphere" },
      { color: "red", text: "● asia" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1744658192221!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ3FuOGlsWlE.!2m2!1d49.66488812384653!2d120.0746440619686!3f95.52286779856084!4f-10.129033421545387!5f0.7820865974627469",
  },
  {
    title: "dunes meet greenery - brazil",
    flag: "🇧🇷",
    description:
      "close to lençóis maranhenses national park (breathtaking place, search it up), this beach sees a transition between the grand atlantic, sand dunes, and the amazon rainforest.",
    tags: [
      { color: "midnightblue", text: "● arial view" },
      { color: "orchid", text: "● south america" },
    ],
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1744814480892!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRFJscUc5UVE.!2m2!1d-2.578522678205233!2d-42.69688418605917!3f324.5536485468245!4f-14.512665193840817!5f0.6201268665768949",
  },
];