import ArtworkCard from "@/components/ArtworkCard";
import artworks from "@/data/artworks.json";

export default function ArtworksPage() {
  return (
    <section className="section page-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Gallery</p>
          <h1>Artworks</h1>
        </div>
        <p>
          Browse selected digital pieces across generative systems, immersive
          environments, and visual experiments.
        </p>
      </div>
      <div className="artwork-grid">
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </section>
  );
}
