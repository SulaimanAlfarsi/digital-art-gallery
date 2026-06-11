"use client";

import ArtworkCard from "@/components/ArtworkCard";
import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import artworks from "@/data/artworks.json";
import { useI18n } from "@/lib/i18n-client";

export default function Home() {
  const { t } = useI18n();
  const featuredArtworks = artworks.slice(0, 5);
  const heroImages = artworks.map((artwork) => artwork.image);

  return (
    <>
      <AnimatedMarqueeHero
        tagline={t("hero.tagline")}
        title={t("hero.title")}
        description={t("hero.description")}
        ctaText={t("hero.cta")}
        ctaHref="/artworks"
        images={heroImages}
      />
      <section className="section featured-works">
        <div className="section-header">
          <div>
            <p className="eyebrow">{t("home.eyebrow")}</p>
            <h2>{t("home.heading")}</h2>
          </div>
          <p>{t("home.featuredDescription")}</p>
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
