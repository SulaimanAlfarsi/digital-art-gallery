import artworks from "@/data/artworks.json";

const categories = Array.from(
  new Set(artworks.map((artwork) => artwork.category)),
);

export default function ExplorePage() {
  return (
    <section className="section page-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Explore</p>
          <h1>Discover by medium</h1>
        </div>
        <p>Follow the techniques and visual systems shaping the collection.</p>
      </div>
      <div className="category-grid">
        {categories.map((category) => {
          const count = artworks.filter(
            (artwork) => artwork.category === category,
          ).length;

          return (
            <article className="category-card" key={category}>
              <p>{count} works</p>
              <h2>{category}</h2>
              <span>A focused selection from the gallery archive.</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
