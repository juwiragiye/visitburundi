import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { siteUrl } from "@/lib/site";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/destinations",
    "/experiences",
    "/plan",
    "/visit",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    ...destinations.map((item) => `/destinations/${item.slug}`),
  ];
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: path ? `${siteUrl}/${locale}${path}` : `${siteUrl}/${locale}`,
    })),
  );
}
