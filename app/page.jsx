import ArtworkCard from "@/components/ArtworkCard";
import { ImageCarouselHero } from "@/components/ui/ai-image-generator-hero";
import artworks from "@/data/artworks.json";

const heroRotations = [-15, -8, 5, 12, -12, 8, 14, -18, -6, 10, -10, 6];

export default function Home() {
  const featuredArtworks = artworks.slice(0, 6);
  const categories = new Set(artworks.map((artwork) => artwork.category));
  const featuredTitles = featuredArtworks
    .slice(0, 3)
    .map((artwork) => artwork.title)
    .join(", ");
  const heroImages = artworks.map((artwork, index) => ({
    id: String(artwork.id),
    src: artwork.image,
    alt: `${artwork.title} by ${artwork.artist}`,
    rotation: heroRotations[index] ?? 0,
  }));
  const heroFeatures = [
    {
      title: "Iconic Masterpieces",
      description: `Browse ${artworks.length} artworks from the collection.`,
    },
    {
      title: "Museum Context",
      description: "Each card includes artist, year, country, museum, and movement.",
    },
    {
      title: "Curated Discovery",
      description: `Explore ${categories.size} art categories across the gallery.`,
    },
  ];

  return (
    <>
      <ImageCarouselHero
        title="Digital Art Gallery"
        subtitle="Curated masterpieces"
        description="Explore iconic artworks through image cards, museum details, and stories from art history."
        ctaText="Browse Artworks"
        ctaHref="/artworks"
        images={heroImages}
        features={heroFeatures}
      />
      <section className="section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Featured works</p>
            <h2>Masterpieces from the collection</h2>
          </div>
          <p>
            Featuring {featuredTitles}, and more from the collection.
          </p>
        </div>
        <div className="artwork-grid">
          {featuredArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </section>
    </>
  );
}
