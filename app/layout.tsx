import type { Metadata, Viewport } from "next";
import { Fraunces, Libre_Franklin } from "next/font/google";
import { site } from "@/site.config";
import "./globals.css";

/* Display: Fraunces — an "old-style" optical serif with real character. Set heavy and
 * tight, it reads sturdy and crafted: a decade-old family company, not a fashion label. */
const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

/* Body: Libre Franklin — a warm American grotesque (Franklin Gothic lineage). Grounded,
 * trustworthy, highly legible. Deliberately not Inter / not the other site's Figtree. */
const body = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.url),
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.seo.url,
    siteName: site.business.name,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#233A2E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-limestone font-body text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
