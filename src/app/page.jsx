import ArtworkCard from "@/components/ArtworkCard";
import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import artworks from "@/data/artworks.json";

export default function Home() {
  const featuredArtworks = artworks.slice(0, 5);
  const featuredTitles = featuredArtworks
    .slice(0, 3)
    .map((artwork) => artwork.title)
    .join(", ");
  const heroImages = artworks.map((artwork) => artwork.image);

  return (
    <>
      <AnimatedMarqueeHero
        tagline="Digital Art Gallery"
        title="Riwaq Art"
        description="Where Culture Meets Digital Creativity"
        ctaText="Browse Artworks"
        ctaHref="/artworks"
        images={heroImages}
      />
      <section className="section featured-works">
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
