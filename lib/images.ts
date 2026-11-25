// Downloaded, licensed photographs. Credits: public/images/CREDITS.md.
export const images = {
  hero: "/images/lake.webp",
  lake: "/images/lake.webp",
  forest: "/images/forest.webp",
  savanna: "/images/savanna.webp",
  hills: "/images/hills.webp",
  heritage: "/images/heritage.webp",
  falls: "/images/falls.webp",
  wetland: "/images/wetland.webp",
  drums: "/images/drums.webp",
  canyon: "/images/canyon.webp",
  rwihinda: "/images/rwihinda.webp",
} as const;
export type ImageKey = keyof typeof images;
