import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BUSINESS, NAV_ITEMS, FOOTER_LINKS } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "ThrillOffroad — Glamis Sand Dunes UTV Rentals & Guided Tours",
    template: "%s | ThrillOffroad",
  },
  description:
    "ThrillOffroad rents UTVs and SXS vehicles and runs guided dune tours at the Glamis Sand Dunes Recreation Area. Safety gear included, GPS-equipped fleet. Book your ride.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS.url,
    siteName: "ThrillOffroad",
    title: "ThrillOffroad — Glamis Sand Dunes UTV Rentals & Guided Tours",
    description:
      "UTV and SXS rentals plus guided dune tours at the Glamis Sand Dunes Recreation Area. Safety gear included on every ride.",
    images: [
      { url: "/og/default.jpg", width: 1200, height: 630, alt: "ThrillOffroad — Glamis Dune Rentals & Tours" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ThrillOffroad — Glamis Sand Dunes UTV Rentals & Guided Tours",
    description: "UTV and SXS rentals plus guided dune tours at the Glamis Sand Dunes Recreation Area.",
    images: ["/og/default.jpg"],
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ThrillOffroad",
  url: BUSINESS.url,
  description: BUSINESS.description,
  email: BUSINESS.email,
  address: { "@type": "PostalAddress", addressLocality: "Glamis", addressRegion: "CA" },
  areaServed: "Glamis Sand Dunes Recreation Area",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <SmoothScroll>
          <Navbar businessName={BUSINESS.name} navItems={NAV_ITEMS} cta={{ label: "Book Your Ride", href: "/contact" }} />
          <main className="pt-16 md:pt-20">{children}</main>
          <Footer
            businessName={BUSINESS.name}
            description="UTV and SXS rentals plus guided dune tours at the Glamis Sand Dunes Recreation Area — safety gear included on every ride."
            email={BUSINESS.email}
            address={BUSINESS.location}
            links={FOOTER_LINKS}
          />
        </SmoothScroll>
      </body>
    </html>
  );
}
