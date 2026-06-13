/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Link as TransitionLink } from "next-transition-router";
import { cn } from "@/lib/utils";

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

  const duplicatedImages = [...images, ...images];

  return (
    <section
      className={cn(
        "dag-hero",
        className
      )}
    >
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

      <div className="dag-hero-marquee">
        <motion.div
          className="dag-hero-marquee-track"
          style={{
            "--marquee-duration": `${Math.max(42, images.length * 4.5)}s`,
          } as React.CSSProperties}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="dag-hero-marquee-card"
              style={{
                rotate: `${(index % 2 === 0 ? -2 : 5)}deg`,
              }}
            >
              <img
                src={src}
                alt={`Showcase image ${index + 1}`}
                className="dag-hero-marquee-image"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
