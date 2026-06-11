"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArtworkCard from "@/components/ArtworkCard";
import artworks from "@/data/artworks.json";
import { useI18n } from "@/lib/i18n-client";

export default function ArtworksPage() {
  const { t, tCategory } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(artworks.map((artwork) => artwork.category)))],
    [],
  );

  const filteredArtworks = useMemo(() => {
    if (selectedCategory === "All") {
      return artworks;
    }

    return artworks.filter((artwork) => artwork.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="section page-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">{t("artworks.eyebrow")}</p>
          <h1>{t("artworks.heading")}</h1>
        </div>
        <p>{t("artworks.description")}</p>
      </div>

      <div className="artwork-filter" aria-label={t("artworks.filterLabel")}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`artwork-filter__button ${
              selectedCategory === category ? "artwork-filter__button--active" : ""
            }`}
            aria-pressed={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category === "All" ? t("artworks.all") : tCategory(category)}
          </button>
        ))}
      </div>

      <div className="artwork-grid">
        <AnimatePresence mode="popLayout">
          {filteredArtworks.map((artwork) => (
            <motion.div
              key={artwork.id}
              layout
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
            >
              <ArtworkCard artwork={artwork} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
