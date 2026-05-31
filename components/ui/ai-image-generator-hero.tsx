"use client";

/* eslint-disable @next/next/no-img-element */
import type React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCard {
  id: string;
  src: string;
  alt: string;
  rotation: number;
}

interface ImageCarouselHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  images: ImageCard[];
  features?: Array<{
    title: string;
    description: string;
  }>;
}

export function ImageCarouselHero({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  onCtaClick,
  images,
  features = [
    {
      title: "Museum Details",
      description: "See each artwork's artist, year, country, and collection.",
    },
    {
      title: "Curated Images",
      description: "Browse direct artwork images from the gallery dataset.",
    },
    {
      title: "Historic Movements",
      description: "Explore Renaissance, Baroque, Ukiyo-e, and more.",
    },
  ],
}: ImageCarouselHeroProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    e.currentTarget.style.setProperty("--hero-tilt-x", `${y}deg`);
    e.currentTarget.style.setProperty("--hero-tilt-y", `${x}deg`);
  };

  return (
    <section className="image-carousel-hero">
      <div className="image-carousel-hero__ambient" aria-hidden="true" />

      <div className="image-carousel-hero__inner">
        <div
          className="image-carousel-hero__stage"
          onMouseMove={handleMouseMove}
          onMouseLeave={(e) => {
            e.currentTarget.style.setProperty("--hero-tilt-x", "0deg");
            e.currentTarget.style.setProperty("--hero-tilt-y", "0deg");
          }}
        >
          <div className="image-carousel-hero__orbit">
            {images.map((image, index) => {
              const angle = (index / images.length) * Math.PI * 2;
              const x = Math.sin(angle) * 44;
              const y = Math.cos(angle) * 27;
              const x2 = x * -0.72;
              const y2 = y * -0.62;

              return (
                <div
                  key={image.id}
                  className="image-carousel-hero__card"
                  style={{
                    "--card-x": `${x}vmin`,
                    "--card-y": `${y}vmin`,
                    "--card-x2": `${x2}vmin`,
                    "--card-y2": `${y2}vmin`,
                    "--card-r": `${image.rotation}deg`,
                    "--card-delay": `${index * -0.35}s`,
                    zIndex: index + 1,
                  } as React.CSSProperties}
                >
                  <div
                    className="image-carousel-hero__card-inner"
                    style={{
                      "--card-r": `${image.rotation}deg`,
                    } as React.CSSProperties}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="image-carousel-hero__image"
                  />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="image-carousel-hero__content">
          <p className="eyebrow">{subtitle}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <button
            type="button"
            onClick={() => {
              if (onCtaClick) {
                onCtaClick();
                return;
              }

              if (ctaHref) {
                window.location.href = ctaHref;
              }
            }}
          >
            {ctaText}
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>

        <div className="image-carousel-hero__features">
          {features.map((feature) => (
            <article
              className={cn("image-carousel-hero__feature")}
              key={feature.title}
            >
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
