export interface Project {
  id: string
  title: string
  clipCount: number
  createdAt: string
  images: string[]
  description?: string
  isGenerating?: boolean
  progress?: number
  eta?: string
  isFailed?: boolean
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Renaissance Masterworks",
    clipCount: 5,
    createdAt: "2024-10-20",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mona%20Lisa.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lady%20with%20an%20Ermine%20-%20Leonardo%20da%20Vinci%20-%20Google%20Art%20Project.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/La%20scuola%20di%20Atene.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Night%20Watch%20-%20HD.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mona%20Lisa.jpg?width=800",
    ],
    description: "Leonardo, Raphael, and Rembrandt",
  },
  {
    id: "2",
    title: "Baroque Portrait Studies",
    clipCount: 5,
    createdAt: "2024-11-15",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Girl%20with%20a%20Pearl%20Earring.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Las%20Meninas%2001.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Anthonis%20van%20Dyck%20-%20Equestrian%20Portrait%20of%20Charles%20I%20-%20National%20Gallery%2C%20London.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Retrato%20del%20Papa%20Inocencio%20X.%20Roma%2C%20by%20Diego%20Vel%C3%A1zquez.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cavalier%20soldier%20Hals-1624x.jpg?width=800",
    ],
    description: "Vermeer, Velazquez, Van Dyck, and Hals",
  },
  {
    id: "3",
    title: "Light and Atmosphere",
    clipCount: 5,
    createdAt: "2024-11-25",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Claude%20Monet%2C%20Impression%2C%20soleil%20levant.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Claude%20Monet%20-%20Water%20Lilies%20-%201906%2C%20Ryerson.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Fighting%20Temeraire%2C%20JMW%20Turner%2C%20National%20Gallery.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Rain%20Steam%20and%20Speed%20the%20Great%20Western%20Railway.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Wheat-Field-with-Cypresses-%281889%29-Vincent-van-Gogh-Met.jpg?width=800",
    ],
    description: "Monet, Turner, and Van Gogh",
  },
  {
    id: "4",
    title: "Japanese Print Archive",
    clipCount: 5,
    createdAt: "2024-10-25",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Great%20Wave%20off%20Kanagawa.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/%E3%80%8C%E5%AF%8C%E5%B6%BD%E4%B8%89%E5%8D%81%E5%85%AD%E6%99%AF%20%E5%87%B1%E9%A2%A8%E5%BF%AB%E6%99%B4%E3%80%8D-South%20Wind%2C%20Clear%20Sky%20%28Gaif%C5%AB%20kaisei%29%2C%20also%20known%20as%20Red%20Fuji%2C%20from%20the%20series%20Thirty-six%20Views%20of%20Mount%20Fuji%20%28Fugaku%20sanj%C5%ABrokkei%29%20MET%20DP141062.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ejiri%20in%20the%20Suruga%20province.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/HIROSHIGE-Snow-Kanbara-Tokaido.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Katsushika%20Hokusai%2C%20tempesta%20sotto%20la%20vetta%2C%20dalla%20serie%20delle%2036%20vedute%20del%20monte%20fuji%2C%201831%20ca.jpg?width=800",
    ],
    description: "Hokusai and Hiroshige",
  },
  {
    id: "5",
    title: "Northern Renaissance",
    clipCount: 5,
    createdAt: "2024-11-20",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pieter%20Bruegel%20the%20Elder%20-%20Hunters%20in%20the%20Snow%20%28Winter%29%20-%20Google%20Art%20Project.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pieter%20Bruegel%20the%20Elder%20-%20Peasant%20Wedding%20-%20Google%20Art%20Project%202.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Albrecht%20D%C3%BCrer%20-%201500%20self-portrait%20%28High%20resolution%20and%20detail%29.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Albrecht%20D%C3%BCrer%20-%20Hare%2C%201502%20-%20Google%20Art%20Project.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait%20of%20Erasmus%20of%20Rotterdam%20by%20Hans%20Holbein%20d.%20J.%20in%20Kunstmuseum%20Basel.jpg?width=800",
    ],
    description: "Bruegel, Durer, and Holbein",
  },
]
