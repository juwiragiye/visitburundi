import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/destinations", "/experiences", "/plan", "/visit", "/about", "/contact", "/privacy", "/terms", "/cookies"].map(path=>({url:`${siteUrl}${path}`})); }
