import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VisitBurundi — Coming soon",
  description: "VisitBurundi, a tourism platform for Burundi. Coming soon.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
