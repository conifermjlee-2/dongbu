import type { Metadata } from "next";
import "./globals.css";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "동부중량 | 중량물 이전·기업 이전·산업설비 이전·중량물 운송 전문",
    template: "%s | 동부중량",
  },
  description: site.description,
  keywords: site.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: site.url,
    siteName: site.name,
    title: "동부중량 | 중량물 이전·기업 이전·산업설비 이전·중량물 운송 전문",
    description: site.description,
    images: ["/images/hero-heavy-transport.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png" },
    ],
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  verification: {
    google: "-q0iq67MNWVliwL0vt3JJfL6z5HkzJoe_944Hfh8Vq4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    alternateName: site.englishName,
    url: site.url,
    description: site.description,
    image: `${site.url}/images/hero-heavy-transport.webp`,
    ...(site.telephone ? { telephone: site.telephone } : {}),
    ...(site.address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address,
            addressLocality: "수원시 권선구",
            addressRegion: "경기도",
            addressCountry: "KR",
          },
        }
      : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "중량물 이전 및 기업·산업설비 이전 서비스",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
  };

  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
