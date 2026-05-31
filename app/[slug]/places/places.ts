export type CountryScript = "latin" | "jp" | "sc" | "arabic" | "thai" | "cyrillic";

export interface PlacesType {
  title: string;
  country: string;
  nativeName: string;
  script: CountryScript;
  flag: string;
  description: string;
  iframeSrc: string;
}

export const places: PlacesType[] = [
  {
    title: "salar de uyuni",
    country: "bolivia",
    nativeName: "república de bolivia",
    script: "latin",
    flag: "🇧🇴",
    description:
      `the most disorienting place on earth. area of 10b tons of pure salt larger than jamaica 🇯🇲 that's perfectly flat. \n
      biggest salt flat in the world. can be seen from space. always found it eye-catching, mesmerizing. \n
      the planet crait from star wars was shot on the salar. \n
      the [train graveyard](https://www.theguardian.com/world/gallery/2016/jul/01/bolivia-train-graveyard-in-pictures) is super cool. in the 19th century bolivia was building a huge railway network to ship minerals to the coast. then they lost their coastal territory to chile in the war of the pacific (1879). the trains have been rusting in the desert ever since.
      `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742368165285!6m8!1m7!1sCAoSLEFGMVFpcE56MmFfQjltUnc5SFZ1R0hGeFVOdnFkeG0xQTRjYTdsaXFqbDR0!2m2!1d-20.23997223102578!2d-67.58111002249453!3f338.04650672981865!4f-19.583627866554025!5f0.43744515973550396",
  },
  {
    title: "kazamaura, aomori",
    country: "japan",
    nativeName: "日本",
    script: "jp",
    flag: "🇯🇵",
    description:
      `a quiet fishing village on the edge of the world. the coverage makes me feel reminiscent of something. unsure of what it is. \n
      natsukashii (懐かしい) — a bittersweet feeling triggered by something that reminds you of a place you've never actually been. \n
      [yoshie shiratori](https://medium.com/breakingasia/yoshie-shiratori-the-incredible-story-of-a-man-no-prison-could-hold-6d79a67345f5), infamous prison break artist, was born in aomori prefecture. \n
      [lake towada](https://medium.com/globetrotters/lake-towada-hidden-treasure-of-unrivaled-beauty-338e0b47e589) is super neat. on my bucket list.
      `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742522944358!6m8!1m7!1sW75jxFiQTqRxGhaS4j29nA!2m2!1d41.47529215239408!2d141.077070760996!3f77.55!4f-2.230000000000004!5f0.7820865974627469",
  },
  {
    title: "aldeias do xisto",
    country: "portugal",
    nativeName: "república portuguesa",
    script: "latin",
    flag: "🇵🇹",
    description: 
    `villages deeply nestled in the mountainside in rural portugal. zoom in, it's surreal. \n
    these are the schist villages of northern portugal, pulled straight from the ground beneath them. similar to the italian ghost towns, most of these portugese towns were abandoned as people left for cities. \n
    the kind of place that almost disappeared but survived.
    `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1762650615963!6m8!1m7!1sHJJ20QRfuTeYGRRTn_lukw!2m2!1d41.27517404103741!2d-7.859529744857597!3f189.07310866651062!4f1.5698353631427437!5f1.5057023596679304",
  },
  {
    title: "horizonless",
    country: "mongolia",
    nativeName: "монгол улс",
    script: "cyrillic",
    flag: "🇲🇳",
    description:
    `dornod, the easternmost province of mongolia. \n
    mongolia is the least densely populated country on earth (dornod is one of the emptiest corners of it). the eastern steppe is also one of the last great unbroken grasslands left on the planet. nothing to interrupt the horizon. \n
    `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1779578708312!6m8!1m7!1seK0jIH6nu72Hd9UCZNQ68g!2m2!1d47.58840798729733!2d118.1269264567826!3f303.4405116130315!4f-0.282244759874132!5f0.7820865974627469",
  },
  {
    title: "ecotone",
    country: "chile",
    nativeName: "república de chile",
    script: "latin",
    flag: "🇨🇱",
    description:
      `a sudden shift between the chilean desert to the towering andes peaks. \n
      san carlos de apoquindo, national park, sits on the edge of santiago, somehow untouched, despite being next to a capital city. \n
      `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742369672161!6m8!1m7!1sn9ZN2hJa771b4NBDz1PY5w!2m2!1d-33.39651916405647!2d-70.45709398232871!3f330.05!4f-7.609999999999999!5f0.7820865974627469",
  },
  {
    title: "city of roses",
    country: "turkey",
    nativeName: "türkiye",
    script: "latin",
    flag: "🇹🇷",
    description: 
    `narrow road on lake close to isparta, a leading global producer of rose oil. in the actual city, [fields of damask roses](https://thursd.com/articles/isparta-flowers-heritage-perfume-industry) can be seen covering the hillsides during spring. \n
    the city has been conquered and renamed so many times, byzantine, seljuk, ottoman, now isparta. been passed between civilizations for 3,000 years and still just quietly grows roses. \n
    there's something about the streetview here that feels so authentic, makes me want to embark on a road trip.
    `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742855033062!6m8!1m7!1skg9CAEfVgaSmqyDMD2qWYQ!2m2!1d37.87869572943686!2d30.85741539789047!3f242.51!4f-1.5100000000000051!5f0.7820865974627469",
  },
  {
    title: "frozen relic",
    country: "indonesia",
    nativeName: "republik indonesia",
    script: "latin",
    flag: "🇮🇩",
    description:
      `misty villages built on the slopes of mount merbabu, "mountain of ash" in central java, indonesia. \n
      crazy how mount merapi is a walkable distance away and still erupts every few years. the long history and traditions keep locals here, and the culture shows even in ~1 hr of life captured in streetview. \n
      i encourage you to move around and notice the intricate details; this place should honestly be frozen in time and preserved in some living museum. every structure is different, in architecture and coloring, can genuinely explore for hours. timeless and should be kept that way.
      `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742758685212!6m8!1m7!1sSFZ5N2424LCoxj8hXfBcuw!2m2!1d-7.444186447597207!2d110.4061534971233!3f257.4570876447927!4f-15.21999632734854!5f0.7820865974627469",
  },
  {
    title: "atlantic",
    country: "canada",
    nativeName: "canada",
    script: "latin",
    flag: "🇨🇦",
    description: 
    `quaint village in newfoundland, a world apart from industrial cities. \n
    atlantic canada in general has such a distinctive character, life looks so slow. been around once, the environment seems to restore you in a sense. you know how when you reminisce positive memories from your childhood, and how there's a distinctive sunshine? maybe it's just me.
    `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742857422955!6m8!1m7!1sXFJSLiGs5WHmsHx8ES9zJg!2m2!1d47.56692372548685!2d-59.1285977123117!3f79.1228721831438!4f1.6240971263550108!5f0.7820865974627469",
  },
  {
    title: "ōmagatoki (liminal hour)",
    country: "japan",
    nativeName: "日本",
    script: "jp",
    flag: "🇯🇵",
    description:
    `hamamatsuchō station at dusk, so eerie yet peaceful. \n
    this coverage was likely captured by a regular resident just commuting home. mundane to them, ethereal to us. so many tiny details can be noticed when zooming in.
    `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742827627271!6m8!1m7!1sxHcoXrCkttf3ghEsiurhDQ!2m2!1d35.6541325889197!2d139.7568603692578!3f335.2871986116603!4f-8.794206093324746!5f0.4000000000000002",
  },
  {
    title: "wine country",
    country: "argentina",
    nativeName: "república argentina",
    script: "latin",
    flag: "🇦🇷",
    description:
      `villages on the andes' foothills, the province of mendoza produces ~70% of argentina's wine. \n
      there's a melancholy here, people are leaving for the cities. feels like we're in its last chapter, reminds you of the forgotten villages you'd find deep in rural russia or central asia. disappearing. \n
      the andes loom in the background. a wall at the edge of the world. maybe there's hope somewhere behind those clouds.
      `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742912933029!6m8!1m7!1sAphqmEpvTJBixIC6vsAReg!2m2!1d-32.81380302943974!2d-70.05054651138909!3f92.33565409181132!4f-4.431527880299043!5f1.266124068929634",
  },
  {
    title: "nile delta",
    country: "egypt",
    nativeName: "مصر",
    script: "arabic",
    flag: "🇪🇬",
    description:
      `the nile delta has been a cradle of civilization for over 5,000 years. \n
      nearby in alexandria brought many historical figures in mathematics/physics like euclid, eratosthenes, and hypatia. [the library of alexandria](https://www.britannica.com/topic/Library-of-Alexandria) held an estimated 400,000 scrolls, an attempt to collect all human knowledge in one place before it was burned down. \n
      mo salah grew up in this region.
      `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742948421781!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2U2b2ZqM0FF!2m2!1d30.76987721304302!2d31.68503029551924!3f339.6000588152038!4f6.425231924943461!5f0.7820865974627469",
  },
  {
    title: "limestone carvings",
    country: "china",
    nativeName: "中国",
    script: "sc",
    flag: "🇨🇳",
    description:
      `longmen grottoes in henan province, over 100,000 buddha statues carved into limestone cliffs. \n
      construction started in 493 AD and continued for 400 years across multiple dynasties. many statues are headless now, looted during the 20th century. the heads are now scattered across western museums. \n
      the scale is incomprehensible. imagine generations of artisans spending their entire lives carving a single cliff face, devotion on a civilizational level. this kind of commitment was common in history: polynesians spent lifetimes raising the moai on easter island; elsewhere, builders gave decades to cathedrals and temples they would never see finished. \n
      in modern days, works like this are rarely possible. the sheer cost to keep that many highly skilled people (literally the best of the best) on a single project for centuries would be too much. makes you wonder: what were the incentives for workers who gave up their lives to it? 
      `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1742858318848!6m8!1m7!1sCAoSLEFGMVFpcFA5eGNSejRYWHhVc1VILU5Na19zSmU0czJiTXNwMXo5Q3B5TkRK!2m2!1d34.55478001768151!2d112.4707319804518!3f104.45560957978083!4f11.540139509613823!5f0.5753934370152958",
  },
  {
    title: "north atlantic",
    country: "northern ireland",
    nativeName: "tuaisceart éireann",
    script: "latin",
    flag: "🇯🇪",
    description:
      `northern edge of northern ireland, overlooking the north atlantic. \n
      the troubles feel distant here. just wind, sheep, and endless gray sky meeting gray sea. i just love how rural coastlines villages look in the uk, especially in scotland / northern ireland overlooking the north atlantic, there could've been a kingdom here once upon a time.
      `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1743475847277!6m8!1m7!1sTUy4KqkqKifRfPc2sm2OOg!2m2!1d55.14582671661194!2d-8.210794748937468!3f332.02567193437505!4f-3.9580072929426677!5f0.7820865974627469",
  },
  {
    title: "inner mongolia",
    country: "china",
    nativeName: "中国",
    script: "sc",
    flag: "🇨🇳",
    description:
      `rolling grasslands beneath vast blue skies define the hulunbuir prairie. \n
      genghis khan was born in this region. 800 years ago, the mongol empire stretched from korea to hungary. the largest land empire in world history all started from horsemen on these grasslands. \n
      in this sparse land, there are no trees, no buildings, just horizon in every direction. \n
      watched a [chinese film](https://www.diggitmagazine.com/column/my-people-my-country) in 2019 about seven stories depicting influential moments in chinese history (if you’re chinese, go watch it). one of the stories showed the landing of the shenzhou 11 spacecraft in inner mongolia. \n
      since then, i’ve always wanted to visit the area and the rolling grasslands.
      `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1744658192221!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ3FuOGlsWlE.!2m2!1d49.66488812384653!2d120.0746440619686!3f95.52286779856084!4f-10.129033421545387!5f0.7820865974627469",
  },
  {
    title: "paradox dunes",
    country: "brazil",
    nativeName: "república do brasil",
    script: "latin",
    flag: "🇧🇷",
    description:
      `lençóis maranhenses: this place shouldn't exist. desert dunes exist here for some reason, in one of the wettest regions on earth, right next to the world's largest rainforest. \n
      ocean meets desert meets jungle.
      `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1744814480892!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRFJscUc5UVE.!2m2!1d-2.578522678205233!2d-42.69688418605917!3f324.5536485468245!4f-14.512665193840817!5f0.6201268665768949",
  },
  {
    title: "land of a million rice fields",
    country: "thailand",
    nativeName: "ประเทศไทย",
    script: "thai",
    flag: "🇹🇭",
    description:
      `historic old city of chiang mai, northern thailand. the old city is still surrounded by a moat and remnants of ancient walls. \n
      chiang mai has become a digital nomad hub in recent years. cheap rent, good wifi, temples everywhere. strange mix of ancient and modern. \n
      attention to detail; the more you move and look around, the more you absorb. \n
      the power lines are crazy, go a bit west down the street and take a look.
      `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1745097782096!6m8!1m7!1scsZiydNLb1uJ4vMYjFv0lQ!2m2!1d18.79584133909257!2d98.98222465108611!3f103.99!4f0!5f0.7820865974627469",
  },
  {
    title: "spice island",
    country: "tanzania",
    nativeName: "jamhuri ya tanzania",
    script: "latin",
    flag: "🇹🇿",
    description:
      `zanzibar is a historic island off the coast of tanzania. layers of arab, persian, indian, and african history are fused into one culture. \n
      the doors of stone town are globally famous: intricately carved, each one unique, some centuries old. people literally come here just to photograph doors.
      `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1745098661006!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGM4OGJUTnc.!2m2!1d-6.16107032373727!2d39.19103746834339!3f7.343517582197867!4f-4.495950859082058!5f0.7820865974627469",
  },
  {
    title: "nordland",
    country: "norway",
    nativeName: "norge",
    script: "latin",
    flag: "🇳🇴",
    description:
      `a lonely house by the shore in the lofoten archipelago, above the arctic circle. \n
      imagine living here. so detached from the big cities. imagine how much history this shack holds.
      `,
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!4v1745600583146!6m8!1m7!1sb2mJc18CZleiDQfUv191kQ!2m2!1d68.09929960799552!2d13.32172761220568!3f165.4204374853023!4f-3.513416305264144!5f0.7820865974627469",
  },
];
