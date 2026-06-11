import artworks from "@/data/artworks.json"

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

interface Artwork {
  category: string
  image: string
}

const categoryMeta = [
  {
    id: "1",
    title: "Renaissance",
    createdAt: "2024-10-20",
    description: "Leonardo da Vinci and Raphael",
  },
  {
    id: "2",
    title: "Northern Renaissance",
    createdAt: "2024-11-20",
    description: "Van Eyck, Bruegel, Durer, and Holbein",
  },
  {
    id: "3",
    title: "Baroque",
    createdAt: "2024-11-15",
    description: "Vermeer, Velazquez, Rembrandt, Van Dyck, and Hals",
  },
  {
    id: "4",
    title: "Impressionism",
    createdAt: "2024-11-25",
    description: "Claude Monet",
  },
  {
    id: "5",
    title: "Post-Impressionism",
    createdAt: "2024-11-25",
    description: "Van Gogh",
  },
  {
    id: "6",
    title: "Romanticism",
    createdAt: "2024-11-25",
    description: "J. M. W. Turner",
  },
  {
    id: "7",
    title: "Ukiyo-e",
    createdAt: "2024-10-25",
    description: "Hokusai and Hiroshige",
  },
  {
    id: "8",
    title: "Surrealism",
    createdAt: "2024-11-30",
    description: "Salvador Dali",
  },
]

export const projects: Project[] = categoryMeta.map((category) => {
  const categoryArtworks = (artworks as Artwork[]).filter(
    (artwork) => artwork.category === category.title,
  )

  return {
    id: category.id,
    title: category.title,
    clipCount: categoryArtworks.length,
    createdAt: category.createdAt,
    images: categoryArtworks.map((artwork) => artwork.image),
    description: category.description,
  }
})
