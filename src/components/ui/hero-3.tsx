"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Link as TransitionLink } from "next-transition-router";
import { cn } from "@/lib/utils";
import { ImageStreamHero } from "@/components/ui/image-stream-hero";

interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  ctaHref?: string;
  images: string[];
  className?: string;
}

const ActionButton = ({ children, href }: { children: React.ReactNode; href?: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <TransitionLink href={href ?? "/artworks"} className="dag-hero-cta">
      {children}
    </TransitionLink>
  </motion.div>
);

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  ctaHref = "/artworks",
  images,
  className,
}) => {
  const FADE_IN_ANIMATION_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  // Start with the given order for a stable SSR render, then shuffle the full
  // image set on the client so each visit draws a random spread of artworks.
  const [streamImages, setStreamImages] = React.useState(() =>
    images.map((src) => ({ src })),
  );

  React.useEffect(() => {
    const shuffled = [...images];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setStreamImages(shuffled.map((src) => ({ src })));
  }, [images]);

  return (
    <ImageStreamHero
      images={streamImages}
      className={cn("dag-hero", className)}
    >
      {/* Light scrim over the corridor so the content stays legible. */}
      <div aria-hidden className="dag-hero-scrim" />

      <div className="dag-hero-content">
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="dag-hero-tagline"
        >
          {tagline}
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="dag-hero-title"
        >
          {title}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="dag-hero-description"
        >
          {description}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
        >
          <ActionButton href={ctaHref}>{ctaText}</ActionButton>
        </motion.div>
      </div>
    </ImageStreamHero>
  );
};
