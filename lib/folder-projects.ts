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
    clipCount: 3,
    createdAt: "2024-10-20",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mona%20Lisa.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Leonardo%20da%20Vinci%20-%20The%20Last%20Supper%20high%20res.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/La%20scuola%20di%20Atene.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mona%20Lisa.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/La%20scuola%20di%20Atene.jpg?width=800",
    ],
    description: "Leonardo da Vinci and Raphael",
  },
  {
    id: "2",
    title: "Baroque Portrait Studies",
    clipCount: 2,
    createdAt: "2024-11-15",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Girl%20with%20a%20Pearl%20Earring.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Las%20Meninas%2001.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Girl%20with%20a%20Pearl%20Earring.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Las%20Meninas%2001.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Girl%20with%20a%20Pearl%20Earring.jpg?width=800",
    ],
    description: "Vermeer and Velazquez",
  },
  {
    id: "3",
    title: "Light and Atmosphere",
    clipCount: 2,
    createdAt: "2024-11-25",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Van%20Gogh%20-%20Starry%20Night%20-%20Google%20Art%20Project.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Claude%20Monet%2C%20Impression%2C%20soleil%20levant.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Van%20Gogh%20-%20Starry%20Night%20-%20Google%20Art%20Project.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Claude%20Monet%2C%20Impression%2C%20soleil%20levant.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Van%20Gogh%20-%20Starry%20Night%20-%20Google%20Art%20Project.jpg?width=800",
    ],
    description: "Van Gogh and Monet",
  },
  {
    id: "4",
    title: "Japanese Print Archive",
    clipCount: 1,
    createdAt: "2024-10-25",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Great%20Wave%20off%20Kanagawa.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Great%20Wave%20off%20Kanagawa.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Great%20Wave%20off%20Kanagawa.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Great%20Wave%20off%20Kanagawa.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Great%20Wave%20off%20Kanagawa.jpg?width=800",
    ],
    description: "Katsushika Hokusai",
  },
  {
    id: "5",
    title: "Northern Renaissance",
    clipCount: 1,
    createdAt: "2024-11-20",
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Van%20Eyck%20-%20Arnolfini%20Portrait.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Van%20Eyck%20-%20Arnolfini%20Portrait.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Van%20Eyck%20-%20Arnolfini%20Portrait.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Van%20Eyck%20-%20Arnolfini%20Portrait.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Van%20Eyck%20-%20Arnolfini%20Portrait.jpg?width=800",
    ],
    description: "Jan van Eyck",
  },
]
