// Downloaded photographs and labeled illustration fallbacks. Credits: public/images/CREDITS.md.
export const images = {
  hero: "/images/lake.webp",
  lake: "/images/lake.webp",
  forest: "/images/forest.webp",
  savanna: "/images/savanna.svg",
  hills: "/images/hills.svg",
  heritage: "/images/heritage.svg",
  falls: "/images/falls.webp",
  wetland: "/images/wetland.svg",
  drums: "/images/drums.webp",
  canyon: "/images/canyon.svg",
} as const;
export type ImageKey = keyof typeof images;
export const illustrationAlt = (name: string) =>
  `Illustrative landscape for ${name}; not a photograph or an exact depiction of the site`;
