import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header, Footer, CookieBanner, BackToTop } from "@/components/site-chrome";
import { ToastProvider } from "@/components/ui/interactive";
import { siteUrl } from "@/lib/site";

const body = DM_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const editorial = Cormorant_Garamond({ variable: "--font-editorial", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "VisitBurundi — A different rhythm. A deeper journey.", template: "%s | VisitBurundi" },
  description: "Explore Burundi’s lake shores, living traditions and highland horizons. Build a thoughtful trip with this stakeholder preview.",
  robots: { index: false, follow: false },
  openGraph: { type: "website", siteName: "VisitBurundi", title: "VisitBurundi — A different rhythm. A deeper journey.", description: "Lake shores, living traditions and highland horizons. Stakeholder preview.", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "VisitBurundi stakeholder preview" }] },
  twitter: { card: "summary_large_image", title: "VisitBurundi", description: "A different rhythm. A deeper journey.", images: ["/opengraph-image"] },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${editorial.variable} antialiased`}>
      <body><ToastProvider><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-ivory focus:p-4">Skip to content</a><Header/><main id="main-content">{children}</main><Footer/><CookieBanner/><BackToTop/></ToastProvider></body>
    </html>
  );
}
