// Original illustrative placeholders; replace paths here after photo licensing and location checks.
export const images = {
  hero: "/images/hero.svg",
  lake: "/images/lake.svg",
  forest: "/images/forest.svg",
  savanna: "/images/savanna.svg",
  hills: "/images/hills.svg",
  heritage: "/images/heritage.svg",
  falls: "/images/falls.svg",
  wetland: "/images/wetland.svg",
  drums: "/images/drums.svg",
  canyon: "/images/canyon.svg",
} as const;
export type ImageKey = keyof typeof images;
export const illustrationAlt = (name: string) =>
  `Illustrative landscape for ${name}; not a photograph or an exact depiction of the site`;
