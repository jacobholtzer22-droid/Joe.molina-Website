import type { Metadata, Viewport } from "next";
import { Fraunces, Libre_Franklin } from "next/font/google";
import { site } from "@/site.config";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
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

// Default metadata = home page. Each route overrides via its own pageMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(site.seo.url),
  robots: { index: true, follow: true },
  ...pageMetadata("home"),
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cedar focus:px-4 focus:py-2 focus:font-semibold focus:text-bone"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
