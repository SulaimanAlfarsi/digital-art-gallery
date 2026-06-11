/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import artworksArabic from "@/data/artworks-ar.json";
import { useI18n } from "@/lib/i18n-client";

const fallbackPalette = {
  primary: "var(--text-main)",
  secondary: "var(--terracotta)",
};

const artworksArabicById = new Map(
  artworksArabic.map((artwork) => [artwork.id, artwork]),
);

function getColorScore(red, green, blue) {
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const saturation = max === 0 ? 0 : (max - min) / max;
  const brightness = (red + green + blue) / 3;

  if (brightness < 35 || brightness > 232 || saturation < 0.14) {
    return 0;
  }

  const balancedBrightness = 1 - Math.abs(brightness - 128) / 128;
  return saturation * 1.8 + balancedBrightness;
}

function colorDistance(first, second) {
  return Math.abs(first.red - second.red) +
    Math.abs(first.green - second.green) +
    Math.abs(first.blue - second.blue);
}

function extractPalette(image) {
  const canvas = document.createElement("canvas");
  const size = 36;
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) {
    return fallbackPalette;
  }

  context.drawImage(image, 0, 0, size, size);

  const { data } = context.getImageData(0, 0, size, size);
  const candidates = [];

  for (let index = 0; index < data.length; index += 16) {
    const red = data[index];
    const green = data[index + 1];
    const blue = data[index + 2];
    const alpha = data[index + 3];

    if (alpha < 200) {
      continue;
    }

    const score = getColorScore(red, green, blue);
    if (score > 0) {
      candidates.push({ red, green, blue, score });
    }
  }

  if (candidates.length === 0) {
    return fallbackPalette;
  }

  candidates.sort((first, second) => second.score - first.score);

  const primary = candidates[0];
  const secondary =
    candidates.find((candidate) => colorDistance(primary, candidate) > 110) ||
    candidates[Math.min(8, candidates.length - 1)] ||
    primary;

  return {
    primary: `rgb(${primary.red} ${primary.green} ${primary.blue})`,
    secondary: `rgb(${secondary.red} ${secondary.green} ${secondary.blue})`,
  };
}

function getProxiedImageUrl(image) {
  return `/api/image-proxy?url=${encodeURIComponent(image)}`;
}

export default function ArtworkCard({ artwork }) {
  const { language } = useI18n();
  const [palette, setPalette] = useState(fallbackPalette);
  const localizedArtwork =
    language === "ar" ? artworksArabicById.get(artwork.id) ?? artwork : artwork;

  useEffect(() => {
    const image = new Image();
    image.src = getProxiedImageUrl(artwork.image);

    image.onload = () => {
      try {
        setPalette(extractPalette(image));
      } catch {
        setPalette(fallbackPalette);
      }
    };

    image.onerror = () => {
      setPalette(fallbackPalette);
    };
  }, [artwork.image]);

  return (
    <article
      className="artwork-card"
      style={{
        "--card-stroke-1": palette.primary,
        "--card-stroke-2": palette.secondary,
      }}
      tabIndex={0}
    >
      <div className="artwork-card-media">
        <img
          src={artwork.image}
          alt={localizedArtwork.title}
        />
        <div aria-hidden="true" className="artwork-card-transition">
          <svg
            viewBox="0 0 2450 2535"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262"
              stroke="var(--card-stroke-1)"
              strokeWidth="420"
              strokeLinecap="round"
              pathLength="1"
            />
            <path
              d="M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012"
              stroke="var(--card-stroke-2)"
              strokeWidth="420"
              strokeLinecap="round"
              pathLength="1"
            />
          </svg>
        </div>
        <ProgressiveBlur
          aria-hidden="true"
          className="artwork-card-progressive-blur"
          direction="bottom"
          blurLayers={10}
          blurIntensity={0.75}
        />
        <div className="artwork-card-overlay">
          <p>{localizedArtwork.category}</p>
          <h2>{localizedArtwork.title}</h2>
          <span>{localizedArtwork.artist} - {localizedArtwork.year}</span>
        </div>
      </div>
    </article>
  );
}
