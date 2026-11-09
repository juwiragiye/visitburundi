import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/destinations", "/experiences", "/plan", "/visit", "/about", "/contact", "/privacy", "/terms", "/cookies", ...destinations.map(item => `/destinations/${item.slug}`)].map(path=>({url:`${siteUrl}${path}`})); }
